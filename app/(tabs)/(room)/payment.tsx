import { Checkbox } from 'expo-checkbox';
import { useRouter } from 'expo-router';
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Pressable, ScrollView } from "react-native-gesture-handler";

const Payment = () => {

    const [isChecked, setChecked] = useState(false);

    const router = useRouter();
    const booking = () => {
        alert("booking successfully.")
        router.push("/history")
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.mainContainer}>
                <Text style={styles.mainText}>
                    Booking Details
                </Text>
                <View style={styles.dateContainer}>
                    <View style={styles.checkCard}>
                        <Text style={styles.checkText}>Check In</Text>
                        <Text style={styles.checkText}>Mon 22 July</Text>
                        <Text style={styles.checkText}>9:00 AM</Text>
                    </View>
                    <View style={styles.bar}></View>
                    <View style={styles.checkCard}>
                        <Text style={styles.checkText}>Check Out</Text>
                        <Text style={styles.checkText}>Mon 23 July</Text>
                        <Text style={styles.checkText}>12:00 AM</Text>
                    </View>
                </View>
            </View>
            <View  style={styles.mainContainer}>
                <Text style={styles.mainText}>Guest Details</Text>
                <View style={styles.guest}>
                    <Text style={styles.guestText}>Name: Arkar</Text>
                    <Text style={styles.guestText}>Email: arkar@gmail.com</Text>
                    <Text style={styles.guestText}>PhNo: 0978885566</Text>
                </View>
            </View>
            <View  style={styles.mainContainer}>
                <Text style={styles.mainText}>Room Details</Text>
                <View style={styles.guest}>
                    <Text style={styles.guestText}>Standard Room</Text>
                </View>
            </View>
            <View  style={styles.mainContainer}>
                <Text style={styles.mainText}>Payment Details</Text>
                <View style={styles.price}>
                    <View style={styles.priceContainer}>
                        <Text style={styles.guestText1}>Base Price</Text>
                        <Text style={styles.guestText1}>100000</Text>
                    </View>
                    <View style={styles.priceContainer}>
                        <Text style={styles.guestText1}>Apply Coupon</Text>
                        <Text style={styles.guestText1}>100</Text>
                    </View>
                    <View style={styles.priceContainer1}>
                        <Text style={styles.guestText1}>Total Amount</Text>
                        <Text style={styles.guestText1}>100000</Text>
                    </View>
                </View>
            </View>
            <View  style={styles.mainContainer}>
                <Text style={styles.mainText}>Select Your Payment</Text>
                <View style={styles.cardContainer}>
                    <Pressable style={styles.card}>
                        <Text style={styles.cardText}>Cash</Text>
                        <Checkbox
                            style={styles.checkbox}
                            value={isChecked}
                            onValueChange={setChecked}
                            color={isChecked ? 'blue' : undefined}
                        />
                    </Pressable>
                    <Pressable style={styles.card}>
                        <Text style={styles.cardText}>Bank</Text>
                        <Checkbox
                            style={styles.checkbox}
                            value={isChecked}
                            onValueChange={setChecked}
                            color={isChecked ? 'blue' : undefined}
                        />
                    </Pressable>
                </View>
            </View>
            <View style={styles.footer}>
                <Pressable style={styles.btnContainer} onPress={booking}>
                    <Text style={styles.btnText}>Booking</Text>
                </Pressable>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:10,
        backgroundColor:'white',
    },
    mainContainer:{
        padding:10
    },
    mainText:{
        fontSize:20,
        fontWeight:'bold'
    },
    dateContainer:{
        flexDirection:'row',
        margin:10,
        marginHorizontal:20,
        alignItems:'center',
        gap:20
    },
    checkCard:{
        backgroundColor:'gray',
        padding:10,
        borderRadius:10
    },
    checkText:{
        fontSize:14,
        fontWeight:'500',
        color:'white',
        padding:3
    },
    guest:{
        margin:10,
        marginHorizontal:20,
    },
    guestText:{
        padding:5,
        fontSize:16,
        fontWeight:'500',
        color:'gray'
    },
    guestText1:{
        padding:5,
        fontSize:16,
        fontWeight:'500',
        color:'black'
    },
    price:{
        margin:10
    },
    priceContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:10
    },
    priceContainer1:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:20,
        borderTopWidth:1,
        paddingTop:10
    },
    bar:{
        width:30,
        height:2,
        backgroundColor:'gray'
    },
    card:{
        flexDirection:"row",
        height:50,
        backgroundColor:'black',
        marginVertical:10,
        borderRadius:10,
        padding:15,
        justifyContent:'space-between',
        alignItems:'center'
    },
    cardText:{
        color:'white',
        fontSize:16,
        fontWeight:'500',
    },
    cardContainer:{
        marginVertical:10
    },
    checkbox: {
        borderRadius:100,
        backgroundColor:'white',
        width:22,
        height:22,
        borderWidth:0
    },
    btnContainer:{
        padding:15,
        width:'100%',
        backgroundColor:"blue",
        borderRadius:10
    },
    btnText:{
        color:"white",
        textAlign:'center',
        fontSize:16,
        fontWeight:'bold',
        letterSpacing:2
    },
    footer:{
        marginTop:20,
        marginBottom:30
    }
})

export default Payment;