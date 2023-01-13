import "react-native-gesture-handler";
import { StatusBar } from "react-native";
import { Feather } from "@expo/vector-icons";
import { HoldMenuProvider } from "react-native-hold-menu";

import { Home } from "./src/screens/Home";

export default function App() {
  return (
    <HoldMenuProvider theme="dark" iconComponent={Feather}>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />
      <Home />
    </HoldMenuProvider>
  );
}
