import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {WebView} from 'react-native-webview';
import theme from '../../style/theme';
// import {
//   LineChart,
//   BarChart,
//   PieChart,
//   ProgressChart,
//   ContributionGraph,
//   StackedBarChart,
// } from 'react-native-chart-kit';
import {Dimensions} from 'react-native';
import {LineChart} from 'react-native-gifted-charts';
import Calender from '../../assets/svg/Calendar';
import DownArrowIcon from '../../assets/svg/DownArrow';
import {Count} from '../../components/card/count';
import ProfileIcon from '../../assets/svg/ProfileIcon';
import {CameraView} from '../../components/Camera';
import {LocalUrl} from '../LocalUrl';

// const screenWidth = Dimensions.get('window').width;

interface HomeScreenProps {
  setUrl: any;
  backgroundColor: string;
  color: string;
  profileIcon: any;
  setUserData: any;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({setUrl}) => {
  const [tooltipIndex, setTooltipIndex] = useState(null);
  const [homeScreen, setHomeScreen] = useState(false);
  const [localUrl, setLocalUrl] = useState('');
  const [userData, setUserData] = useState();
  console.log('UserDataaakaran', homeScreen);
  const ptData = [
    {value: 160, date: '1 Apr 2022'},
    {value: 180, date: '2 Apr 2022'},
    {value: 190, date: '3 Apr 2022'},
    {value: 180, date: '4 Apr 2022'},
    {value: 140, date: '5 Apr 2022'},
    {value: 145, date: '6 Apr 2022'},
    {value: 160, date: '7 Apr 2022'},
    {value: 200, date: '8 Apr 2022'},

    {value: 220, date: '9 Apr 2022'},
    {
      value: 240,
      date: '10 Apr 2022',
      label: '10 Apr',
      labelTextStyle: {color: 'lightgray', width: 60},
    },
    {value: 280, date: '11 Apr 2022'},
    {value: 260, date: '12 Apr 2022'},
    {value: 340, date: '13 Apr 2022'},
    {value: 385, date: '14 Apr 2022'},
    {value: 280, date: '15 Apr 2022'},
    {value: 390, date: '16 Apr 2022'},

    {value: 370, date: '17 Apr 2022'},
    {value: 285, date: '18 Apr 2022'},
    {value: 295, date: '19 Apr 2022'},
    {
      value: 300,
      date: '20 Apr 2022',
      label: '20 Apr',
      labelTextStyle: {color: 'lightgray', width: 60},
    },
    {value: 280, date: '21 Apr 2022'},
    {value: 295, date: '22 Apr 2022'},
    {value: 260, date: '23 Apr 2022'},
    {value: 255, date: '24 Apr 2022'},

    {value: 190, date: '25 Apr 2022'},
    {value: 220, date: '26 Apr 2022'},
    {value: 205, date: '27 Apr 2022'},
    {value: 230, date: '28 Apr 2022'},
    {value: 210, date: '29 Apr 2022'},
    {
      value: 200,
      date: '30 Apr 2022',
      label: '30 Apr',
      labelTextStyle: {color: 'lightgray', width: 60},
    },
    {value: 240, date: '1 May 2022'},
    {value: 250, date: '2 May 2022'},
    {value: 280, date: '3 May 2022'},
    {value: 250, date: '4 May 2022'},
    {value: 210, date: '5 May 2022'},
  ];

  const xAxisLabels = ['Jan', 'Feb', 'Mar', 'May', 'Jun', 'Jul', 'Aug'];

  const renderTooltip = (item: any, index: any) => {
    console.log('itemmmmvalue', item);
    if (tooltipIndex === index) {
      return (
        <View style={styles.tooltip}>
          <Text style={styles.tooltipText}>hdffbd</Text>
        </View>
      );
    }
    return null;
  };

  const customDataPoint = (item: any, index: any) => {
    return (
      <TouchableOpacity
        // activeOpacity={0.7}
        onPress={() => setTooltipIndex(index)}
        style={{
          position: 'absolute', // Allow precise positioning
          left: -6, // Shift horizontally to center the point
          top: -6,
          height: 12,
          width: 12,
          backgroundColor: tooltipIndex === index ? '#0000' : '#fff',
          borderWidth: 2,
          borderColor: theme?.colors?.blue?.blue100,
          borderRadius: 8,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            height: 4,
            width: 4,
            backgroundColor: theme?.colors?.blue?.blue100,
            borderRadius: 4,
          }}></View>
      </TouchableOpacity>
    );
  };

  const handleWebViewMessage = (event: any) => {
    setUrl(event?.url);
  };

  return (
    <View style={{flex: 1}}>
      {homeScreen == true ? (
        <CameraView
          localUrl={localUrl}
          userData={userData}
          setHomeScreen={setHomeScreen}
        />
      ) : (
        <LocalUrl
          setHomeScreen={setHomeScreen}
          setLocalUrl={setLocalUrl}
          setUserData={setUserData}
        />
        // <CameraView />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  tooltip: {
    position: 'absolute',
    bottom: 30,
    backgroundColor: '#4CAF50',
    padding: 6,
    borderRadius: 4,
  },
  tooltipText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
