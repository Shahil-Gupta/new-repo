import{Image, SafeAreaView,StyleSheet,Text, View} from 'react-native'

const Login=()=>{
    return(
        <SafeAreaView style={styles.container}>
            <View>
                <Image style={styles.imagecontainer}
                source={require("../assets/img.jpg")} />
            </View>
            
        </SafeAreaView>

    )
}


const styles=StyleSheet.create({
    container:{
        flex:1,
    }
})
export default Login