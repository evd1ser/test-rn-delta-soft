import React from 'react';
import {Container} from '@components/Container'
import {WebView} from '@components/WebView'
import {HomeScreenVm, IHomeScreenVm} from './HomeScreen.vm';
import Logger from 'js-logger';
import {observer} from 'mobx-react';
import {Loader} from '@components/Loader';
import {StubList} from '@components/StubList';

interface Props {
}

const log = Logger.get('HomeScreen');

@observer
export class HomeScreen extends React.Component<Props> {
  private _vm!: IHomeScreenVm;

  constructor(props: Props) {
    log.debug('constructor')
    super(props)
    this._vm = new HomeScreenVm();
  }

  public componentDidMount() {
    log.debug('componentDidMount')
    this._vm.initialize().then();
  }

  render() {
    log.trace('render')

    if (this._vm.isLoading) {
      return (
        <Loader/>
      )
    }

    if (this._vm.isShowStub) {
      return (
        <StubList/>
      )
    }

    return (
      <Container>
        <WebView url={this._vm.url}/>
      </Container>
    );
  }
}
