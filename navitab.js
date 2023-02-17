import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons'; 
import Home from './app/screens/Home';
import Settings from './app/screens/Settings';
import DanhSach from './app/screens/DanhSach';
import ChiTiet from './app/screens/ChiTiet';

const Tab = createBottomTabNavigator();

function navitab() {
        return (
            <Tab.Navigator >
                <Tab.Screen name="Home" component={Home} 
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <FontAwesome5 style = {{}} name="home" size={20} color={color}
                        />
                    ),
                  }}/>
                <Tab.Screen name="DanhSach" component={DanhSach} options={{
                    tabBarLabel: 'DanhSach',
                    tabBarIcon: ({ color }) => (
                        <FontAwesome5 style = {{}} name="book" size={20} color={color}
                        />
                    ),
                  }} />
                <Tab.Screen name="Settings" component={Settings} options={{
                    tabBarLabel: 'Settings',
                    tabBarIcon: ({ color }) => (
                        <FontAwesome5 style = {{}} name="heart" size={20} color={color}
                        />
                    ),
                  }}/>
                <Tab.Screen name="ChiTiet" component={ChiTiet} options={{
                    tabBarLabel: 'ChiTiet',
                    tabBarIcon: ({ color }) => (
                        <FontAwesome5 style = {{}} name="user-circle" size={20} color={color}
                        />
                    ),
                  }}/>
            </Tab.Navigator>
        );
}
export default navitab;