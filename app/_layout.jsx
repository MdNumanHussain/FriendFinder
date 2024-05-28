import React from 'react';
import { Stack } from 'expo-router';

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen 
        name="index" 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="login" 
        options={{ 
          headerShown: false, 
          title: 'Login', 
          headerBackTitle: 'Back',
          headerBackTitleVisible: false
        }} 
      />
      <Stack.Screen 
        name="register" 
        options={{ 
          headerShown: false, 
          title: 'Register', 
          headerBackTitle: 'Back',
          headerBackTitleVisible: false
        }} 
      />
      <Stack.Screen 
        name="reset" 
        options={{ 
          headerShown: true, 
          title: 'Reset Password', 
          headerBackTitle: 'Back',
          headerBackTitleVisible: true
        }} 
      />
      <Stack.Screen 
        name="home" 
        options={{ 
          headerShown: true, 
          title: 'Home', 
          headerBackTitle: 'Back',
          headerBackTitleVisible: true
        }} 
      />
    </Stack>
  );
};

export default RootLayout;
