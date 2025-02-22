import { 
    Dimensions, 
    Image, 
    Modal, 
    SafeAreaView, 
    StyleSheet, 
    Text, 
    TextInput,
    TouchableOpacity, 
    View 
} from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import File from './File'

const { height, width } = Dimensions.get("window");

const Login = () => {
    const navigation = useNavigation(); 
    const[showModal,setshowModal]=useState(false)

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Modal
                transparent={true}
                visible={showModal}
                animationType='fade'
               >
                <View style={styles.modalBox}>
                    <View style={styles.viewContainer}>
                        <TouchableOpacity onPress={()=>setshowModal(false)}>
                        <Image style={{height:25,width:25,alignSelf:"flex-end" }} 
                        source={{uri:"https://cdn-icons-png.flaticon.com/128/4034/4034637.png"}} />
                       </TouchableOpacity>
                        <Text style={styles.reportText}>Want to reconsider before reporting this user</Text>
                  <TextInput  style={styles.textInput}/>
                  <Text style={styles.requestText}>Once reported, you will be unable to withdraw your request</Text>
                  <Text style={styles.reconsiderText}>Please reconsider before you raise a formal complaint this user's profile.</Text>
                  <TouchableOpacity style={styles.touch}>
                    <Text style={styles.bothText}>Don't reoort</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{...styles.touch,marginTop:15}}>
                    <Text style={styles.bothText}>Report anyway</Text>
                  </TouchableOpacity>
                    </View>
                    </View>
                </Modal>
                <TouchableOpacity  
                    style={styles.touchContainer} 
                    onPress={() => navigation.navigate('File')}
                >
                    <Text style={styles.text}>Choose a Subcategory</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.model}  onPress={()=>setshowModal(true)}>
                    <Text style={styles.text}>Model</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center", 
    },
    touchContainer: { 
        height: 45,
        width: width - 20,
        backgroundColor: "#D45D79",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: "white",
        fontWeight: "bold",
        fontSize: 18,
    },
    model:{
        height:45,
        width:width-20,
        backgroundColor:"#D45D79",
        borderRadius:10,
        marginTop:20,
        alignItems: "center",
        justifyContent: "center",
    },
    modalContainer:{
        height:45,
        backgroundColor:"#dadada",
        width:width-100,
        borderRadius:10,
        marginHorizontal:15,
        justifyContent:"center",
        alignItems:"center",
    },
    textColse:{
        color:"black",
        fontWeight:'bold',
        fontSize:18,
    },
    viewContainer:{
        width: width - 60,
        height:400,
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10,

    },
    modalBox: {
        
        flex:1,
        justifyContent:"center",
        alignItems:"center",
       backgroundColor:"rgba(0,0,0,0.5)",
    },
    reportText:{
        fontWeight:"500",
        color:"red",
        fontSize:19,
        textAlign:"center",

    },
    textInput:{
        borderBottomWidth:1,
        borderColor:"#D45D79",
        height:40,
        width:250,
        color:"black",
        alignSelf:"center",
        fontWeight:"500",
        fontSize:15,
    },
    requestText:{
        color:"#555",
        fontWeight:"400",
        marginTop:20,
        textAlign:"center",
    },
    reconsiderText:{
        color:"#555",
        marginTop:5,
        fontWeight:"400",
        textAlign:"center",
    },
    touch:{
        height:40,
        width:250,
        alignSelf:"center",
        borderRadius:12,
        marginTop:30,
        borderWidth:2,
        borderColor:"#d45D79",
        alignItems:"center",
        justifyContent:"center",
    },
    bothText:{
        color:"#d45D79",
        fontWeight:"700",
        fontSize:16,
    }

});

export default Login;
