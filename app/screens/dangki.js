import React from 'react';
import { StyleSheet, Text, View , Image, TextInput, TouchableOpacity,
TouchableWithoutFeedback, Keyboard} from 'react-native';
import { Alert } from 'react-native';
import { firebaseApp } from '../../components/firebaseConfig';
import * as firebase from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const auth = getAuth(firebaseApp);
//console.log(auth);
export default class dangky extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email:'',
      password:'',
    }
    
  }
  
  dangky(){
    const auth = getAuth();
    console.log('email:'+this.state.email+'password:'+this.state.password)  
    createUserWithEmailAndPassword(auth, this.state.email,this.state.password)
    .then((userCredential) => {
      Alert.alert(
        "Alert Title",
        "Dang ky thanh cong :" +this.state.email,
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => navigate.navigation('dangnhap') }
        ]
      );
      this.setState = {
        email:'',
        password:'',
      }
    })
    .catch((error) => {
      Alert.alert(
        "Alert Title",
        "Dang ky that bai ",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );
    });
  } 
  
  render(){
    const { route,navigation } = this.props;
    
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      <View style={styles.up}>
        <Image  style={{height:170, width:170,borderRadius:100,}}source = {{uri:'https://yt3.ggpht.com/XeF__VnOy1KLIdooRU-LU3KM_bLSyt-L5Fpob4aTIesLax0odWW1BTN26248w9XwGMj7b1Wq=s900-c-k-c0x00ffffff-no-rj'}}></Image>
            <Text style={styles.title}>
              Cùng chia sẻ cảm hứng đến mọi người!</Text>
      </View> 

      <View style={styles.down}>
          <View style={styles.input}>
            <TextInput style={styles.txtinput}
              textContentType='emailAddress'
              keyboardType='email-address'
              placeholder='Nhập địa chỉ email của bạn'
              onChangeText={(email)=>this.setState({email})}
            >
            </TextInput>
          </View>
          <View style={styles.input}>
          <TextInput style={styles.txtinput}             
              placeholder='Nhập mật khẩu của bạn'
              secureTextEntry={true}
              onChangeText={(password)=>this.setState({password})}
            >
            </TextInput>
          </View>
          <View style={styles.input}>
          <TextInput style={styles.txtinput}             
              placeholder='Nhập lại mật khẩu của bạn'
              secureTextEntry={true}
            >
            </TextInput>
          </View>
          <TouchableOpacity style={styles.button}
          onPress={()=>this.dangky()} 
          >
          <Text style={styles.txtbtn}>
              Đăng Ký</Text>
      
          </TouchableOpacity>
          <View style={styles.divider}>
          <View style={styles.line}></View>
          <Text style={{margin: 10,}}>Đã có tài khoản?</Text>
          <View style={styles.line}></View> 
          </View>
          <TouchableOpacity
          style={styles.dnbtn}
          onPress={()=>navigation.navigate('dn')}
          >
          <Text style={styles.btntitle}>Đăng nhập ngay!
          </Text>
          </TouchableOpacity>
          <Text style={styles.txt}> Khi đăng ký, tức là bạn đã đồng ý với </Text>
            <Text style={styles.txt1}>Điều Khoản Dịch Vụ</Text>  
            <Text style={styles.txt2}>và </Text> 
            <Text style={styles.txt3}>Chính Sách Bảo Mật Thông Tin </Text> 
            <Text style={styles.txt4}>của chúng tôi</Text> 
      </View>
    </View>
    </TouchableWithoutFeedback>
        );
  }
    
}   

const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent:'center',
    alignItems: 'stretch',
    backgroundColor: 'rgb(234, 195, 176)'
  },
  txt:{
    color:'gray',
    fontSize:12,
    marginTop:50,
    marginLeft:-105
  },
  txt1:{
    color:'#3b5998',
    fontSize:12,
    marginTop:-17,
  marginLeft:198
  },
  txt2:{
    color:'gray',
    fontSize:12,
    marginLeft:-235
  },
  txt3:{
    color:'#3b5998',
    fontSize:12,
    marginTop:-16,
    marginLeft:-50
  },
  txt4:{
    color:'gray',
    fontSize:12,
    marginTop:-16,
    marginLeft:190
  },
  up:{
      flex:3,
      flexDirection: 'column', 
      justifyContent:'center',
      alignItems:'center'
  },
  down:{
    flexDirection: 'column',
    flex:7,
    justifyContent: 'flex-start',
    alignItems:'center'
  },
  title:{
    color:'white',
    color:'rgb(255, 119, 34)',
    textAlign:'center',
    width:400,
    fontSize:18
  },
  input:{
    marginTop:25,
    paddingHorizontal:10,
    borderRadius:6,
    backgroundColor:'rgba(255,255,255,0.2)'
  },
  txtinput:{
    width:250,
    height:45
  },
  button:{
    marginTop:25,
    width:280,
    height:45,
    borderRadius:6,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'rgb(221, 97, 97)'
  },
  txtbtn:{
    fontSize:16,
    color:'white'
  },
  btntitle:{
    fontSize:16,
    color:'white'
  },
  dnbtn:{
    width:280,
    height:45,
    borderRadius:6,
    justifyContent:'center',
    backgroundColor:'green',
    alignItems:'center',
  },
  line:{
    height:1,
    flex:2,
    backgroundColor:'black'
  },
  text:{
    flex:1,
    textAlign:'center'
  },
  divider:{
    flexDirection:'row',
    height:40,
    width:298,
    justifyContent:'center',
    alignItems:'center',
  }
});
