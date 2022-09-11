import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {Container} from '../Container';
import {DATA} from '../../data/stab'
import {Card} from '../Card';

export class StubList extends React.Component {
  render() {
    return (
      <ScrollView>
        <Container style={styles.container}>
          {DATA.map((item) => {
            return (<Card key={item.id} {...item}/>)
          })}
        </Container>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  }
})
