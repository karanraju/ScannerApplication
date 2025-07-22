import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {CustomHeader} from '../components/CustomHeader';
import {HomeScreen} from '../screens/Home';

const Drawer = createDrawerNavigator();

const SettingsScreen = () => (
  <View style={styles.screen}>
    <Text style={styles.text}>Settings Screen</Text>
  </View>
);

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        header: () => <CustomHeader />,
      }}>
      <Drawer.Screen name="Home" component={() => <HomeScreen setUrl={''} />} />
      {/* <Drawer.Screen name="Settings" component={SettingsScreen} /> */}
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
