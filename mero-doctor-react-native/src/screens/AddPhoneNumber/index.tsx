import {Text, View} from 'react-native';

export const AddPhoneNumber = () => {
  const data1 = [
    {value: 70},
    {value: 36},
    {value: 50},
    {value: 40},
    {value: 18},
    {value: 38},
  ];
  const data2 = [
    {value: 50},
    {value: 10},
    {value: 45},
    {value: 30},
    {value: 45},
    {value: 18},
  ];
  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <View
        style={{
          marginTop: 10,
          height: 40,
          elevation: 1,
          margin: 3,
          // borderWidth: 1,
          borderColor: 'gray',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 10,
          flexDirection: 'row',
        }}>
        <View>
          <Text>Country</Text>
          <Text>94</Text>
        </View>
        <View>
          <Text>icon</Text>
        </View>
      </View>
      <View
        style={{
          marginTop: 2,
          height: 40,
          elevation: 1,
          margin: 3,
          // borderWidth: 1,
          borderColor: 'gray',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 10,
          flexDirection: 'row',
        }}>
        <View>
          <Text>Country</Text>
          <Text>23</Text>
        </View>
        <View>
          <Text>icon</Text>
        </View>
      </View>

      <View
        style={{
          height: 40,
          elevation: 1,
          margin: 3,
          // borderWidth: 1,
          borderColor: 'gray',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 10,
          flexDirection: 'row',
        }}>
        <View>
          <Text>Country</Text>
          <Text>45</Text>
        </View>
        <View>
          <Text>icon</Text>
        </View>
      </View>
    </View>
  );
};
