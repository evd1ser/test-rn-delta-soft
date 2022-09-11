import React, {Component} from 'react';
import {Image, ImageSourcePropType, StyleSheet, Text, View} from 'react-native';

interface Props {
  image?: ImageSourcePropType,
  title?: string,
  description?: string,
}

export class Card extends Component<Props> {
  render() {
    const {image, title, description} = this.props;
    const hasAnyText = !!title || !!description;

    return (
      <View style={styles.container}>
        {!!image && (
          <View style={styles.imageWrapper}>
            <Image resizeMode={'cover'} style={styles.image} source={image}/>
          </View>
        )}
        {hasAnyText && (
          <View style={styles.textWrapper}>
            {!!title && (<Text style={styles.title} numberOfLines={2}>{title}</Text>)}
            {!!description && (<Text style={styles.description} numberOfLines={4}>{description}</Text>)}
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    overflow: 'hidden',
  },
  imageWrapper: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
    minHeight: 126,
  },
  textWrapper: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 18,
  },
  description: {
    fontSize: 10,
  },
})
