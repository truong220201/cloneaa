import React, { useState } from 'react';
import { TouchableOpacity,ScrollView, Text, View,Button,StyleSheet,Image,ImageBackground,TextInput,Textual} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';

import data from '../../data.json';
import datamatl from '../../datamonantheoloai.json';
import { render } from 'react-dom';


export default class TimKiem extends React.Component{
  //const { itemId} = route.params;

  //const j = itemId;
  
  constructor(props) {
    super(props);
    this.state = {
        search: '',
        data: '',
        isLoading: true
        }
    this.timkiem = this.timkiem.bind(this);
  }

    async getLoai() {
      try {
        const response = await fetch('http://localhost:8000/loai');
        const json = await response.json();
        this.setState({ data: json.movies });
      } catch (error) {
        console.log(error);
      } finally {
        this.setState({ isLoading: false });
      }
    }
    componentDidMount() {
      this.getLoai();
    }


    timkiem(){
        console.log(this.state);
    }
    
  render(){
    const { navigation } = this.props;
    const { data, isLoading } = this.state;
    //lay All 
    var j = 8;
    //lay so phan tu cua all
    const i = datamatl.loai[j].tl.length;
    console.log({data})
    
  return (
      
    <View style={styles.container}>
        <View style={styles.content}>
        <ScrollView style={styles.scrollView}>
        <View style={styles.body}>
          <Text style={styles.txttenloai}></Text>
          <View style={{flexDirection:'row',borderWidth:1,borderColor:'orange',borderRadius:10,paddingLeft:10,paddingRight:10,width: '90%',alignItems: 'center',}}>
            <FontAwesome5 style = {{}} name="search" size={16} color="grey"/>

            <TextInput style={styles.txttimkiem} maxLength={20} value={this.state.search} onChangeText={(value) => this.setState({search:value})}  placeholder="Nhập tên món ăn cần tìm "  keyboardType="default"></TextInput> 
         
          </View>
          <Text style={styles.txttimkiem}>Danh sách món ăn có chứa :{this.state.search}</Text>
          <View style={styles.div}>
              {
                  [...Array(i)].map((o,n) => {
                      //chuyen sang lowercase de chu hoa va chu thuong nhu nhau
                      if(datamatl.loai[j].tl[n].name.toLowerCase().includes(this.state.search.toLowerCase()) ){
                          return(
                              <TouchableOpacity key={datamatl.loai[j].tl[n].id} style={styles.OnDiv} onPress={()=>navigation.navigate('ctsp',{itemId:datamatl.loai[j].tl[n].id,loaiId:datamatl.loai[j].id})}>
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
                                  <FontAwesome5 style = {{}} name="star" size={12} color="orange"/> : {datamatl.loai[j].tl[n].dokho}/10
                                  </Text>
                                  </View>
                              </TouchableOpacity>
                          )
                        }
                      })
              }
          </View>
        </View>
          <XemTiep />
        </ScrollView>
        
        </View>
        <View style={styles.footer}>
              <TouchableOpacity  style={styles.c4} onPress={()=>navigation.navigate('Home')}>
                  <FontAwesome5 style = {{}} name="home" size={20} color="grey"
                  />
              </TouchableOpacity>
              <TouchableOpacity  style={styles.c4} onPress={()=>navigation.navigate('DanhSach', {loaiId: 8})}>
                  <FontAwesome5 style = {{}} name="book" size={20} color="grey"
                  />
              </TouchableOpacity>
              <TouchableOpacity  style={styles.c4} onPress={()=>navigation.navigate('timkiem')}>
                  <View  style={styles.c5}>
                    <FontAwesome5 style = {{}} name="search" size={20} color="orange"
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
}}
const XemTiep = () =>{
  return(
    <View style={{backgroundColor:"white",alignSelf:'center',alignItems:"center",justifyContent:"center", width: 150,height:30,borderRadius:5,margin:10,elevation:3,}}>
      <Text style={{fontSize:15,fontWeight:"bold"}}>Xem Tiếp <FontAwesome5 style = {{}} name="angle-double-right" size={14} color="orange"/></Text>
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
  txttimkiem:{
    fontSize:20,
    marginTop:10,
    marginBottom:10,
    color:'#FF8C00',
    marginLeft:14,
},
  txttenloai:{
      fontSize:10,
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
        fontSize:13,
        marginLeft:5,
        marginRight:5,
        maxHeight:18,
      },
      TacGiaMonAn:{
        color:'grey',
        marginLeft:5,
        fontStyle:'italic',
        fontSize:11,
        maxHeight:20,
        maxWidth:120,
        marginBottom:1,
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
