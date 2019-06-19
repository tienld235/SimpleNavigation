import styles from './styles';
import React, { Component } from 'react';
import { Text, View, ActivityIndicator} from 'react-native';

class LoadingScreen extends Component {
  static navigationOptions = {
    header: null
  }
  componentDidMount(){
    const {navigation} = this.props;
    const request = navigation.getParam("request", "Failed!");
    
    setTimeout(() => {
      (request === "Login")? navigation.navigate("HomeScreen"): navigation.navigate("LoginScreen");
    }, 2000);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>This is the LoadingScreen.</Text>
        <ActivityIndicator size={"large"} />
      </View>
    );
  }
}

export default LoadingScreen;