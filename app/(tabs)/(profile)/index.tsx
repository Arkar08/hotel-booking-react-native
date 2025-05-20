import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { router } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const profileImage = require("@/assets/images/icon.png");

const Profile = () => {
  const logout = () => {
    alert("Logout Successfully.");
    router.push("/(auth)/login");
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.header}>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image source={profileImage} style={styles.image} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Admin</Text>
            <Text style={styles.text}>admin@gmail.com</Text>
          </View>
        </View>
      </View>
      <View style={styles.middleContainer}>
          <View style={styles.middleCard}>
            <Text style={styles.middleMain}>Points</Text>
            <Text>100</Text>
          </View>
          <View style={styles.middleCard}>
            <Text style={styles.middleMain}>Coupon</Text>
            <Text>100</Text>
          </View>
          <View style={styles.middleCard}>
            <Text style={styles.middleMain}>Amount</Text>
            <Text>100000</Text>
          </View>
      </View>
      <View style={styles.footer}>
        <Pressable
          style={styles.footerCard}
          onPress={() => router.push("/personaldetail")}
        >
          <View style={styles.personal}>
            <FontAwesome name="user" size={22} />
            <Text style={styles.personalText}>Personal Details</Text>
          </View>
          <AntDesign name="right" size={22} color="gray" />
        </Pressable>
        <Pressable
          style={styles.footerCard}
          onPress={() => router.push("/(booking)")}
        >
          <View style={styles.personal}>
            <MaterialIcons name="history" size={22}/>
            <Text style={styles.personalText}>Booking History</Text>
          </View>
          <AntDesign name="right" size={22} color="gray" />
        </Pressable>
        <Pressable
          style={styles.footerCard}
          onPress={() => router.push("/notification")}
        >
          <View style={styles.personal}>
            <Ionicons name="notifications-sharp" size={22} />
            <Text style={styles.personalText}>Notification</Text>
          </View>
          <AntDesign name="right" size={22} color="gray" />
        </Pressable>
        {/* <Pressable
          style={styles.footerCard}
          onPress={() => router.push("/(navigate)/payment")}
        >
          <View style={styles.personal}>
            <FontAwesome name="user" size={22} />
            <Text style={styles.personalText}>Payment</Text>
          </View>
          <AntDesign name="right" size={22} color="gray" />
        </Pressable> */}
        <Pressable style={styles.footerCard} onPress={logout}>
          <View style={styles.personal}>
            <MaterialIcons name="logout" size={22} />
            <Text style={styles.personalText}>Logout</Text>
          </View>
          <AntDesign name="right" size={22} color="gray" />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  header: {
    height: 250,
    borderBottomWidth: 1,
    width: "100%",
    padding: 10,
    backgroundColor: "blue",
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  imageContainer: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  textContainer: {
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  text: {
    fontSize: 18,
    color: "white",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  footer: {
    padding: 15,
  },
  footerCard: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: 10,
    marginTop: 8,
  },
  personal: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    justifyContent:'center'
  },
  personalText: {
    fontSize: 16,
  },
  middleContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:10,
    paddingHorizontal:20
  },
  middleCard:{
    width:100,
    height:100,
    borderWidth:0.3,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10
  },
  middleMain:{
    fontWeight:'bold',
    fontSize:18,
    textAlign:'center',
    paddingBottom:10
  }
});

export default Profile;
