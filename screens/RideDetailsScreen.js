import React from "react";
import { Text } from "react-native";
import { View } from "react-native";
import HelmetCard from "../components/HelmetCard";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { MapPinIcon } from "react-native-heroicons/solid";
import { HandThumbUpIcon } from "react-native-heroicons/solid";
import { ChatBubbleOvalLeftIcon } from "react-native-heroicons/solid";
import { ShareIcon } from "react-native-heroicons/solid";
import { ImageBackground } from "react-native";
import { useFonts } from "expo-font";

const clipPNG = require("../assets/Clip.png");

const GetDuration = (startTime, endTime) => {
  const [startHour, startMinute] = startTime.split(":");
  const [endHour, endMinute] = endTime.split(":");

  const startDate = new Date();
  startDate.setHours(startHour);
  startDate.setMinutes(startMinute);

  const endDate = new Date();
  endDate.setHours(endHour);
  endDate.setMinutes(endMinute);

  const durationMs = endDate.getTime() - startDate.getTime();
  const durationMinutes = durationMs / 60000; // 1 minute = 60000 milliseconds

  return Math.round(durationMinutes) + " minutes";
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 10,
    // backgroundColor: "rgba(255,0,0,1)",
  },

  specific: {
    // backgroundColor: "rgb(246,246,246)",
    // shadowColor: "black",
    // shadowOffset: { width: 0, height: 0 },
    // shadowOpacity: 0.5,
    // shadowRadius: 10,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.1)",
    fontFamily: "MontserratBold",
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    // borderTopEndRadius: 50,
    // borderRadius: 50, // Change this value to adjust the roundness
    overflow: "hidden",
    // height: "50%",
  },
});

const RideSpecific = ({ keyz, value }) => {
  return (
    <View
      className="flex flex-row justify-between items-center p-2  mb-2 h-14"
      style={styles.specific}
    >
      <Text style={{ fontFamily: "MontserratBlack" }}>{keyz}</Text>
      <Text
        style={{ fontFamily: "MontserratRegular" }}
        className="text-gray-400"
      >
        {value}
      </Text>
    </View>
  );
};
const RideSpecificsPane = ({
  cardPNGname,
  helmetID,
  rideDate,
  rideTimeStart,
  rideTimeEnd,
  rideDuration,
}) => {
  return (
    <View className="flex flex-col mt-1">
      <RideSpecific keyz={"HELMET ID"} value={helmetID} />
      <RideSpecific keyz={"DATE"} value={rideDate} />
      <RideSpecific keyz={"TIME"} value={rideTimeStart + "-" + rideTimeEnd} />
      <RideSpecific
        keyz={"DURATION"}
        value={GetDuration(rideTimeStart, rideTimeEnd)}
      />
    </View>
  );
};

const SharedPostPane = () => {
  return (
    <>
      <Text style={{ fontFamily: "MontserratExtraBold" }} className="text-2xl">
        RIDE360 FOOTAGE
      </Text>

      <View className="flex flex-col  rounded-xl mt-5" style={{ height: 200 }}>
        <ImageBackground
          className="rounded-3xl"
          source={clipPNG}
          style={styles.background}
        ></ImageBackground>
      </View>
      <View className="flex flex-row">
        <View>
          <ShareIcon />
        </View>
      </View>
    </>
  );
};

const CollisionDetectionPane = () => {
  return (
    <View className="mt-5">
      <Text style={{ fontFamily: "MontserratExtraBold" }} className="text-2xl">
        COLLISION DETECTION
      </Text>

      <View className="flex flex-col">
        <View
          className="flex flex-row justify-between items-center mb-2 h-14"
          style={styles.specific}
        >
          <Text style={{ fontFamily: "MontserratBlack" }}>
            {"NUMBER PLATE"}
          </Text>
          <View
            className="p-1 rounded-md w-1/2"
            style={{ backgroundColor: "rgb(255,204,0)" }}
          >
            <View
              style={{ borderWidth: 1 }}
              className="h-4/5 flex flex-col justify-center items-center rounded-md"
            >
              <Text
                className="text-2xl"
                style={{ fontFamily: "UKNumberPlate" }}
              >
                BD51 SMR
              </Text>
            </View>
          </View>
        </View>
        <RideSpecific keyz={"VEHICLE MAKE"} value={"FORD"} />
        <RideSpecific keyz={"VEHICLE MODEL"} value={"FIESTA"} />
        <RideSpecific keyz={"INSURANCE COMPANY"} value={"UInsure"} />
      </View>
    </View>
  );
};

function RideDetailsScreen({ route }) {
  const props = route.params;

  return (
    <ScrollView
      className="w-full h-full flex flex-col"
      style={styles.contentContainer}
    >
      <HelmetCard {...props} />
      <RideSpecificsPane {...props} />
      <SharedPostPane />
      <CollisionDetectionPane />
    </ScrollView>
  );
}

export default RideDetailsScreen;
