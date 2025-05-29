import RoomFlat from "@/components/RoomDetails";
import { url } from "@/config/apiConfig";
import Ionicons from "@expo/vector-icons/Ionicons";
import axios from "axios";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const RoomDetails = () => {
  const router = useRouter();
  const { roomId } = useLocalSearchParams();
  const [roomData, setRoomData] = useState<any>({});

  useEffect(() => {
    if (roomId) {
      getRoomId(roomId.toString());
    }
  }, [roomId]);

  const getRoomId = async (id: any) => {
    await axios.get(`${url}room/${id}`).then(
      (res: any) => {
        setRoomData(res.data.data);
      },
      (error: any) => {
        console.log(error);
      }
    );
  };

  const backBtn = () => {
    router.push("/(tabs)/(room)");
  };

  const postData = {
    type: roomData.type,
    roomNo: roomData.roomNo,
    roomId:roomData.id
  };

  const booking = () => {
    router.push({
      pathname: "/datebooking",
      params: { data: JSON.stringify(postData) },
    });
  };

  const amenities = roomData.details
    ? JSON.parse(roomData.details).amenities
    : [];
  const bedSize = roomData.details ? JSON.parse(roomData.details).bedSize : "";
  const title = roomData.details ? JSON.parse(roomData.details).title : "";
  const description = roomData.details
    ? JSON.parse(roomData.details).description
    : "";
  const imageUrl = roomData.imgUrl ? JSON.parse(roomData.imgUrl) : [];

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: imageUrl[0] }} style={styles.image} />
          <Pressable style={styles.backIcon} onPress={backBtn}>
            <Ionicons name="arrow-back-outline" size={24} color="white" />
          </Pressable>
        </View>
        <View style={styles.carousalContainer}>
          <View>
            <Image source={{ uri: imageUrl[1] }} style={styles.crousalImage} />
          </View>
          <View>
            <Image source={{ uri: imageUrl[2] }} style={styles.crousalImage} />
          </View>
          <View>
            <Image source={{ uri: imageUrl[3] }} style={styles.crousalImage} />
          </View>
        </View>
        <View style={styles.middleContainer}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: 10,
            }}
          >
            <Text style={styles.roomType}>{roomData.roomNo}</Text>
            <Text style={styles.roomType}>{roomData.type}</Text>
          </View>
          <Text style={styles.detail}>Room Title</Text>
          <View>
            <Text style={styles.itemText}>{title}</Text>
            <Text style={styles.itemText}>{bedSize}</Text>
          </View>
          <Text style={styles.detail}>Room Details</Text>
          <View style={styles.detailText}>
            <RoomFlat data={amenities} />
          </View>
          <Text style={styles.detail}>Room Description</Text>
          <Text style={styles.itemText}>{description}</Text>
        </View>
      </ScrollView>
      <View style={styles.bottomContainer}>
        <Text style={styles.priceText}>{roomData.price}Ks/night</Text>
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
  detail: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  detailText: {
    fontSize: 14,
    fontWeight: "400",
    marginTop: 10,
  },
  bottomContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "white",
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
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  itemText: {
    fontSize: 14,
    fontWeight: 400,
    marginHorizontal: 20,
    padding: 4,
    marginTop: 10,
  },
});

export default RoomDetails;
