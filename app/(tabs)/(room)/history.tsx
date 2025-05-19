import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { Pressable } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

const History = () => {

    const router = useRouter();

    const download = () => {
        alert("download successfully")
        router.push("/(tabs)")
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.imageContainer}>
                {/* image */}
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Payment Successful! Get Ready For</Text>
                <Text style={styles.text1}>Comfortable Stay.</Text>
            </View>
            <View style={styles.mainContainer}>
                <View>
                    <View style={styles.checkContainer}>
                        <Text style={styles.checkText}>Check In</Text>
                        <Text style={styles.detailText}>Mon 22 July</Text>
                    </View>
                    <View style={styles.checkContainer}>
                        <Text style={styles.checkText}>Check In Time</Text>
                        <Text style={styles.detailText}>9:00 AM</Text>
                    </View>
                    <View style={styles.checkContainer}>
                        <Text style={styles.checkText}>
                            Guest Name
                        </Text>
                        <Text style={styles.detailText}>Arkar</Text>
                    </View>
                </View>
                <View>
                    <View style={styles.checkContainer}>
                        <Text style={styles.checkText}>Check Out</Text>
                        <Text style={styles.detailText}>Mon 23 July</Text>
                    </View>
                    <View style={styles.checkContainer}>  
                        <Text style={styles.checkText}>Check Out Time</Text>
                        <Text style={styles.detailText}>12:00 AM</Text>
                    </View>
                      <View style={styles.checkContainer}>
                        <Text style={styles.checkText}>Payment Type</Text>
                        <Text style={styles.detailText}>Cash</Text>
                    </View>
                </View>
            </View>
            <View>
                <Pressable style={styles.btnContainer} onPress={download}>
                    <Text style={styles.btnText}>Download Invoice</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    imageContainer:{
        height:300
    },
    textContainer:{
        gap:10,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontSize:20,
        fontWeight:'bold'
    },
    text1:{
        fontSize:20,
        fontWeight:'semibold',
        color:'gray'
    },
    mainContainer:{
        paddingHorizontal:30,
        paddingVertical:20,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        gap:10
    },
    checkContainer:{
        marginTop:10
    },
    checkText:{
        fontSize:18,
        fontWeight:'bold',
        textAlign:'left',
        paddingVertical:10
    },
    detailText:{
        fontSize:14,
        fontWeight:'500',
        color:'gray'
    },
    btnContainer:{
        padding:15,
        borderRadius:10,
        backgroundColor:"blue",
        width:'90%',
        margin:'auto'
    },
    btnText:{
        color:"white",
        fontSize:18,
        textAlign:'center'
    }
})

export default History;