import { ADD_HABIT, REMOVE_CHECKED, REMOVE_HABIT, SET_CHECKED } from "../types";

export const addHabit = (habit, id) => {
  return {
    type: ADD_HABIT,
    habitName: habit,
    habitId: id,
  };
};

export const removeHabit = (habit, id) => {
  return {
    type: REMOVE_HABIT,
    habitName: habit,
    habitId: id,
  };
};

export const setChecked = (number, id) => {
  return {
    type: SET_CHECKED,
    checkNumber: number,
    checkHabitId: id,
  };
};

export const removeChecked = (number, id) => {
  return {
    type: REMOVE_CHECKED,
    checkNumber: number,
    checkHabitId: id,
  };
};
