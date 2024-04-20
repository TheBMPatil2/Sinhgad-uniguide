import React from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Colors from "../../Utils/Colors";
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from "./../../hooks/useWarmUpBrowser";
import { useOAuth } from "@clerk/clerk-expo";
WebBrowser.maybeCompleteAuthSession();

export default Login = () => {
  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);
  return (
    <ImageBackground
      source={require("./../../../assets/images/1.png")}
      style={styles.container}
    >
      <View style={{ alignItems: "center" }}>
        <Image
          source={require("./../../../assets/images/1.png")}
          style={styles.loginImage}
        />
        {/* Welcome to sinhgad unigude*/}
        <View style={styles.subContainer}>
          <Text
            style={{
              fontSize: 32,
              color: Colors.WHITE,
              textAlign: "left",
              marginTop: 10,
              fontWeight: 600,
            }}
          >
            Welcome to
            {"\n"}
            <Text style={{ fontWeight: "bold", fontSize: 45 }}>
              Sinhgad UniGuide..!{" "}
            </Text>
          </Text>
          {/* Unlock... */}
          <Text
            style={{
              fontSize: 26,
              color: Colors.BLACK,
              textAlign: "left",
              marginTop: 4,

              fontWeight: 500,
            }}
          >
            Unlock Your world of
            <Text style={{ fontWeight: "bold" }}> Conveniance: </Text>
            <Text
              style={{
                fontSize: 22,
                color: Colors.BLACK,
                textAlign: "left",
                fontWeight: "bold",
                paddingTop: 10,
              }}
            >
              "Everything You Need at Your Fingertips!"
            </Text>
          </Text>
          <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text
              style={{
                textAlign: "center",
                fontSize: 20,
                fontWeight: 500,
                color: Colors.PRIMARY,
              }}
            >
              Let's get Started
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  loginImage: {
    height: 450,
    width: 230,
    borderColor: Colors.BLACK,
    borderWidth: 4,
    marginTop: 70,
    borderRadius: 15,
  },
  subContainer: {
    width: "100%",
    height: "80%",
    backgroundColor: Colors.PRIMARY,
    marginTop: -10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: "center",
  },
  button: {
    padding: 15,
    backgroundColor: Colors.WHITE,
    borderRadius: 99,
    marginTop: 40,
    width: "95%",
  },
});
