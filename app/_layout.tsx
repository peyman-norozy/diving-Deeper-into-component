import * as SplashScreen from "expo-splash-screen";
import {StyleSheet, View, Text} from "react-native";
import "react-native-reanimated";


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
      <View>
        <Text>sdfs</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  appConstainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 5,
  },
});
