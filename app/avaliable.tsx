import AvaliableCard from "@/components/AvaliableCard";
import { useRoom } from "@/hooks/useRoom";
import { StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const Avaliable = () => {

  const {availableRoom} = useRoom()

  return (
    <View style={styles.container}>
      <View>
        <FlatList
          data={availableRoom}
          keyExtractor={(data) => data.id}
          renderItem={AvaliableCard}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom:10
  },
});

export default Avaliable;
