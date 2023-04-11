import React from "react";
import { ScrollView } from "react-native";
import { Image } from "react-native";
import { ImageBackground } from "react-native";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import { ArrowRightCircleIcon } from "react-native-heroicons/solid";
import HelmetCard from "../components/HelmetCard";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 10,
    // backgroundColor: "rgba(255,0,0,1)",
  },

  ride: {
    backgroundColor: "rgb(246,246,246)",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
});

const redCardbg = require("../assets/logo_render.png");

const HelmetCollection = () => {
  return (
    <View>
      <HelmetCard helmetID={"testing"} />
      <HelmetCard helmetID={"testing"} />
    </View>
  );
};

const Ride = ({
  helmetID = "AZ2481",
  rideDate = "12/03/23",
  rideTime = "12:09 - 13:21",
}) => {
  navigation = useNavigation();

  return (
    <TouchableOpacity
      className="w-full h-14  mb-2 rounded-md flex flex-row items-center justify-between"
      style={styles.ride}
      onPress={() => {
        navigation.navigate("RideDetails");
      }}
    >
      <View style={{ width: "20%" }}>
        <Image
          source={redCardbg}
          resizeMode="contain"
          style={{ flex: 1, width: undefined, height: "100%" }}
        ></Image>
      </View>
      <View
        style={{ flexGrow: 1 }}
        className="flex flex-row items-center justify-between mx-2"
      >
        <Text>
          {helmetID}• {rideDate}•{rideTime}
        </Text>
        <ArrowRightCircleIcon color="black" />
      </View>
    </TouchableOpacity>
  );
};
const RideHistory = ({}) => {
  return (
    <View className="p-2">
      <Text className="mb-5 text-3xl">RIDE HISTORY</Text>
      <Ride />
      <Ride />
      <Ride />
      <Ride />
      <Ride />
      <Ride />
    </View>
  );
};

export default function HomeScreen() {
  return (
    <View style={styles.contentContainer}>
      <ScrollView
        className=""
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <HelmetCollection />
        <RideHistory />
      </ScrollView>
    </View>
  );
}
