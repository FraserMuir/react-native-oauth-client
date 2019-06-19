import React from "react";
import { StyleSheet, View, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Type here: " />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center"
  },
  input: {
    borderRadius: 3,
    borderWidth: 1,
    padding: 5
  }
});
