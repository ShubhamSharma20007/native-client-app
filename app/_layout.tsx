import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
export const unstable_settings = {
  initialRouteName: "(tabs)",
};
import Toast from "react-native-toast-message";
export default function Layout() {
  return (
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
  );
}
