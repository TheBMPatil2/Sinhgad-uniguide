import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Colors from "../Utils/Colors";

const Heading = ({ text, isViewAll }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{text}</Text>
      {isViewAll && <Text style={{ color: Colors.WHITE }}>View All</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: "400",
    fontFamily: "outfit-light",
    color: Colors.WHITE,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default Heading;
