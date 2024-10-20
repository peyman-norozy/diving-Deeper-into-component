import * as SplashScreen from "expo-splash-screen";
import { StyleSheet, View } from "react-native";
import "react-native-reanimated";
import StartGameScreen from "@/screens/StartGameScreen";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <View style={styles.rootScreen}>
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: "#ddb52f",
  },
});
