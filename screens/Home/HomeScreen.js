import styles from './styles';
import React, { Component } from 'react';
import { Text, View, Platform} from 'react-native';
import {Icon, Button} from 'react-native-elements';

class HomeScreen extends Component {
  static navigationOptions = ({navigation}) =>({
    headerTitle: "Home",
    headerLeft: Platform.select({
      ios: null,
      android: (
        <Icon
          name="md-menu"
          type="ionicon"
          containerStyle={styles.icon}
          onPress={() => navigation.toggleDrawer()}
        />
      )
    })
  })
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>This is the HomeScreen.</Text>
        <Button title="Details" onPress={() => navigate("DetailScreen")} />
        <Button title="Options" onPress={() => navigate("OptionsScreen")} />
      </View>
    );
  }
}

export default HomeScreen;