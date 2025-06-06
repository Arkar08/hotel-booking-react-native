import { rooms } from "@/utils/type";
import { useRouter } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const cardImage = require("@/assets/images/loginImage4.png");

interface Props {
    item:rooms
}

const Card = ({item}:Props) =>{

    const router = useRouter();

    const roomView = (id:string) => {
        router.navigate({
            pathname:"/(tabs)/(room)/[roomId]",
            params:{roomId:id}
        })
    }

    const imageArray = JSON.parse(item.imgUrl)

    const images = imageArray.length === 0 ? cardImage :imageArray[0]
    return (
        <Pressable style={styles.cardContainer} onPress={()=>roomView(item.id)}>
            <Text style={styles.status}>{item.status}</Text>
            <Image source={{uri:images}} style={styles.cardImage}/>
            <View style={styles.textContainer}>
                <Text style={styles.roomName}>{item.roomNo}</Text>
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
        borderWidth:0.3,
        height:280,
        borderRadius:10,
        marginHorizontal:'auto',
        position:'relative',
        marginBottom:30
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