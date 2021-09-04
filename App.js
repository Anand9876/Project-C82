import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FeedScreen from './screens/Feed';
import CreatePostScreen from './screens/CreatePost';
import { Ionicons } from '@expo/vector-icons';
import DrawerNavigator from './navigation/DrawerNavigation';

const Tab =createBottomTabNavigator();

const BottomTabNavigator=()=>{
  return(
    <NavigationContainer>
    <DrawerNavigator/>
    </NavigationContainer>
  )
}
export default BottomTabNavigator;

