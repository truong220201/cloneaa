import React, { useState } from 'react';
import { TouchableOpacity,ScrollView, Text, View,Button,StyleSheet,Image,ImageBackground } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';

import data from '../../data.json';
import datamatl from '../../datamonantheoloai.json';

export default class DanhSach extends React.Component{ 
  state={
    btnBg:true, 
  }
  render(){
  const { route,navigation } = this.props;
    
  const { loaiId} = route.params;
    
    
  const btnColor = this.state.btnBg ?'#fff':'#1b1e1f'
  const txtC = this.state.btnBg ?'black':'#fff'
  const txtD = this.state.btnBg ?'orange':'#fff'
  const iconC = this.state.btnBg ?'sun':'moon'
  const bodyC = this.state.btnBg ?'#e8e8e8':'#3c3932'
  const fixTop = this.state.btnBg ?120:0


  const j = loaiId;
  //const j = 8;
  var i = datamatl.loai[j].tl.length;
  //Danh sach chi hien thi toi da 10 phan tu, do lag
  if(i>10){
    i = 10
  }

  return (
    <View style={styles.container}>
        <View style={{
          flex: 10,
          backgroundColor: btnColor,
          alignItems: 'center',
          width:'100%',
        }}>
        <ScrollView style={styles.scrollView}>
        <View style={{flex: 1,
        backgroundColor: bodyC,
        alignItems: 'center',}}>
        <View>
          
          <ImageBackground imageStyle={{ borderRadius: 0}} source={{uri:datamatl.loai[j].tl[0].img}} resizeMode="cover" style={styles.inscontainer2}>
            <View style={{borderRadius:0,overflow:'hidden',width: '100%',}}>
            <LinearGradient colors={['#faebd700', 'black', 'black']} style={{top:120,
                                                                              width:'100%',
                                                                              height:'100%',}}>
              <Text style={styles.txtTagFood}>"{datamatl.loai[j].intro}.."</Text>
            </LinearGradient>
            </View>
          </ImageBackground>
          <TouchableOpacity style={{flexDirection:'row',backgroundColor:btnColor,}}  onPress={() => this.setState({btnBg: !this.state.btnBg})}>
            <Text style={{fontSize:20,
                          fontWeight:'bold',
                          marginBottom:3,
                          color:txtD,
                          paddingLeft:14,
                          paddingTop:10,
                          height:50,
                          }}>
                            <FontAwesome5 style = {{}} name="bars" size={18} color="orange" />  Menu: {datamatl.loai[j].name}  </Text>
                            <FontAwesome5 style={{top:15,left:150}} name={iconC} size={18} color={txtD}/> 
              
          </TouchableOpacity>

          <View style={styles.div}>
              {
                  [...Array(i)].map((o,n) => {
                          return(
                              <TouchableOpacity key={datamatl.loai[j].tl[n].id} style={styles.OnDiv} onPress={()=>navigation.navigate('ctsp',{itemId:datamatl.loai[j].tl[n].id,loaiId:datamatl.loai[j].id})}>

                                  <View style={{height:150,
                                                backgroundColor:btnColor,
                                                flexDirection:'row',
                                                paddingTop:15,
                                                paddingLeft:15,
                                                paddingBottom:15,}}>
                                  <Image
                                      style={styles.imgMonAn}
                                      source={{uri:datamatl.loai[j].tl[n].img}}
                                      
                                  />
                                  
                                  <View style={styles.txtcontent}>
                                  <Text style={{fontWeight:'bold',
                                                color:txtC,
                                                fontSize:17,
                                                marginLeft:5,
                                                marginRight:5,
                                                maxHeight:22,
                                                marginBottom:10,}}>

                                  <FontAwesome5 style = {{}} name="angle-double-right" size={14} color="orange"/> {datamatl.loai[j].tl[n].name}
                                  </Text>

                                  <Text style={styles.TacGiaMonAn}>
                                   <FontAwesome5 style = {{}} name="clock" size={12} color="orange"/>  {datamatl.loai[j].tl[n].chuanbi} | CB: {datamatl.loai[j].tl[n].chebien}
                                  </Text>
                                  
                                  <Text style={styles.TacGiaMonAn}>
                                  <FontAwesome5 style = {{}} name="star" size={12} color="orange"/>  {datamatl.loai[j].tl[n].dokho} /10 
                                  </Text>
                                  <Text style={styles.Tag}>
                                  <FontAwesome5 style = {{}} name="tags" size={12} color="orange"/> : {datamatl.loai[j].tl[n].tag} 
                                  </Text>
                                  </View>
                                  </View>
                                  
                              </TouchableOpacity>
                          )
                      })
              }
          </View>
          </View>
        </View>
      <View  style={{flex: 1,
        backgroundColor: bodyC,
        alignItems: 'center',}}>
        <View>
        <Text style={{fontSize:20,
                          fontWeight:'bold',
                          marginBottom:5,
                          color:txtD,
                          paddingLeft:14,
                          paddingTop:10,
                          height:50,
                          backgroundColor:btnColor,}}>Món ăn phổ biến khác</Text>
          <View style={styles.div}>
              {
                  [...Array(6)].map((o,n) => {
                          return(
                              <TouchableOpacity key={data.monan[n].id} style={styles.OnDiv} onPress={()=>navigation.navigate('ChiTiet',{itemId: data.monan[n].id})}>
                                  <View   style={{height:150,
                                                backgroundColor:btnColor,
                                                flexDirection:'row',
                                                paddingTop:15,
                                                paddingLeft:15,
                                                paddingBottom:15,}}>
                                  <Image
                                      style={styles.imgMonAn}
                                      source={{uri:data.monan[n].img}}
                                  />
                                  <View style={styles.txtcontent}>
                                    <Text style={{fontWeight:'bold',
                                                color:txtC,
                                                fontSize:17,
                                                marginLeft:5,
                                                marginRight:5,
                                                maxHeight:22,
                                                marginBottom:10,}}>
                                        {data.monan[n].name}
                                    </Text>
                                    <Text style={styles.TacGiaMonAn}>
                                        {data.monan[n].intro}
                                    </Text>
                                  </View>
                                  </View>
                              </TouchableOpacity>
                          )
                      })
              }
          </View>
          </View>
        </View>
        <View style={{backgroundColor:"white",alignSelf:'center',alignItems:"center",justifyContent:"center", width: 150,height:30,borderRadius:5,margin:10,elevation:3,}}>
              <Text style={{fontSize:15,fontWeight:"bold"}}>Xem Tiếp <FontAwesome5 style = {{}} name="angle-double-right" size={14} color="orange"/></Text></View>
        </ScrollView>
        </View>
        <View style={{height:60,
                      backgroundColor: btnColor,
                      alignItems: 'center',
                      flexDirection:'row',
                      elevation:3,}}>
              <TouchableOpacity  style={styles.c4} onPress={()=>navigation.navigate('Home')}>
                  <FontAwesome5 style = {{}} name="home" size={20} color="grey"
                  />
              </TouchableOpacity>
              <TouchableOpacity  style={styles.c4} onPress={()=>navigation.navigate('DanhSach', {itemId: 8})}>
                  <FontAwesome5 style = {{}} name="book" size={20} color="orange"
                  />
              </TouchableOpacity>
              <TouchableOpacity  style={styles.c4} onPress={()=>navigation.navigate('s1')}>
                  <View  style={styles.c5}>
                    <FontAwesome5 style = {{}} name="search" size={20} color="grey"
                    />
                  </View>
              </TouchableOpacity>
              <TouchableOpacity  style={styles.c4} onPress={()=>navigation.navigate('themmon')}>
                  <FontAwesome5 style = {{}} name="plus-square" size={20} color="grey"
                  />
              </TouchableOpacity>
              <TouchableOpacity  style={styles.c4} onPress={()=>navigation.navigate('nhantin')}>
                  <FontAwesome5 style = {{}} name="sms" size={20} color="grey"
                  />
              </TouchableOpacity>
            </View>
    </View>
)
}};
const styles = StyleSheet.create({
  
  footer: {
    height:60,
    backgroundColor: 'black',
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
        backgroundColor: '#e8e8e8',
        alignItems: 'center',
      },
      div:{
        flex:1,
        flexDirection:'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      },
      OnDiv:{
        paddingTop:2,
        paddingBottom:2,
        width:'100%',

      },
      Content:{
        height:150,
        backgroundColor:'#fff',
        flexDirection:'row',
        paddingTop:15,
        paddingLeft:15,
        paddingBottom:15,
      },
      txtcontent:{
        width: '50%',
        paddingLeft:10,
      },
      imgMonAn:{
        width:'30%',
        height:'100%',
        resizeMode: 'stretch',
        borderRadius:5,
      },
      TenMonAn:{
        fontWeight:'bold',
        fontSize:17,
        marginLeft:5,
        marginRight:5,
        maxHeight:22,
        marginBottom:10,
      },
      TacGiaMonAn:{
        color:'grey',
        marginLeft:5,
        fontStyle:'italic',
        fontSize:15,
        maxHeight:20,
        maxWidth:250,
        marginTop:'2%'
      },
      Tag:{
        color:'grey',
        marginLeft:5,
        fontStyle:'italic',
        fontSize:15,
        maxHeight:20,
        maxWidth:250,
        marginTop:'12%',
      },
      container2:{
        width: '100%',
        height:'30%',
        borderRadius:5,
        
      },
      inscontainer2:{
        width:'100%',
        height:200,
        marginBottom:0,
        
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
        width: 393,
        color:'white',
        
      },
  });
