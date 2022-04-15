import * as React from 'react';
import {Button, Text, View, Image, StyleSheet, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './screens/Instagram/home';
import Search from './screens/Instagram/search';
import Reels from './screens/Instagram/reels';
import Activities from './screens/Instagram/activities';

import TabItem from './navigation/Tab';
import Profile from './screens/Instagram/profile';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    // <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{headerShown: false}}>
          <Tab.Screen
            name="Feed"
            component={Home}
            options={{
              tabBarLabel: 'Feed',
              tabBarShowLabel: false,
              tabBarIcon: ({color, size}) => (
                <Image
                  source={require('./assets/icons/home.png')}
                  style={styles.tabIcon}
                />
              ),
            }}
          />

          <Tab.Screen
            name="Search"
            component={Search}
            options={{
              tabBarLabel: 'Search',
              tabBarShowLabel: false,
              tabBarIcon: ({color, size}) => (
                <Image
                  source={require('./assets/icons/search-outline.png')}
                  style={styles.tabIcon}
                />
              ),
            }}
          />

          <Tab.Screen
            name="Reels"
            component={Reels}
            options={{
              tabBarLabel: 'Reels',
              tabBarShowLabel: false,
              tabBarIcon: ({color, size}) => (
                <Image
                  source={require('./assets/icons/reels-outlined.png')}
                  style={styles.tabIcon}
                />
              ),
            }}
          />

          <Tab.Screen
            name="Activities"
            component={Activities}
            options={{
              tabBarLabel: 'Activities',
              tabBarShowLabel: false,
              tabBarIcon: ({color, size}) => (
                <Image
                  source={require('./assets/icons/heart-black.png')}
                  style={styles.tabIcon}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarLabel: 'Profile',
              tabBarShowLabel: false,
              tabBarIcon: ({color, size}) => (
                <Image
                  source={require('./assets/icons/profile.png')}
                  style={styles.tabIcon}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tabIcon: {
    width: 24,
    height: 24,
  },
});
