import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  TextInput,
  TouchableOpacity
} from "react-native";
import MenuButton from "../components/MenuButton";

export default class AddPatient extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      address: "",
      age: ""
    };
  }
  updateValue(text, field) {
    if (field == "name") {
      this.setState({
        name: text
      });
    } else if (field == "address") {
      this.setState({
        address: text
      });
    } else if (field == "age") {
      this.setState({
        age: text
      });
    }
  }

  submit() {
    let collection = {};
    collection.name = this.state.name;
    collection.address = this.state.address;
    collection.age = this.state.age;
    console.warn(collection);
  }
  render() {
    return (
      <View style={styles.container}>
        <MenuButton navigation={this.props.navigation} />

        <Text style={styles.header}>Add Patient</Text>
        <ScrollView style={styles.addForm}>
          {/* add patient form start */}

          <Text style={styles.texthead}>Name</Text>
          <TextInput
            underlineColorAndroid="transparent"
            style={styles.inputText}
            placeholder="Name"
            onChangeText={text => this.updateValue(text, "name")}
          />

          <Text style={styles.texthead}>Address</Text>
          <TextInput
            style={styles.inputTextMultiLine}
            multiline={true}
            placeholder="Address"
            underlineColorAndroid="transparent"
            onChangeText={text => this.updateValue(text, "address")}
          />

          <Text style={styles.texthead}>Age</Text>
          <TextInput
            underlineColorAndroid="transparent"
            style={styles.inputText}
            placeholder="Age"
            onChangeText={text => this.updateValue(text, "age")}
          />

          <Button
            onPress={() => this.submit()}
            title="Submit"
            color="#841584"
            accessibilityLabel="Learn more "
          />

          {/* Add patient form end */}
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  addForm: {
    alignSelf: "stretch"
  },
  header: {
    fontSize: 20,
    color: "#000000",
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor: "#008000",
    borderBottomWidth: 1,
    alignItems: "center",
    alignContent: "center",
    fontWeight: "bold"
  },
  inputText: {
    alignSelf: "stretch",
    height: 40,
    marginBottom: 30,
    color: "#000000",
    borderColor: "#808080",
    borderWidth: 1
  },
  inputTextMultiLine: {
    alignSelf: "stretch",
    height: 40,
    marginBottom: 30,
    color: "#000000",
    borderColor: "#808080",
    borderWidth: 1,
    height: 70
  },
  texthead: {
    fontWeight: "bold"
  }
});
