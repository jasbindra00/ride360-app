import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Image, TouchableOpacity } from "react-native";
import { Dimensions } from "react-native";
import { SafeAreaView } from "react-native";
import { Button } from "react-native";
import { Text, View } from "react-native";
import { ImageBackground, StyleSheet, ActivityIndicator } from "react-native";

const background = require("../assets/login.jpg");
const logo = require("../assets/logo_render.png");
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  contentContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    // alignContent: "center",

    // backgroundColor:"rgba(255,0,0,1)"
    // marginHorizontal: 16,
  },
  logoContainer: {
    height: "30%",
  },
  logo: {
    height: "100%",
    width: undefined,
  },
});

const LoginModal = () => {
  return <></>;
};

export default function LoginScreen({ navigation }) {
  [hasRendered, setHasRendered] = useState(false);

  useEffect(() => {
    const tim = setTimeout(() => {
      navigation.navigate("Root");
    }, 20000);

    setHasRendered(true);
    return () => clearTimeout(tim);
  }, [hasRendered]);

  const handleRendered = () => {
    setHasRendered(true);
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={background} style={styles.background}>
        <SafeAreaView style={styles.contentContainer}>
          <View style={styles.logoContainer}>
            <Image source={logo} style={styles.logo} />
          </View>
          <View
            onLayout={handleRendered}
            className="flex-grow items-center justify-end gap-4"
          >
            <View className="bg-red-300 p-4 rounded-md " style={{}}>
              <Text style={{ fontFamily: "MontserratBold" }} className="mb-2">
                LOGGING IN...
              </Text>
              <ActivityIndicator size="large" color="red" />
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}
