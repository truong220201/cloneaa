import React from 'react';

import { Text, View } from 'react-native';
import { TouchableOpacity,ScrollView,Button,StyleSheet,Image,TextInput,Alert } from 'react-native';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons'; 

export default class ChiTietThemMon extends React.Component {
  
  onPress = () => {
    this.setState({
        count: this.state.count + 1,
        search:this.state.text,
    });
  }
  onPress1 = () => {
    this.setState({
        countb: this.state.countb + 1,
        search:this.state.text,
    });
  }
  constructor(props) {
    super(props);
    this.state = {
        count: 1,
        countb:1,
        search: '',
        text:'',
        };
    this.stack = [];
    this.stackb = [];
      }
  render(){
    const { navigation } = this.props;
    var i =this.state.count;
    var j =this.state.countb;
    return (

      <ScrollView style={styles.ScrollView}>
        <View style={styles.container}>
           
           <View style={styles.input}>
          <TextInput style={styles.txtinput}             
              placeholder='Tên món ăn:'
            >
            </TextInput>
          </View>

          <View style={styles.input1}>
          <TextInput style={styles.txtinput1}             
              placeholder='Món ăn này đến từ đâu? '
            >
            </TextInput>
          </View>
          <Text style={styles.txt}>Thời gian nấu</Text>
          <View style={styles.input2}>
          <TextInput style={styles.txtinput2}             
              placeholder='1 tiếng 30 phút' 
            >
            </TextInput>
            </View>
            <View style={{ width:'100%' ,borderWidth: 3,borderColor: '#1111110d',
         marginTop: 25,}} 
      ></View>
        <Text style={styles.nguyenlieu}>Nguyên Liệu</Text>
        {
                  [...Array(i)].map((o,n) => {
                          return(  
        <View style={styles.input3} key={n}>
          <TextInput style={styles.txtinput3}             
              placeholder='30g muối'
            >
            </TextInput>
            <FontAwesome5 style = {{marginLeft:-30,marginTop:-35}} name="bars" size={20} color="gray"
                />
          </View>
                          )
                      })
              }
       
          <TouchableOpacity onPress={this.onPress}>
          <FontAwesome5 style = {{marginLeft:110,marginTop:35}} name="plus" size={20} color="black"
                />
                <Text style = {{marginLeft:140,marginTop:-23,fontSize:18}}>Nguyên liệu</Text>
                </TouchableOpacity>
                <View style={{ width:'100%' ,borderWidth: 3,borderColor: '#1111110d',
         marginTop: 25,}} ></View>

         <Text style={styles.nguyenlieu}>Cách làm</Text>
         {
                  [...Array(j)].map((o,n) => {
                          return(  
        
        <View style={styles.input4} key={n}>
          <TextInput style={styles.txtinput3}             
              placeholder='1 chút tiêu'
            >
            </TextInput>
            <FontAwesome5 style = {{marginLeft:-30,marginTop:-33}} name="bars" size={20} color="gray"
                />
          </View>
           )
          })
  }
          
          <TouchableOpacity onPress={this.onPress} style={{width:300,height:200,alignSelf:'center'}}>
          <FontAwesome5 style = {{marginLeft:90,marginTop:35}} name="plus" size={20} color="black"
                />
                <Text style = {{ marginLeft:120,marginTop:-23,fontSize:18}}>Thêm bước</Text>
              </TouchableOpacity>
        
        
        </View>
        <View style={{backgroundColor:'#fff'}}>
        <TouchableOpacity onPress={ () => {
        Alert.alert("Thêm món thành công!")
    navigation.navigate('themmon')
  }} style={styles.button}>    
                <Text style = {{marginTop:0,fontSize:18,color:'white',}}>Lên Sóng</Text>
                </TouchableOpacity>
                </View>   
        </ScrollView> 
           
    );
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,  
     backgroundColor:'#fff'
    },
    button:{
      alignSelf:'center',
      width:100,
      alignItems:'center',
      borderRadius:5,
      backgroundColor:'#272d564a'
    },
    input:{
      marginTop:10,
      width:"90%",
      marginLeft:20,      
      borderRadius:6,
      backgroundColor:'#1111110d'
    },
    txtinput:{
      width:200,
      height:45,
      marginLeft:20,
      fontSize:20,
    },
    input1:{
      marginTop:10,
      width:"90%",
      height:'17%',
      marginLeft:20,      
      borderRadius:6,
      backgroundColor:'#1111110d'
    },
    input2:{
      marginTop:-30,
      width:"37%",
      height:'5%',
      marginLeft:200,      
      borderRadius:6,
      backgroundColor:'#1111110d'
    },
    txtinput1:{
      width:500,     
      height:45,
      marginLeft:20,
      
      fontSize:17,
    },
    ScrollView: {
      flex: 15,
      width:'100%',
    },
    txtinput2:{
      width:500,     
      height:45,
      marginLeft:10,
      fontSize:17,
    },
    txt:{
      marginTop:30,
      marginLeft:20,
      fontSize:17,
      color:'#111111bf'
    },
    nguyenlieu:{
      marginTop:30,
      marginLeft:20,
      fontSize:19,
      fontWeight:'bold',
      color:'#111111bf'
    },
    input3:{
      marginTop:20,
      width:"80%",
      height:'4%',
      marginLeft:50,      
      borderRadius:6,
      backgroundColor:'#1111110d'
    },
    input4:{
      marginTop:20,
      width:"80%",
      height:'4%',
      marginLeft:50,      
      borderRadius:6,
      backgroundColor:'#1111110d'
    },
    txtinput3:{
      width:200,
      height:45,
      marginLeft:40,
      marginTop:-5,
      fontSize:18,
    },
   
  });
