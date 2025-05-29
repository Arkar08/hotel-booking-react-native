import Input from "@/components/Input";
import Feather from "@expo/vector-icons/Feather";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";

const GuestDetail = () => {
  const router = useRouter();

  const data = useLocalSearchParams();
  const store = data.data ? JSON.parse(data.data as string) : {};

  const [edit, setEdit] = useState(true);
  const [mainData, setMainData] = useState({});
  const [users, setUsers] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const handleUserChange = (text: string) => {
    setUsers((prev) => ({
      ...prev,
      name: text,
    }));
  };

  const handleEmailChange = (text: string) => {
    setUsers((prev) => ({
      ...prev,
      email: text,
    }));
  };

  const handlePhoneChange = (text: string) => {
    setUsers((prev) => ({
      ...prev,
      phoneNumber: text,
    }));
  };

  const proceedToPayment = () => {
    if (!edit) {
      router.push({
        pathname: "/payment",
        params: { data: JSON.stringify(mainData) },
      });
      setUsers({
        name: "",
        email: "",
        phoneNumber: "",
      });
      setEdit(true);
    } else {
      Alert.alert("Plz filled out in the form field.");
    }
  };

  const editClass = () => {
    if (users.name === "" || users.email === "" || users.phoneNumber === "") {
      Alert.alert("Plz filled out in the form field.");
      setEdit(true);
    } else {
      setEdit(false);
      const dataList = { ...store, users };
      setMainData(dataList);
    }
  };

  const editGuest = () => {
    setEdit(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Name</Text>
          <Input
            placeholder="Enter Name"
            editable={edit}
            value={users.name}
            onChangeText={handleUserChange}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <Input
            placeholder="Enter Email"
            keyboardType="email-address"
            editable={edit}
            value={users.email}
            onChangeText={handleEmailChange}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Phone Number</Text>
          <Input
            placeholder="9*********"
            maxLength={10}
            keyboardType="numeric"
            editable={edit}
            value={users.phoneNumber}
            onChangeText={handlePhoneChange}
          />
        </View>
        {edit ? (
          <View style={styles.inputContainer}>
            <Pressable style={styles.btnContainer1} onPress={editClass}>
              <Feather name="plus-square" size={20} color="white" />
              <Text style={styles.btnText}>Add Guest Details</Text>
            </Pressable>
          </View>
        ) : (
          <View style={styles.inputContainer}>
            <Pressable style={styles.btnContainer1} onPress={editGuest}>
              <Feather name="edit" size={20} color="white" />
              <Text style={styles.btnText}>Edit Guest Details</Text>
            </Pressable>
          </View>
        )}
      </View>
      <View style={styles.footerContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>15000 per night</Text>
          <Text style={styles.text}>Standard Room</Text>
        </View>
        <View style={styles.btn}>
          <Pressable style={styles.btnContainer} onPress={proceedToPayment}>
            <Text style={styles.btnText} numberOfLines={1}>
              Proceed To Payment
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  mainContainer: {
    padding: 10,
  },
  inputContainer: {
    marginTop: 20,
  },
  label: {
    marginBottom: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  footerContainer: {
    width: "100%",
    position: "absolute",
    bottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopColor: "gray",
    borderTopWidth: 0.3,
    paddingTop: 10,
    gap: 10,
  },
  textContainer: {
    width: "40%",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 10,
  },
  btn: {
    width: "55%",
    paddingRight: 10,
  },
  btnContainer: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: "blue",
    width: "100%",
  },
  btnContainer1: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: "blue",
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  btnText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },
});

export default GuestDetail;
