import { useRouter } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const cardImage = require("@/assets/images/loginImage4.png");

const Card = ({item}:any) =>{

    const router = useRouter();

    const roomView = (id:string) => {
        router.navigate({
            pathname:"/(tabs)/(room)/[roomId]",
            params:{roomId:id}
        })
    }

    return (
        <Pressable style={styles.cardContainer} onPress={()=>roomView('2')}>
            {/* <Text style={styles.status}>{item.status}</Text> */}
            <Image source={cardImage} style={styles.cardImage}/>
            <View style={styles.textContainer}>
                <Text style={styles.roomName}>{item.roomNumber}</Text>
                <Text style={styles.locationName}>{item.type}</Text>
                <Text style={styles.price}>{item.price}/night</Text>
            </View>
        </Pressable>
    )
}

export default Card;


const styles = StyleSheet.create({
    cardContainer:{
        width:'47%',
        borderWidth:1,
        height:250,
        marginTop:15,
        borderRadius:10,
        margin:'auto',
        position:'relative'
    },
    cardImage:{
        width:'100%',
        height:'70%',
        borderTopLeftRadius:10,
        borderTopRightRadius:10
    },
    roomName:{
        fontSize:18,
        fontWeight:'bold',
    },
    locationName:{
        fontSize:14
    },
    price:{
        fontSize:14,
        fontWeight:'500',
        textAlign:'right'
    },
    status:{
        position:'absolute',
        top:10,
        right:5,
        color:'white',
        zIndex:1,
        padding:5,
        backgroundColor:'green',
        borderRadius:10
    },
    textContainer:{
        paddingHorizontal:10,
        marginTop:10
    }
})