import {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-simple-toast';

interface LoginUrlProps {
  setHomeScreen?: any;
  idData?: any;
  setLocalUrl?: any;
  setUserData?: any;
}

export const LocalUrl: React.FC<LoginUrlProps> = ({
  setHomeScreen,
  setLocalUrl,
  setUserData,
}) => {
  const [text, setText] = useState('');
  const [loignPage, setLoginPage] = useState(false);
  const [loginpageStaff, setLoginPageStaff] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [url, setUrl] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  // const [userData, setUserData] = useState();
  console.log('urlllll', url);

  const storeData = async (key: string, value: string) => {
    try {
      await AsyncStorage.setItem(key, value);
      console.log('Data stored successfully!');
    } catch (error) {
      console.error('Error storing data:', error);
    }
  };

  const checkWebsiteStatus = async () => {
    try {
      const response = await fetch(text);
      if (response.ok) {
        console.log('Website is working!');
        const key = 'local_url'; // ✅ Define inside function
        const value = text;
        storeData(key, value);
        setUrl(text);
        setLocalUrl(text);
        setLoginPage(true);
      } else {
        console.log('Website is down or not responding correctly.');
      }
    } catch (error) {
      console.log('Error checking website:', (error as Error).message);
      Toast.show((error as Error).message, Toast.LONG);
    }
  };

  const handleLoginUser = async () => {
    try {
      const myHeaders = new Headers();
      // myHeaders.append('Apikey', '0ee4198537b966818a4fbc1e81d7494d');
      // myHeaders.append('Apikey', '0ee4198537b966818a4fbc1e81d7494d');
      // myHeaders.append('Cookie', 'PHPSESSID=jjh3hpkb20t95hhgnqkcqo436e');
      const formData = new FormData();
      formData.append('username', username);
      formData.append('password', password);
      console.log('formDataaa---------', formData);
      const response = await fetch(`${url}/api/userauthentication`, {
        method: 'POST',
        // headers: myHeaders,
        headers: {
          Apikey: '0ee4198537b966818a4fbc1e81d7494d',
        },
        body: formData,
      });
      const data = await response.json();
      // setUserData(data);
      console.log('datat>>>>>>>>>>>>>>>>>>>>', data);
      if (data?.type == 'success') {
        console.log('Login successful:', data);

        setHomeScreen(true);
        setUserData(data);
        // Navigate to the login page
      } else {
        console.log('Login failed. Server response:', response.status);
        Toast.show('Login Faild', Toast.LONG);
      }
    } catch (error) {
      console.log('Error checking website:', (error as Error).message);
    }
  };

  const handleLoginPageStaff = () => {
    setLoginPageStaff(true);
  };

  useEffect(() => {
    const getData = async (idData: string) => {
      try {
        const value = await AsyncStorage.getItem(idData);
        if (value !== null) {
          // setLoginPageStaff(true);
          setUrl(value);
          setLocalUrl(value);
          setLoginPage(true);
        }
        console.log(`Retrieved data: ${value} for key: ${idData}`);
        return value;
      } catch (error) {
        console.error('Error retrieving data:', error);
      }
    };
    getData('local_url');
  }, []);

  // checkWebsiteStatus('http://192.168.100.122:8010');

  return (
    <View style={{flex: 1}}>
      {loginpageStaff == true ? (
        <View style={{flex: 1}}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 2,
            }}>
            <View style={{width: '90%'}}>
              <Text style={{fontSize: 20, fontWeight: 800, marginBottom: 8}}>
                Login
              </Text>
              <View>
                <View style={{marginBottom: 10}}>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter UserName"
                    value={username}
                    placeholderTextColor="black"
                    onChangeText={setUsername}
                  />
                </View>
              </View>
              <View>
                <TextInput
                  style={styles.input}
                  placeholder="Enter Password"
                  value={password}
                  placeholderTextColor="black"
                  onChangeText={setPassword}
                  secureTextEntry={showPassword}
                />
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <TouchableOpacity onPress={handleLoginUser}>
                  <View
                    style={{
                      backgroundColor: '#151B54',
                      width: 120,
                      paddingVertical: 8,
                      borderRadius: 12,
                      justifyContent: 'center',
                      marginTop: 10,
                      alignItems: 'center',
                      padding: 10,
                    }}>
                    <Text style={{color: 'white', fontWeight: 600}}>
                      Confirm
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    setShowPassword(prev => !prev);
                  }}>
                  <View
                    style={{
                      backgroundColor: '#151B54',
                      width: 120,
                      paddingVertical: 8,
                      borderRadius: 12,
                      justifyContent: 'center',
                      marginTop: 10,
                      alignItems: 'center',
                      padding: 10,
                    }}>
                    {showPassword == true ? (
                      <Text style={{color: 'white', fontWeight: 600}}>
                        Show
                      </Text>
                    ) : (
                      <Text style={{color: 'white', fontWeight: 600}}>
                        Hide
                      </Text>
                    )}
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      ) : loignPage == true ? (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 50,
            gap: 10,
          }}>
          <TouchableOpacity onPress={handleLoginPageStaff}>
            <View
              style={{
                backgroundColor: '#00094B',
                padding: 15,
                paddingHorizontal: 50,
                borderRadius: 10,
              }}>
              <Text style={{color: 'white', fontWeight: 500}}>Staff Login</Text>
            </View>
          </TouchableOpacity>
        </View>
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 2,
          }}>
          <View style={{width: '90%'}}>
            <Text style={{fontSize: 20, fontWeight: 800, marginBottom: 8}}>
              SetUp
            </Text>
            <View>
              <TextInput
                style={styles.input}
                placeholder="Enter URL"
                value={text}
                onChangeText={setText}
                placeholderTextColor="black"
              />
            </View>
            <View>
              <Text
                style={{
                  color: 'black',
                  fontWeight: 600,
                  fontSize: 15,
                  marginTop: 10,
                }}>
                *Please enter full url of local server api with trailing slash
                (/)
              </Text>

              <Text
                style={{
                  color: 'gray',

                  fontSize: 13,
                  marginTop: 10,
                }}>
                Eg http://192.168.1.1/hmis
              </Text>
            </View>

            <TouchableOpacity onPress={checkWebsiteStatus}>
              <View
                style={{
                  // marginLeft: 260,
                  marginTop: 20,
                  backgroundColor: '#151B54',
                  paddingHorizontal: 18,
                  paddingVertical: 8,
                  borderRadius: 12,
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 50,
                }}>
                <Text style={{color: 'white', fontWeight: 600}}>Confirm</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    // paddingHorizontal: 10,
    fontSize: 16,
  },
  texts: {
    marginTop: 10,
    fontSize: 18,
  },
});
