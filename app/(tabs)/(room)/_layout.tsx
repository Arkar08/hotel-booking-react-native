import { Stack } from "expo-router";

const RoomLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="[roomId]" options={{ headerShown: false }} />
      <Stack.Screen
        name="datebooking"
        options={{title:"Date Booking" }}
      />
      <Stack.Screen name="popular" options={{ headerTitleAlign: "center",title:"Popular" }} />
      <Stack.Screen name="avaliable" options={{ headerTitleAlign: "center",title:"Avaliable" }} />
      <Stack.Screen name="guestdetail" options={{title:"Guest Detail"}}/>
    </Stack>
  );
};

export default RoomLayout;
