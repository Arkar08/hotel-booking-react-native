import { Stack } from "expo-router";

const ProfileLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="notification" />
      <Stack.Screen name="personaldetail" options={{ headerShown: false }} />
    </Stack>
  );
};

export default ProfileLayout;
