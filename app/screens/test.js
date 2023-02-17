import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , Image, TextInput, TouchableOpacity, 
TouchableWithoutFeedback, Keyboard,Alert,  ListViewBase} from 'react-native';
import ListView from 'deprecated-react-native-listview';
import { getDatabase, ref, onValue, DataSnapshot,child } from "firebase/database";
import { firebaseApp } from '../../components/firebaseConfig';

export default class test extends React.Component{
  constructor(props) {
    super(props);
    this.itemRef = getDatabase(firebaseApp);
    //console.log(this.itemRef);
    this.state = {
        dataSource : new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!=r2}),
        item:[],
        };
  }
  listenForItems(itemRef){
    //console.log(this.itemRef.ref('test'));
    const db = getDatabase();
    const starCountRef = ref(db, 'test/com0');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      
      this.setState({
        //item:this.state.item.push(data)
        item:Object.keys(data)
    })
    console.log(this.state.item);
      //updateStarCount(postElement, data);
    });
    /*ref('test').child('com0').on('child_added', (snapshot, prevChildKey) => {
    //ref(this.itemRef,'test').child(this.itemRef,'com0').onValue(starCountRef,(snapshot)=>{
        item.push({
            name:snapshot.val(),
            key:snapshot.key
        });
        this.setState({
            items: [...this.state.items, 1,2,3]
        })
       
    })

    */
  }
  
  render(){
    const { navigation } = this.props;
    //console.log(this.state.items)
    
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      <View style={styles.up}>
      {
        [...Array(3)].map((o,n) => {
                return(
        <View>
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
