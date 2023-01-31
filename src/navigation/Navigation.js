import * as React from 'react';
import { Button, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home/homeScreen';
import UtilitiesScreen from '../screens/utilities';
import ScheduleScreen from '../screens/schedule/schedule';
import Learning from '../screens/learning-outcomes/learning';


const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Nhật ký" component={HomeScreen}
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
            <HomeStack.Screen name="Tiện ích" options={{ headerShown: false }}
                component={UtilitiesScreen} />
            <HomeStack.Screen name="Thông báo" component={ScheduleScreen} options={{ headerShown: false }} />
            <HomeStack.Screen name="Tài Khoản" component={Learning} options={{ headerShown: false }} />
        </HomeStack.Navigator>
    );
}

const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen() {
    return (
        <SettingsStack.Navigator>
            <SettingsStack.Screen name="Home" component={HomeStackScreen} />
        </SettingsStack.Navigator>
    );
}

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{ headerShown: false }}>
                <Tab.Screen name="Home" component={HomeStackScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}