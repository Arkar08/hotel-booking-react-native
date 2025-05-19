import Ionicons from "@expo/vector-icons/Ionicons"
import { Keyboard, KeyboardAvoidingView, Modal, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native"
import { ScrollView } from "react-native-gesture-handler"

type ModalProps = {
    title:string,
    children:React.ReactNode,
    visiable:boolean,
    close:()=>void
}


const Modals = ({title,children,visiable,close}:ModalProps) => {
    return (
        <Modal visible={visiable} onRequestClose={close} transparent animationType="slide">
            <View style={{flex:1}}>
                <KeyboardAvoidingView 
                behavior="padding"
                style={{flex:1,justifyContent:'center'}}
                >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={{backgroundColor:'white',borderWidth:1,borderRadius:10,padding:12,margin:12}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginBottom:6}}>
                        <Text style={{fontSize:24,fontWeight:'bold'}}>{title}</Text>
                        <TouchableOpacity onPress={close}>
                        <Ionicons name="close" size={24} color="#6b7280" />
                        </TouchableOpacity>
                    </View>
                    <ScrollView 
                        style={styles.container}
                        showsVerticalScrollIndicator={false}
                        keyboardShouldPersistTaps="handled"
                        contentContainerStyle={{ paddingBottom: 20 }}
                    >
                        {children}
                    </ScrollView>
                    </View>
                </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container:{
        maxHeight:700
    }
})

export default Modals;