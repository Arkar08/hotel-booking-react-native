import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Notification = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.nameText}>Notification</Text>
      </View>
      <View>
        <Text>Notification</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 60,
    borderBottomWidth: 1,
    width: "100%",
    padding: 10,
    backgroundColor: "blue",
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
  },
  nameText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginTop: 5,
  },
});

export default Notification;
