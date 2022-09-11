import React from 'react';
import {View, ViewProps} from 'react-native'

interface Props extends ViewProps {
}

export class Container extends React.Component<Props, any> {
  public render() {
    return (
      <View {...this.props}/>
    );
  }
}
