import React from "react";
import { ImageBackground, TouchableOpacity } from "react-native";
import { ScrollView, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native";
import { View } from "react-native";
// import { CrownIcon } from "react-native-heroicons/";

const blueCardbg = require("../assets/logo_render_blue_contour.png");
const redCardbg = require("../assets/logo_render_contour.png");

styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50, // Change this value to adjust the roundness
    overflow: "hidden",
  },
  card: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
});
const Plans = {
  free: {
    title: "Free",
    cost: "Free",
    features: [
      "Basic Access to Ride360",
      "Basic Helmet-App Integration",
      "Free 20GB Cloud Storage",
    ],
    color: "red",
  },
  premium: {
    title: "Premium",
    cost: "£x per month",
    features: [
      "Premium Access to Ride360",
      "Full Helmet-App Integration",
      "100GB Cloud Storage",
      "Automatic Collision and Numberplate Detection",
      "24/7 Customer Support",
    ],
    color: "blue",
  },
};
const PlanCard = ({ planInfo }) => {
  return (
    <>
      <View
        className="mb-10 h-1/3 rounded-xl flex flex-row "
        style={{ backgroundColor: "rgb(246,246,246)", ...styles.card }}
      >
        <View
          className="p-2 w-1/2 h-full"
          style={{ borderRightWidth: 1, borderRightColor: "rgba(0,0,0,0.1)" }}
        >
          <ScrollView className="">
            <Text
              style={{ fontFamily: "MontserratExtraBold" }}
              className="text-2xl"
            >
              {planInfo.title}
            </Text>
            {planInfo.title == "Premium" && (
              <View>
                <Text style={{ fontFamily: "MontserratRegular" }}>
                  Current Plan
                </Text>
                <Text></Text>
              </View>
            )}

            <Text>
              <View className="flex flex-col gap-2">
                {planInfo.features.map((elem, index) => {
                  return (
                    <Text style={{ fontFamily: "MontserratRegular" }}>
                      {"•" + elem}
                    </Text>
                  );
                })}
              </View>

              {/* {planInfo.features.map((elem, index) => {
          return <Text>Hello world</Text>;
        })} */}
            </Text>
          </ScrollView>
        </View>
        <View className=" w-1/2 h-full flex flex-col justify-between py-6">
          <View className="w-full h-1/2">
            <ImageBackground
              className="rounded-3xl"
              source={
                planInfo.color.toLowerCase() == "blue" ? blueCardbg : redCardbg
              }
              style={styles.background}
            ></ImageBackground>
          </View>

          <TouchableOpacity>
            <View
              style={{
                backgroundColor:
                  planInfo.title == "Premium"
                    ? "rgb(3,73,252)"
                    : "rgb(252,3,3)",
              }}
              className="p-3 h-10 mx-auto rounded-md flex flex-col justify-center items-center"
            >
              <Text
                style={{ fontFamily: "MontserratRegular" }}
                className="text-center"
              >
                {planInfo.title == "Premium" ? "Current Plan" : "Purchased"}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

function PlansScreen() {
  return (
    <SafeAreaView>
      <ScrollView className=" w-full h-full p-5">
        <Text
          className="text-4xl mb-10"
          style={{ fontFamily: "MontserratBlack" }}
        >
          Your Plans
        </Text>

        <PlanCard planInfo={Plans.free} />
        <PlanCard planInfo={Plans.premium} />

        <Text
          className="text-4xl mb-10"
          style={{ fontFamily: "MontserratBlack" }}
        >
          Your Payments
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

export default PlansScreen;
