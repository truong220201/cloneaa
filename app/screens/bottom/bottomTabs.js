import React, { useState } from 'react';
import { Dimensions,TouchableOpacity,ScrollView, Text, View,Button,StyleSheet,Image, ImageBackground} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 

const Bottom = ({navigation}) => {

    return(
        <View style={stylesb.footer}>
          <TouchableOpacity  style={stylesb.c4} onPress={()=>navigation.navigate('Home')}>
              <FontAwesome5 style = {{}} name="home" size={20} color="orange"
              />
          </TouchableOpacity>
          <TouchableOpacity  style={stylesb.c4} onPress={()=>navigation.navigate('DanhSach', {loaiId: 8})}>
              <FontAwesome5 style = {{}} name="book" size={20} color="grey"
              />
          </TouchableOpacity>
          <TouchableOpacity  style={stylesb.c4} onPress={()=>navigation.navigate('s1')}>
              <View  style={stylesb.c5}>
                <FontAwesome5 style = {{}} name="search" size={20} color="grey"
                />
              </View>
          </TouchableOpacity>
          <TouchableOpacity  style={stylesb.c4} onPress={()=>navigation.navigate('themmon')}>
              <FontAwesome5 style = {{}} name="plus-square" size={20} color="grey" 
              />
          </TouchableOpacity>
          <TouchableOpacity  style={stylesb.c4} onPress={()=>navigation.navigate('nhantin')}>
              <FontAwesome5 style = {{}} name="sms" size={20} color="grey"
              />
          </TouchableOpacity>
        </View>
    );
    

}
const stylesb = StyleSheet.create({
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
})
export default Bottom;