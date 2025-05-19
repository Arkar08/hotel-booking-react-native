import Input from '@/components/Input';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useRouter } from 'expo-router';
import moment from 'moment';
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SelectList } from 'react-native-dropdown-select-list';

const DateBooking = () => {

  const [date,setDate] = useState(new Date())
  const [showPicker ,setShowPicker] = useState(false)
  const [checkIn,setCheckIn] = useState('')
  const [checkOutDate,setCheckOutDate] = useState(new Date())
  const [showCheckOut,setShowCheckOut] = useState(false)
  const [checkOut,setCheckOut] = useState('')

  const toggleDatePicker = () => {
    setShowPicker(!showPicker)
  }

  const onChange = ({type}:any,selectedDate:any) => {
    if(type === 'set'){
      const currentDate = selectedDate;
      setDate(currentDate)
      setShowPicker(false)
      setCheckIn(currentDate)
    }else{
      toggleDatePicker()
    }
  }

  const toggelCheckOut = () =>{
    setShowCheckOut(!showCheckOut)
  }

  const checkoutChange = ({type}:any,selectDate:any) => {
    if(type === 'set'){
      const currentDate = selectDate;
      setCheckOutDate(currentDate)
      setCheckOut(currentDate)
      setShowCheckOut(false)
    }else{
      toggelCheckOut()
    }
  }

  const router = useRouter()

  const Continue = () => {
    router.push("/guestdetail")
  }


      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const [selected, setSelected] = useState("");
  
    const data = [
        {key:'1', value:'Mobiles'},
        {key:'2', value:'Appliances'},
        {key:'3', value:'Cameras'},
        {key:'4', value:'Computers'},
        {key:'5', value:'Vegetables'},
        {key:'6', value:'Diary Products'},
        {key:'7', value:'Drinks'},
    ]


  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
          <Text style={styles.label}>Check In</Text>
          {
            !showPicker && (
              <Pressable onPress={toggleDatePicker} style={styles.checkIn}>
                <Text  style={styles.checkText}>{checkIn === '' ? 'CheckIn Date' : moment(checkIn).format("MMM Do YY")   }</Text>
              </Pressable>
            )
          }
          {
            showPicker && (
              <DateTimePicker mode="date" minimumDate={new Date()} display='calendar' value={date} onChange={onChange}/>
            )
          }
      </View>
       <View style={styles.inputContainer}>
          <Text style={styles.label}>Check Out</Text>
          {
            !showCheckOut && (
              <Pressable onPress={toggelCheckOut}  style={styles.checkIn}>
                <Text style={styles.checkText}>{checkOut === '' ? 'CheckOut Date' : moment(checkOut).format("MMM Do YY")   }</Text>
              </Pressable>
            )
          }
          {
            showCheckOut && (
              <DateTimePicker mode="date" minimumDate={new Date()} display='calendar' value={checkOutDate} onChange={checkoutChange}/>
            )
          }
      </View>
      <View style={styles.inputContainer}>
          <Text style={styles.label}>Guest Count</Text>
          <Input placeholder='Enter Guest Count' keyboardType="numeric" maxLength={2}/>
      </View>
      <View style={styles.inputContainer}>
          <Text style={styles.label}>Room Type</Text>
          <SelectList 
              setSelected={setSelected} 
              data={data}
              placeholder='Select Room Type'
              maxHeight={200}
              boxStyles={{backgroundColor:"#E5E5E5",padding:15,borderRadius:20,borderWidth:0}}
          />
      </View>
      <View style={styles.btnContainer}>
        <Pressable style={styles.btn} onPress={Continue}>
          <Text style={styles.btnText}>Continue</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:10,
    position:'relative'
  },
  inputContainer:{
    paddingVertical:10
  },
  checkIn:{
    width:'100%',
    padding:15,
    backgroundColor:'#E5E5E5',
    borderRadius:20,
  },
  checkText:{
    color:'black'
  },
  btnContainer:{
    position:"absolute",
    bottom:10,
    right:10,
    width:'100%'
  },
  btn:{
    padding:15,
    backgroundColor:'blue',
    borderRadius:10,
  },
  btnText:{
    textAlign:'center',
    color:'white'
  },
  label:{
    fontWeight:'bold',
    fontSize:16,
    marginBottom:10
  }
});

export default DateBooking;
