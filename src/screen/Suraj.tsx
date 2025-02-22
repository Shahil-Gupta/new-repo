import { useState } from 'react'
import { SafeAreaView, View, StyleSheet, Text, FlatList, Image, TouchableOpacity, Dimensions, ImageBackground } from 'react-native'

const User = [{ id: "1", Image: "https://images.unsplash.com/photo-1739382120576-b1434e8bc4d3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8", name: "your story" },
{ id: "2", Image: "https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&w=600", name: "Rahul bhaiya" },
{ id: "3", Image: "https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=600", name: "kunal bhaiya" },
{ id: "4", Image: "https://images.pexels.com/photos/459203/pexels-photo-459203.jpeg?auto=compress&cs=tinysrgb&w=600", name: "amit singh" },
{ id: "5", Image: "https://images.pexels.com/photos/3680904/pexels-photo-3680904.jpeg?auto=compress&cs=tinysrgb&w=600", name: "prince" },
{ id: "6", Image: "https://images.pexels.com/photos/3680912/pexels-photo-3680912.jpeg?auto=compress&cs=tinysrgb&w=600", name: "hooker" },
]

const Title = [{ id: "1", title: "Travel 1", image: "https://images.unsplash.com/photo-1541411438265-4cb4687110f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGQlMjBwaG90b3N8ZW58MHx8MHx8fDA%3D", text: "if you could live anywhere in the world, where would you pick?" },
{ id: "2", title: "Travel 2", image: "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=600" ,text:"Adventure awaits! Explore the world with us."},
{ id: "3", title: "Travel 3", image: "https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&w=600", text: "Discover new destinations, one journey at a time." },
{ id: "4", title: "Travel 4", image: "https://images.pexels.com/photos/36762/scarlet-honeyeater-bird-red-feathers.jpg?auto=compress&cs=tinysrgb&w=600", text: "Pack your bags and let's go—your next adventure starts here!" },
{ id: "5", title: "Travel 5", image: "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=600", text: "Wander often, wonder always—travel made easy." },
{ id: "6", title: "Travel 6", image: "https://images.pexels.com/photos/1563355/pexels-photo-1563355.jpeg?auto=compress&cs=tinysrgb&w=600", text: "Escape the ordinary, explore the extraordinary." },
]


const { height, width } = Dimensions.get('window')

const Suraj = () => {
  const[showColor,setshowColor]=useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topText}>
        <Text style={styles.friendText}>FriendZy</Text>
        <Text style={styles.iconText}>icon</Text>
      </View>
      <View style={styles.storyContainer}>
        <FlatList horizontal
          data={User}
          contentContainerStyle={{ flexGrow: 0 }}
          renderItem={({ item }) => (
            <View style={styles.viewContainer}>
              <Image style={{ height: 70, width: 70, borderRadius: 35, borderWidth: 2, borderColor: "yellow" }}
                source={{ uri: item.Image }} />
              <Text style={styles.nameText}>{item.name}</Text>
            </View>
          )}


        />
      </View>
      <View style={styles.searchContainer}>
        <TouchableOpacity style={styles.touch1}>
          <Text style={styles.redText}>Friend</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touch2}>
          <Text>Search</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
        <FlatList
          data={Title}
          renderItem={({ item }) => (
            <View style={{height:230,marginBottom:10}}>
            <ImageBackground style={{ flex: 1 }}
              imageStyle={{ flex: 1, borderRadius: 15, resizeMode: "cover" }}
              source={{ uri: item.image }}>
              <View style={styles.travelContainer}>
                <Text style={styles.travelText}>{item.title}</Text>
              </View>
              <Text style={styles.liveText}>{item.text}</Text>
            </ImageBackground>
            </View>
          )}

        />
      </View>
    </SafeAreaView>
  )
}
export default Suraj

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  topText: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  friendText: {
    color: "black",
    fontWeight: 'bold',
    fontSize: 18,
    // marginTop:10,
    padding: 10,
  },
  iconText: {
    fontSize: 15,
    padding: 5,
    marginTop: 4,
  },
  viewContainer: {
    height: 100,
    width: 90,
    alignItems: "center",
    justifyContent: "center"
  },
  storyContainer: {
    height: 100,
    marginTop: 20,
    marginLeft: 13,
  },
  nameText: {
    fontSize: 14,
  },
  searchContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 30,
    height: 45,
    width: width - 30,
    marginHorizontal: 15,
      marginBottom:15,
      elevation:3,
  },
  touch1: {
    padding: 10,
    backgroundColor: "red",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
  },
  touch2:{
    padding: 10,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
  },
  redText:{
    fontSize:16,
    fontWeight:"bold",
    color:"white",
  },
  imageContainer: {
   // height: height*2,
    //borderRadius:15,
    width: width - 30,
    marginHorizontal: 15,
  },
  travelContainer: {
    elevation: 3,
    height: 30,
    //borderWidth:2,
    width: 60,
    alignItems: "center",
    justifyContent: "center",
    margin: 12,
  //  backgroundColor:"#dadada"
  },
  travelText: {
    color: "#D45D79",
    

  },
  liveText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    top: 100,
  }


})