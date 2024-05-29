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
          headerShown: true, 
          headerTransparent: true, 
          headerTitle: '', 
          headerBackTitle: 'Back',
          headerBackTitleVisible: true
        }} 
      />
      <Stack.Screen 
        name="register" 
        options={{ 
          headerShown: true, 
          headerTransparent: true, 
          headerTitle: '', 
          headerBackTitle: 'Back',
          headerBackTitleVisible: true
        }} 
      />
      <Stack.Screen 
  name="reset" 
  options={{ 
    headerShown: true, 
    headerTransparent: true, 
    headerTitle: '', 
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
      <Stack.Screen 
        name="name" 
        options={{ 
          headerShown: true, 
          headerTransparent: true, 
          headerTitle: '', 
          headerBackTitle: 'Back',
          headerBackTitleVisible: true
        }} 
      />
      <Stack.Screen 
        name="PhoneNumberScreen" 
        
        options={{ 
          headerShown: true, 
          headerTransparent: true, 
          headerTitle: '', 
          headerBackTitle: 'Back',
          headerBackTitleVisible: true
        }} 
      />
      <Stack.Screen 
        name="VerifyScreen" 
        options={{ 
          headerShown: true, 
          headerTransparent: true, 
          headerTitle: '', 
          headerBackTitle: 'Back',
          headerBackTitleVisible: true
        }} 
      />
      <Stack.Screen 
        name="GenderScreen" 
        options={{ 
          headerShown: true, 
          headerTransparent: true, 
          headerTitle: '', 
          headerBackTitle: 'Back',
          headerBackTitleVisible: true
        }} 
      />
    </Stack>
  );
};

export default RootLayout;
