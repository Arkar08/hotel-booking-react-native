import Modals from "@/components/Modals";
import { data } from "@/utils/dummy";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

const cardImage = require("@/assets/images/loginImage4.png");

const Home = () => {
  const router = useRouter();
  const [modalVisiable,setModalVisiable]  = useState(false)
        const [selected, setSelected] = useState("");
  
    const select = [
        {key:'1', value:'Mobiles'},
        {key:'2', value:'Appliances'},
        {key:'3', value:'Cameras'},
        {key:'4', value:'Computers'},
        {key:'5', value:'Vegetables'},
        {key:'6', value:'Diary Products'},
        {key:'7', value:'Drinks'},
    ]


  const viewDetails = (id: string) => {
    router.navigate({
      pathname: "/(tabs)/(room)/[roomId]",
      params: { roomId: id },
    });
  };

  const avaliableClick = () => {
    router.push("/(room)/avaliable");
  };

  const popularClick = () => {
    router.push("/(room)/popular");
  };

  const closeModal = () =>{
    setModalVisiable(false)
  }

  const filter = () =>{
    console.log(selected)
    setModalVisiable(false)
  }

  const renderItem = ({ item }: any) => {
    return (
      <Pressable style={styles.card} onPress={() => viewDetails("3")}>
        <Image source={cardImage} style={styles.cardImage} />
        <View style={styles.textContainer}>
          <View>
            <Text style={styles.roomName}>{item.roomNumber}</Text>
          </View>
          <View>
            <Text style={styles.locationName}>{item.type}</Text>
          </View>
          <View>
            <Text style={styles.price}>{item.price}/night</Text>
          </View>
          {/* <View style={styles.button}>
            <Text style={styles.buttonText}>{item.status}</Text>
          </View> */}
        </View>
      </Pressable>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.nameText}>Hotel Booking</Text>
        <Pressable onPress={() => router.push("/(profile)/notification")}>
          <Ionicons name="notifications-outline" size={24} color="black" />
        </Pressable>
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.inputContainer}>
          <FontAwesome name="search" size={24} style={styles.inputIcon} />
          <TextInput style={styles.input} placeholder="Search" />
          <Pressable style={styles.filterIcon} onPress={()=>setModalVisiable(true)}>
            <MaterialIcons name="filter-list" size={24} color="black" />
          </Pressable>
        </View>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Most Popular Room</Text>
          <Pressable onPress={popularClick}>
            <Text style={styles.seeAllText}>See all</Text>
          </Pressable>
        </View>
        <View>
          <FlatList
            style={styles.cardContainer}
            data={data}
            horizontal={true}
            keyExtractor={(data) => data.id}
            renderItem={renderItem}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Avaliable Room</Text>
          <Pressable onPress={avaliableClick}>
            <Text style={styles.seeAllText}>See all</Text>
          </Pressable>
        </View>
        <View>
          <FlatList
            style={styles.cardContainer}
            data={data}
            horizontal={true}
            keyExtractor={(data) => data.id}
            renderItem={renderItem}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>

      <View>
        <Modals visiable={modalVisiable} title="Filter Rooms" close={closeModal}>
          <View style={{marginTop:30,position:'relative',height:300}}>
              <View>
                  <Text style={styles.label}>Room Type</Text>
                  <SelectList 
                    setSelected={setSelected} 
                    data={select}
                    placeholder='Select Room Type'
                    maxHeight={150}
                    boxStyles={{backgroundColor:"#E5E5E5",padding:15,borderRadius:20,borderWidth:0}}
                  />
              </View>
              <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',gap:10,position:'absolute',bottom:0,left:15}}>
                  <Pressable style={{padding:10,backgroundColor:"red",width:150,borderRadius:10}} onPress={closeModal}>
                    <Text style={{textAlign:'center',color:'white'}}>Reset</Text>
                  </Pressable>
                  <Pressable style={{padding:10,backgroundColor:"green",width:150,borderRadius:10}} onPress={filter}>
                    <Text style={{textAlign:'center',color:'white'}}>Filter</Text>
                  </Pressable>
              </View>
          </View>
        </Modals>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    position: "relative",
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  mainContainer: {
    paddingHorizontal: 10,
  },
  inputIcon: {
    position: "absolute",
    top: 12,
    left: 12,
  },
  input: {
    width: "90%",
    borderWidth: 1,
    paddingHorizontal: 50,
    padding: 15,
    borderRadius: 10,
  },
  filterIcon: {
    marginLeft: 10,
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 25,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 600,
  },
  seeAllText: {
    fontSize: 14,
    fontWeight: 500,
    textDecorationLine: "underline",
  },
  textContainer: {
    marginTop: 5,
    paddingHorizontal: 10,
  },
  cardContainer: {
    marginTop: 10,
  },
  card: {
    width: 300,
    height: 240,
    borderWidth: 0.3,
    borderRadius: 10,
    marginRight: 20,
    position: "relative",
  },
  cardImage: {
    width: "100%",
    height: "60%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  button: {
    backgroundColor: "green",
    padding: 8,
    borderRadius: 5,
    width: "40%",
    position: "absolute",
    right: 10,
    bottom: -5,
    borderWidth: 0,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 12,
  },
  roomName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  locationName: {
    fontSize: 14,
  },
  price: {
    fontSize: 14,
    fontWeight: "bold",
    marginVertical: 10,
    textAlign:'right'
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    height: 60,
    borderBottomWidth: 1,
    width: "100%",
    padding: 10,
  },
  nameText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  label:{
    fontWeight:'bold',
    fontSize:16,
    marginBottom:10
  }
});

export default Home;
