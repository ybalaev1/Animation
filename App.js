import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

class App extends Component {
  render() {
    return <View style={styles.app} />;
  }
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    paddingBottom: 50,
    paddingTop: 50
  }
});

export default App;
