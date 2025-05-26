import { StyleSheet, Text, TouchableOpacity } from "react-native";

type buttonType = {
    title:any;
    click:() => void;
    customStyles?:any;
}

const ButtonProps = ({title,click,customStyles ={}}:buttonType) =>{
    return (
        <TouchableOpacity style={[styles.button,customStyles]} onPress={click}>
            <Text style={styles.text}>
                {title}
            </Text>
        </TouchableOpacity>
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