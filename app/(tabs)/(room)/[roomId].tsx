import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const roomImage = require("@/assets/images/loginImage4.png");

const RoomDetails = () => {


  const router = useRouter();

  const backBtn = () => {
    router.push("/(room)");
  };

  const booking = () => {
    router.push("/(room)/datebooking");
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={roomImage} style={styles.image} />
        <Pressable style={styles.backIcon} onPress={backBtn}>
          <Ionicons name="arrow-back-outline" size={24} color="white" />
        </Pressable>
      </View>
      <View style={styles.carousalContainer}>
        <View>
          <Image source={roomImage} style={styles.crousalImage} />
        </View>
        <View>
          <Image source={roomImage} style={styles.crousalImage} />
        </View>
        <View>
          <Image source={roomImage} style={styles.crousalImage} />
        </View>
        <View>
          <Image source={roomImage} style={styles.crousalImage} />
        </View>
      </View>
      <View style={styles.middleContainer}>
        <Text style={styles.roomType}>Super Delux Room</Text>
        <Text style={styles.roomNumber}>104</Text>
        <Text style={styles.detail}>Room Details</Text>
        <Text style={styles.detailText}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
          mollitia impedit non incidunt? Expedita nostrum deserunt provident
          consequatur, optio consectetur iure, ipsam, sunt vitae enim assumenda
          at adipisci ipsum temporibus.
        </Text>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.priceText}>10000/night</Text>
        <Pressable style={styles.button} onPress={booking}>
          <Text style={styles.buttonText}>Select Room</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  imageContainer: {
    position: "relative",
    height: 350,
  },
  image: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },
  backIcon: {
    position: "absolute",
    top: 50,
    left: 20,
    padding: 5,
    borderRadius: 100,
    backgroundColor: "blue",
  },
  middleContainer: {
    padding: 10,
  },
  roomType: {
    fontSize: 22,
    fontWeight: "bold",
  },
  roomNumber: {
    fontSize: 22,
    fontWeight: "semibold",
    marginVertical: 10,
  },
  detail: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  detailText: {
    fontSize: 12,
    fontWeight: "400",
    marginTop: 10,
  },
  bottomContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  priceText: {
    width: 150,
    padding: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  button: {
    padding: 15,
    backgroundColor: "blue",
    borderRadius: 10,
    width: 200,
  },
  buttonText: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
  },
  carousalContainer: {
    flexDirection: "row",
    gap: 5,
    marginTop: 10,
    marginHorizontal: "auto",
  },
  crousalImage: {
    width: 90,
    height: 90,
    borderRadius: 10,
  },
});

export default RoomDetails;
