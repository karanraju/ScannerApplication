import React, {useRef, useState} from 'react';
import {View, Text, Alert, Image, StyleSheet, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {WebView} from 'react-native-webview';
import {HomeScreen} from '../screens/Home';
import {Svg, Circle} from 'react-native-svg';
import HomeIcon from '../assets/svg/HomeIcon';
import AppointmentIcon from '../assets/svg/AppointmentIcon';
import CertificateIcon from '../assets/svg/CertificateIcon';
import DocIcon from '../assets/svg/DocIcon';
import {ProfileScreen} from '../screens/Profile';
import {Billing} from '../screens/Billing';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import {DrawerNavigator} from './drawerNavigator';
import {Follow} from '../screens/Follow';
import DialerScreen from '../screens/DialerScreen';
import Contact from '../screens/Contact';
import {AddPhoneNumber} from '../screens/AddPhoneNumber';

const SettingsScreen = () => {
  return (
    <View style={{flex: 1}}>
      <Text>hello world</Text>
    </View>
  );
};

const Tab = createBottomTabNavigator();

export default function Route() {
  const [url, setUrl] = useState();
  return (
    <NavigationContainer>
      {url !== 'https://uat.midashealthservices.com.np/pa/patient-profile' ? (
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarStyle: {...styles?.tabbarStyle},

            tabBarIcon: ({focused, color, size}) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'History') {
                iconName = focused ? 'person' : 'person-outline';
              } else if (route.name === 'Settings') {
                iconName = focused ? 'settings' : 'settings-outline';
              } else if (route.name === 'History') {
                iconName = focused ? 'settings' : 'settings-outline';
              } else if (route.name === 'Billing') {
                iconName = focused ? 'settings' : 'settings-outline';
              } else if (route.name == 'Follow Up') {
                iconName = focused ? 'settings' : 'settings-outline';
              }

              return <HomeIcon width={30} height={30} fill="blue" />;
            },
            tabBarLabelStyle: {
              ...styles?.tabBarlevel,
            },
            tabBarActiveTintColor: '#539DF3',
            tabBarInactiveTintColor: 'black',
          })}>
          <Tab.Screen
            name="Home"
            options={{
              headerShown: false,
              tabBarStyle: {
                backgroundColor: 'white',
                borderTopWidth: 2,
                borderTopColor: 'tomato',
                height: 60,
                display: 'none',
              },

              headerTitle: 'PatientProfile',
              // tabBarIcon: () => {
              //   return <HomeIcon width={30} height={30} fill="blue" />;
              // },
            }}
            children={() => <DrawerNavigator />}
            // children={() => <HomeScreen setUrl={setUrl} />}
          />

          {/* <Tab.Screen
            options={{
              tabBarIcon: () => {
                return <DocIcon width={40} height={40} fill="blue" />;
              },
            }}
            name="Billing"
            component={Billing}
          /> */}
        </Tab.Navigator>
      ) : (
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'History') {
                iconName = focused ? 'person' : 'person-outline';
              } else if (route.name === 'Settings') {
                iconName = focused ? 'settings' : 'settings-outline';
              } else if (route.name === 'History') {
                iconName = focused ? 'settings' : 'settings-outline';
              } else if (route.name === 'Billing') {
                iconName = focused ? 'settings' : 'settings-outline';
              } else if (route.name == 'Follow Up') {
                iconName = focused ? 'settings' : 'settings-outline';
              }

              return <HomeIcon width={30} height={30} fill="blue" />;
            },
            tabBarLabelStyle: {
              fontSize: 12,
              fontFamily: 'Georgia',
              fontWeight: 300,
              backgroundColor: 'green',
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: {height: 60}, // Optional styling
          })}>
          <Tab.Screen
            options={{
              headerShown: false,
              tabBarLabel: () => null,
              tabBarLabelStyle: {color: 'white'},
              tabBarStyle: {display: 'none'}, // Hide the tab bar on this screen
            }}
            name="Home"
            children={() => <HomeScreen setUrl={setUrl} />}
          />
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  profileScreen: {
    fontFamily: 'Georgia',
    fontWeight: 300,
    borderWidth: 6,
    borderColor: 'white',
    width: 50,
    height: 50,
    borderRadius: 50,
    marginTop: -30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#539DF3',
    elevation: 3,
    paddingVertical: 12,
    color: 'black',
  },
  tabbarStyle: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 60,
    paddingBottom: 25,
    backgroundColor: 'green',
    display: 'none',
  },

  box: {
    width: 100,
    height: 100,
    backgroundColor: 'tomato',
    marginBottom: 20,
  },
  tabBarlevel: {
    fontSize: 13,
    fontFamily: 'Georgia',
    fontWeight: 300,
  },
});
