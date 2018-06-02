import React from 'react';
import { View, Text, Button } from 'react-native';

class HomeScreen extends React.Component {
  render() {
    return(
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Text>Home Screen</Text>
        <Text>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details', {
            name: 'test',
            year: '2018',
          })}
          />
      </View>
    );
  }
}
export default HomeScreen;
