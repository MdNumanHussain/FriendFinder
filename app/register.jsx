import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import Modal from 'react-native-modal';
import { auth } from './firebaseConfig'; // Ensure correct import path
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function RegisterScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [tempDob, setTempDob] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isErrorModalVisible, setIsErrorModalVisible] = useState(false);
  const navigation = useNavigation();

  const handleRegister = () => {
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      setIsErrorModalVisible(true);
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('User registered:', userCredential.user);
        // Add any additional registration logic here
      })
      .catch((error) => {
        console.error('Registration error:', error);
        setErrorMessage(getFriendlyErrorMessage(error.code));
        setIsErrorModalVisible(true);
      });
  };

  const getFriendlyErrorMessage = (errorCode) => {
    switch (errorCode) {
      case 'auth/email-already-in-use':
        return 'This email is already in use.';
      case 'auth/invalid-email':
        return 'Invalid email address.';
      case 'auth/weak-password':
        return 'Password is too weak. It should be at least 6 characters.';
      case 'auth/operation-not-allowed':
        return 'Operation not allowed. Please contact support.';
      default:
        return 'An unknown error occurred. Please try again.';
    }
  };

  const handleDateChange = (event, selectedDate) => {
    if (selectedDate) {
      setTempDob(selectedDate);
    }
  };

  const handleConfirmDate = () => {
    const day = String(tempDob.getDate()).padStart(2, '0');
    const month = String(tempDob.getMonth() + 1).padStart(2, '0');
    const year = tempDob.getFullYear();
    setDob(`${day}/${month}/${year}`);
    setShowDatePicker(false);
  };

  const screenWidth = Dimensions.get('window').width;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>

      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={name}
        onChangeText={setName}
      />

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

      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />

      <View style={styles.datePickerContainer}>
        <View style={styles.datePickerInputContainer}>
          <TextInput
            style={styles.datePickerInput}
            placeholder="Select Date of Birth"
            value={dob}
            editable={false}
          />
          <TouchableOpacity onPress={() => setShowDatePicker(true)}>
            <FontAwesome name="calendar" size={24} color="green" style={styles.calendarIcon} />
          </TouchableOpacity>
        </View>
      </View>

      {showDatePicker && (
        <View style={styles.dateTimePickerWrapper}>
          <DateTimePicker
            value={tempDob}
            mode="date"
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            onChange={handleDateChange}
          />
          <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmDate}>
            <Text style={styles.confirmButtonText}>Confirm</Text>
          </TouchableOpacity>
        </View>
      )}

      <TouchableOpacity style={[styles.registerButton, { width: screenWidth - 40 }]} onPress={handleRegister}>
        <Text style={styles.registerButtonText}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('login')}>
        <Text style={styles.loginLink}>Already have an account? Log in</Text>
      </TouchableOpacity>

      <Modal isVisible={isErrorModalVisible}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Error</Text>
          <Text>{errorMessage}</Text>
          <TouchableOpacity style={styles.closeButton} onPress={() => setIsErrorModalVisible(false)}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333333',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  datePickerContainer: {
    width: '100%',
    marginBottom: 20,
  },
  datePickerLabel: {
    fontSize: 14,
    color: '#333333',
    marginBottom: 5,
  },
  datePickerInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  datePickerInput: {
    flex: 1,
    height: 50,
    paddingHorizontal: 15,
  },
  calendarIcon: {
    marginLeft: 10,
  },
  dateTimePickerWrapper: {
    alignItems: 'center',
  },
  confirmButton: {
    marginTop: 10,
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
  },
  confirmButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  registerButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  registerButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  loginLink: {
    marginTop: 20,
    color: '#007AFF',
    textDecorationLine: 'underline',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
