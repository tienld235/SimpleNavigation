// @flow
import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  ActivityIndicator
} from "react-native";
import Axios from "axios";
import styles from "./styles";

type Props = {};
type States = {
  data: Array<{}>,
  page: number,
  isLoading: boolean
};

export default class DetailScreen extends Component<Props, States> {
  constructor(props: Object) {
    super(props);
    this.state = {
      data: [],
      page: 1,
      isLoading: true
    };
  }

  componentDidMount() {
    this.getData();
  }

  renderFooter = () =>
    this.state.isLoading ? (
      <View style={styles.loader}>
        <ActivityIndicator size={"large"} />
      </View>
    ) : null;

  renderRow = ({ item }: Object) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>{item.id}</Text>
      <Image style={styles.itemImage} source={{ uri: item.url }} />
      <Text style={styles.itemText}>{item.title}</Text>
    </View>
  );
  getData = async () => {
    let response = await Axios.get(
      `https://jsonplaceholder.typicode.com/photos?_limit=5&_page=${
        this.state.page
      }`
    );
    let data = await response.data;

    this.setState({
      data: this.state.data.concat(data),
      isLoading: false
    });
  };

  handleLoadMore = () => {
    this.setState({ page: this.state.page + 1, isLoading: true }, this.getData);
  };

  render() {
    console.log(this.state.page);
    console.log("data", this.state.data);

    return (
      <FlatList
        data={this.state.data}
        style={styles.container}
        renderItem={this.renderRow}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={this.handleLoadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={this.renderFooter}
      />
    );
  }
}
