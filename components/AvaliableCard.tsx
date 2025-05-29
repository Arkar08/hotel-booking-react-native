import { useRouter } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";


const AvaliableCard = ({item}:any) => {

    const router = useRouter();

    const imageArray = JSON.parse(item.imgUrl)
    
    const viewRoom = (id:string) => {
        router.navigate({
            pathname:"/(tabs)/(room)/[roomId]",
            params:{roomId:id}
        })
    }

    return (
        <Pressable style={styles.card} onPress={()=>viewRoom(item.id)}>
            <Image source={{uri:imageArray[0]}} style={styles.cardImage}/>
            <View style={styles.textContainer}>
                <View>
                    <Text style={styles.roomName}>{item.roomNo}</Text>
                </View>
                <View>
                    <Text style={styles.locationName}>{item.type}</Text>
                </View>
                <View>
                    <Text style={styles.price}>{item.price}Ks/night</Text>
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
        borderWidth: 0.3,
        borderRadius:10,
        position:'relative',
        marginVertical:30,
        marginHorizontal:'auto'
    },
    cardImage:{
        width:'100%',
        height:'60%',
        borderTopLeftRadius:10,
        borderTopRightRadius:10
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