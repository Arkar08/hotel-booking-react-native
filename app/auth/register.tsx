import ButtonProps from "@/components/Button";
import Input from "@/components/Input";
import { useAuth } from "@/hooks/useAuth";
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const Register = () => {

  const [showEye,setShowEye] = useState(true)
  const [users,setUsers] = useState({
    name:"",
    email:"",
    password:""
  })

  const {register} = useAuth()

  const registerBtn = async () => {
    try {
      await register(users)
    } catch (error) {
        console.log(error)
    }
    alert("Register Successfully.");
  };

  const eyePassword = () => {
    setShowEye(!showEye)
  }

  const handleChange = (event:any) => {
    setUsers((prev)=> (
      {
        ...prev,[event.target.name]:event.target.value
      }
    ))
  }




  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <View>
          <Text style={styles.headerText}>Welcome Onboard</Text>
          <Text style={styles.header}>
            Let&apos;s help you meet up your tasks.
          </Text>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <View>
          <Text style={{paddingLeft:5,paddingBottom:5,fontWeight:'bold',fontSize:16}}>Name</Text>
          <Input placeholder="Enter Name" type="text" value={users.name} name="name" onChange={handleChange}/>
        </View>
        <View>
            <Text style={{paddingLeft:5,paddingBottom:5,fontWeight:'bold',fontSize:16}}>Email</Text>
            <Input placeholder="Enter Email" type="text" keyboardType="email-address" autoComplete="email" autoCapitalize="none" value={users.email} name="email" onChange={handleChange}/>
        </View>
        <View style={{position:"relative"}}>
          <Text style={{paddingLeft:5,paddingBottom:5,fontWeight:'bold',fontSize:16}}>Password</Text>
          <Input placeholder="Enter Password" type="text" keyboardType="password" autoComplete="password" autoCapitalize="none" secureTextEntry={showEye} value={users.password} name="password" onChange={handleChange}/>
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
        <ButtonProps title="Register" click={registerBtn} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.registerText}>
          Already have an account?{" "}
          <Pressable onPress={() => router.push("/auth/login")}>
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
    height: 200,
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
