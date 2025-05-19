import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
    name:string,
    route:string
}


const PersonalCard = ({name,route}:Props) =>{

    const router = useRouter()

    const cardClick = () => {
        router.push('/(navigate)/personaldetail')
    }

    return (
        <Pressable style={styles.footerCard} onPress={cardClick}>
            <View style={styles.personal}>
                <FontAwesome name="user" size={22}/>
                <Text style={styles.personalText}>{name}</Text>
            </View>
            <AntDesign name="right" size={22} color="gray" />
        </Pressable>
    )
}

const styles = StyleSheet.create({
     footerCard:{
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:"row",
        padding:10,
        marginTop:8
    },
    personal:{
        flexDirection:'row',
        gap:15,
        alignItems:'center'
    },
    personalText:{
        fontSize:16
    }
})

export default PersonalCard;