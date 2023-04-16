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
import { SafeAreaView } from "react-native";

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    flexDirection: "column",
    overflow: "visible",
  },

  ride: {
    backgroundColor: "rgb(246,246,246)",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
});

const blueCardbg = require("../assets/logo_render_blue_contour.png");
const redCardbg = require("../assets/logo_render_contour.png");

const HelmetCollection = () => {
  return (
    <View>
      <Text
        style={{ fontFamily: "MontserratExtraBold" }}
        className="mb-5 text-3xl"
      >
        MY HELMETS
      </Text>

      <HelmetCard helmetID={"AZ4281"} contourColor="red" />
      <HelmetCard helmetID={"JB2439"} />
    </View>
  );
};

const Ride = ({
  helmetID,
  rideDate,
  rideTimeStart,
  rideTimeEnd,
  color = "red",
}) => {
  navigation = useNavigation();

  return (
    <TouchableOpacity
      className="w-full h-14 rounded-md flex flex-row items-center justify-between"
      style={{
        backgroundColor: "rgb(246,246,246)",
        borderBottomWidth: 1,
        borderBottomColor: "rgba(0,0,0,0.1)",
      }}
      onPress={() => {
        navigation.navigate("RideDetails", {
          helmetID: helmetID,
          rideDate: rideDate,
          rideTimeStart: rideTimeStart,
          rideTimeEnd: rideTimeEnd,
          contourColor: color,
        });
      }}
    >
      <View style={{ width: "20%" }}>
        <Image
          source={color == "red" ? redCardbg : blueCardbg}
          resizeMode="contain"
          style={{ flex: 1, width: undefined, height: "100%" }}
        ></Image>
      </View>
      <View
        style={{ flexGrow: 1 }}
        className="flex flex-row items-center justify-between mx-2"
      >
        <Text style={{ fontFamily: "MontserratRegular" }}>
          {helmetID}• {rideDate}•{rideTimeStart} - {rideTimeEnd}
        </Text>
        <ArrowRightCircleIcon color="black" />
      </View>
    </TouchableOpacity>
  );
};
const RideHistory = ({}) => {
  return (
    <View className="p-2">
      <Text
        style={{ fontFamily: "MontserratExtraBold" }}
        className="mb-5 text-3xl"
      >
        RIDE HISTORY
      </Text>
      <Ride
        helmetID={"AZ2481"}
        rideDate={"19/04/23"}
        rideTimeStart={"12:09"}
        rideTimeEnd={"13:21"}
      />
      <Ride
        helmetID={"JB2439"}
        rideDate={"19/04/23"}
        rideTimeStart={"12:12"}
        rideTimeEnd={"13:40"}
        color="blue"
      />
      <Ride
        helmetID={"JB2439"}
        rideDate={"18/04/23"}
        rideTimeStart={"12:00"}
        rideTimeEnd={"13:01"}
        color="blue"
      />
      <Ride
        helmetID={"AZ2481"}
        rideDate={"17/04/23"}
        rideTimeStart={"09:31"}
        rideTimeEnd={"12:22"}
      />
      <Ride
        helmetID={"AZ2481"}
        rideDate={"17/04/23"}
        rideTimeStart={"09:31"}
        rideTimeEnd={"12:22"}
      />
      <Ride
        helmetID={"JB2439"}
        rideDate={"15/04/23"}
        rideTimeStart={"18:22"}
        rideTimeEnd={"20:01"}
        color="blue"
      />
      <Ride
        helmetID={"JB2439"}
        rideDate={"13/04/23"}
        rideTimeStart={"07:01"}
        rideTimeEnd={"16:01"}
        color="blue"
      />
      <Ride
        helmetID={"AZ2481"}
        rideDate={"12/04/23"}
        rideTimeStart={"09:50"}
        rideTimeEnd={"12:22"}
      />
    </View>
  );
};

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.contentContainer}>
      <ScrollView
        className="bg- pt-2 px-2"
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={{ overflow: "visible" }}
      >
        <HelmetCollection />
        <RideHistory />
      </ScrollView>
    </SafeAreaView>
  );
}
