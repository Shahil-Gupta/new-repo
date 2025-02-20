import { 
    Dimensions, 
    Image, 
    SafeAreaView, 
    StyleSheet, 
    Text, 
    TouchableOpacity, 
    View 
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import File from './File'
const { height, width } = Dimensions.get("window");

const Login = () => {
    const navigation = useNavigation(); // Fix: Use navigation hook

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <TouchableOpacity  
                    style={styles.touchContainer} 
                    onPress={() => navigation.navigate("File")} // Fix: Correct syntax
                >
                    <Text style={styles.text}>Choose a Subcategory</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center", // Center content horizontally
    },
    touchContainer: { // Fixed typo: 'touchContainer' instead of 'touchConatiner'
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
    }
});

export default Login;
