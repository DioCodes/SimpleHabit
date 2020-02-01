import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export const Check = ({ date }) => {
  const [unchecked, setChecked] = useState(true);

  const check = () => {
    if (unchecked) {
      setChecked(false);
    } else {
      setChecked(true);
    }
  };

  return (
    <View>
      <Text style={styles.date}>{date}</Text>
      <TouchableOpacity
        style={[
          styles.check,
          unchecked === true ? styles.unchecked : styles.checked
        ]}
        onPress={check}
      ></TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  date: {
    fontWeight: "200",
    textAlign: "center",
    color: "white"
  },

  check: {
    width: 30,
    height: 30,
    marginHorizontal: "0.5%",
    marginBottom: "10%",
    backgroundColor: "#000",
    borderRadius: 0
  },

  unchecked: {
    // backgroundColor: "#C7B3ED"
    backgroundColor: "#C9B6EA"
  },

  checked: {
    // backgroundColor: "#5622B5"
    backgroundColor: "#5A2EAB"
  }
});
