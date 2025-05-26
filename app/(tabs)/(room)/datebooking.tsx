import Input from '@/components/Input';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useRouter } from 'expo-router';
import moment from 'moment';
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const DateBooking = () => {

  const [date,setDate] = useState(new Date())
  const [showPicker ,setShowPicker] = useState(false)
  const [checkIn,setCheckIn] = useState<Date | null>(null)
  const [checkOutDate,setCheckOutDate] = useState(new Date())
  const [showCheckOut,setShowCheckOut] = useState(false)
  const [showTime,setShowTime] = useState(false)
  const [checkOut,setCheckOut] = useState<Date | null>(null)
  const [showCheckInTime,setShowCheckInTime] = useState(false)

  const toggleDatePicker = () => {
    setShowPicker(!showPicker)
  }

  const onChange = ({type}:any,selectedDate:any) => {
    if(type === 'set'){
      const currentDate = selectedDate;
      setDate(currentDate)
      setShowPicker(false)
      setCheckIn(currentDate)
      setShowCheckInTime(true)
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
      setShowTime(true)
    }else{
      toggelCheckOut()
    }
  }

  const onTimeChange = (event:any, selectTime: Date | undefined) => {
    setShowTime(false);
    if (selectTime) {
      const updatedDate = new Date(checkOutDate);
      updatedDate.setHours(selectTime.getHours());
      updatedDate.setMinutes(selectTime.getMinutes());
      setCheckOutDate(updatedDate);
      setCheckOut(updatedDate)
    }
};

const onCheckInTimeChange = (event:any, selectTime: Date | undefined) => {
    setShowCheckInTime(false);
    if (selectTime) {
      const updatedDate = new Date(date);
      updatedDate.setHours(selectTime.getHours());
      updatedDate.setMinutes(selectTime.getMinutes());
      setDate(updatedDate);
      setCheckIn(updatedDate)
    }
};

  const router = useRouter()

  const Continue = () => {
    router.push("/guestdetail")
  }


  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
          <Text style={styles.label}>Check In</Text>
          {
            !showPicker && (
              <Pressable onPress={toggleDatePicker} style={styles.checkIn}>
                <Text  style={styles.checkText}>{checkIn === null ? 'CheckIn Date' : moment(checkIn).format('llll')   }</Text>
              </Pressable>
            )
          }
          {
            showPicker && (
              <DateTimePicker mode="date" minimumDate={new Date()} value={date} onChange={onChange}/>
            )
          }
          {
            showCheckInTime &&(
              <DateTimePicker mode="time" value={date} onChange={onCheckInTimeChange}/>
            
            )
          }
          
      </View>
       <View style={styles.inputContainer}>
          <Text style={styles.label}>Check Out</Text>
          {
            !showCheckOut && (
              <Pressable onPress={toggelCheckOut}  style={styles.checkIn} disabled={checkIn === null}>
                <Text style={styles.checkText}>{checkOut === null? 'CheckOut Date' : moment(checkOut).format('llll')   }</Text>
              </Pressable>
            )
          }
          {
            showCheckOut && (
              <DateTimePicker mode="date" minimumDate={checkIn ? new Date(checkIn.getTime() + 48 * 60 * 60 * 1000) : new Date()} value={checkOutDate} onChange={checkoutChange}/>
            )
          }
          {
            showTime &&(
              <DateTimePicker mode="time" value={checkOutDate} onChange={onTimeChange}/>
            
            )
          }
      </View>
      <View style={styles.inputContainer}>
          <Text style={styles.label}>Guest Count</Text>
          <Input placeholder='Enter Guest Count' keyboardType="numeric" maxLength={1}/>
      </View>
      <View style={styles.inputContainer}>
          <Text style={styles.label}>Room Type</Text>
          <Input placeholder='Enter RoomType' editable={false}/>
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
