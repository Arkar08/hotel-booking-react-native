import { Checkbox } from 'expo-checkbox';
import { useRouter } from 'expo-router';
import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Pressable, ScrollView } from "react-native-gesture-handler";

const Payment = () => {

    const [isChecked, setChecked] = useState(false);
    const [bankCheck,setBankCheck] = useState(false)

    const router = useRouter();
    const booking = () => {
        alert("booking successfully.")
        router.push("/history")
    }

    const cardClick = (text:string) => {
        if(text === 'cash'){
            setBankCheck(false)
            setChecked(true)
        }else{
            setBankCheck(true)
            setChecked(false)
        }
    }


    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
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
                    <Text style={styles.guestText}>Standard Room (104)</Text>
                </View>
            </View>
            <View style={styles.mainContainer}>
                <Text style={styles.mainText}>Apply Coupon</Text>
                <View style={styles.couponContainer}>
                    <TextInput placeholder="Enter Coupon Code" style={styles.input}/>
                    <TouchableOpacity style={styles.addBtn}>
                        <Text style={styles.addText}>Add</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View  style={styles.mainContainer}>
                <Text style={styles.mainText}>Payment Details</Text>
                <View style={styles.price}>
                    <View style={styles.priceContainer}>
                        <Text style={styles.guestText1}>Base Price</Text>
                        <Text style={styles.guestText1}>100000Ks</Text>
                    </View>
                    <View style={styles.priceContainer}>
                        <Text style={styles.guestText1}>Apply Coupon</Text>
                        <Text style={styles.guestText1}>100Ks</Text>
                    </View>
                    <View style={styles.priceContainer1}>
                        <Text style={styles.guestText1}>Total Amount</Text>
                        <Text style={styles.guestText1}>100000Ks</Text>
                    </View>
                </View>
            </View>
            <View  style={styles.mainContainer}>
                <Text style={styles.mainText}>Select Your Payment</Text>
                <View style={styles.cardContainer}>
                    <Pressable style={styles.card} onPress={()=>cardClick('cash')}>
                        <Text style={styles.cardText}>Cash</Text>
                        <Checkbox
                            style={styles.checkbox}
                            value={isChecked}
                            color={isChecked ? 'green' : undefined}
                        />
                    </Pressable>
                    <Pressable style={styles.card} onPress={()=>cardClick('bank')}>
                        <Text style={styles.cardText}>Bank</Text>
                        <Checkbox
                            style={styles.checkbox}
                            value={bankCheck}
                            color={bankCheck ? 'green' : undefined}
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
        backgroundColor:'gray',
        opacity:0.8,
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
        width:24,
        height:24
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
    },
    couponContainer:{
        flexDirection:'row',
        marginVertical:20
    },
    addBtn:{
        backgroundColor:'blue',
        padding:13,
        width:80,
        borderTopRightRadius:10,
        borderBottomRightRadius:10
    },
    addText:{
        color:'white',
        textAlign:'center',
        fontSize:16,
        fontWeight:'bold'
    },
    input:{
        borderWidth:0.3,
        width:'75%',
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10,
        paddingLeft:20
    }
})

export default Payment;