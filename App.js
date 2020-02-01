import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Checks } from "./components/Checks";

export default function App() {
  return (
    <View style={styles.cont}>
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>Reading</Text>
          <Checks />
        </View>
        <View>
          <Text style={styles.text}>Training</Text>
          <Checks />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    backgroundColor: "#202124"
  },

  container: {
    flex: 1,
    backgroundColor: "#202124",
    marginTop: "10%",
    marginHorizontal: "4.5%",
    alignItems: "center"
  },

  text: {
    fontSize: 30,
    fontWeight: "900",
    color: "#fff",
    marginBottom: "2.5%",
    marginTop: "5%"
  }
});
