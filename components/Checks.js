import React from "react";
import { View, StyleSheet } from "react-native";
import { Check } from "./Check";

export const Checks = () => {
  const checkers = [];
  for (let i = 1; i < 31; i++) {
    checkers.push(<Check key={i} date={i} />);
  }

  return <View style={styles.checkContainer}>{checkers}</View>;
};

const styles = StyleSheet.create({
  checkContainer: {
    flexDirection: "row",
    flexWrap: "wrap"
  }
});
