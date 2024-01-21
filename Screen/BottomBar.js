import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Main from "./Main";
import Community from "./Community";
import MyPageScreen from "./MyPage";

const Tab = createBottomTabNavigator();

const BottomTabNavigationApp = ({ navigation }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false, // 상단 바 숨기기
      }}
    >
      <Tab.Screen
        name="Home"
        component={Main}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Community"
        component={Community}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="people" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen name="good" component={Main} />
      <Tab.Screen
        name="MyPage"
        component={MyPageScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="person" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default function BottomBar() {
  return (
    <NavigationContainer>
      <BottomTabNavigationApp />
    </NavigationContainer>
  );
}
