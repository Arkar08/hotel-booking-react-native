import ButtonProps from '@/components/Button';
import Input from '@/components/Input';
import { Checkbox } from 'expo-checkbox';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Pressable, ScrollView } from "react-native-gesture-handler";

const Payment = () => {

    const [checked,setChecked] = useState(false)
      const data = useLocalSearchParams();
      const store = data.data ? JSON.parse(data.data as string) : {};


    const router = useRouter();
    const booking = () => {
        alert("booking successfully.")
        router.push({pathname:"/history"})
    }

    const cardClick = () => {
        setChecked(!checked)
    }

    const Pay = () => {
        console.log("pay")
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
                        <Text style={styles.checkText}>{store.checkIn}</Text>
                        <Text style={styles.checkText}>9:00 AM</Text>
                    </View>
                    <View style={styles.bar}></View>
                    <View style={styles.checkCard}>
                        <Text style={styles.checkText}>Check Out</Text>
                        <Text style={styles.checkText}>{store.checkOut}</Text>
                        <Text style={styles.checkText}>12:00 AM</Text>
                    </View>
                </View>
            </View>
            <View  style={styles.mainContainer}>
                <Text style={styles.mainText}>Guest Details</Text>
                <View style={styles.guest}>
                    <Text style={styles.guestText}>Name: {store.users.name}</Text>
                    <Text style={styles.guestText}>Email: {store.users.email}</Text>
                    <Text style={styles.guestText}>PhNo: 0{store.users.phoneNumber}</Text>
                </View>
            </View>
            <View  style={styles.mainContainer}>
                <Text style={styles.mainText}>Room Details</Text>
                <View style={styles.guest}>
                    <Text style={styles.guestText}>{store.roomType} ({store.roomNo})</Text>
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
                        <Text style={styles.guestText1}>0Ks</Text>
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
                    <Pressable style={styles.card} onPress={cardClick}>
                        <Text style={styles.cardText}>Deposit Payment</Text>
                        <Checkbox
                            style={styles.checkbox}
                            value={checked}
                            color={checked ? 'green' : undefined}
                        />
                    </Pressable>
                </View>
                {
                    checked && (
                        <View style={styles.depositCard}>
                                <View style={styles.cardHeader}>
                                    <Text style={styles.depositText}>Deposit Amount</Text>
                                    <Text style={styles.depositText}>10000Ks</Text>
                                </View>
                                <View style={{padding:10}}>
                                    <View style={{marginTop:10}}>
                                        <Text style={{marginBottom:5}}>Account Name:</Text>
                                        <Input placeholder='Enter accountName'/>
                                    </View>
                                    <View style={{marginTop:10}}>
                                        <Text style={{marginBottom:5}}>Bank Account No:</Text>
                                        <Input placeholder='Enter accountNo'/>
                                    </View>
                                    <View style={{marginTop:10}}>
                                        <Text style={{marginBottom:5}}>Secret Pin:</Text>
                                        <Input placeholder='Enter secretPin'/>
                                    </View>
                                    <View style={{marginTop:10,width:'50%',margin:'auto'}}>
                                        <ButtonProps title='Pay' click={Pay} customStyles={styles.btnList}/>
                                    </View>
                                </View>
                        </View>
                    )
                }
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
        marginHorizontal:5,
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
    },
    depositCard:{
        borderRadius:10,
        borderWidth:0.3
    },
    cardHeader:{
        borderBottomWidth:0.3,
        padding:10,
        flexDirection:'row',
        justifyContent:'space-between',
        height:50,
        alignItems:'center'
    },
    depositText:{
        fontSize:16,
        fontWeight:'bold'
    },
    btnList:{
        backgroundColor:"black"
    }
})

export default Payment;