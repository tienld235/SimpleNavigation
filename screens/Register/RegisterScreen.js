import styles from './styles';
import React, { Component } from 'react';
import { TextInput, View, Platform, Alert, Keyboard } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import { firebaseApp } from '../../utils/firebaseConfig';

class RegisterScreen extends Component {
  state = {
    email: '',
    password: '',
    repassword: '',
    loadingButton: false
  }
  static navigationOptions = {
    tabBarLabel: "Register",
    tabBarIcon: ({ tintColor }) => {
      let iconName = Platform.select({ ios: "ios-person-add", android: "md-person-add" });
      return <Icon name={iconName} type="ionicon" color={tintColor} />;
    },
  }
  handleInput = (name) => {
    return (text) => {
      this.setState({ [name]: text });
    }
  }

  handleSubmit = async () => {
    const { email, password, repassword } = this.state;
    const { navigation } = this.props;

    await this.setState({ loadingButton: true })
    await Keyboard.dismiss();
    if (password !== repassword) {
      Alert.alert(
        'Re-enter Password',
        "Password and Confirmation are not the same!",
        [
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: false },
      )
    } else {
      const fireBaseSignUp = await firebaseApp.auth().createUserWithEmailAndPassword(email, password).catch(async (error) => {
        await this.setState({ loadingButton: false })
        Alert.alert(
          'Fail To Sign Up',
          error.message,
          [
            { text: 'OK', onPress: () => console.log('OK Pressed') },
          ],
          { cancelable: false },
        );
      });
      if (fireBaseSignUp) {
        Alert.alert(
          'Email Register Succeed!',
          "You can login by this email now!",
          [
            {
              text: 'OK', onPress: async () => {
                await Keyboard.dismiss();
                await this.setState({ loadingButton: false })
                navigation.navigate("LoginScreen", { email, password });
              }
            },
          ],
          { cancelable: false },
        )
      }
    }
  }

  render() {
    const { email, password } = this.state;
    return (
      <View style={styles.container}>
        <TextInput
          placeholder='Email'
          style={styles.input}
          placeholderTextColor={"#1BA957"}
          onChangeText={this.handleInput("email")}
        />

        <TextInput
          secureTextEntry={true}
          placeholder='Password'
          style={styles.input}
          placeholderTextColor={"#1BA957"}
          onChangeText={this.handleInput("password")}
        />
        <TextInput
          secureTextEntry={true}
          placeholder='Re-enter Password'
          style={styles.input}
          placeholderTextColor={"#1BA957"}
          onChangeText={this.handleInput("repassword")}
        />
        <View style={{ marginTop: 30 }}>
          <Button title={"Sign Up"}
            buttonStyle={{ borderRadius: 10, backgroundColor: '#1BA957' }}
            style={{ width: '30%' }}
            icon={
              <Icon
                name="plus"
                type="font-awesome"
                size={25}
                containerStyle={{ marginRight: 10 }}
                color="white"
              />
            }
            loading={this.state.loadingButton}
            onPress={this.handleSubmit}
          />
        </View>
      </View>
    );
  }
}

export default RegisterScreen;