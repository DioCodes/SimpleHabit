import { ADD_HABIT, REMOVE_CHECKED, REMOVE_HABIT, SET_CHECKED } from "../types";

const INITIAL_CHECKS = {
  1: false,
  2: false,
  3: false,
  4: false,
  5: false,
  6: false,
  7: false,
  8: false,
  9: false,
  10: false,
  11: false,
  12: false,
  13: false,
  14: false,
  15: false,
  16: false,
  17: false,
  18: false,
  19: false,
  20: false,
  21: false,
  22: false,
  23: false,
  24: false,
  25: false,
  26: false,
  27: false,
  28: false,
  29: false,
  30: false,
};

const INITIAL_STATE = {
  allHabits: [],
};

export const habitReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_HABIT:
      return {
        ...state,
        allHabits: [
          ...state.allHabits,
          {
            id: action.habitId,
            name: action.habitName,
            checks: INITIAL_CHECKS,
          },
        ],
      };

    case REMOVE_HABIT:
      return {
        ...state,
        allHabits: state.allHabits.filter((habit) => {
          return habit.id !== action.habitId;
        }),
      };

    case SET_CHECKED:
      state.allHabits.filter((habit) => {
        Object.keys(habit.checks).forEach((key) => {
          if (habit.id === action.checkHabitId && key === action.checkNumber) {
            habit.checks[key] = true;
          }
        });
      });
      return {
        ...state,
        allHabits: state.allHabits,
      };

    case REMOVE_CHECKED:
      state.allHabits.filter((habit) => {
        Object.keys(habit.checks).forEach((key) => {
          if (habit.id === action.checkHabitId && key === action.checkNumber) {
            habit.checks[key] = false;
          }
        });
      });
      return {
        ...state,
        allHabits: state.allHabits,
      };

    default:
      return state;
  }
};
