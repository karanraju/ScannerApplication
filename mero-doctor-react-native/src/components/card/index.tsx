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
interface CardProps {
  title: string;
  content: string;
  style?: StyleProp<ViewStyle>;
}

const Card: React.FC<CardProps> = ({title, content, style}) => {
  return (
    <View style={{}}>
      <View style={styles.card}>
        <View style={{flex: 1, justifyContent: 'center', marginLeft: 6}}>
          <View style={styles.numberContainer}>
            <Text>1</Text>
          </View>
        </View>
        <View style={{flex: 3}}>
          <View style={{gap: 30}}>
            <View style={{flexDirection: 'row', gap: 10}}>
              <View>
                <Avatar.Image
                  size={50}
                  source={require('../../assets/png/AvatarCircle.png')}
                />
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    // color: color?.red?.red11,
                    color: theme?.colors?.blue?.blue8,
                  }}>
                  Patient Name
                </Text>
                <Text style={{fontSize: 15, fontWeight: 600, color: 'black'}}>
                  Patient Name
                </Text>
              </View>
            </View>

            <View>
              <Text style={{fontSize: 14, fontWeight: 600}}>
                03 Jan 2024, 11:30 AM
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 2,
            gap: 10,
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
          }}>
          <View
            style={{
              justifyContent: 'space-between',
              gap: 30,
              flexDirection: 'column',
              flex: 1,
            }}>
            <View
              style={{
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
              }}>
              <Avatar.Image
                size={30}
                source={require('../../assets/png/AvatarCircle.png')}
              />
            </View>
            <View>
              <View style={styles.containerButtonText}>
                <Text style={{fontSize: 11, color: 'white', fontWeight: 600}}>
                  Upcoming
                </Text>
              </View>
            </View>
          </View>
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
  containerButtonText: ViewStyle;
}>({
  card: {
    flex: 1,
    margin: 20,
    // height: 40,

    borderRadius: 10,
    backgroundColor: 'white',
    flexDirection: 'row',

    //shadow for ios
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 2,
    padding: 10,
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

  containerButtonText: {
    backgroundColor: '#1990FE',
    height: 30,
    borderRadius: 15,
    marginTop: 10,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Card;
