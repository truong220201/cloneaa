import React, { useState } from 'react';
import { Dimensions,TouchableOpacity,ScrollView, Text, View,Button,StyleSheet,Image,ImageBackground,TextInput} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';

import data from '../../data.json';
import datamatl from '../../datamonantheoloai.json';
//import { TextInput } from 'react-native-gesture-handler';

export default class NhanTin extends React.Component{ 
  state={
    btnBg:true, 
  }
  constructor(props) {
    super(props);
    this.state = {
        count: 0,
        search: '',
        text:'',
        };
    this.stack = [];
    this.stackb = [];
    //stack c dùng để check stack b
    this.stackc = [];
  }
  
  onPress = () => {
    this.setState({
        count: this.state.count + 1,
        search:this.state.text,
    });
    var tl = false;
    this.stack.push(this.state.text);
    {
        [...Array(datamatl.loai[10].tl.length)].map((o,m) => {
            //Vd nếu tìm thấy 1 phần tử thì if else sẽ trả về true false false... nên không thể dùng stack cho lệnh else
            if(datamatl.loai[10].tl[m].name.toLowerCase().includes(this.state.text.toLowerCase()) ){
                    // Tìm thấy ở database => thêm vào stack b
                    this.stackb.push(datamatl.loai[10].tl[m].rep);
                    //thêm true vào stack c
                    this.stackc.push(true);

                }else{
                  this.stackc.push(false);
                }
            }
            )

            if(this.stackc.includes(true)){
              //trả về true thì reset stack c còn trả về false thì không cần. 
              console.log(this.stackc);
              //reset stack c
              this.stackc = [];

            }else{
              console.log('no')
              this.stackb.push('Mình không hiểu bạn đang nói gì.');
            }
            
    } 
    
  };
   waitingCM=()=>{

   };


  render(){

    //const { route,navigation } = this.props;
    
  //const { loaiId} = route.params;
    
  const btnColor = this.state.btnBg ?'#e8e8e8':'#e8e8e8'
  const txtC = this.state.btnBg ?'black':'black'
  const txtD = this.state.btnBg ?'orange':'#fff'
  const iconC = this.state.btnBg ?'sun':'moon'
  const bodyC = this.state.btnBg ?'#e8e8e8':'#e8e8e8'
  const fixTop = this.state.btnBg ?120:0

  
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  var today = new Date();
  var date = today.getDate()+' / '+(today.getMonth()+1)+' / '+today.getFullYear();


  //const j = loaiId;
  const j = 8;
  var i = this.state.count;
  const a = datamatl.loai[j].tl.length;
  //Danh sach chi hien thi toi da 10 phan tu, do lag
  if(i>10){
    i = 10
  }

  return (
    <View style={styles.container}>
        <ImageBackground imageStyle={{ borderRadius: 6}} source={{uri:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/fresh-baked-christmas-cookies-on-a-wire-rack-royalty-free-image-1597849779.jpg?crop=1xw:0.99825xh;center,top&resize=980:*'}} 
        resizeMode='stretch' style={{
            flex: 10,
            backgroundColor: btnColor,
            width:windowWidth,
            height:windowHeight
          }}>
        <ScrollView style={styles.scrollView}>
        <View style={{flex: 1,
        backgroundColor: '#ffffff00',}}>
        <View>
          <Text style={{color:'#fff',alignSelf:'center',fontStyle:'italic',margin:5,}}>Today, {date}</Text>
          <View style={{flex:1,
        flexDirection:'row',
        flexWrap: 'wrap',
        paddingLeft:5,}}>
              
              {
                  [...Array(i)].map((o,n) => {
                          return(
                              <TouchableOpacity key={datamatl.loai[j].tl[n].id} style={styles.OnDiv} >
                                  <View style={{
                                                width: '100%',
                                                marginBottom:5,
                                                alignItems:'flex-end'}}>
                                    <View style={{maxWidth: '70%',
                                                padding:10,
                                                borderRadius:20,
                                                backgroundColor:'#73c276',
                                                paddingLeft:10,}}>

                                        <Text style={{color:'#fff',
                                                        fontStyle:'italic',
                                                        fontSize:15,
                                                        maxHeight:20,
                                                        minWidth:50,
                                                        maxWidth:250,
                                                        marginTop:'2%'}}> {this.stack[n]}</Text>
                                    </View>
                                  </View>
                                    <View style={{width: '100%',margin:2,flexDirection:'row'}}>
                                      <View style={[styles.profileImgContainer, {}]} >
                                      <Image source={{ uri:"https://toigingiuvedep.vn/wp-content/uploads/2021/01/hinh-anh-girl-xinh-toc-ngan-de-thuong.jpg" }} style={styles.profileImg} />
                                        <Text style={{fontSize:10,fontStyle:'italic',color:'#fff'}}> <FontAwesome5 style = {{marginRight:10,}} name="circle" size={9} color="#27fd00"/> :online</Text>
                                      </View>
                                      <View style={{maxWidth: '70%',padding:10,borderRadius:20,backgroundColor:'#fff',paddingLeft:10,}}>

                                          <Text style={{fontWeight:'bold',color:'grey',fontSize:15,marginLeft:5,marginRight:5,maxHeight:22,marginBottom:10,}}> 
                                          
                                           Reyy   </Text>

                                          <Text style={styles.TacGiaMonAn}> {this.stackb[n]}</Text>  

                                      </View>

                                    </View>
                                 
                           

                              </TouchableOpacity>
                              
                          )
                      })
              }
          </View>
          </View>
        </View>

        </ScrollView>
        </ImageBackground>


        <View style={{height:60,
                      backgroundColor: btnColor,
                      alignItems: 'center',
                      flexDirection:'row',
                      elevation:3,}}>

            <TextInput style={styles.txttimkiem} maxLength={100}
                value={this.state.text} onChangeText={(value) => this.setState({text:value})}
                placeholder="Nhập văn bản "  keyboardType="default">
            </TextInput> 

            <TouchableOpacity  style={styles.c4} onPress={this.onPress}>
                <FontAwesome5 style = {{}} name="arrow-circle-right" size={30} color="grey"/>
            </TouchableOpacity>
        </View>


        
    </View>
)
}};
const styles = StyleSheet.create({
  profileImgContainer: {
    marginRight: 8,
    height: 50,
    width: 50,
    borderRadius: 40,
  },
  profileImg: {
    height: 50,
    width: 50,
    borderRadius: 40,
  },
    txttimkiem:{
        fontSize:20,
        marginTop:10,
        marginBottom:10,
        color:'#FF8C00',
        marginLeft:14,
        height:'90%',
        padding:10,
        width: '80%',
        borderRadius:15,
        backgroundColor:'#f7f7f7',
    },
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
    },
    content: {
        flex: 10,
        backgroundColor: '#f8f6f2',
        width:'100%',

      },
      scrollView:{
        flex: 15,
        width:'100%',
      },
      body: {
        flex: 1,
        backgroundColor: '#e8e8e8',
        
      },
      div:{
        flex:1,
        flexDirection:'row',
        flexWrap: 'wrap',
        paddingLeft:5,
        height:'100%',
        
      },
      OnDiv:{
        marginTop:2,
        marginBottom:2,
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
        paddingRight:5,
        fontStyle:'italic',
        fontSize:15,
        maxWidth:350,
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
