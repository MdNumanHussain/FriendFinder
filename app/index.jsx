import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';
import { useNavigation } from 'expo-router';

export default function WelcomeScreen() {
  const navigation = useNavigation();
  const [loginHover, setLoginHover] = useState(false);
  const [registerHover, setRegisterHover] = useState(false);

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/friendship.png')} style={styles.image}>
        <View style={styles.header}>
          <Image source={require('../assets/logo.png')} style={styles.logo} />
          <View style={styles.appNameContainer}>
            <Text style={styles.appName}>Meet Mate</Text>
          </View>
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>Find Friends Near You</Text>
          <Text style={styles.subtitle}>Connect with people in your area based on shared interests and activities.</Text>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity
            style={[styles.button, styles.loginButton, loginHover && styles.hoverButton]}
            onPress={() => navigation.navigate('login')}
            onPressIn={() => setLoginHover(true)}
            onPressOut={() => setLoginHover(false)}
          >
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.registerButton, registerHover && styles.hoverButton]}
            onPress={() => navigation.navigate('register')}
            onPressIn={() => setRegisterHover(true)}
            onPressOut={() => setRegisterHover(false)}
          >
            <Text style={styles.registerText}>Register</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    marginTop: 5,
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  appNameContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 10,
  },
  appName: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'red',
    textAlign: 'center',
    fontFamily: 'PT Sans',
  },
  content: {
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    color: '#fff',
    padding: 10,
    borderRadius: 20,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
    borderRadius: 20,
    marginBottom: 40,
  },
  buttons: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  button: {
    width: '80%',
    padding: 15,
    marginVertical: 10,
    borderRadius: 15,
  },
  loginButton: {
    backgroundColor: '#007BFF', // A blue background color
  },
  registerButton: {
    backgroundColor: '#6c757d', // A gray background color
  },
  loginText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  registerText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  hoverButton: {
    opacity: 0.8, // Change opacity on hover
  },
});
