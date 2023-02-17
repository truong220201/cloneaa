import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {enableScreens} from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './app/screens/Home';
import Settings from './app/screens/Settings';
import DanhSach from './app/screens/DanhSach';
import ChiTiet from './app/screens/ChiTiet';
import lefttab from './lefttab';
import footer from './app/screens/footer';
import SplashScreen from './splashscreen';
import dangnhap from './app/screens/dangnhap';
import dangky from './app/screens/dangki';
import TimKiem from './app/screens/search'; 
import ThemMon from './app/screens/ThemMon';
import ChiTietThemMon from './app/screens/ChiTietThemMon';
import ChiTietsp from './app/screens/ChiTietsp';
import NhanTin from './app/screens/nhantin';
import Splash1s from './splash1s';
import lefttabb from './lefttabb';
import test from './app/screens/test';
import test1 from './app/screens/test1';
import Bottom from './app/screens/bottom/bottomTabs';

const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: true}} initialRouteName='Home' >
        <Stack.Screen name = "ss" component = {SplashScreen} options={{headerShown: false}} />
        <Stack.Screen name = "s1" component = {Splash1s} options={{headerShown: false}} />
        <Stack.Screen name = "lTab" component = {lefttab} options={{headerShown: false}} />
        <Stack.Screen name = "lTabb" component = {lefttabb} options={{headerShown: false}} />
        <Stack.Screen name = "dn" component = {dangnhap} options={{headerShown: false}} />
        <Stack.Screen name = "dk" component = {dangky} options={{headerShown: false}} />
        <Stack.Screen name = "timkiem" component = {TimKiem} options={{headerShown: false}} />
        <Stack.Screen name = "Home" component = {Home} options={{headerShown: false}} />
        <Stack.Screen name = "themmon" component = {ThemMon} options={{title:"Thêm Món"}}/>
        <Stack.Screen name = "nhantin" component = {NhanTin}   options={{title:"Tin nhắn"}}/>
        <Stack.Screen name = "cttm" component = {ChiTietThemMon} options={{title:"Chi Tiết thêm món"}}/>
        <Stack.Screen name = "DanhSach" component = {DanhSach} options={{title:"Thực đơn món ăn",headerStyle:{backgroundColor:'orange'}, headerTintColor:'white',}}/>
        <Stack.Screen name = "ctsp" component = {ChiTietsp} options={{title:"Thông tin"}}/>
        <Stack.Screen name = "test" component = {test} options={{title:"Thông tin"}}/>
        <Stack.Screen name = "test1" component = {test1} options={{title:"Thông tin"}}/>
        <Stack.Screen name = "bottom" component = {Bottom} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});