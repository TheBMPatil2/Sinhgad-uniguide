import { React, useEffect, useState } from "react";
import { StyleSheet, View, Text, FlatList, Image } from "react-native";
import GlobalApi from "../../Utils/GlobalApi";
import Heading from "../../Components/Heading";
import Colors from "../../Utils/Colors";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    getServices();
  }, []);
  const getServices = () => {
    GlobalApi.getService().then((resp) => {
      //console.log(resp.services);
      setServices(resp?.services);
    });
  };
  return (
    <View style={{ marginTop: 10 }}>
      <Heading text={"Services"} isViewAll={true} />
      <FlatList
        data={services}
        numColumns={3}
        renderItem={({ item, index }) => (
          <View style={styles.container}>
            <View style={styles.IconCon}>
              <Image
                source={{ uri: item?.icon?.url }}
                style={{ width: 65, height: 65, borderRadius: 50 }}
              />
            </View>
            <Text
              style={{
                marginTop: 5,
                fontFamily: "outfit",
                color: Colors.WHITE,
                padding: 5,
              }}
            >
              {item?.name}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  IconCon: {
    backgroundColor: Colors.LIGHT_GRAY,
    borderRadius: 99,
    padding: 5,
    elevation: 40,
    marginTop: 5,
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
});

export default Services;
