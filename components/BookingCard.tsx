import { useRouter } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";


const cardImage = require("@/assets/images/icon.png");

const BookingCard = () =>{

    const router = useRouter();

    const bookingHistory = () => {
        router.push("/(tabs)/(room)/history")
    }

    return (
        <View style={styles.cardContainer}>
            <View style={styles.headerContainer}>
                <Text style={styles.date}>22 july,2022</Text>
                <View style={styles.statusContainer}>
                    <Text style={styles.status}>Booked</Text>
                </View>
            </View>
            <View style={styles.middleContainer}>
                <View>
                    <Image source={cardImage} style={styles.cardImage}/>
                </View>
                <View>
                    <Text style={styles.roomNumber}>RoomNumber</Text>
                    <Text style={styles.typeText}>2 Guests,1 Standand</Text>
                </View>
            </View>
            <View style={styles.bottomContainer}>
                <Text style={styles.priceText}>Total Price - <Text style={styles.price}>3000Ks</Text></Text>
                <Pressable style={styles.button} onPress={bookingHistory}>
                    <Text style={styles.buttonText}>View Details</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default BookingCard;

const styles = StyleSheet.create({
    cardContainer:{
        width:'95%',
        height:230,
        borderWidth:1,
        margin:'auto',
        borderRadius:10,
        marginTop:20,
        padding:10
    },
    headerContainer:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        borderBottomWidth:0.5,
        borderBottomColor:'gray',
        flexDirection:'row',
        paddingBottom:5
    },
    date:{
        fontWeight:'400'
    },
    statusContainer:{
        paddingHorizontal:15,
        paddingVertical:2,
        backgroundColor:'#3944bc',
        borderRadius:10
    },
    status:{
        color:'#63c5da'
    },
    cardImage:{
        width:120,
        height:120,
        borderRadius:20,
        padding:5
    },
    middleContainer:{
        display:'flex',
        gap:5,
        alignItems:'center',
        borderBottomWidth:0.5,
        borderBottomColor:'gray',
        flexDirection:'row',
        padding:5
    },
    typeText:{
        fontWeight:'400'
    },
    roomNumber:{
        fontSize:18,
        fontWeight:'500',
        paddingBottom:10
    },
    bottomContainer:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        marginTop:10
    },
    price:{
        color:'blue'
    },
    priceText:{
        fontSize:18
    },
    button:{
        paddingHorizontal:15,
        paddingVertical:10,
        backgroundColor:'blue',
        borderRadius:20
    },
    buttonText:{
        color:'white'
    }
})