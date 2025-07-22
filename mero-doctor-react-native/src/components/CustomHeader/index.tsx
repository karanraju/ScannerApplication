import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {TouchableOpacity} from 'react-native';
import theme from '../../style/theme';
import {SliderIcon} from '../CutomIcon/SliderIcon';
import BellIcon from '../../assets/svg/BellIcon';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-simple-toast';
// import Hamburger from '../../assets/png/'

type RootParamList = {
  Home: undefined;
  Settings: undefined;
  // Add other screens here
};

type HomeScreenNavigationProp = DrawerNavigationProp<RootParamList, 'Home'>;
// import { DrawerActions } from '@react-navigation/drawer';

export const CustomHeader = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const openDrawer = () => {
    navigation.openDrawer(); // Correcttly use DrawerActions
  };

  const removeItem = async (key: string) => {
    try {
      await AsyncStorage.removeItem(key);
      console.log(`${key} removed successfully`);
      Toast.show('LogOut Successfully', Toast.LONG);
    } catch (error) {
      console.error(`Error removing ${key}:`, error);
    }
  };

  const handleDeleteToken = () => {
    removeItem('local_url');
  };

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 20,
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row', gap: 15}}>
          <TouchableOpacity onPress={openDrawer}>
            <View style={{marginHorizontal: 12}}>
              <SliderIcon />
            </View>
          </TouchableOpacity>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text
              style={{
                fontFamily: 'CustomFont',
                // color: theme?.colors?.dark?.dark60,
                fontWeight: 800,
                color: 'black',
                // fontWeight:    theme?.typography?.weights?.bold,
              }}>
              Welcome To Midas
            </Text>
          </View>
        </View>

        <View>
          <TouchableOpacity onPress={handleDeleteToken}>
            <View
              style={{
                width: 60,
                height: 40,
                marginRight: 12,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 8,
                backgroundColor: theme?.colors?.white?.white8,
              }}>
              {/* <BellIcon /> */}
              <Text style={{color: 'red', fontWeight: 600}}>LogOut</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
