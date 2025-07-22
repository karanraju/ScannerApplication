import React, {useRef, useState} from 'react';
import {View, Text, Alert, Image, StyleSheet, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {WebView} from 'react-native-webview';
import {HomeScreen} from './src/screens/Home';
import {Svg, Circle} from 'react-native-svg';
import HomeIcon from './src/assets/svg/HomeIcon';
import AppointmentIcon from './src/assets/svg/AppointmentIcon';
import CertificateIcon from './src/assets/svg/CertificateIcon';
import DocIcon from './src/assets/svg/DocIcon';
import {Provider} from 'react-redux';

import {ProfileScreen} from './src/screens/Profile';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import Route from './src/route';
import {store} from './src/redux/store';

const Tab = createBottomTabNavigator();

export default function App() {
  const [url, setUrl] = useState();
  return (
    <>
      <Provider store={store}>
        <Route />
      </Provider>
    </>
  );
}
