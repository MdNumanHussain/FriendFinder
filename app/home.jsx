import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Using MaterialCommunityIcons as an example

function HomeScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.message}>Home Screen</Text>
    </View>
  );
}

function ExploreScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.message}>Explore Screen</Text>
    </View>
  );
}

function SocialScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.message}>Social Screen</Text>
    </View>
  );
}

function ChatScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.message}>Chat Screen</Text>
    </View>
  );
}

function MenuScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.message}>Menu Screen</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function InsideAppScreen() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Explore') {
            iconName = focused ? 'magnify' : 'magnify';
          } else if (route.name === 'Social') {
            iconName = focused ? 'forum' : 'forum-outline';
          } else if (route.name === 'Chat') {
            iconName = focused ? 'message-text' : 'message-text-outline';
          } else if (route.name === 'Menu') {
            iconName = focused ? 'menu' : 'menu';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: [{ display: "flex" }]
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Explore" component={ExploreScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Social" component={SocialScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Chat" component={ChatScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Menu" component={MenuScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  message: {
    fontSize: 20,
    color: 'black',
  },
});
