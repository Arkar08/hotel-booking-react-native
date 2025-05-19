import ButtonProps from "@/components/Button";
import Input from "@/components/Input";
import { router } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const loginImage = require("@/assets/images/hotel-image.png");

const Login = () => {
  const loginBtn = async () => {
    alert("Login Successfully.");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <View>
          <Text style={styles.headerText}>Welcome Back</Text>
        </View>
        <Image source={loginImage} style={styles.image} />
      </View>
      <View style={styles.inputContainer}>
        <Input placeholder="Enter Email" type="text" />
        <Input placeholder="Enter Password" type="text" />
        <ButtonProps title="Login" click={loginBtn} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.registerText}>
          Don&apos;t have An Account?{" "}
          <Pressable onPress={() => router.push("/(auth)/register")}>
            <Text style={styles.linkText}>Register</Text>
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

export default Login;
