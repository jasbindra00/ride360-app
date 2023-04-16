import { useNavigation } from "@react-navigation/native";
import { ImageBackground } from "react-native";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";

const blueCardbg = require("../assets/logo_render_blue_contour.png");
const redCardbg = require("../assets/logo_render_contour.png");

console.log("testing" + redCardbg);
const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50, // Change this value to adjust the roundness
    overflow: "hidden",
  },

  ride: {
    backgroundColor: "rgb(246,246,246)",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
});

const HelmetCard = ({ helmetID, contourColor = "blue" }) => {
  return (
    <>
      <Text
        style={{ fontFamily: "MontserratExtraBold" }}
        className="mb-4 text-2xl"
      >
        RIDE360 HELMET {"(" + helmetID + ")"}
      </Text>
      <View className="w-full h-52 rounded-2xl mb-5" style={styles.ride}>
        <ImageBackground
          className="rounded-3xl"
          source={contourColor.toLowerCase() == "blue" ? blueCardbg : redCardbg}
          style={styles.background}
        ></ImageBackground>
      </View>
    </>
  );
};

export default HelmetCard;
