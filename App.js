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
import { HomeIcon } from "react-native-heroicons/solid";
import { MapPinIcon } from "react-native-heroicons/solid";
import { GlobeAltIcon } from "react-native-heroicons/solid";
import { UserIcon } from "react-native-heroicons/solid";
import { Cog6ToothIcon } from "react-native-heroicons/solid";
import { Text } from "react-native";
import Testing from "./components/Testing";
import PlansScreen from "./screens/PlansScreen";
import SettingsScreen from "./screens/SettingsScreen";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Root() {
  return (
    <Tab.Navigator screenOptions={{}}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: (props) => {
            return <HomeIcon size={24} />;
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Activity Map"
        component={ActivityMapScreen}
        options={{
          tabBarIcon: (props) => {
            return <MapPinIcon size={24} />;
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Plans"
        component={PlansScreen}
        options={{
          tabBarIcon: (props) => {
            return <GlobeAltIcon size={24} />;
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: (props) => {
            return <Cog6ToothIcon size={24} />;
          },
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  const [loaded] = useFonts({
    MontserratBold: require("./assets/fonts/MontserratBold.ttf"),
    MontserratExtraBold: require("./assets/fonts/MontserratExtraBold.ttf"),
    MontserratBlack: require("./assets/fonts/MontserratBlack.ttf"),
    MontserratRegular: require("./assets/fonts/MontserratRegular.ttf"),
    MontserratLight: require("./assets/fonts/MontserratLight.ttf"),
    UKNumberPlate: require("./assets/fonts/UKNumberPlate.ttf"),
  });

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
