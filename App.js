import React from "react";
import { Image, Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UtilitiesScreen from "./src/screens/utilities";
import NotifyScreen from "./src/screens/notify";
import AccountScreen from "./src/screens/account";
import ScheduleScreen from "./src/screens/schedule/schedule";



import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Learning from "./src/screens/learning-outcomes/learning";
import HomeScreen from "./src/screens/home/homeScreen";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const TienIchStack = createNativeStackNavigator();
function TienIchScreenStack() {
  return (
    <TienIchStack.Navigator screenOptions={{headerShown: false}}>
      <TienIchStack.Screen name="Tiện ích" component={UtilitiesScreen}  />
      <TienIchStack.Screen name="Kết Quả Học Tập" component={Learning}  />
      <TienIchStack.Screen name="Thời Khóa Biểu" component={ScheduleScreen}  />
      <TienIchStack.Screen name="Thực Đơn" component={Learning} />
    </TienIchStack.Navigator>
  )
}

const NhatKyStack = createNativeStackNavigator();
function NhatKyScreenStack() {
  return (
    <NhatKyStack.Navigator screenOptions={{headerShown: false}}>
      <NhatKyStack.Screen name="Nhật Ký" component={HomeScreen} />
    </NhatKyStack.Navigator>
  )
}

const ThongBaoStack = createNativeStackNavigator();
function ThongBaoScreenStack() {
  return (
    <ThongBaoStack.Navigator screenOptions={{headerShown: false}}>
      <ThongBaoStack.Screen name="Thông Báo" component={NotifyScreen} />
    </ThongBaoStack.Navigator>
  )
}

const TaiKhoanStack = createNativeStackNavigator();
function TaiKhoanScreenStack() {
  return (
    <TaiKhoanStack.Navigator screenOptions={{headerShown: false}}>
      <TaiKhoanStack.Screen name="TaiKhoan" component={AccountScreen} />
    </TaiKhoanStack.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="Nhật ký" component={NhatKyScreenStack}
          options={{
            headerShown: false,
            tabBarIcon: () =>
              <View style={{ alignItems: 'center' }}>
                <Image source={require('./icons/bottom-icons/Vector.png')}>
                </Image>
                <View style={{ position: 'absolute', marginTop: 15, }}>
                  <Image source={require('./icons/bottom-icons/Vector1.png')}
                  ></Image>
                </View>
              </View>
          }} />
        <Tab.Screen name="Tiện ích" component={TienIchScreenStack} />
        <Tab.Screen name="Thông báo" component={ThongBaoScreenStack}  />
        <Tab.Screen name="Tài Khoản" component={TaiKhoanScreenStack} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App;