import { useState } from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../views/Home";
import Vendor from "../views/Vendor";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import SignUp from "../views/SignUp";
import Login from "../views/LogIn";

const Stack = createStackNavigator();

const VendorStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Vendor">
        {(props) => <Vendor {...props} />}
      </Stack.Screen>
      <Stack.Screen
        name="Sign Up"
        options={{
          headerLeft: () => <AntDesign name="left" size={24} color="black" />,
        }}
      >
        {(props) => <SignUp {...props} />}
      </Stack.Screen>
      <Stack.Screen name="Log In">
        {(props) => <Login {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

//Tab Bottom
const TabGroup = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return <Feather name="map-pin" size={24} color="black" />;
            }
            return <Feather name="map-pin" size={24} color="gray" />;
          },
        }}
      />
      <Tab.Screen
        name="Vendor"
        options={{
          headerShown: false,

          tabBarIcon: ({ focused }) => {
            if (focused) {
              return (
                <MaterialCommunityIcons name="corn" size={24} color="black" />
              );
            }
            return (
              <MaterialCommunityIcons name="corn" size={24} color="gray" />
            );
          },
        }}
      >
        {() => <VendorStack />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer theme={Theme}>
      <TabGroup />
    </NavigationContainer>
  );
};

const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
  },
};

export default Navigation;
