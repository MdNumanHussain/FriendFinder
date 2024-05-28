import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from 'expo-router';

export default function WelcomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={require('../assets/friendship.png')} style={styles.image} />
      <Text style={styles.title}>Find Friends Near You</Text>
      <Text style={styles.subtitle}>Connect with people in your area based on shared interests and activities.</Text>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('login')}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('register')}>
          <Text style={styles.loginText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 10,
    textAlign: 'center',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
    marginTop: 20,
  },
  loginButton: {
    backgroundColor: '#007BFF', // A blue background color
    padding: 10,
    borderRadius: 5, // Rounded corners
  },
  loginText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  registerButton: {
    backgroundColor: '#6c757d', // A gray background color
    padding: 10,
    borderRadius: 5, // Rounded corners
  },
  registerText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
