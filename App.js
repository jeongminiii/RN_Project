// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import BottomTabNavigationApp from "./Screen/BottomBar";

// export default function App() {
//   return (
//     <NavigationContainer>
//       <BottomTabNavigationApp />
//     </NavigationContainer>
//   );
// }

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Main from "./Screen/Main";
import Community from "./Screen/Community";
import MyPageScreen from "./Screen/MyPage";
import PolicyDetailScreen from "./Screen/PolicyDetailScreen";
import InfoDetailScreen from "./Screen/InfoDetailScreen";
import NoticeDetailScreen from "./Screen/NoticeDetailScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false, // 헤더 숨기기
      }}
    >
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="PolicyDetail" component={PolicyDetailScreen} />
      <Stack.Screen name="InfoDetail" component={InfoDetailScreen} />
      <Stack.Screen name="NoticeDetail" component={NoticeDetailScreen} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      // screenOptions={{
      //   headerShown: false, // 헤더 숨기기
      // }}
      >
        <Tab.Screen name="Home" component={MainStack} />
        <Tab.Screen name="Community" component={Community} />
        <Tab.Screen name="MyPage" component={MyPageScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
