import React, { Component } from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 
import Home from './Home';
import Settings from './Settings';
import { NavigationContainer } from '@react-navigation/native';

function footer({navigation}) {
        return (
            <View style={styles.footer}>
              <TouchableOpacity  style={styles.c4} onPress={()=>navigation.navigate('Home')}>
                  <FontAwesome5 style = {{}} name="home" size={30} color="orange"
                  />
              </TouchableOpacity>
              <TouchableOpacity  style={styles.c4} onPress={()=>navigation.navigate('DanhSach')}>
                  <FontAwesome5 style = {{}} name="book" size={20} color="grey"
                  />
              </TouchableOpacity>
              <TouchableOpacity  style={styles.c4} onPress={()=>navigation.navigate('DanhSach')}>
                  <View  style={styles.c5}>
                    <FontAwesome5 style = {{}} name="search" size={20} color="grey"
                    />
                  </View>
              </TouchableOpacity>
              <TouchableOpacity  style={styles.c4} onPress={()=>navigation.navigate('DanhSach')}>
                  <FontAwesome5 style = {{}} name="heart" size={20} color="grey"
                  />
              </TouchableOpacity>
              <TouchableOpacity  style={styles.c4} onPress={()=>navigation.navigate('DanhSach')}>
                  <FontAwesome5 style = {{}} name="user-circle" size={20} color="grey"
                  />
              </TouchableOpacity>
            </View>
        )
}
const styles = StyleSheet.create({
    footer: {
      height:60,
      backgroundColor: '#fff',
      alignItems: 'center',
      flexDirection:'row',
      elevation:3,
    },
    c4: { 
      padding:10,
      flex: 10,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection:'row',
    },
  });
export default footer;