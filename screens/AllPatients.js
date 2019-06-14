import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import MenuButton from "../components/MenuButton";

export default class AllPatients extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <MenuButton navigation={this.props.navigation} />
        <View style={styles.tex}>
          <Text> Al l Patients </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  tex: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
