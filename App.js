import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import LoginScreen from './LoginScreen';
import ForgotPasswordScreen from './ForgotPasswordScreen';
import HomeScreen from './components/screens/HomeScreen';
import SettingsScreen from './components/screens/SettingsScreen';
import SearchScreen from './components/screens/SearchScreen';
import VideoScreen from './components/screens/VideoScreen';
import PaginastartScreen from './components/screens/PaginastartScreen';

import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const CustomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            style={styles.tabItem}
            onPress={onPress}
            onLongPress={onLongPress}
            key={index}>
            <Icon
              name={
                label === 'DeltaX'
                  ? 'home-outline'
                  : label === 'Settings'
                  ? 'settings-outline'
                  : label === 'Search'
                  ? 'search-outline'
                  : 'videocam-outline'
              }
              size={30}
              color={isFocused ? 'white' : 'gray'}
            />
            <Text style={{ color: isFocused ? 'white' : 'gray' }}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const AppTabs = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      initialRouteName="DeltaX">
      <Tab.Screen name="DeltaX" component={HomeScreen} />
      <Tab.Screen name="Video" component={VideoScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Paginastart" component={PaginastartScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    backgroundColor: 'black',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 68,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="Main" component={PaginastartScreen} />
        <Stack.Screen name="App" component={AppTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
