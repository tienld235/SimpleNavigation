import styles from './styles';
import React, { Component } from 'react';
import { Button, Icon } from "react-native-elements";
import { Text, View, Platform} from 'react-native';

class SettingsScreen extends Component {
  static navigationOptions = ({navigation}) =>({
    headerTitle: "Settings",
    headerLeft: Platform.select({
      ios: (
        <Icon
          name="ios-log-out"
          type="ionicon"
          containerStyle={styles.icon}
          onPress={() => navigation.navigate("LoginScreen")}
        />
      ),
      android: (
        <Icon
          name="md-menu"
          type="ionicon"
          containerStyle={styles.icon}
          onPress={() => navigation.toggleDrawer()}
        />
      )
    })
  });


  render() {
    return (
      <View style={styles.container}>
        <Text>This is the SettingsScreen.</Text>
      </View>
    );
  }
}

export default SettingsScreen;