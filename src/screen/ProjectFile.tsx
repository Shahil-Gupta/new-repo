import { Dimensions, SafeAreaView, StyleSheet, Image, Text, TouchableOpacity, View, Modal } from 'react-native'

const { height, width } = Dimensions.get("window")

const Project = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.outBox}>
                <Text style={styles.outText}>Success</Text>
                <Text style={styles.outTextDown}>Service Deleted Successfully</Text>
            </View>
            <Text style={styles.textSide}>Current no one have upload there Branding images</Text>
            <TouchableOpacity style={styles.topTouch}>
                <Text style={styles.text}>Add your services</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.midTouch}>
                <View style={styles.box}>
                <Text style={styles.text}>Facial & Clean up</Text>
                <Image style={{height:25,width:25,resizeMode:"contain",marginLeft:10}}
                source={{uri:"https://cdn-icons-png.flaticon.com/128/1005/1005661.png"}}/>
               </View>
                <Image style={{ height: 16, width: 18, marginRight: 20, resizeMode: "contain" }}
                    source={{ uri: "https://cdn-icons-png.flaticon.com/128/271/271239.png" }} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.midsTouch}>
                <View style={{flexDirection:"row"}}>
                <Text style={styles.text}>Makeup</Text>
                <Image style={{height:25,width:25,resizeMode:"contain",marginLeft:10}}
                source={{uri:"https://cdn-icons-png.flaticon.com/128/3248/3248946.png"}}/>
                </View>
                <Image style={{ height: 16, width: 18, marginRight: 20, resizeMode: "contain" }}
                    source={{ uri: "https://cdn-icons-png.flaticon.com/128/271/271239.png" }} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.downTouch} >
                <View style={{flexDirection:"row"}}>
                <Text style={styles.text}>Bridal Makeup</Text>
                <Image style={{height:25,width:25,resizeMode:"contain",marginLeft:10}}
                source={{uri:"https://cdn-icons-png.flaticon.com/128/7415/7415976.png"}}/>
               </View>
                <Image style={{ height: 16, width: 18, marginRight: 20, resizeMode: "contain" }}
                    source={{ uri: "https://cdn-icons-png.flaticon.com/128/271/271239.png" }} />
            </TouchableOpacity>
            <View style={styles.downContiner}>
                <Text style={styles.textmakeup}>Bridal Makeup</Text>
                <Text style={styles.textdewy}>Dewy makeup</Text>
                <Text style={styles.textsahi}>sahi hai</Text>
                <Text style={styles.textprime}>Prime</Text>
                <TouchableOpacity style={styles.touchview}>
                    <Text style={styles.downtext}>View service image</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.downscreen}>
            <View style={styles.screen}>
                <Image style={{height:25,width:25,resizeMode:"contain"}}
                source={{uri:"https://cdn-icons-png.flaticon.com/128/25/25694.png"}} />
                <Text>Home</Text>

            </View>
            <View style={styles.screen}>
            <Image style={{height:25,width:25,resizeMode:"contain"}}
                source={{uri:"https://cdn-icons-png.flaticon.com/128/2838/2838779.png"}} />
                <Text style={{fontSize:12}}>Service Calender</Text>

            </View>
            <View style={styles.screen}>
            <Image style={{height:25,width:25,resizeMode:"contain"}}
                source={{uri:"https://cdn-icons-png.flaticon.com/128/4701/4701617.png"}} />
                <Text>Brand</Text>

            </View>
            <View style={styles.screen}>
            <Image style={{height:25,width:25,resizeMode:"contain"}}
                source={{uri:"https://cdn-icons-png.flaticon.com/128/1077/1077114.png"}} />
                <Text>Account</Text>

            </View>

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    outBox: {
        height: 60,
        backgroundColor: "green",
        width: width,
        alignItems: "center",
        justifyContent: "center",
    },
    outText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",

    },
    outTextDown: {
        color: "black",

    },
    textSide: {
        color: "green",
        marginTop: 20,
        textAlign: "center",
        fontSize: 16,
        fontWeight: "400",

    },
    topTouch: {
        width: width - 20,
        height: 45,
        backgroundColor: "#a63c9f",
        marginHorizontal: 10,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 18,
    },
    text: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 18,

    },
    midTouch: {
        width: width - 20,
        height: 45,
        backgroundColor: "#a63c9f",
        marginHorizontal: 10,
        borderRadius: 10,
        paddingLeft: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginRight: 20,
        marginTop: 18,
    },
    midsTouch: {
        width: width - 20,
        height: 45,
        backgroundColor: "#a63c9f",
        marginHorizontal: 10,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginRight: 20,
        paddingLeft: 10,
        marginTop: 18,
    },
     box:{
       flexDirection:"row",

     },
    downTouch: {
        width: width - 20,
        height: 45,
        backgroundColor: "#a63c9f",
        marginHorizontal: 10,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: 10,
        marginTop: 18,
        flexDirection: "row",

    },
    downContiner:{
        elevation:5,
        borderRadius:10,
        height:200,
        marginTop:"15%",
        width:width-30,
        marginHorizontal:15,
        backgroundColor:"#dadada",
    },
    textmakeup:{
        color:"#a63c9f",
        fontWeight:"600",
        fontSize:20,
        marginLeft:10,
        marginTop:10,
    },
    textdewy:{
        color:"#000",
        fontWeight:"600",
        fontSize:17,
        marginLeft:10,
        marginTop:8,

    },
    textsahi:{
        fontWeight:"500",
        marginLeft:10,
        marginTop:8,
        color:"#4f3c4e",
    },
    textprime:{
        color:"#a63c9f",
        fontWeight:"600",
        fontSize:20,
        marginLeft:10,
        marginTop:10,

    },
    touchview:{
        width:300,
        marginLeft:37,
        borderRadius:20,
       // marginHorizontal:20,
        height:45,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#a63c9f",
        marginTop:10,
    },
    downtext:{
        color:"#fff",
        fontWeight:"bold",
        fontSize:18,
    },
    downscreen:{
        flexDirection:"row",
        position:"absolute",
        bottom:0,
        left:0,
    },
    screen:{
        width:width/4,
        alignItems:"center",
        justifyContent:"center",
        
       
        height:50,
        backgroundColor:"#fff",
        
    }

})

export default Project