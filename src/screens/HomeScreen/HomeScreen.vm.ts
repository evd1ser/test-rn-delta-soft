import {IRemoteConfig, RemoteConfig} from '@services/RemoteConfig';
import DeviceInfo from 'react-native-device-info';
import {action, computed, makeAutoObservable, observable, runInAction} from 'mobx';
import Logger from 'js-logger';

export interface IHomeScreenVm {
  readonly url?: string;
  readonly isLoading: boolean;
  readonly isShowStub: boolean;

  initialize(): Promise<void>;
}

const log = Logger.get('HomeScreenVm');

export class HomeScreenVm implements IHomeScreenVm {
  @observable public isLoading = true;
  private _remoteConfig: IRemoteConfig;
  @observable private _isEmulator: boolean = false;
  @observable private _phoneNumber: undefined | string;

  constructor() {
    log.debug('constructor')
    makeAutoObservable(this);
    this._remoteConfig = new RemoteConfig();
  }

  @action
  public async initialize() {
    log.info('initialize')
    // получаем информацию, что сейчас используется - настоящий ли девайс
    this._isEmulator = await DeviceInfo.isEmulator();
    this._phoneNumber = await DeviceInfo.getPhoneNumber();
    await this._remoteConfig.load()
    runInAction(() => {
      this.isLoading = false;
    })
  }

  @computed
  public get url() {
    return this._remoteConfig.url
  }

  @computed
  public get isShowStub() {
    const url = this.url;
    // После получения ссылки, создаем условие для проверки, если ссылка пустая,


    // или эмулятор,
    if (!url || this._isBrandGoogle || this._isSimDevice || this._isEmulator) {
      // тогда открывается заглушка.
      return true;
    }

    return false;
  }

  // бренд смартфона гугл,
  private get _isBrandGoogle() {
    return DeviceInfo.getBrand().toLowerCase() === 'google'
  }

  // есть ли сим карта (есть номер)
  @computed
  private get _isSimDevice() {
    return !!this._phoneNumber
  }
}
