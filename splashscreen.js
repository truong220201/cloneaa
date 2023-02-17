
import React, {useState, useEffect} from 'react';
import { FontAwesome5 } from '@expo/vector-icons'; 
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Text,
  Image,ImageBackground,StatusBar
} from 'react-native';

const SplashScreen = ({navigation}) => {
  
    setTimeout(() => {
        navigation.replace( 'dn' )
    }, 2000);
    
  return (
    <View style={styles.container}>
      <View style={styles.insc}>  
      <StatusBar hidden />
        <ImageBackground imageStyle={{ borderRadius: 6}} source={{uri:'https://cutewallpaper.org/21/cute-food-wallpaper/Food-Wallpaper-Background-Food-Images-and-Wallpapers-for-Mac-.jpg'}} 
        resizeMode="cover"  style={styles.inscontainer2}>
        <View style={styles.ins}>
        <Text style={{alignSelf:'center',
                      color:'#fff',
                      fontSize:25,
                      backgroundColor:'#ff44439c',
                      padding:10,}}><FontAwesome5 style = {{}} name="snowflake" size={30} color="#fff"/>  Giáng sinh an lành !!  <FontAwesome5 style = {{}} name="snowflake" size={30} color="#fff"/></Text>
        <Text style={{alignSelf:'center',
                      color:'red',
                      fontSize:15,
                      padding:10,
                      top:'50%',
                      borderRadius:15,}}>Đang tải trang, chờ xíu nhé  </Text>
        <ActivityIndicator
            color="red"
            size='large'
            style={styles.activityIndicator}
        />
      </View>
      </ImageBackground>
    </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'black'
  },
  insc:{
    flex:1,
    width: '100%',
    height:'100%',
    
  },
  ins:{
    top:'20%',
  },
  txttitle:{
    alignSelf:'center',
    color:'#fff',
    fontWeight:'bold',
    fontSize:25,
    backgroundColor:'#ff44439c',
    padding:10,
    borderRadius:15,
  },
  inscontainer2:{
    width:'100%',
    height:'100%',
    elevation:2,
  },
  activityIndicator: {
    alignItems: 'center',
    height: 150,
    top:'40%'
  },
});