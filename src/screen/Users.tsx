import { Dimensions, FlatList, Image, SafeAreaViewBase, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'


const { height, width } = Dimensions.get("window")

const Users=[{id:'1' ,name:"jay shah" , gmail:"jayshah123@gamil.com"},
    {id:'2' ,name:"kunal bhaiya" , gmail:"jayshah1234@gmail.com"},
    {id:'3' ,name:"suraj gupta" , gmail:"jayshah1521@gmail.com"},
    {id:'4' ,name:"pawan shukla" , gmail:"jayshah001@gmail.com"},
    {id:'5' ,name:"sachin shah" , gmail:"jayshah002@gmail.com"},
    {id:'6' ,name:"nirbhay singh" , gmail:"jayshah003@gmail.com"},
    {id:'7' ,name:"amit singh" , gmail:"jayshah004@gmail.com"},
    {id:'8' ,name:"shivam gupta" , gmail:"jayshah005@gmail.com"},
    {id:'9' ,name:"shahil gupta" , gmail:"jayshah006@gmail.com"},
]

const User = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.viewContainer}>
            {Users.map((item)=>(
                <View key={item.id} style={styles.boxCantainer}>
                <View style={styles.imageContainer}>
                    <Image style={{height:50,width:50,borderRadius:25,borderWidth:2,borderColor:"#fff",alignSelf:"center"}}
                    source={{uri:"https://cdn-icons-png.flaticon.com/128/3135/3135715.png"}}/>
                </View>
                <Text style={styles.nameText}>{item.name}</Text>
                <Text style={styles.gmailText}>{item.gmail}</Text>
                <TouchableOpacity style={styles.touch}>
                    <Text style={styles.text}>Ask to Follow</Text>
                </TouchableOpacity>
                </View>
            ))}
            </View>
        </SafeAreaView>
      
    )
}

export default User

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
    },
    viewContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        margin:10,
      //  padding: 10,
    },
    boxCantainer: {
        marginTop:10,
        width: "32%", 
        backgroundColor: "white",
        borderRadius: 10,
        elevation: 3,
      //  padding: 10,
        marginBottom: 10,
        height:230,
    },
    imageContainer:{
        backgroundColor:"#D45D79",
        borderTopEndRadius:10,
        borderTopLeftRadius:10,
        height:100,
        width:"100%",
        justifyContent:"center",
    },
    image: {
        height: 50,
        width: 50,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: "#fff",
        marginBottom: 5,
    },
    nameText: {
        marginTop:7,
        color: "#D45D79",
        fontWeight: "bold",
        fontSize: 16,
        textAlign: "center",
    },
    gmailText: {
        marginTop:10,
        color: "#555",
        fontSize: 13,
        textAlign: "center",
    },
    touch:{
        backgroundColor:"#fff",
        borderWidth:2,
        height:30,
        width:100,
        borderRadius:15,
        borderColor:"#d45D79",
        alignItems:"center",
        justifyContent:"center",
        marginLeft:12,
        marginTop:7,
    },
    text:{
        color:"#D45D79",
        fontWeight:"bold",
    }
});