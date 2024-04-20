import React, { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import GlobalApi from "../../Utils/GlobalApi";
import Colors from "../../Utils/Colors";
import Heading from "./../../Components/Heading";

const Slider = () => {
  const [sliders, setSliders] = useState([]);

  useEffect(() => {
    getSliders();
  }, []);
  const getSliders = () => {
    GlobalApi.getSlider().then((resp) => {
      //   console.log("resp", resp.sliders);
      setSliders(resp?.sliders);
    });
  };

  return (
    <View>
      <View style={{ elevation: 50 }}>
        <Heading text={"Services For You"}></Heading>
        <FlatList
          data={sliders}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <View style={{ marginRight: 20 }}>
              {/* <Text>{item.name}</Text> */}
              <Image
                source={{ uri: item.image.url }}
                style={styles.sliderImage}
              ></Image>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: "400",
    fontFamily: "outfit-light",
  },
  sliderImage: {
    width: 250,
    height: 150,
    borderRadius: 20,
    objectFit: "contain",
    borderColor: Colors.PRIMARY,
    borderWidth: 1,
  },
});

export default Slider;
