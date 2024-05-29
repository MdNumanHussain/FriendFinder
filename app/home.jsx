import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const menuOptions = [
  { icon: 'account', text: 'Edit Profile', route: 'EditProfile' },
  { icon: 'filter', text: 'Search filters', route: 'SearchFilters' },
  { icon: 'cog', text: 'Settings', route: 'Settings' }, // Ensure the correct icon name for settings
  { icon: 'help-circle', text: 'Help Center', route: 'HelpCenter' },
  { icon: 'account-check', text: 'Contact support', route: 'ContactSupport' },
  { icon: 'account-plus', text: 'Invite friends', route: 'InviteFriends' },
];

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
  const navigation = useNavigation();
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate(item.route)}>
      <Icon name={item.icon} size={30} color="#000" style={styles.menuIcon} />
      <Text style={styles.menuText}>{item.text}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.menuScreen}>
      <View style={styles.profileHeader}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Icon name="account-circle" size={100} color="#000" style={styles.profileIcon} />
        </TouchableOpacity>
        <Text style={styles.profileName}>Numan</Text>
        <TouchableOpacity style={styles.viewProfileButton}>
          <Text style={styles.viewProfileText}>View profile</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={menuOptions}
        renderItem={renderItem}
        keyExtractor={(item) => item.text}
        contentContainerStyle={styles.menuList}
      />
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
  menuScreen: {
    flex: 1,
    backgroundColor: 'white',
  },
  profileHeader: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  profileIcon: {
    marginTop: 50,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  viewProfileButton: {
    marginTop: 10,
  },
  viewProfileText: {
    color: '#007AFF',
  },
  menuList: {
    padding: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  menuIcon: {
    marginRight: 15,
  },
  menuText: {
    fontSize: 18,
  },
});
