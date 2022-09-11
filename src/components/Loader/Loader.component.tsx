import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

export class Loader extends React.Component {
  public render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={'large'}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignContent: 'center',
    justifyContent: 'center',
  }
})
