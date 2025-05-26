import ButtonProps from "@/components/Button";
import Input from "@/components/Input";
import { useAuth } from "@/hooks/useAuth";
import { auth } from "@/utils/type";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const loginImage = require("@/assets/images/hotel-image.png");

const Login = () => {

  const router = useRouter();
  const [showEye,setShowEye] = useState(true)
  const [users,setUsers] = useState<auth>({
    email:'',
    password:""
  })

  const {login} = useAuth()


  const loginBtn = async() => {
      try {
        await login(users);
        router.push("/(tabs)")
      } catch (error) {
        console.log(error)
      }
  };
  
  const eyePassword = () => {
    setShowEye(!showEye)
  }

  const handleChange = (value:any) => {
    setUsers((prev)=> (
      {...prev,email:value}
    ))
  }

  const handlePasswordChange = (value:string) =>{
    setUsers((prev)=>(
      {
        ...prev,password:value
      }
    ))
  }


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <View>
          <Text style={styles.headerText}>Welcome Back</Text>
        </View>
        <Image source={loginImage} style={styles.image} />
      </View>
      <View style={styles.inputContainer}>
        <View>
          <Text style={{paddingLeft:5,paddingBottom:5,fontWeight:'bold',fontSize:16}}>Email</Text>
          <Input placeholder="Enter Email" type="text" keyboardType="email-address"autoComplete="email"  autoCapitalize="none" value={users.email} onChangeText={handleChange}/>
        </View>
        <View>
            <Text style={{paddingLeft:5,paddingBottom:5,fontWeight:'bold',fontSize:16}}>Password</Text>
            <Input placeholder="Enter Password" type="text" keyboardType="password" autoComplete="password" autoCapitalize="none" secureTextEntry={showEye} value={users.password} onChangeText={handlePasswordChange}/>
            <Pressable style={{position:"absolute",right:20,top:'50%'}} onPress={eyePassword}>
            {
              showEye ? (
                <Ionicons name="eye-off" size={24} color="black" />
              ):(
                <Ionicons name="eye" size={24} color="black" /> 
              )
            }
          </Pressable>
        </View>
        <ButtonProps title="Login" click={loginBtn} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.registerText}>
          Don&apos;t have An Account?{" "}
          <Pressable onPress={()=> router.push("/auth/register")}>
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
    height: 300,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
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
