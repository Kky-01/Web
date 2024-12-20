import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="48page" options={{ title: '48페이지' }} />
    </Stack>
  );
}
