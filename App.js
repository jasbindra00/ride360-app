import "react-native-gesture-handler";
import * as React from "react";
import { Button, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/LoginScreen";
import ActivityMapScreen from "./screens/ActivityMapScreen";
import HomeScreen from "./screens/HomeScreen";
import RideDetailsScreen from "./screens/RideDetailsScreen";
import { useFonts } from "expo-font";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Root() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Activity Map" component={ActivityMapScreen} />
    </Tab.Navigator>
  );
}

// function Root() {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="Home" component={HomeScreen} />
//       <Drawer.Screen name="Activity Map" component={ActivityMapScreen} />
//     </Drawer.Navigator>
//   );
// }

export default function App() {
  const [loaded] = useFonts({
    MontserratBold: require("./assets/fonts/MontserratBold.ttf"),
    MonserratExtraBold: require("./assets/fonts/MontserratExtraBold.ttf"),
    MonserratBlack: require("./assets/fonts/MontserratBlack.ttf"),
    MonserratRegular: require("./assets/fonts/MontserratRegular.ttf"),
    MonserratLight: require("./assets/fonts/MontserratLight.ttf"),
  });
  if (loaded) {
    console.log("done");
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Root"
          component={Root}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="RideDetails" component={RideDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
