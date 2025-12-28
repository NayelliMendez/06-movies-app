import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Stack } from 'expo-router';
import React from 'react';
import "../global.css";

// Crea una instancia de QueryClient fuera del componente
const queryClient = new QueryClient();

export default function RootLayout() {
  return (
   
    <QueryClientProvider client={queryClient}>
    
        {/* El Stack aquí actúa como el navegador principal */}
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        />

    </QueryClientProvider>
  );
}