import { useRouter } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const cardImage = require("@/assets/images/loginImage4.png");

const AvaliableCard = ({item}:any) => {

    const router = useRouter();

    const viewRoom = (id:string) => {
        router.navigate({
            pathname:"/(tabs)/(room)/[roomId]",
            params:{roomId:id}
        })
    }

    return (
        <Pressable style={styles.card} onPress={()=>viewRoom('2')}>
            <Image source={cardImage} style={styles.cardImage}/>
            <View style={styles.textContainer}>
                <View>
                    <Text style={styles.roomName}>{item.roomNumber}</Text>
                </View>
                <View>
                    <Text style={styles.locationName}>{item.type}</Text>
                </View>
                <View>
                    <Text style={styles.price}>{item.price}/night</Text>
                </View>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>{item.status}</Text>
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    card:{
        width:350,
        height:300,
        borderWidth:0.5,
        borderRadius:20,
        position:'relative',
        marginTop:10,
        marginHorizontal:'auto'
    },
    cardImage:{
        width:'100%',
        height:'60%',
        borderTopLeftRadius:20,
        borderTopRightRadius:20
    },
    button:{
        backgroundColor:'green',
        padding:8,
        borderRadius:5,
        width:'40%',
        position:"absolute",
        right:10,
        bottom:-5,
        borderWidth:0,
    },
    buttonText:{
        color:'white',
        textAlign:'center',
        fontSize:12
    },
    roomName:{
        fontSize:18,
        fontWeight:'bold',
        marginBottom:10
    },
    locationName:{
        fontSize:14
    },
    price:{
        fontSize:14,
        fontWeight:'bold',
        marginVertical:10
    },
    textContainer:{
        marginTop:5,
        paddingHorizontal:10
    },
})

export default AvaliableCard;