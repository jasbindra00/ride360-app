import React, { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity } from "react-native";
import { View } from "react-native";
import MapView, { Marker, Circle, Callout } from "react-native-maps";
import * as Location from "expo-location";
import { StyleSheet } from "react-native";
import {
  ChatBubbleLeftIcon,
  HandThumbUpIcon,
  MapPinIcon,
  ShareIcon,
} from "react-native-heroicons/solid";
import { ImageBackground } from "react-native";

const styles = StyleSheet.create({
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
  callout: {
    backgroundColor: "white",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    padding: 4,
  },
  container: {
    flex: 1,
    position: "relative",
  },
  map: {
    flex: 1,
  },
  title: {
    color: "black",
    fontSize: 14,
    lineHeight: 18,
    flex: 1,
  },
  description: {
    color: "#707070",
    fontSize: 12,
    lineHeight: 16,
    flex: 1,
  },
});

const clipPNG = require("../assets/Clip.png");

const GetDistanceBetweenCoordinates = (coord1, coord2) => {
  var R = 6371; // km
  var dLat = toRad(coord2.latitude - coord1.latitude);
  var dLon = toRad(coord2.longitude - coord1.longitude);
  var lat1 = toRad(coord1.latitude);
  var lat2 = toRad(coord2.latitude);

  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  return d;
};

// Converts numeric degrees to radians
function toRad(Value) {
  return (Value * Math.PI) / 180;
}

function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}

function generateRandomCoordinates(center, radius) {
  const y0 = center.latitude;
  const x0 = center.longitude;
  const rd = radius / 111300; // convert radius to degrees

  const u = Math.random();
  const v = Math.random();
  const w = rd * Math.sqrt(u);
  const t = 2 * Math.PI * v;
  const x = w * Math.cos(t);
  const y = w * Math.sin(t);

  const newLatitude = y + y0;
  const newLongitude = x + x0;

  return {
    latitude: newLatitude,
    longitude: newLongitude,
  };
}

const CustomCallout = ({ title, description }) => {
  return (
    <View style={styles.calloutContainer}>
      <Text style={styles.calloutTitle}>{title}</Text>
      <Text style={styles.calloutDescription}>{description}</Text>
    </View>
  );
};

const SharedPostPane = ({ ...props }) => {
  return (
    <ScrollView
      className="flex flex-col bg-trans rounded-xl overflow-scroll p-2"
      style={{ backgroundColor: "rgb(246,246,246)" }}
    >
      <View className="flex flex-row items-center gap-1">
        <Text
          style={{ fontFamily: "MontserratBlack" }}
          className="text-2xl pl-2"
        >
          SHARED POST
        </Text>
        <Text style={{ fontFamily: "MontserratRegular" }} className="text-xs">
          by {props.username}
        </Text>
      </View>

      {/* image */}
      <View className="h-48" style={{}}>
        <ImageBackground
          className="rounded-3xl"
          source={clipPNG}
          style={styles.background}
        ></ImageBackground>
      </View>

      {/* content below image */}
      <View className="flex flex-col flex-1">
        {/* type and distance */}
        <View className="flex flex-row items-center justify-between">
          <View className="flex flex-row items-center">
            <Text style={{ fontFamily: "MontserratBlack" }}>
              {props.eventType}
            </Text>
          </View>

          <View className="flex flex-row items-center">
            <MapPinIcon color="rgb(246,246,246)" />
            <Text style={{ fontFamily: "MontserratBold" }}>
              {props.distance + " km away"}
            </Text>
          </View>
        </View>

        <Text
          style={{ fontFamily: "MontserratExtraBold" }}
          className="font-bold"
        >
          {props.title}
        </Text>

        <Text
          style={{ fontFamily: "MontserratRegular" }}
          numberOfLines={undefined}
          ellipsizeMode="tail"
        >
          {props.description}
        </Text>

        <View className="flex flex-row flex-1  gap-x-5 mt-3">
          <TouchableOpacity>
            <View className="flex flex-row items-center">
              <HandThumbUpIcon />
              <Text style={{ fontFamily: "MontserratRegular" }}>
                {props.num_likes}
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className="flex flex-row items-center">
              <ChatBubbleLeftIcon />
              <Text style={{ fontFamily: "MontserratRegular" }}>
                {props.num_comments}
              </Text>
            </View>
          </TouchableOpacity>

          <ShareIcon />
        </View>
      </View>
    </ScrollView>
  );
};

export default function ActivityMapScreen() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const [markerArray, setMarkerArray] = useState([]);
  const RADIUS = 600;

  const [eventsArray, setEventsArray] = useState([
    {
      username: "Alex Z (AZ4281)",
      coordinates: { longitude: 2, latitude: 2 },
      distance: 2,
      eventType: "Collision",
      title: "No traction on icy roads",
      description:
        "It's been pretty cold and icy for the last few days and the council haven't bothered to lay grit salt down again..",
      time_posted: "2 hours ago",
      num_likes: 25,
      num_comments: 10,
    },
    {
      username: "Jas B (JB111)",
      distance: 2,
      eventType: "Accident",
      title: "Traffic lights on White Hart roundabout are not working",
      description:
        "Got into a front size accident as the traffic lights are down on the roundabout!",
      time_posted: "10 hours ago",
      num_likes: 50,
      num_comments: 61,
    },
    {
      username: "Henry E (JB111)",
      distance: 2,
      eventType: "Accident",
      title: "Traffic lights on White Hart roundabout are not working",
      description:
        "Got into a front size accident as the traffic lights are down on the roundabout!",
      time_posted: "10 hours ago",
      num_likes: 50,
      num_comments: 61,
    },
    {
      username: "Jivraj D (JD234)",
      distance: 2,
      eventType: "Collision",
      title: "Got hit by a car!",
      description:
        "There's a blindspot near the Ossie Garvin roundabout where cars can't see cyclists.",
      time_posted: "1 hour ago",
      num_likes: 16,
      num_comments: 2,
    },
    {
      username: "Radin O (RO134)",
      distance: 2,
      eventType: "Accident",
      title: "Slippery Road ",
      description:
        "There's some sort of oil or petrol on the road which made my tyres slip. Be careful.",
      time_posted: "1 hour ago",
      num_likes: 8,
      num_comments: 1,
    },
  ]);

  const [activeEvent, setActiveEvent] = useState(eventsArray[0]);
  // initialise distance

  const FetchLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
    } else {
    }

    markerarr_tmp = [];

    let currentLocation = await Location.getCurrentPositionAsync({});
    setLocation(currentLocation);
    for (var j = 0; j < eventsArray.length; ++j) {
      randomCoord = generateRandomCoordinates(currentLocation.coords, RADIUS);
      markerarr_tmp.push(randomCoord);
      eventsArray[j].coordinates = randomCoord;

      distance = GetDistanceBetweenCoordinates(
        currentLocation.coords,
        randomCoord
      );
      console.log(distance);
      eventsArray[j].distance = Math.round(distance * 100) / 100;
    }
    setMarkerArray(markerarr_tmp);
  };

  useEffect(
    () => {
      FetchLocation();
    },

    //   setMarkerArray(markerarr_tmp);
    []
  );

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: location ? location.coords.latitude : 37.78825,
          longitude: location ? location.coords.longitude : -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        region={{
          latitude: location ? location.coords.latitude - 0.005 : 37.78825,
          longitude: location ? location.coords.longitude : -122.4324,
          latitudeDelta: 0.012,
          longitudeDelta: 0.02,
        }}
      >
        {location && (
          <Marker coordinate={location.coords} showCallout={true}></Marker>
        )}
        {location && (
          <Circle
            center={location.coords}
            radius={RADIUS} // change this value as per your requirements
            fillColor="rgba(255, 0, 0, 0.1)" // change this value to adjust the circle fill color
            strokeColor="rgba(255, 0, 0, 0.3)" // change this value to adjust the circle stroke color
          />
        )}

        {markerArray.map((coord, index) => (
          <Marker
            key={index}
            coordinate={coord}
            showCallout={true}
            title={"testing"}
            description={"testingdesc"}
            onPress={() => {
              setActiveEvent(eventsArray[index]);
            }}
          >
            <Callout
              onPress={() => {
                setActiveEvent(eventsArray[index]);
              }}
            >
              <Text style={{ fontFamily: "MontserratBlack" }}>
                {eventsArray[index].eventType}
              </Text>
              <Text style={{ fontFamily: "MontserratRegular" }}>
                {eventsArray[index].username}
              </Text>
            </Callout>
          </Marker>
        ))}
      </MapView>
      <View className="bg-transparent absolute bottom-0 w-full h-1/2 px-4">
        <View className="w-full h-full bg-blue-100 rounded-2xl">
          <SharedPostPane {...activeEvent} />
        </View>
      </View>
    </View>
  );
}
