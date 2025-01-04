import { Stack } from "expo-router";
export const unstable_settings = {
  initialRouteName: "(tabs)",
};

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="index" />
      <Stack.Screen name="register" />
    </Stack>
  );
}
