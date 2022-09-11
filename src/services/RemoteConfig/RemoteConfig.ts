import {action, computed, makeAutoObservable, observable} from 'mobx'
import remoteConfig, {FirebaseRemoteConfigTypes} from '@react-native-firebase/remote-config';
import Logger from 'js-logger';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface IRemoteConfig {
  url?: string;

  load(): Promise<void>;
}

interface RemoteConfigData {
  url?: string;
}

type IParseConfig = {
  [key in string]: string
}

const CONFIG_STORAGE_KEY = 'config';
const log = Logger.get('RemoteConfig');

export class RemoteConfig implements IRemoteConfig {
  @observable private _data: RemoteConfigData | undefined;

  constructor() {
    log.debug('constructor');
    makeAutoObservable(this);
  }

  public async load() {
    log.debug('startLoad')
    // Через remote config обращаемся к переменной url, там будет ссылка.
    // 3.	Если условие не проходит, открываем ссылку через Webview, при этом блокируем в браузере кнопку назад , ссылку необходимо сохранить локально.
    // 4.	При повторном запуске проверяем есть ли сохраненная ссылка-да, открываем сразу её, нет- обращаемся к фаер ,проходим через условие,


    // пробуем заполнить данные из памяти
    await this._loadFromCash()

    // если нет нашего поля (или оно было пустое) - загружаем из удаленного конфига
    if (!this.url) {
      await this._loadFromRemote()
    }
  }

  // строка по которой грузится webview
  @computed
  public get url() {
    return this._data?.url;
  }

  // загружаем данные из хранилища и парсим их
  private async _loadFromCash() {
    log.debug('_loadFromCash')
    // await
    const savedString = await AsyncStorage.getItem(CONFIG_STORAGE_KEY)
    log.debug('_loadFromCash savedString', savedString)
    if (!savedString) {
      return false
    }
    try {
      const restoreData = JSON.parse(savedString)
      log.debug('_loadFromCash restoreData', savedString)
      this._setUpData(restoreData)
      return true
    } catch (e: any) {
      log.error('error _loadFromCash', e);
    }

    return false;
  }

  // загружаем данные из фаербейза
  private async _loadFromRemote() {
    await remoteConfig().fetchAndActivate();
    const config = remoteConfig().getAll();
    log.info('config', config);
    const dataToSave = this._parseData(config);
    this._saveData(dataToSave);
  }

  // преобразуем данные из firebase в строки
  private _parseData(remoteData: FirebaseRemoteConfigTypes.ConfigValues) {
    return Object.entries(remoteData).reduce((acc: IParseConfig, [key, remoteValue]) => {
      acc[key] = remoteValue.asString();
      return acc;
    }, {});
  }

  // сохраняем данные в хранилище и заполняем структуру
  private _saveData(data: IParseConfig) {
    log.trace('_saveData', data);
    AsyncStorage.setItem(CONFIG_STORAGE_KEY, JSON.stringify(data)).then();
    this._setUpData(data)
  }

  // метода для заполнения данных текущей структурой
  @action
  private _setUpData(data: IParseConfig) {
    log.trace('_setUpData', data);
    this._data = data
  }
}
