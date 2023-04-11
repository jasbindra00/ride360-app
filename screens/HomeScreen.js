import React from "react";
import { ScrollView } from "react-native";
import { ImageBackground } from "react-native";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 20,
    // backgroundColor: "rgba(255,0,0,1)",
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50, // Change this value to adjust the roundness
    overflow: "hidden",
  },
  ride: {},
});

const redCardbg = require("../assets/logo_render_contour.png");

const HelmetCard = ({ helmetID }) => {
  return (
    <View className="rounded-2xl mb-8">
      <Text className="text-xl mb-2">RIDE360 HELMET {helmetID}</Text>
      <ImageBackground
        className="h-52 rounded-3xl"
        source={redCardbg}
        style={styles.background}
      ></ImageBackground>
    </View>
  );
};

const HelmetCollection = () => {
  return (
    <View>
      <HelmetCard helmetID={"testing"} />
      <HelmetCard helmetID={"testing"} />
    </View>
  );
};

const Ride = () => {
  return <View className="w-auto bg-black"></View>;
};
const RideHistory = () => {
  return (
    <View className="flex flex-col bg-red-200 flex-1">
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
