import styles from './styles';
import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';
import { Button, Icon, Image } from 'react-native-elements';
// import Icon from 'react-native-vector-icons/FontAwesome'
import LoginLogo from '../../assets/images/loginLogo.jpg';

class LoginScreen extends Component {
  state={
    username:'',
    password:''
  }

  static navigationOptions = {
    header: null
  }
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Image source={LoginLogo} style={{ width: 150, height: 150 }} />
        <TextInput
          placeholder='Username'
          style={styles.input}
          placeholderTextColor={"#1BA957"}
        />

        <TextInput
          secureTextEntry={true}
          placeholder='Password'
          style={styles.input}
          placeholderTextColor={"#1BA957"}
        />
        <View style={{ flexDirection: 'row', marginTop: 30 }}>
          <Button title={"Login"}
            buttonStyle={{ borderRadius: 10, backgroundColor: '#1BA957' }}
            style={{ width: '30%' }}
            icon={
              <Icon
                name="sign-in"
                type="font-awesome"
                size={25}
                containerStyle={{ marginRight: 10 }}
                color="white"
              />
            }
            onPress={() => navigation.navigate("LoadingScreen", {
              request: "Login"
            })}
          />
          <View style={{ width: 20 }} />
          <Button
            title={"Reset Password"}
            buttonStyle={{ borderRadius: 10, backgroundColor: '#1BA957' }}
            style={{ width: '30%' }}
            icon={
              <Icon
                name="question"
                type="font-awesome"
                size={25}
                containerStyle={{ marginRight: 10 }}
                color="white"
              />
            }
            onPress={() => navigation.navigate("ResetScreen")}
          />
        </View>
      </View>
    );
  }
}

export default LoginScreen;