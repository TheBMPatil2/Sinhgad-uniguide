import React from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";

export default ProfileScreen = () => {
  return (
    <View>
      <ImageBackground
        source={require("./../../../assets/images/3.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <Text>ProfileScreen</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({});
