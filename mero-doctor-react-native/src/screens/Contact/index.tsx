import React, {useState, useEffect} from 'react';
import {View, Text, Button, FlatList, StyleSheet} from 'react-native';
import Contacts from 'react-native-contacts';
import {PermissionsAndroid, Platform} from 'react-native';

const Contact = () => {
  const [contacts, setContacts] = useState<any>([]);

  const requestContactsPermission = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
        {
          title: 'Contacts Permission',
          message: 'This app would like to access your contacts.',
          buttonPositive: 'OK',
        },
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    }
    return true; // iOS permissions are handled automatically via Info.plist
  };

  const loadContacts = async () => {
    const permissionGranted = await requestContactsPermission();
    if (permissionGranted) {
      Contacts.getAll()
        .then(contactList => {
          setContacts(contactList);
        })
        .catch(error => {
          console.error('Error fetching contacts:', error);
        });
    } else {
      console.log('Permission denied');
    }
  };

  useEffect(() => {
    loadContacts();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contacts</Text>
      <FlatList
        data={contacts}
        keyExtractor={item => item.recordID}
        renderItem={({item}) => (
          <View style={styles.contactItem}>
            <Text style={styles.contactName}>{item.displayName}</Text>
            {item.phoneNumbers.map((phone: any, index: any) => (
              <Text key={index} style={styles.phoneNumber}>
                {phone.label}: {phone.number}
              </Text>
            ))}
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 20, backgroundColor: '#fff'},
  title: {fontSize: 24, fontWeight: 'bold', marginBottom: 10},
  contactItem: {marginBottom: 15},
  contactName: {fontSize: 18, fontWeight: '600'},
  phoneNumber: {fontSize: 16, color: '#666'},
});

export default Contact;
