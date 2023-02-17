import React, { useState } from 'react';
import { TouchableOpacity,ScrollView, Text, View,Button,StyleSheet,Image,ImageBackground } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';

import data from '../../data.json';
import datamatl from '../../datamonantheoloai.json';

const DanhSach = ({route,navigation}) =>{
  const { itemId} = route.params;

  const j = itemId;
  const i = datamatl.loai[j].tl.length;
  return (
    <View style={styles.container}>
        <View style={styles.content}>
        <ScrollView style={styles.scrollView}>
        <View style={styles.body}>
        <View>
          <Text style={styles.txttenloai}>Menu: {datamatl.loai[j].name}</Text>
          <ImageBackground imageStyle={{ borderRadius: 2}} source={{uri:datamatl.loai[j].tl[0].img}} resizeMode="cover" style={styles.inscontainer2}>
            <View style={{borderRadius:5,overflow:'hidden',}}>
            <LinearGradient colors={['#faebd700', 'black', '#192f6a']} style={styles.inscontainer2a}>
              <Text style={styles.txtTagFood}>"{datamatl.loai[j].intro}.."</Text>
            </LinearGradient>
            </View>
          </ImageBackground>

          <View style={styles.div}>
              {
                  [...Array(i)].map((o,n) => {
                          return(
                              <TouchableOpacity key={datamatl.loai[j].tl[n].id} style={styles.OnDiv} onPress={()=>navigation.navigate('ChiTiet',{itemId:datamatl.loai[j].tl[n].id})}>
                                  <View style={styles.Content}>
                                  <Image
                                      style={styles.imgMonAn}
                                      source={{uri:datamatl.loai[j].tl[n].img}}
                                  />
                                  <Text style={styles.TenMonAn}>
                                      {datamatl.loai[j].tl[n].name}
                                  </Text>
                                  <Text style={styles.TacGiaMonAn}>
                                    Chuẩn bị :{datamatl.loai[j].tl[n].chuanbi}
                                  </Text>
                                  <Text style={styles.TacGiaMonAn}>
                                     Chế biến :{datamatl.loai[j].tl[n].chebien} 
                                  </Text>
                                  <Text style={styles.TacGiaMonAn}>
                                     Độ khó :{datamatl.loai[j].tl[n].dokho}
                                  </Text>
                                  </View>
                              </TouchableOpacity>
                          )
                      })
              }
          </View>
          </View>
        </View>
      <View style={styles.body}>
        <View>
        <Text style={styles.txttenloai}>Món ăn phổ biến khác</Text>
          <View style={styles.div}>
              {
                  [...Array(6)].map((o,n) => {
                          return(
                              <TouchableOpacity key={data.monan[n].id} style={styles.OnDiv} onPress={()=>navigation.navigate('ChiTiet',{itemId: data.monan[n].id})}>
                                  <View style={styles.Content}>
                                  <Image
                                      style={styles.imgMonAn}
                                      source={{uri:data.monan[n].img}}
                                  />
                                  <Text style={styles.TenMonAn}>
                                      {data.monan[n].name}
                                  </Text>
                                  <Text style={styles.TacGiaMonAn}>
                                      {data.monan[n].intro}
                                  </Text>
                                  </View>
                              </TouchableOpacity>
                          )
                      })
              }
          </View>
          </View>
        </View>
        </ScrollView>
        
        </View>
        <View style={styles.footer}>
              <TouchableOpacity  style={styles.c4} onPress={()=>navigation.navigate('Home')}>
                  <FontAwesome5 style = {{}} name="home" size={20} color="grey"
                  />
              </TouchableOpacity>
              <TouchableOpacity  style={styles.c4} onPress={()=>navigation.navigate('DanhSach')}>
                  <FontAwesome5 style = {{}} name="book" size={20} color="orange"
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
    </View>
)};
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
  txttenloai:{
      fontSize:20,
      fontWeight:'bold',
      marginTop:10,
      marginBottom:10,
      color:'#FF8C00',
      marginLeft:14,
  },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent:'center',
    },
    content: {
        flex: 10,
        backgroundColor: '#f8f6f2',
        alignItems: 'center',
        width:'100%',

      },
      header: {
        paddingTop:10,
        flexDirection:'row',
        textAlign:'center',
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        backgroundColor:'#45908f',
      },
      headerIn: {
        marginTop:1,
        flexDirection:'row',
        justifyContent:'center',
        flex: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
        backgroundColor:'#45908f',
      },
      scrollView:{
        flex: 15,
        width:'100%',
      },
      body: {
        flex: 1,
        backgroundColor: '#f7f6f2',
        alignItems: 'center',
      },
      div:{
        flex:1,
        flexDirection:'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      },
      OnDiv:{
        padding:2,
        width:'33%',
      },
      Content:{
        borderRadius:5,
        height:190,
        backgroundColor:'#fff',
        elevation:3,
      },
      imgMonAn:{
        width:'100%',
        height:'60%',
        resizeMode: 'stretch',
        borderRadius:5,
      },
      TenMonAn:{
        fontWeight:'bold',
        fontSize:12,
        marginLeft:5,
        marginRight:5,
        maxHeight:18,
      },
      TacGiaMonAn:{
        color:'grey',
        marginLeft:5,
        fontStyle:'italic',
        fontSize:10,
        maxHeight:20,
        maxWidth:120,
      },
      container2:{
        width: '100%',
        height:'30%',
        borderRadius:5,
        
      },
      inscontainer2:{
        width:'100%',
        height:200,
        elevation:2,
        marginBottom:10,
        
      },
      inscontainer2a:{
        top:120,
        width:'100%',
        height:'100%',
      },
      txtTagFood:{
        fontSize:15,
        fontStyle:'italic',
        top:-10,
        padding:20,
        maxHeight:95,
        color:'white',
        
      },
  });
export default DanhSach;
