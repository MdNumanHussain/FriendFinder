import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation(); 
  const screenWidth = Dimensions.get('window').width;
  const handleSignIn = () => {
    navigation.navigate('home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login here</Text>
      <Text style={styles.subtitle}>Welcome back, you've been missed!</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('reset')}>
        <Text style={styles.forgotPassword}>Forgot your password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.signInButton, { width: screenWidth - 40 }]} onPress={handleSignIn}>
        <Text style={styles.signInButtonText}>Sign in</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('register')}>
        <Text style={styles.createNewAccount}>Create new account</Text>
      </TouchableOpacity>
      <Text style={styles.continueWith}>Or continue with</Text>
      <View style={styles.socialButtons}>
        <TouchableOpacity style={styles.socialButton}>
          <AntDesign name="google" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <FontAwesome name="facebook" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Ionicons name="logo-apple" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
    marginTop: -50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1A1A1A',
    marginBottom: 25,
    marginTop: 25,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#4B4B4B',
    marginBottom: 25,
  },
  input: {
    height: 50,
    borderColor: '#E0E0E0',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 25,
    backgroundColor: '#FFF',
  },
  forgotPassword: {
    textAlign: 'right',
    color: '#4B4B4B',
    marginBottom: 25,
  },
  signInButton: {
    backgroundColor: '#0056D2',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 25,
  },
  signInButtonText: {
    color: '#FFF',
  },
  createNewAccount: {
    textAlign: 'center',
    color: '#4B4B4B',
    marginBottom: 25,
  },
  continueWith: {
    textAlign: 'center',
    color: '#4B4B4B',
    marginBottom: 25,
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 25,
  },
  socialButton: {
    marginLeft: 30,
    marginRight: 30,
    margin: 5,
  },
});
