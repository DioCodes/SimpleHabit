import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Check } from "./Check";

export const Checks = ({ item }) => {
  const dispatch = useDispatch();

  const GetChecks = () => {
    const checkers = [];
    Object.entries(item.checks).forEach(([key, value]) => {
      checkers.push(
        <Check key={key} number={key} isChecked={value} habitId={item.id} />
      );
    });

    return checkers;
  };

  return (
    <View style={styles.checkContainer}>
      <GetChecks />
    </View>
  );
};

const styles = StyleSheet.create({
  checkContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
