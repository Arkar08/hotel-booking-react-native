import { Pressable, StyleSheet, Text } from "react-native";

type buttonType = {
    title:any;
    click:() => void;
}

const ButtonProps = ({title,click}:buttonType) =>{
    return (
        <Pressable style={[styles.button]} onPress={click}>
            <Text style={styles.text}>
                {title}
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button:{
        padding:12,
        backgroundColor:"blue",
        borderRadius:20,
        marginTop:10
    },
    text:{
        textAlign:'center',
        fontSize:18,
        color:'white',
        letterSpacing:3
    }
})

export default ButtonProps;