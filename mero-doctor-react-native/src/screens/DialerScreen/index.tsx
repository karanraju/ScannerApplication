import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const DialerScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePressNumber = (num: any) => {
    setPhoneNumber(prev => prev + num);
  };

  const handleDelete = () => {
    setPhoneNumber(prev => prev.slice(0, -1));
  };

  const handleCall = () => {
    console.log('Calling:', phoneNumber);
    // Trigger call functionality here
  };

  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      {/* Input Area */}
      <View style={{flexDirection: 'row', marginHorizontal: 40, marginTop: 50}}>
        <TextInput
          style={styles.input}
          value={phoneNumber}
          editable={false}
          placeholder="Enter a phone number"
          placeholderTextColor="#888"
        />
        <View>
          <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
            <Text style={styles.deleteButtonText}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Dial Pad */}
      <View style={styles.dialPad}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, '*', 0, '#'].map(num => (
          <TouchableOpacity
            key={num}
            style={styles.button}
            onPress={() => handlePressNumber(num.toString())}>
            <Text style={styles.buttonText}>{num}</Text>
            <Text style={styles.buttonText}>ABC</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Footer Actions */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.callButton} onPress={handleCall}>
          <Text style={styles.callButtonText}>Call</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 10,
  },
  input: {
    fontSize: 24,
    borderBottomWidth: 1,
    width: '80%',
    textAlign: 'center',
    marginBottom: 20,
  },
  dialPad: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    flexWrap: 'wrap',
    // justifyContent: 'center',
    width: '80%',
  },
  button: {
    width: '30%',
    padding: 20,
    margin: 5,
    alignItems: 'center',
    backgroundColor: '#ddd',
    borderRadius: 10,
  },
  buttonText: {fontSize: 18},
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
  callButton: {backgroundColor: 'green', padding: 15, borderRadius: 10},
  deleteButton: {backgroundColor: 'red', padding: 15, borderRadius: 10},
  callButtonText: {color: '#fff', fontSize: 18},
  deleteButtonText: {color: '#fff', fontSize: 18},
});

export default DialerScreen;
