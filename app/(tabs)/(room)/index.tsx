import Card from "@/components/Card";
import { data } from "@/utils/dummy";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

const Room = () => {
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
        </View>
        <View style={styles.cardList}>
          <FlatList
            style={styles.cardContainer}
            data={data}
            keyExtractor={(data) => data.id}
            renderItem={Card}
            numColumns={2}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  inputContainer: {
    position: "relative",
    marginTop: 20,
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
    width: "100%",
    borderWidth: 1,
    paddingHorizontal: 50,
    padding: 15,
    borderRadius: 10,
  },
  cardContainer: {
    marginTop: 10,
  },
  cardList: {
    paddingBottom: 15,
    maxHeight: 625,
    overflow: "scroll",
  },
});

export default Room;
