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

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 10,
    // backgroundColor: "rgba(255,0,0,1)",
  },

  specific: {
    backgroundColor: "rgb(246,246,246)",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
});

const RideSpecific = ({ keyz, value }) => {
  return (
    <View
      className="flex flex-row justify-between items-center p-2 bg-black mb-2 h-14"
      style={styles.specific}
    >
      <Text>{keyz}</Text>
      <Text className="text-gray-400">{value}</Text>
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
    <View className="flex flex-col mt-10">
      <RideSpecific keyz={"HELMET ID"} value={helmetID} />
      <RideSpecific keyz={"DATE"} value={rideDate} />
      <RideSpecific keyz={"TIME"} value={rideTimeStart + "-" + rideTimeEnd} />
      <RideSpecific keyz={"DURATION"} value={rideDuration} />
    </View>
  );
};

const SharedPostPane = () => {
  return (
    <View
      className="flex flex-col bg-blue-200 rounded-xl mt-10"
      style={{ height: 400 }}
    >
      <Text className="text-3xl pl-2">SHARED POST</Text>

      {/* image */}
      <View className="bg-red-500 h-" style={{ height: "50%" }}></View>

      {/* content below image */}
      <View className="flex flex-col flex-1">
        {/* type and distance */}
        <View className="flex flex-row items-center justify-between">
          <View className="flex flex-row items-center">
            <Text>Collision</Text>
          </View>

          <View className="flex flex-row items-center">
            <MapPinIcon color="rgb(246,246,246)" />
            <Text>1.1 miles away</Text>
          </View>
        </View>

        <Text className="font-bold">No traction on icy Trinity Road</Text>

        <Text numberOfLines={undefined} ellipsizeMode="tail">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id
          sagittis dolor. Aliquam arcu...
        </Text>

        <View className="flex flex-row flex-1">
          <HandThumbUpIcon />
          <ChatBubbleOvalLeftIcon />
          <ShareIcon />
        </View>
      </View>
    </View>
  );
};

const CollisionDetectionPane = () => {
  return <></>;
};

function RideDetailsScreen() {
  const propz = {
    cardPNGname: "png",
    helmetID: "helmetID",
    rideDate: "rideDate",
    rideTimeStart: "startime",
    rideTimeEnd: "endtime",
    rideDuration: "duration",
  };
  return (
    <ScrollView
      className="w-full h-full flex flex-col"
      style={styles.contentContainer}
    >
      <HelmetCard helmetID={propz.helmetID} />
      <RideSpecificsPane {...propz} />
      <SharedPostPane />
    </ScrollView>
  );
}

export default RideDetailsScreen;
