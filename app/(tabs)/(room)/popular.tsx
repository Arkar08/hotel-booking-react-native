import AvaliableCard from "@/components/AvaliableCard";
import { data } from "@/utils/dummy";
import { StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const Popular = () => {
  return (
    <View style={styles.container}>
      <View>
        <FlatList
          data={data}
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

export default Popular;
