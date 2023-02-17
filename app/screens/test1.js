import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , Image, TextInput, TouchableOpacity, 
TouchableWithoutFeedback, Keyboard,Alert,  ListViewBase} from 'react-native';
import ListView from 'deprecated-react-native-listview';
import { getDatabase, ref, onValue, DataSnapshot,child } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import { firebaseApp } from '../../components/firebaseConfig';
import { collection, getDocs } from "firebase/firestore"; 

export default class test1 extends React.Component{
  constructor(props) {
    super(props);
    //this.itemRef = getDatabase(firebaseApp);
    //console.log(this.itemRef);
    this.state = {
        item:[],
        leng:0,
        };
  }
  async listenForItems(itemRef){
    const db = getFirestore(firebaseApp);
    //console.log(db);
    //const docRef = doc(db, "Quiz", "03ZnOo7bgWhJvJU9Th9G");
    //const docSnap = await getDoc(docRef);
    const querySnapshot = await getDocs(collection(db, "Quiz"));
    querySnapshot.forEach((doc) => {
      //console.log(`${doc.id} => ${doc.data()}`);
      console.log(`${doc.data()}`);
      //console.log(`length: ${doc.id.length}`)
      this.setState({
        //item:this.state.item.push(data)
        //item:Object.keys(`${doc.data().Title}`)
        //item:[...this.state.item,`${doc.data().Title}`],
        //leng:`${doc.id.length}`
      })
    
    });
    //console.log('item:'+this.state.item);
    //console.log('length:'+this.state.leng);

  }
  
  render(){
    const { navigation } = this.props;
    //console.log(this.state.items)
    var l = this.state.leng;
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      <View style={styles.up}>
      {
        [...Array(20 )].map((o,n) => {
                return(
        <View key={n}>
            <Text>
                  {this.state.item[n]}
            </Text>
        </View>
      )})}
      </View> 
      </View>
    </TouchableWithoutFeedback>
        )}
    componentDidMount(){
        this.listenForItems(this.itemRef);
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
    marginTop:100,
    marginLeft:-105
  },
  txt1:{
    color:'#3b5998',
    fontSize:12,
    marginTop:-17,
  marginLeft:199
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
      alignItems:'center',
      borderRadius:40,
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
  fbbtn:{
    width:280,
    height:45,
    borderRadius:6,
    justifyContent:'center',
    
  },
  dkbtn:{
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
