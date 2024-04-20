import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/Homescreen/HomeScreen";
import ProfileScreen from "../Screens/ProfileScreen/ProfileScreen";

import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import AnnouncementScreen from "../Screens/AnnouncementScreen/AnnouncementScreen";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../Utils/Colors";

const Tab = createBottomTabNavigator();

export default TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.PRIMARY,
      }}
    >
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, fontSize: 12, marginTop: -7 }}>
              Dashboard
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="dashboard" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="AnnouncementScreen"
        component={AnnouncementScreen}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, fontSize: 12, marginTop: -7 }}>
              Announcements
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="notification" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, fontSize: 12, marginTop: -7 }}>
              Profile
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user-circle" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});
