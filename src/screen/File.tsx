import { Text, SafeAreaView, View, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native'


const { height, width } = Dimensions.get("window")

const File = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.viewContainer}>
                <TouchableOpacity style={styles.touch1}>
                    <Text style={styles.textConatener}>Classic facial</Text>
                    <Image style={styles.Image}
                    source={{uri:"https://cdn-icons-png.freepik.com/256/14849/14849679.png?ga=GA1.1.773536441.1739989495&semt=ais_hybrid"}}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touch2}>
                    <Text style={styles.textConatener}>Hydra facial</Text>
                    <Image style={styles.Image}
                    source={{uri:"https://cdn-icons-png.freepik.com/256/14849/14849679.png?ga=GA1.1.773536441.1739989495&semt=ais_hybrid"}}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touch3}>
                    <Text style={styles.textConatener}>Led facial</Text>
                    <Image style={styles.Image}
                    source={{uri:"https://cdn-icons-png.freepik.com/256/14849/14849679.png?ga=GA1.1.773536441.1739989495&semt=ais_hybrid"}}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touch4}>
                    <Text style={styles.textConatener}>Firming or Sculpting{'\n'}facial</Text>
                    <Image style={styles.Image}
                    source={{uri:"https://cdn-icons-png.freepik.com/256/14849/14849679.png?ga=GA1.1.773536441.1739989495&semt=ais_hybrid"}}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touch5}>
                    <Text style={styles.textConatener}>Lymphatic facial</Text>
                    <Image style={styles.Image}
                    source={{uri:"https://cdn-icons-png.freepik.com/256/14849/14849679.png?ga=GA1.1.773536441.1739989495&semt=ais_hybrid"}}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touch6}>
                    <Text style={styles.textConatener}>Acne facial</Text>
                    <Image style={styles.Image}
                    source={{uri:"https://cdn-icons-png.freepik.com/256/14849/14849679.png?ga=GA1.1.773536441.1739989495&semt=ais_hybrid"}}/>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    viewContainer: {
        flex:1,
      //  width: width - 14,
       // marginHorizontal: 7,
       // borderRadius: 10,
      //  elevation: 3,
        
       // marginTop: 15,
    },
    touch1: {
        width: width - 30,
        marginHorizontal: 15,
        borderRadius: 10,
        marginTop: 40,
        marginBottom: 10,
        height: 45,
        backgroundColor: "#D45D79",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        //  justifyContent:"center",
    },
    Image:{
        height:30,
        width:30,
        marginRight:20,
        resizeMode:"contain",
    },
    touch2: {
        width: width - 30,
        marginHorizontal: 15,
        borderRadius: 10,
        marginBottom: 10,
        height: 45,
        backgroundColor: "#D45D79",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    touch3: {
        width: width - 30,
        marginHorizontal: 15,
        borderRadius: 10,
        marginBottom: 10,
        height: 45,
        backgroundColor: "#D45D79",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    touch4: {
        width: width - 30,
        marginHorizontal: 15,
        borderRadius: 10,
        marginBottom: 15,
        height: 65,
        backgroundColor: "#D45D79",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    touch5: {
        width: width - 30,
        marginHorizontal: 15,
        borderRadius: 10,
        marginBottom: 15,
        height: 45,
        backgroundColor: "#D45D79",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    touch6: {
        width: width - 30,
        marginHorizontal: 15,
        borderRadius: 10,
        marginBottom: 15,
        height: 45,
        backgroundColor: "#D45D79",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    textConatener: {
        color: "white",
        fontWeight:"500",
        fontSize:16,
        marginLeft:30,

    }

})

export default File