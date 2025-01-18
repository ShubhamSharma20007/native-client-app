import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { CustomerContextProvide } from "./context/customerContext";
export const unstable_settings = {
  initialRouteName: "(tabs)",
};
import Toast from "react-native-toast-message";
import { getLocalStorage } from "@/helper/asyncStorage";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

export default function Layout() {
  const router = useRouter();
  const _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('token')
      if (value === null) {
        router.push('/')
      }
    } catch (error:any) {
     throw new Error(error)
    }
  };
  useEffect(()=>{
    _retrieveData()
  },[])
  return (
    <CustomerContextProvide>
      <GestureHandlerRootView
        style={{
          flex: 1,
        }}
      >
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="index" />
          <Stack.Screen name="register" />
          <Stack.Screen
            name="personAddForm"
            options={{
              headerShown: true,
              presentation: "modal",
              animation: "slide_from_bottom", // Use slide_from_bottom animation
              animationDuration: 400, // Adjust animation duration
            }}
          />
          <Stack.Screen
            name="resetPassword"
            options={{
              presentation: "modal",
              animation: "slide_from_bottom",
              animationDuration: 400,
              title: "Reset Password",
              headerTitleStyle: {
                color: "#1a237e",
              },
            }}
          />
        </Stack>
        <Toast />
      </GestureHandlerRootView>
    </CustomerContextProvide>
  );
}
