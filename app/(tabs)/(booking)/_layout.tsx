import { Stack } from "expo-router";

const BookingLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
};

export default BookingLayout;
