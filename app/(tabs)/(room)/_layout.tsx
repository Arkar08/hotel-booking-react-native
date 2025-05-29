import { Stack } from "expo-router";

const RoomLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="[roomId]" options={{ headerShown: false }} />
    </Stack>
  );
};

export default RoomLayout;
