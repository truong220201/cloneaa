import React from 'react';

import { Text, View } from 'react-native';
import { TouchableOpacity,ScrollView,Button,StyleSheet,Image } from 'react-native';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons'; 

import data from '../../datamonantheoloai.json';

 
const ChiTietsp = ({route, navigation }) =>{ 
    const { itemId, loaiId } = route.params;
    const n = itemId;
    const j = loaiId;
    
    return(
        <View style={styles.container}>
        <ScrollView style={styles.ScrollView}>
            <View style={styles.div}>
                            <View style={styles.OnDiv} key={itemId} >
                                <View style={styles.Content}>
                                <Image
                                    style={styles.imgMonAn}
                                    source={{uri: data.loai[j].tl[n].img}}
                                />
                                <Text style={styles.TenMonAn}>
                                    {
                                        data.loai[j].tl[n].name
                                    }
                                </Text>
                                <Image  style={{height:35, width:35,marginTop: 15, marginLeft: 15,borderRadius: 15}} source = {{uri:'https://banner2.cleanpng.com/20180623/iqh/kisspng-computer-icons-avatar-social-media-blog-font-aweso-avatar-icon-5b2e99c40ce333.6524068515297806760528.jpg'}}/> 
        <View style={{flexDirection:'row',marginTop:-33}}>                    
            <Text style={{color: 'black', marginLeft:58,height:20,}}>Bếp trường phake  </Text>
            <TouchableOpacity onPress={()=>{navigation.navigate('nhantin')}} style={{marginLeft:170}}><FontAwesome5 style = {{}} name="sms" size={25} color="gray" /></TouchableOpacity>
        </View>    
                <Text style={{color: 'gray', marginLeft:58,}}> {
                                        data.loai[j].tl[n].tag
                                    }</Text>
                    <Text style={{color: 'gray', marginLeft:16, fontSize:11}}> At {
                                        data.loai[j].tl[n].date
                                    }</Text>
                                <Text style={styles.GioiThieuMonAn}>
                                    {
                                        data.loai[j].tl[n].intro
                                    }
                                </Text>
                                <Text style={{borderBottomWidth: 1,marginTop: 5,marginLeft:13,
         width:335,borderColor: '#D4D1CD'}}></Text>
     <FontAwesome5 style = {{marginTop:10, marginLeft:150}} name="clock" size={15} color="gray" />
        <Text style={{color:"gray", marginLeft: 171, marginTop: -17}}>
                        10:19 PM
     </Text>
    <Text style={{fontWeight:'bold',fontSize: 20, marginLeft: 13, marginTop: 15}}> Nguyên liệu </Text>
     <Text style={{fontSize: 15, marginLeft:15, marginTop: 25, borderBottomWidth: 1,
         width:335,borderColor: '#D4D1CD'}}>  {
            data.loai[j].tl[n].nguyenlieu.t1                                       
        }
                                    </Text>
     <Text style={{fontSize: 15, marginLeft:15, marginTop: 25, borderBottomWidth: 1,
         width:335,borderColor: '#D4D1CD'}}>  {
            data.loai[j].tl[n].nguyenlieu.t2                                      
        }
                                    </Text>
     <Text style={{fontSize: 15, marginLeft:15, marginTop: 25, borderBottomWidth: 1,
         width:335,borderColor: '#D4D1CD'}}>  {
            data.loai[j].tl[n].nguyenlieu.t3                                       
        }
                                    </Text>
    <Text style={{fontWeight:'bold',fontSize: 20, marginLeft: 13, marginTop: 15}}> Cách làm</Text>
     <Text style={{fontSize: 15, marginLeft:15, marginTop: 25, borderBottomWidth: 1,
         width:335,borderColor: '#D4D1CD'}}> Bước 1: {
                                        data.loai[j].tl[n].cacbuoc.b1                                       
                                    } 
                                    </Text>
     <Text style={{fontSize: 15, marginLeft:15, marginTop: 25, borderBottomWidth: 1,
         width:335,borderColor: '#D4D1CD'}}> Bước 2:  {
                                        data.loai[j].tl[n].cacbuoc.b2                                      
                                    } 
                                    </Text>
                                    <Text style={{fontSize: 15, marginLeft:15, marginTop: 25, borderBottomWidth: 1,
         width:335,borderColor: '#D4D1CD'}}> Bước 3:  {
                                        data.loai[j].tl[n].cacbuoc.b3                                      
                                    } 
                                    </Text>
     
                                </View>
                                </View>
        </View>
        
        
    </ScrollView>
    <View style={styles.footer}>
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
  );
}
const styles = StyleSheet.create({
    container: {
        flex: 9,
        alignItems: 'center',
        justifyContent:'center',
        width:'100%',
        backgroundColor:'#fff',
      },
    ScrollView: {
       flex: 15,
       width:'100%',
     },
     footer: {
        height:'10%',
        backgroundColor: '#fff',
        alignItems: 'center',
        flexDirection:'row',
        elevation:3,
        
      },
    c4: {
        padding:15,
        flex: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'row',
      },
     imgMonAn:{
        height:280, width:'100%',borderRadius: 5 ,borderWidth: 1,borderColor:'#D4D1CD',
        marginLeft:2, padding:10
     },
     TenMonAn:{
        fontWeight:'bold', fontSize: 22, marginLeft: 15, marginTop: 15
     },
     GioiThieuMonAn:{
        fontSize: 15, marginLeft:17, marginTop: 25,
     },
   });
export default ChiTietsp;
