import Input from "@/components/Input";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

const GuestDetail = () => {

    const router = useRouter();

    const proceedToPayment = () => {
        router.push("/payment")
    }

    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Name</Text>
                    <Input placeholder="Enter Name"/>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Email</Text>
                    <Input placeholder="Enter Email"/>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Phone Number</Text>
                    <Input placeholder="Enter phNo" maxLength={10} keyboardType="numeric"/>
                </View>
                <View style={styles.inputContainer}>
                    <Pressable style={styles.btnContainer1}>
                        <Ionicons name="add" color='white' size={24}/>
                        <Text style={styles.btnText}>Add Guest Details</Text>
                    </Pressable>
                </View>
            </View>
            <View style={styles.footerContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>15000 per night</Text>
                    <Text style={styles.text}>Standard Room</Text>
                </View>
                <View style={styles.btn}>
                    <Pressable style={styles.btnContainer} onPress={proceedToPayment}>
                        <Text style={styles.btnText} numberOfLines={1}>Proceed To Payment</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        position:"relative"
    },
    mainContainer:{
        padding:10,
    },
    inputContainer:{
        marginTop:20
    },
    label:{
        marginBottom:10,
        fontSize:16,
        fontWeight:'bold'
    },
    footerContainer:{
        width:'100%',
        position:"absolute",
        bottom:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderTopColor:'gray',
        borderTopWidth:0.3,
        paddingTop:10,
        gap:10
    },
    textContainer:{
        width:"40%"
    },
    text:{
        fontSize:16,
        fontWeight:'bold',
        textAlign:'center',
        paddingTop:10
    },
    btn:{
        width:'55%',
        paddingRight:10
    },
    btnContainer:{
        padding:15,
        borderRadius:10,
        backgroundColor:"blue",
        width:'100%',
    },
    btnContainer1:{
         padding:15,
        borderRadius:10,
        backgroundColor:"blue",
        width:'100%',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        gap:10
    },
    btnText:{
        color:"white",
        textAlign:'center'
    }
})

export default GuestDetail;