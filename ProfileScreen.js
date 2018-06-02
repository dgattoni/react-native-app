import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Profile extends React.Component {

  render() {
    const { width } = this.props;
    const styles = StyleSheet.create({
      container: {
        flex: 0,
        width: width,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderWidth: 5,
        borderColor: 'orange',
        borderStyle: 'solid'
      },
    });

    return (
      <View style={styles.container}>
        <Text>Events</Text>
        <Text>lorem ipsum</Text>
      </View>
    );
  }
}
