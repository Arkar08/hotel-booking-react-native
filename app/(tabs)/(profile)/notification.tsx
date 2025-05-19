import { StyleSheet, Text, View } from "react-native";

const Notification = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text>Notification</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Notification;
