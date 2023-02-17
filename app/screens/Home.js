import React, { useState } from 'react';
import { Dimensions,TouchableOpacity,ScrollView, Text, View,Button,StyleSheet,Image, ImageBackground} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';
import data from '../../data.json';
import datamatl from '../../datamonantheoloai.json';
import { styles } from './css/cssHome';
const Home = ({navigation}) => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const i = data.category.length;
    const j = datamatl.loai.length;
    return(
      <View style={{flex:1,}}> 
      <ScrollView  style={styles.container}>
        <View style={styles.content}>
          <Image 
            source={require('./images/title.jpg')}
            style={styles.imgtitle}
            
          />
          <View style={styles.div}>
            {
                [...Array(8)].map((o,n) => {
                        return(
                            <TouchableOpacity key={datamatl.loai[n].name} style={styles.OnDiv}
                            onPress={()=>navigation.navigate('DanhSach',{loaiId: datamatl.loai[n].id})}>
                                <View style={styles.Content}>
                                  <Image
                                      style={styles.imgMonAn}
                                      source={{uri:datamatl.loai[n].img}}
                                  />
                                 <Text style={styles.txtloai} >{datamatl.loai[n].name}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })
            }
          </View>
          <View style={styles.div2}>
            <Text style={styles.txthnag}>Hôm nay ăn gì?&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<FontAwesome5 style = {{}} name="arrow-right" size={18} color="black"/></Text>
            <ScrollView snapToInterval={windowWidth-84}  decelerationRate="fast"  horizontal={true} style={styles.container2}>
            {
                [...Array(i)].map((o,n) => {
                  return(
                    <TouchableOpacity key={datamatl.loai[8].tl[n].id}  onPress={()=>navigation.navigate('ctsp',
                    {itemId: datamatl.loai[8].tl[n].id,loaiId:8})}>
                  <ImageBackground key={datamatl.loai[8].tl[n].id} imageStyle={{ borderRadius: 6}} source={{uri: datamatl.loai[8].tl[n].img}} resizeMode="cover"  style={styles.inscontainer2}>
                    <View style={{borderRadius:5,overflow:'hidden',}}>
                      <LinearGradient colors={['#faebd700', 'black', '#192f6a']} style={styles.inscontainer2a}>
                        <Text style={styles.txtInfoFood}>{ datamatl.loai[8].tl[n].name}</Text>
                        <Text style={styles.txtTagFood}>{ datamatl.loai[8].tl[n].tag}</Text>
                      </LinearGradient>
                    </View>
                  </ImageBackground>
                  </TouchableOpacity>
                  )
              })
            }
            {
            
            }
            </ScrollView>
            
          </View>
          <ImageBackground  source={{uri:'https://s3.envato.com/files/308789917/AJ6A8685_2.jpg'}} style={styles.div3a}>
            <Text style={styles.txthnag4}> <FontAwesome5 style = {{top:0,margin:3,left:77,}} name="snowflake" size={20} color="white"/>  Giáng sinh an lành  <FontAwesome5 style = {{top:0,margin:3,left:77,}} name="snowflake" size={20} color="white"/>                        <FontAwesome5 style = {{}} name="arrow-right" size={18} color="white"/></Text>
            <ScrollView snapToInterval={windowWidth-84}  decelerationRate="fast"  horizontal={true} style={styles.container2}>
            {
                [...Array(i)].map((o,n) => {
                  return(
                    <TouchableOpacity key={datamatl.loai[9].tl[n].id}  onPress={()=>navigation.navigate('ctsp',
                    {itemId: datamatl.loai[9].tl[n].id,loaiId:9})}>
                  <ImageBackground key={data.monan[n].id} imageStyle={{ borderRadius: 6}} source={{uri:datamatl.loai[9].tl[n].img}} resizeMode="cover"  style={styles.inscontainer2}>
                    <View style={{borderRadius:5,overflow:'hidden',}}>
                      <LinearGradient  colors={['#faebd700', '#000000a1', '#000000b3']} style={styles.inscontainer2b}>
                        <Text style={styles.txtInfoFood}>{datamatl.loai[9].tl[n].name}</Text>
                        <Text style={styles.txtTagFoodb}>"{datamatl.loai[9].tl[n].intro}"</Text>
                      </LinearGradient>
                    </View>
                  </ImageBackground>
                  </TouchableOpacity>
                  )
                  
              })
            }
            </ScrollView>
          </ImageBackground>
          <LinearGradient start={{ x: -1, y: 0 }} end={{ x: 1, y: 0 }} colors={['orange', 'orange', '#e12222']} style={styles.div3}>
            <Text style={styles.txthnag2}>Phổ biến                                                   <FontAwesome5 style = {{}} name="arrow-right" size={18} color="white"/></Text>
            <ScrollView snapToInterval={windowWidth-84}  decelerationRate="fast"  horizontal={true} style={styles.container2}>
            {
                [...Array(i)].map((o,n) => {
                  return(
                    <TouchableOpacity key={data.monan[n].id}  onPress={()=>navigation.navigate('ctsp',
                    {itemId: datamatl.loai[8].tl[n].id,loaiId:8})}>
                  <ImageBackground key={data.monan[n].id} imageStyle={{ borderRadius: 6}} source={{uri:data.monan[n].img}} resizeMode="cover"  style={styles.inscontainer3a}>
                    <View style={{borderRadius:5,overflow:'hidden',}}>
                      <LinearGradient  colors={['#00000085', '#00000085', '#0000009c']} style={styles.inscontainer2c}>
                        <Text style={styles.txtInfoFoodc}>{data.monan[n].name}</Text>
                      </LinearGradient>
                    </View>
                  </ImageBackground>
                  </TouchableOpacity>
                  )
              })
            }
            </ScrollView>
          </LinearGradient>
          
          <ImageBackground resizeMode="cover" source={{uri:"https://i.pinimg.com/736x/e8/08/bb/e808bb4bd47eca0f612d2e6ec4eb13eb.jpg"}} style={styles.div4}>
            <Text style={styles.txthnag3}> 
             
             Bí quyết nấu ăn</Text>
            <View style={styles.container3}>
            {
                [...Array(i)].map((o,n) => {
                  return(

                  <TouchableOpacity key={data.food[n].id}  style={styles.inscontainer3}  onPress={()=>navigation.navigate('ChiTiet',
                  {itemId: data.category[n].id})}>
                    <View style={{borderRadius:5,overflow:'hidden',padding:5,}}>
                      <View style={{flexDirection:'row'}}>
                        <FontAwesome5 style = {{top:1,margin:3,}} name="user-alt" size={10} color="orange"/>
                        <Text style={styles.txttacgia}>{data.food[n].tacgia}</Text>
                        <FontAwesome5 style = {{top:0,margin:3,left:77,}} name="chevron-right" size={13} color="grey"/>
                      </View>
                      <Text style={styles.txttenmonan}>≈ {data.food[n].name} ≈</Text>
                      <Text style={styles.txthuongdan}>{data.food[n].cachlam.b1}...</Text>
                      <Text style={styles.txthuongdan}>...</Text>
                      <Text style={styles.txthuongdan}>{data.food[n].cachlam.b2}...</Text>
                      <Text style={styles.txthuongdan}>...</Text>
                      <Text style={styles.txthuongdan}>{data.food[n].cachlam.b3}...</Text>
                      <Text style={styles.txthuongdan}>...</Text>
                      <Text style={styles.txttag}>{data.food[n].tag}</Text>
                    </View>
                  </TouchableOpacity>
                  )
              })
            }
            </View>
            <View style={{backgroundColor:"white",alignSelf:'center',alignItems:"center",justifyContent:"center", width: 150,height:30,borderRadius:5,top:-22,}}>
              <Text style={{fontSize:15,fontWeight:"bold"}}>Xem Tiếp <FontAwesome5 style = {{}} name="angle-double-right" size={14} color="orange"/></Text></View>
          </ImageBackground>
        </View>
      </ScrollView>
        <View style={styles.footer}>
              <TouchableOpacity  style={styles.c4} onPress={()=>navigation.navigate('Home')}>
                  <FontAwesome5 style = {{}} name="home" size={20} color="orange"
                  />
              </TouchableOpacity>
              <TouchableOpacity  style={styles.c4} onPress={()=>navigation.navigate('DanhSach', {loaiId: 8})}>
                  <FontAwesome5 style = {{}} name="book" size={20} color="grey"
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
      
)};
export default Home;

