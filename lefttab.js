import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from './app/screens/Home';
import Settings from './app/screens/Settings';
import DanhSach from './app/screens/DanhSach';
import ChiTiet from './app/screens/ChiTiet';
import SplashScreen from './splashscreen';
import dangnhap from './app/screens/dangnhap';
const Drawer = createDrawerNavigator();

 function lefttab() {
    return (
        <Drawer.Navigator initialRouteName="Home" >
          <Drawer.Screen name="Home" component={Home} options={{title:"Trang chủ"}}/>
          <Drawer.Screen name="Danh sach mon an" component={DanhSach} />
          <Drawer.Screen name="Notifications" component={Settings} />
          <Drawer.Screen options={{headerShown: false}} name="Đăng xuất" component={dangnhap} />
        </Drawer.Navigator>
    );
  }
  

  export default lefttab;