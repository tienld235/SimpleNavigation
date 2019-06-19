import styles from './styles';
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';

class LoginScreen extends Component {
  static navigationOptions = {
    header : null
  }
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text>This is the LoginScreen.</Text>
        <Button title={"Login"}
          onPress={() => navigation.navigate("LoadingScreen",{
            request: "Login"
          })}
        />
        <Button title={"Reset Password"}
          onPress={() => navigation.navigate("ResetScreen")}
        />
      </View>
    );
  }
}

export default LoginScreen;