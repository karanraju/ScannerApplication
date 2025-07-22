import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {Avatar} from 'react-native-paper';
import color from '../../style/color';
import theme from '../../style/theme';
import ProfileIcon from '../../assets/svg/ProfileIcon';

interface CardProps {
  title: string;
  content: string;
  style?: StyleProp<ViewStyle>;
}

interface CountProps {
  backgroundColor: string;
  color: string;
  style?: StyleProp<ViewStyle>;
  profileIcon: any;
}

export const Count: React.FC<CountProps> = ({
  backgroundColor,
  color,
  profileIcon,

  style,
}) => {
  return (
    <View style={[styles.card, {backgroundColor}]}>
      <View style={{paddingTop: 12}}>
        <Text
          style={[
            styles?.text,
            {fontSize: theme?.fontSizes?.custom?.[12], color: color},
          ]}>
          Today's Appointment
        </Text>
      </View>
      <View style={{flexDirection: 'row', gap: 15}}>
        <View>{profileIcon}</View>
        <View>
          <Text style={{}}>20</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create<{
  card: ViewStyle;
  numberContainer: ViewStyle;
  content: TextStyle;
  button: ViewStyle;
  buttonText: TextStyle;
  text: TextStyle;
}>({
  card: {
    flex: 3,
    height: 76,

    paddingHorizontal: 10,
    opacity: 0.7,
    borderRadius: 8,
  },

  numberContainer: {
    width: 20,
    height: 90,
    justifyContent: 'center',
    elevation: 2,
    backgroundColor: 'white',
    borderRadius: 4,
    paddingHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },

  content: {
    fontSize: 14,
    color: 'black',
    fontWeight: 600,
    marginTop: 10,
    backgroundColor: 'red',
    flexWrap: 'wrap',
    flexShrink: 1,
  },

  button: {
    backgroundColor: '#1990FE',
    width: 120,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    // flex: 1,
    borderRadius: 10,
  },

  buttonText: {
    fontSize: 12,
    fontWeight: 600,
    color: '#FFFFFF',
    fontFamily: 'Poppins',
  },

  text: {
    fontWeight: 800,
    fontFamily: 'Poppins',
    lineHeight: 18,
  },
});
