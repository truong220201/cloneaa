import React from 'react';

import { Text, View } from 'react-native';
import { TouchableOpacity,ScrollView,Button,StyleSheet,Image } from 'react-native';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons'; 
 function ThemMon({route,navigation}) {
  
    return (
        <View style={styles.container}>
            <Image  style={{width:200,height:250, marginTop:40,borderRadius:150, }}source = {{uri:'https://banner2.cleanpng.com/20180623/iqh/kisspng-computer-icons-avatar-social-media-blog-font-aweso-avatar-icon-5b2e99c40ce333.6524068515297806760528.jpg'}}></Image>
            <Text style={{fontWeight:'bold', fontSize: 24,  marginTop: 15}}> Viết gì đó mới </Text>
            <Text style={{color:'gray', marginTop: 15}}> Hãy truyền cảm hứng vào bếp cho mọi người</Text>
            
            <TouchableOpacity onPress={()=>navigation.navigate('cttm')} style={{color:'white',backgroundColor:'#495057',marginTop:15, width:"40%", height: 30,borderRadius:10}}><Text 
            style={{color:'white',marginLeft:30,marginTop:5}} > 
                  Thêm món mới</Text><FontAwesome5 style = {{marginTop:-17,marginLeft:10}} name="lightbulb" size={15} color="white"
                  />  
            </TouchableOpacity>
            <View style={styles.footer}>
              <TouchableOpacity  style={styles.c4} onPress={()=>navigation.navigate('Home')}>
                  <FontAwesome5 style = {{}} name="home" size={20} color="grey"
                  />
              </TouchableOpacity>
              <TouchableOpacity  style={styles.c4} onPress={()=>navigation.navigate('DanhSach', {itemId: 8})}>
                  <FontAwesome5 style = {{}} name="book" size={20} color="grey"
                  />
              </TouchableOpacity>
              <TouchableOpacity  style={styles.c4} onPress={()=>navigation.navigate('timkiem')}>
                  <View  style={styles.c5}>
                    <FontAwesome5 style = {{}} name="search" size={20} color="grey"
                    />
                  </View>
              </TouchableOpacity>
              <TouchableOpacity  style={styles.c4} onPress={()=>navigation.navigate('themmon')}>
                  <FontAwesome5 style = {{}} name="plus-square" size={20} color="orange"
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
export default ThemMon;
const styles = StyleSheet.create({
    container: {
      flex: 1,  
      alignItems:'center'   ,
      justifyContent:'center',
    },
    footer: {
        height:'10%',
        marginTop:260,
        backgroundColor: '#fff',
        alignItems: 'center',
        flexDirection:'row',
        justifyContent:'center',
        elevation:3,
        width:"100%",
      },
      c4: {
        padding:15,
        flex: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'row',
      },
  });
