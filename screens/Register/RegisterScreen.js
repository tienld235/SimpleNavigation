import styles from './styles';
import React, { Component } from 'react';
import { Text, View, Platform } from 'react-native';
import {Icon} from 'react-native-elements';

class RegisterScreen extends Component {
  static navigationOptions = {
    tabBarLabel: "Register",
    tabBarIcon: ({ tintColor }) => {
      let iconName = Platform.select({ ios: "ios-person-add", android: "md-person-add" });
      return <Icon name={iconName} type="ionicon" color={tintColor} />;
    },
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>This is the RegisterScreen.</Text>
      </View>
    );
  }
}

export default RegisterScreen;