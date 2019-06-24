import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    marginTop: 20
  },
  item: {
    borderBottomColor: '#CCC',
    marginBottom: 10
  },
  itemImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover'
  },
  itemText: {
    fontSize: 16,
    padding: 5
  },
  loader: {
    marginTop: 10,
    alignItems: "center"
  }
});

export default styles;