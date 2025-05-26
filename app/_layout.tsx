import AuthProvider from "@/context/AuthContext";
import RoomProvider from "@/context/RoomContext";
import { ProtectedRoute } from "@/routes/ProtectedRoute";
import { Stack, } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {

  return (
        <GestureHandlerRootView>
          <SafeAreaProvider>
            <AuthProvider>
              <RoomProvider>
                <ProtectedRoute>
                  <Stack>
                      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                      <Stack.Screen name="auth/login" options={{ headerShown: false }} />
                      <Stack.Screen name="auth/register"  options={{ headerShown: false }}/>
                  </Stack>
                </ProtectedRoute>
              </RoomProvider>
            </AuthProvider>
            <StatusBar style="auto" />
          </SafeAreaProvider>
        </GestureHandlerRootView>
  );
}
