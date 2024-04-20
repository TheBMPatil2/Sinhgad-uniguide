import React from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import Header from "./Header";
import Slider from "./Slider";
import Services from "./services";
import Colors from "../../Utils/Colors";
// Dashboard

export default HomeScreen = () => {
  return (
    <View style={{elevation:10}}>
      <ImageBackground
        source={require("./../../../assets/images/1.png")}
        style={{ width: "100%", height: "100%" }}
      >
        {/* Header  */}
        <Header />
        <View style={{ padding: 20 }}>
          {/* Slider */}
          <Slider />
          {/* Services */}
          <Services />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({});
