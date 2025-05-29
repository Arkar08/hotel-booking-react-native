import { Stack } from "expo-router";

const BookingLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="payment" options={{title:"Review Details"}} />
      <Stack.Screen name="history" options={{ headerShown: false }} />
    </Stack>
  );
};

export default BookingLayout;
