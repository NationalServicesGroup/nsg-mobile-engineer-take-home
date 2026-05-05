import AppProviders from '@/providers/app-providers';
import { Slot } from 'expo-router';

export default function RootLayout() {
  return (
    <AppProviders>
      <Slot />
    </AppProviders>
  );
}
