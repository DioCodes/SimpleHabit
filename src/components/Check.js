import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { setChecked, removeChecked } from "../store/actions/habitActions";

export const Check = ({ number, isChecked, habitId }) => {
  const [checked, setCheck] = useState(isChecked);
  const dispatch = useDispatch();

  const check = () => {
    if (checked === true) {
      setCheck(false);
      dispatch(removeChecked(number, habitId));
    } else {
      setCheck(true);
      dispatch(setChecked(number, habitId));
    }
  };

  return (
    <View>
      <Text style={styles.date}>{number}</Text>
      <TouchableOpacity
        style={[
          styles.check,
          checked === true ? styles.checked : styles.unchecked,
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
    color: "white",
  },

  check: {
    width: 30,
    height: 30,
    marginHorizontal: "0.5%",
    marginBottom: "10%",
    borderRadius: 0,
  },

  unchecked: {
    backgroundColor: "rgba(255, 255, 255, .05)",
  },

  checked: {
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
});
