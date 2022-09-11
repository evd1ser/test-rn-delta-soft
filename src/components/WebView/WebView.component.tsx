import * as React from 'react';
import {observer} from 'mobx-react';
import {Loader} from '../Loader';
import {WebView as _WebView} from 'react-native-webview';
import Logger from 'js-logger';
import {BackHandler, View} from 'react-native';

interface Props {
  url?: string;
}

const log = Logger.get('WebView')

@observer
class WebView extends React.Component<Props> {
  public componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this._handleBackButton);
  }

  public componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this._handleBackButton);
  }

  public render() {
    const url = this.props.url
    log.trace('render', url)

    if (!url) {
      return (
        <Loader/>
      )
    }
    return (
      <View style={{width: '100%', height: '100%'}}>
        <_WebView source={{uri: url}}/>
      </View>
    );
  }

  _handleBackButton = () => {
    const url = this.props.url
    return !!url
  }
}

export {WebView}
