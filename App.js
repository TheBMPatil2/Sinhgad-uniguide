import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./App/Screens/LoginScreen/Login";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import Constants from "expo-constants";
import * as SecureStore from "expo-secure-store";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./App/Navigations/TabNavigation";
import { useFonts } from 'expo-font';

const tokenCache = {
  async getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};
export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'outfit': require('./assets/fonts/Outfit-Regular.ttf'),
    'outfit-bold': require('./assets/fonts/Outfit-Bold.ttf'),
    'outfit-light': require('./assets/fonts/Outfit-Light.ttf'),
    'outfit-var': require('./assets/fonts/Outfit-VariableFont_wght.ttf'),
  });

  return (
    <ClerkProvider
      tokenCache={tokenCache}
      publishableKey="pk_test_ZGV2b3RlZC1zZXJ2YWwtNDAuY2xlcmsuYWNjb3VudHMuZGV2JA"
    >
      <View style={styles.container}>
        {/* Signin Component */}
        <SignedIn>
          <NavigationContainer>
            <TabNavigation></TabNavigation>
          </NavigationContainer>
        </SignedIn>

        {/* Signout Component */}
        <SignedOut>
          <Login />
        </SignedOut>
        <StatusBar style="auto" />
      </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
  },
});
