import React from "react";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

import { store, persistor } from "./src/store/store";
import { MainScreen } from "./src/screens/MainScreen";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainScreen />
      </PersistGate>
    </Provider>
  );
}
