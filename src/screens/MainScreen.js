import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";

import { Checks } from "../components/Checks";
import { addHabit, removeHabit } from "../store/actions/habitActions";

export const MainScreen = () => {
  const [inputValue, setInputValue] = useState("");
  const [habits, setHabits] = useState("");

  const dispatch = useDispatch();
  const allHabits = useSelector((state) => state.habit.allHabits);

  const idGenerator = () => {
    const S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (
      S4() +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      S4() +
      S4()
    );
  };

  const renderItem = ({ item }) => {
    return (
      <View
        style={{
          paddingHorizontal: 20,
        }}
      >
        <View style={styles.headerContainer}>
          <Text style={styles.header}>{item.name}</Text>

          <View style={styles.deleteBtn}>
            <TouchableOpacity
              onPress={() => {
                Alert.alert(
                  "Вы действительно хотите удалить эту привычку?",
                  "",
                  [
                    {
                      text: "Отменить",
                      onPress: () => console.log("Cancel Pressed"),
                      style: "cancel",
                    },
                    {
                      text: "Подтвердить",
                      onPress: () => dispatch(removeHabit(item.name, item.id)),
                      style: "destructive",
                    },
                  ],
                  { cancelable: false }
                );
              }}
              activeOpacity={0.5}
            >
              <Ionicons
                style={{
                  lineHeight: 30,
                  height: 30,
                  width: 30,
                  textAlign: "center",
                }}
                name="ios-close"
                size={30}
                color="#fff"
              />
            </TouchableOpacity>
          </View>
        </View>

        <Checks item={item} />
      </View>
    );
  };

  return (
    <View style={styles.main}>
      <View style={styles.top}>
        <View style={styles.inputContainer}>
          <TextInput
            style={{
              color: "#fff",
              fontSize: 20,
              fontWeight: "300",
            }}
            value={inputValue}
            onChangeText={(habit) => {
              setInputValue(habit);
              setHabits(habit);
            }}
            placeholder="..."
            maxLength={70}
            returnKeyType="done"
            blurOnSubmit={true}
            autoCapitalize="sentences"
            autoCorrect={false}
          />
        </View>

        <TouchableOpacity
          onPress={() => {
            if (habits !== "") {
              setInputValue("");
              setHabits("");
              dispatch(addHabit(habits, idGenerator()));
            }
          }}
          activeOpacity={0.5}
        >
          <View style={styles.addButton}>
            <Ionicons
              style={{
                lineHeight: 40,
                height: 40,
                width: 30,
                textAlign: "center",
              }}
              name="ios-add"
              size={30}
              color="black"
            />
          </View>
        </TouchableOpacity>
      </View>

      <FlatList
        data={allHabits}
        renderItem={renderItem}
        keyExtractor={(_, index) => {
          return index.toString();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: "100%",
    backgroundColor: "#16171C",
    paddingTop: "10%",
    // alignItems: "center",
  },

  headerContainer: {
    marginBottom: "2.5%",
    marginTop: "5%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  header: {
    fontSize: 30,
    fontWeight: "900",
    color: "#fff",
  },
  deleteBtn: {
    width: 30,
    height: 30,
    // backgroundColor: "red",
    // position: "absolute",
    top: 0,
    right: 0,
    opacity: 0.5,
  },

  top: {
    width: "100%",
    height: 50,
    // flex: 1,
    // backgroundColor: "blue",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  inputContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255, 255, 255, .1)",
    // flex: 1,
    width: 250,
  },
  addButton: {
    width: 50,
    height: 50,
    flex: 1,
    borderWidth: 0,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 1)",
    justifyContent: "center",
    alignItems: "center",
  },
});
