import AuthProvider from "@/context/AuthContext";
import BookingProvider from "@/context/BookingContext";
import RoomProvider from "@/context/RoomContext";
import { ProtectedRoute } from "@/routes/ProtectedRoute";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <GestureHandlerRootView>
      <SafeAreaProvider>
        <AuthProvider>
          <RoomProvider>
            <BookingProvider>
              <ProtectedRoute>
                <Stack>
                  <Stack.Screen
                    name="(tabs)"
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="auth/login"
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="auth/register"
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen name="avaliable" options={{headerTitleAlign:'center',headerTitle: 'Available'}} />
                  <Stack.Screen name="datebooking" options={{headerTitleAlign:'center',headerTitle: 'Date booking'}}/>
                  <Stack.Screen name="guestdetail"   options={{headerTitleAlign:'center',headerTitle: 'Guest Detail'}}/>
                  <Stack.Screen name="history" options={{ headerShown: false }}/>
                  <Stack.Screen name="notification" options={{headerTitleAlign:'center',headerTitle: 'Notification'}}/>
                  <Stack.Screen name="payment" options={{ headerShown: false }}/>
                  <Stack.Screen name="personaldetail" options={{ headerShown: false }}/>
                  <Stack.Screen name="popular" options={{headerTitleAlign:'center',headerTitle: 'Popular'}}/>
                </Stack>
              </ProtectedRoute>
            </BookingProvider>
          </RoomProvider>
        </AuthProvider>
        <StatusBar style="auto" />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
