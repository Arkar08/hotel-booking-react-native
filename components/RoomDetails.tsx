import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

interface Props {
  item:string
}

interface dataProps {
      data:string[]
}

const RenderList = ({item}:Props) => {
  return (
    <Text style={styles.itemText}>{item}</Text>
  )
}

const RoomFlat = ({data}:dataProps) => {
  return (
    <View>
      <FlatList data={data} keyExtractor={(item,index)=> index.toString()} renderItem={({item}:Props) => <RenderList item={item}/>}/>
    </View>
  )
}

const styles = StyleSheet.create({
  itemText: {
    fontSize: 14,
    fontWeight:400,
    marginHorizontal:20,
    padding:4,
    marginTop:10
  },
})

export default RoomFlat
