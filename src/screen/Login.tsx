import { 
    Dimensions, 
    Image, 
    Modal, 
    SafeAreaView, 
    StyleSheet, 
    Text, 
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
               >
                    <View style={styles.viewContainer}>
                        <Text>Hello</Text>
                        <TouchableOpacity style={styles.modalContainer} 
                        onPress={()=>setshowModal(false)} >
                            <Text style={styles.textColse}>Close</Text>
                        </TouchableOpacity>
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
        width:width-30,
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
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#dadada"
    }
});

export default Login;
