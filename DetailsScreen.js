import React from 'react';
import { View, Text, Button } from 'react-native';

class DetailsScreen extends React.Component {
  render() {
    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>{this.props.navigation.getParam('name', 'your name')}</Text>
        <Text>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
          />
        <Button
          title="Go Back"
          onPress={() => this.props.navigation.goBack()}/>
      </View>
    );
  }
}
export default DetailsScreen;
