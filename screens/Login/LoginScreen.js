import styles from './styles';
import React, { Component } from 'react';
import { View, TextInput, Alert, Keyboard } from 'react-native';
import { Button, Icon, Image } from 'react-native-elements';
import LoginLogo from '../../assets/images/loginLogo.jpg';
import { firebaseApp } from '../../utils/firebaseConfig';
import AsyncStorage from '@react-native-community/async-storage';

class LoginScreen extends Component {
  state = {
    email: '',
    password: ''
  }
  constructor(props) {
    super(props);
    AsyncStorage.getItem('token_login').then((userToken) => {
      this.props.navigation.navigate(userToken ? 'MainNavigator' : 'AuthTabs');
    })
  }

  static navigationOptions = {
    header: null
  }

  componentDidUpdate(prevProps, prevStates) {
    let email = this.props.navigation.getParam("email");
    let password = this.props.navigation.getParam("password");
    if (email !== prevProps.navigation.getParam("email") && password != prevProps.navigation.getParam("password")) {
      this.setState({ email, password });
    }
  }

  handleInput = (inputField) => {
    return (text) => {
      this.setState({ [inputField]: text })
    }
  }

  handleLogin = async () => {
    const { email, password } = this.state;
    const { navigation } = this.props;
    const firebaseLogin = await firebaseApp.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
      Alert.alert(
        'Fail To Login!',
        error.message,
        [
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: false },
      );
    });
    console.log("Login", firebaseLogin);
    if (firebaseLogin) {
      await Keyboard.dismiss();
      await AsyncStorage.setItem("token_login", this.state.email);
      navigation.navigate("LoadingScreen", {
        request: "Login",
        email
      })
    }
  }
  render() {
    const { navigation } = this.props;
    const { email, password } = this.state;
    // console.log("email", email);
    // console.log("password", password);
    console.log("token", AsyncStorage.getItem("token_login"));

    return (
      <View style={styles.container}>
        <Image source={LoginLogo} style={{ width: 150, height: 150 }} />
        <TextInput
          value={email}
          placeholder='Email'
          style={styles.input}
          placeholderTextColor={"#1BA957"}
          onChangeText={this.handleInput("email")}
        />

        <TextInput
          value={password}
          secureTextEntry={true}
          placeholder='Password'
          style={styles.input}
          placeholderTextColor={"#1BA957"}
          onChangeText={this.handleInput("password")}
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
            onPress={this.handleLogin}
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