import React from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";

export default AnnouncementScreen = () => {
  return (
    <View>
      <ImageBackground
        source={require("./../../../assets/images/2.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <Text>AnnouncementScreen</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({});
