import { useState } from 'react'
import { Text, SafeAreaView, View, StyleSheet, Image, Dimensions, TextInput, TouchableOpacity } from 'react-native'


const { height, width } = Dimensions.get("window")

const Home = () => {
    const [remember, setremember] = useState(false)
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.Imagecontainer}>
                <Image style={styles.image}
                    source={{ uri: "https://plus.unsplash.com/premium_photo-1661914978519-52a11fe159a7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bG9nb3xlbnwwfHwwfHx8MA%3D%3D" }} />
            </View>
            <View style={styles.pageContainer}>
                <Text style={styles.textwelcome}>Welcome back check</Text>
                <Text style={styles.textwelLogin}>For Login Please enter your Details below</Text>
                <Text style={styles.emailtext}>Email</Text>
                <TextInput style={styles.inputcontainer} placeholder="Email" />
                <Text style={styles.emailtext}>password</Text>
                <TextInput secureTextEntry={true} style={styles.inputcontainer} placeholder='password' />
                <View style={styles.rememberConatiner}>
                    <TouchableOpacity style={[styles.rememberView, remember && styles.setremember,]} onPress={() => setremember(!remember)}></TouchableOpacity>
                    <Text style={styles.remembertext}>Remember me</Text>
                </View>
                <TouchableOpacity style={styles.logConatiner}>
                    <Text style={styles.logText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.forgotContainer}>
                    <Text style={styles.forgotText}>Forgot Password</Text>
                </TouchableOpacity>
                <View style={{flexDirection:"row",marginTop:20,}}>
                    <Text style={styles.accountText}>Don't have an account please  </Text>
                        <TouchableOpacity>
                            <Text style={styles.signText}>SignUp?</Text>
                        </TouchableOpacity>
                  
                </View>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#D45D79"
    },
    Imagecontainer: {
        alignItems: "center",
        marginTop: 40,
        marginBottom: 20,
    },
    image: {
        height: 150,
        width: 150,
        borderRadius: 90,
    },
    pageContainer: {
        width: width - 20,
        backgroundColor: "#ffffff",
        height: 700,
        marginHorizontal: 10,
        borderRadius: 20,
        alignItems: "center",
        // justifyContent:"center"
    },
    textwelcome: {
        fontWeight: "bold",
        fontSize: 17,
        marginTop: 18,
        marginBottom: 18,
    },
    textwelLogin: {
        color: "#4f4342",
        fontWeight: "400",
        marginBottom: 20,

    },
    emailtext: {
        color: "#333",
        alignSelf: "flex-start",
        paddingLeft: 12,
        marginBottom: 2,
        // borderWidth:1,
        marginTop: 4,
    },
    inputcontainer: {
        // borderWidth:1,
        width: width - 40,
        elevation: 4,
        height: 50,
        backgroundColor: "#f8f8f8",
        color: "#333",
        fontSize: 16,
        borderRadius: 10,
        paddingHorizontal: 15,
    },
    rememberConatiner: {
        flexDirection: "row",
        alignSelf: "flex-start"
    },
    remembertext: {
        color: "#333",
        fontWeight: "400",
        marginLeft: 10,
        marginTop: 12.5,

    },
    setremember: {
        backgroundColor: "#fff",
    },
    rememberView: {
        height: 25,
        width: 25,
        backgroundColor: "#D45D79",
        marginLeft: 12,
        marginTop: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#D45D79",
    },
    forgotContainer:{

    },
    logConatiner: {
        height: 45,
        backgroundColor: "#D45D79",
        width: width - 40,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
    },
    logText: {
        color: "#fff",
        fontSize: 16,
    },
    forgotText: {
        marginTop: 10,
        fontWeight: "300",
    },
    accountText:{
        fontWeight:"300",
       // marginTop:20,
    },
    signText:{
        color:"blue",
      //  marginTop:2,
    }
})

export default Home