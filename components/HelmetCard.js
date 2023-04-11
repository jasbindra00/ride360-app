import { useNavigation } from "@react-navigation/native";
import { ImageBackground } from "react-native";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";

const redCardbg = require("../assets/logo_render.png");
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
});

const HelmetCard = ({ helmetID }) => {
  return (
    <View
      className="w-full h-52 rounded-2xl mb-2"
      style={{ backgroundColor: "rgb(255,0,0)" }}
    >
      <Text className="text-3xl mb-2 text-red-200">
        RIDE360 HELMET {helmetID}
      </Text>
      <ImageBackground
        className="rounded-3xl"
        source={redCardbg}
        style={styles.background}
      ></ImageBackground>
    </View>
  );
};

export default HelmetCard;
