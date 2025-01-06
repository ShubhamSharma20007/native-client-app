import { Stack } from "expo-router";
export const unstable_settings = {
  initialRouteName: "(tabs)",
};
import Toast from "react-native-toast-message";
export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="index" />
      <Stack.Screen name="register" />
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
  );
}
