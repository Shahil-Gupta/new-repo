import{Dimensions, SafeAreaView,View, StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native'


const{height,width}=Dimensions.get("window")

const Service=()=>{
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.upperText}>Update Service</Text>
            <Text style={styles.lowerText}>Selected category</Text>
            <TextInput  style={styles.inputone}/>
            <Text style={styles.category}>Sub Category</Text>
            <TextInput style={styles.inputone}/>
            <Text style={styles.midText}>Describe which kind product your are going use</Text>
            <Text style={styles.midsText}>Note:please write in simole words so our user can relate easly</Text>
            <View style={styles.modal}>
                <TextInput style={styles.inputtwo}/>
            </View>
            <View style={styles.madol}>
                <TextInput style={{...styles.inputtwo,fontWeight:"500"}}/>
            </View>
            <Text style={styles.typetext}>Service Type</Text>
            <TextInput  style={styles.inputone}/>
            <TouchableOpacity style={styles.touch}>
                <Text style={styles.updateText}>Update</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{...styles.touch,backgroundColor:"red"}}>
                <Text style={styles.deleteText}>Delete service</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Service

const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    upperText:{
        color:"red",
        fontSize:18,
        fontWeight:"bold",
        alignSelf:"center",
        marginTop:5,
    },
    lowerText:{
        marginTop:15,
        fontWeight:"400",
        paddingLeft:15,
        marginBottom:10,
        color:"#47453d",
    },
    inputone:{
        height:45,
        borderWidth:1,
        width:width-30,
        marginHorizontal:15,
        color:"#000",
        fontSize:16,
        paddingLeft:10,
        borderColor:"red",
    },
    category:{
        marginLeft:15,
        marginTop:10,
        marginBottom:10,
         color:"#47453d",
    },
    midText:{
        color:"#5e5353",
        fontWeight:"600",
        paddingLeft:15,
        marginTop:5,
        marginBottom:5,
    },
    midsText:{
        color:"#000",
        fontWeight:"bold",
        fontSize:16,
        paddingLeft:15,
        elevation:20,
    },
    modal:{
        height:100,
        marginTop:30,
        elevation:5,
        width:width-25,
        marginHorizontal:12.5,
        backgroundColor:"#fff",
        //alignItems:"center",
        justifyContent:"center",
        padding:5,
    },
    inputtwo:{
        borderWidth:0,
        color:"black",
        paddingLeft:10,
        fontSize:16,
    },
    madol:{
        height:50,
        marginTop:25,
        elevation:5,
        width:width-25,
        marginHorizontal:12.5,
        backgroundColor:"#fff",
        //alignItems:"center",
        justifyContent:"center",
        padding:5,

    },
    typetext:{
        color:"#5e5353",
        marginTop:25,
        paddingLeft:15,
        marginBottom:10,
    },
    touch:{
        height:45,
        backgroundColor:"#910791",
        width:width-70,
        marginHorizontal:35,
        borderRadius:20,
        marginTop:20,
        alignItems:"center",
        justifyContent:"center",
    },
    updateText:{
        color:"#fff",
        fontWeight:"bold",
        fontSize:18,
    },
    deleteText:{
        color:"#fff",
        fontWeight:"bold",
        fontSize:16,
    }
})