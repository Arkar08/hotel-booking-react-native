import { StyleSheet, TextInput } from "react-native";

const Input = ({...props}) =>{
    return (
        <TextInput style={[styles.inputBox]} {...props} autoComplete="off"/>
    )
}

const styles = StyleSheet.create({
    inputBox:{
        backgroundColor:'#E5E5E5',
        padding:15,
        borderRadius:20
    }
})

export default Input;