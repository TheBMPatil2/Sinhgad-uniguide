import { useUser } from "@clerk/clerk-expo";
import React from "react";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import Colors from "../../Utils/Colors";
import { FontAwesome, AntDesign } from "@expo/vector-icons";

const Header = () => {
  const { user, isLoading } = useUser();
  return (
    user && (
      <View style={styles.container}>
        {/* Profile Section */}
        <View style={styles.profileMainCon}>
          <View style={styles.profileContainer}>
            <Image source={{ uri: user?.imageUrl }} style={styles.userImage} />
            <View>
              <Text
                style={{
                  color: Colors.WHITE,
                  fontSize: 20,
                  fontWeight: 400,
                  fontFamily: "outfit",
                }}
              >
                Welcome,
              </Text>
              <Text
                style={{
                  color: Colors.WHITE,
                  fontSize: 24,
                  fontFamily: "outfit",
                  fontWeight: "bold",
                }}
              >
                {user?.fullName}
              </Text>
            </View>
          </View>
          <AntDesign name="notification" size={30} color={Colors.WHITE} />
        </View>

        {/* SearcBar section */}
        <View style={styles.searchBarContainer}>
          <TextInput placeholder="Search" style={styles.textInput}></TextInput>
          <FontAwesome
            name="search"
            style={styles.searchBtn}
            size={24}
            color={Colors.PRIMARY}
          />
        </View>
      </View>
    )
  );
};

const styles = StyleSheet.create({
  userImage: {
    width: 45,
    height: 45,

    borderRadius: 99,
  },
  profileContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",

    gap: 12,
  },
  container: {
    padding: 20,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    borderTopColor: Colors.PRIMARY,
    borderWidth: 0.25,
    marginTop: 5,
    backgroundColor: Colors.PRIMARY,
    elevation: 8,
  },
  textInput: {
    backgroundColor: Colors.WHITE,
    borderRadius: 8,
    padding: 7,
    paddingHorizontal: 16,
    width: "85%",
    fontSize: 17,
  },
  searchBarContainer: {
    marginTop: 15,
    display: "flex",
    flexDirection: "row",
    gap: 10,
    marginBottom: 10,
    fontFamily: "outfit",
  },
  searchBtn: {
    backgroundColor: Colors.WHITE,
    borderRadius: 8,
    padding: 10,
  },
  profileMainCon: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default Header;
