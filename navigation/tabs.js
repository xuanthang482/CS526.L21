import React from 'react';
import { StyleSheet, Text, View,Button, Image } from 'react-native';
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs"

import { Home, Login, Notify, Complain, Account,ReflectForm,Profile} from "../screens"

import { COLORS, images } from "../constants"

const Tab = createBottomTabNavigator();

function Tabs(){
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: true,
                style: {
                    position: 'absolute',
                    left: 0,
                    bottom: 0,
                    right: 0,
                    borderTopWidth: 0,
                    backgroundColor: "transparent",
                    elevation: 0
                },
                activeTintColor: COLORS.primary
            }}
        >
            <Tab.Screen name="Trang chủ" 
                        component={Home}
                        options={{
                            tabBarIcon: ({ focused }) => (
                                <Image
                                    source={images.home_icon}
                                    resizeMode="contain"
                                    style={{
                                        width: 25,
                                        height: 25,
                                        tintColor: focused ? COLORS.primary : COLORS.secondary
                                    }}
                                />
                            ),
                            headerShown: false,
                        }}
            />
            <Tab.Screen name="Thông báo" 
                        component={Notify}
                        options={{
                            tabBarIcon: ({ focused }) => (
                                <Image
                                    source={images.bell_icon}
                                    resizeMode="contain"
                                    style={{
                                        width: 25,
                                        height: 25,
                                        tintColor: focused ? COLORS.primary : COLORS.secondary
                                    }}
                                />
                            ),
                            headerShown: false,
                        }}
            />
            <Tab.Screen name="Phản ánh" 
                        component={ReflectForm}
                        options={{
                            tabBarIcon: ({ focused }) => (
                                <Image
                                    source={images.warn_icon}
                                    resizeMode="contain"
                                    style={{
                                        width: 25,
                                        height: 25,
                                        tintColor: focused ? COLORS.primary : COLORS.secondary
                                    }}
                                />
                            ),
                            headerShown: false,
                        }}
            />
            <Tab.Screen name="Tài khoản" 
                        component={Profile}
                        options={{
                            tabBarIcon: ({ focused }) => (
                                <Image
                                    source={images.account_icon}
                                    resizeMode="contain"
                                    style={{
                                        width: 25,
                                        height: 25,
                                        tintColor: focused ? COLORS.primary : COLORS.secondary
                                    }}
                                />
                            ),
                            headerShown: false,
                        }}
            />
            
        </Tab.Navigator>

        
    );
}
export default Tabs;