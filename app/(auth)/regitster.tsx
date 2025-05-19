import ButtonProps from "@/components/Button";
import Input from "@/components/Input";
import { router } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const register = require("@/assets/images/register-hotel.png");

const Register = () => {
  const registerBtn = () => {
    alert("Register Successfully.");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <View>
          <Text style={styles.headerText}>Welcome Onboard</Text>
          <Text style={styles.header}>
            Let&apos;s help you meet up your tasks.
          </Text>
        </View>
        <Image source={register} style={styles.image} />
      </View>
      <View style={styles.inputContainer}>
        <Input placeholder="Enter Name" type="text" />
        <Input placeholder="Enter Email" type="text" />
        <Input placeholder="Enter Password" type="text" />
        <ButtonProps title="Register" click={registerBtn} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.registerText}>
          Already have an account?{" "}
          <Pressable onPress={() => router.push("/(auth)/login")}>
            <Text style={styles.linkText}>Login</Text>
          </Pressable>
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  imageContainer: {
    width: "100%",
    height: 400,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 300,
    height: 300,
  },
  inputContainer: {
    width: "90%",
    marginHorizontal: "auto",
    gap: 25,
  },
  headerText: {
    textAlign: "center",
    paddingVertical: 20,
    fontSize: 32,
    fontWeight: "bold",
  },
  header: {
    fontWeight: "400",
    textAlign: "center",
    fontSize: 14,
  },
  registerText: {
    textAlign: "center",
    fontSize: 18,
  },
  textContainer: {
    marginTop: 25,
  },
  linkText: {
    color: "blue",
    textDecorationLine: "underline",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Register;
