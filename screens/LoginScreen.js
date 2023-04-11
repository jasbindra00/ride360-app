import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { Dimensions } from "react-native";
import { SafeAreaView } from "react-native";
import { Button } from "react-native";
import { Text, View } from "react-native";
import { ImageBackground, StyleSheet } from "react-native";

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
    alignContent: "center",

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
  return (
    <View style={styles.container}>
      <ImageBackground source={background} style={styles.background}>
        <SafeAreaView style={styles.contentContainer}>
          <View style={styles.logoContainer}>
            <Image source={logo} style={styles.logo} />
          </View>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Root");
            }}
          >
            <Text className="text-white mx-auto">CONTINUE</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}
