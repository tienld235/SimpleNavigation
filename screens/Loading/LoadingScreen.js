import styles from './styles';
import React, { Component } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';

class LoadingScreen extends Component {
  static navigationOptions = {
    header: null
  }
  componentDidMount() {
    const { navigation } = this.props;
    const request = navigation.getParam("request", "Failed!");

    setTimeout(() => {
      (request === "Login") ? navigation.navigate("HomeScreen") : navigation.navigate("LoginScreen");
    }, 2000);
  }
  render() {
    const { navigation } = this.props;
    const request = navigation.getParam("request", "Failed!");
    return (
      <View style={styles.container}>
        {(request === "Login") ?
          <Text>Login as {navigation.getParam("email", "User")}...</Text>
          : <Text>Logout...</Text>
        }
        <ActivityIndicator size={"large"} />
      </View>
    );
  }
}

export default LoadingScreen;