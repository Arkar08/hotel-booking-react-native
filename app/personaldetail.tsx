import Input from "@/components/Input";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const cardImage = require("@/assets/images/loginImage4.png");

const PersonalDetails = () => {
  const router = useRouter();
  const [active, setActive] = useState(false)

  const cancelBtn = () => {
    router.push("/(profile)");
  };

  const saveBtn = () => {
    router.push("/(profile)");
  };

  const editBtn = () => {
    setActive(true)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.nameText}>Personal Detail</Text>
      </View>
      <View style={styles.profileContainer}>
        <View style={styles.imageContainer}>
          <View style={styles.imageList}>
            <Image source={cardImage} style={styles.image} />
          </View>
        </View>
        {
          !active && (
            <View style={styles.editContainer}>
              <Pressable style={styles.editBtn} onPress={editBtn}>
                <Text style={styles.editText}>Edit</Text>
              </Pressable>
            </View>
          )
        }
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Name</Text>
          <Input placeholder="Enter FullName" editable={active}/>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <Input placeholder="Enter Email" editable={active}/>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <Input placeholder="Enter Password" editable={active}/>
        </View>
        <View style={styles.inputContainer}>
            <Text style={styles.label}>Phone Number</Text>
            <Input placeholder="Enter phNo" maxLength={10} keyboardType="numeric" editable={active}/>
        </View>
      </View>
      {
        active && (
          <View style={styles.btnContainer}>
            <Pressable onPress={cancelBtn} style={styles.cancelBtn}>
              <Text style={styles.cancelText}>Cancel</Text>
            </Pressable>
            <Pressable onPress={saveBtn} style={styles.saveBtn}>
              <Text style={styles.saveText}>Save</Text>
            </Pressable>
          </View>
        )
      }
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
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
  profileContainer: {
    padding: 10,
    marginTop: 10,
  },
  label: {
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  imageList: {
    borderRadius: 100,
    width: 150,
    height: 150,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
  },
  inputContainer: {
    marginTop: 10,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    position: "absolute",
    bottom: 20,
    width: "100%",
  },
  cancelBtn: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 10,
    width: 150,
  },
  saveBtn: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 10,
    width: 150,
  },
  saveText: {
    color: "white",
    textAlign: "center",
  },
  cancelText: {
    color: "white",
    textAlign: "center",
  },
  editBtn:{
    padding:10,
    backgroundColor:"blue",
    width:150,
    borderRadius:10,
  },
  editText:{
    textAlign:'center',
    color:'white'
  },
  editContainer:{
    justifyContent:'center',
    marginTop:20,
    alignItems:'flex-end',
    marginRight:10
  }
});

export default PersonalDetails;
