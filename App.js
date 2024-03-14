import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ContextProvider from "./src/context/ContextProvider";
import ResultScreen from "./src/screen/ResultScreen";

export default function App() {
  return (
    <ContextProvider>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <ResultScreen />
      </View>
    </ContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "auto",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
