import styles from './styles';
import React, { Component } from 'react';
import { Text, View } from 'react-native';

class ResetScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is the ResetScreen.</Text>
      </View>
    );
  }
}

export default ResetScreen;