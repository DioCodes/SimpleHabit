import { AsyncStorage } from "react-native";
import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { rootReducer } from "./index";
import thunkMiddleware from "redux-thunk";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  // whitelist: ["allHabits"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(thunkMiddleware));
const persistor = persistStore(store);

export { store, persistor };
