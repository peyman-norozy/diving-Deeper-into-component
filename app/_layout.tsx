import * as SplashScreen from "expo-splash-screen";
import { ImageBackground, StyleSheet, View } from "react-native";
import "react-native-reanimated";
import StartGameScreen from "@/screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("../assets/images/background.png")}
        resizeMode={"cover"}
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
