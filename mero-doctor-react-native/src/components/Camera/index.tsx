import React, {useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import {
  Camera,
  useCameraDevices,
  CameraDevice,
  CodeScannerFrame,
} from 'react-native-vision-camera'; // Import CameraDevi ce here
import DropdownComponent from '../CustomDropDown';
import CustomModal from '../CustomModal';
import Toast from 'react-native-simple-toast';

interface CameraScreenProps {
  localUrl?: any;
  userData?: any;
  setHomeScreen?: any;
}

// import { useCodeScanner } from 'react-native-vision-camera-code-scanner';
export const CameraView: React.FC<CameraScreenProps> = ({
  localUrl,
  userData,
  setHomeScreen,
}) => {
  console.log('userDatatataValuekaran', userData?.response?.USERID);

  const data = [
    {label: 'In Patient', value: 'ip'},
    {label: 'Out Patient', value: 'op'},
  ];
  const datas = [
    {label: 'PatientId', value: '1'},
    {label: 'ClaimCode', value: '2'},
  ];

  console.log('userDataaaa', userData);
  const [hasPermission, setHasPermission] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const [device, setDevice] = useState<CameraDevice | null>(null); // Use CameraDevice type
  const camera = useRef<Camera>(null);
  const devices = useCameraDevices();
  const [scannedData, setScannedData] = useState<any>();
  console.log('scannnedddDataaa', scannedData);
  const [patientId, onChangePatientId] = React.useState('');
  console.log('patientId', patientId);
  // const [claimCode, onChangeClaimCode] = React.useState('');
  const [patientDetail, setPatientDetail] = useState(false);
  const [patientDetailData, setPatientDetailData] = useState<any>();
  console.log('patientDetailData', patientDetailData?.CLAIMCODES?.CLAIMCODE);
  const [takePic, setTakePic] = useState(false);
  const [picUrl, setPicUrl] = useState<any>();
  const [patientType, setPatientType] = useState();
  console.log('patienttypeee', patientType);
  const [picScreenTaken, setPicScreenTaken] = useState(false);
  const [changeStatus, setChangeStatus] = useState(false);
  console.log('changeStatuseeee', changeStatus);
  const [claimCode, setClaimCode] = useState<any>();
  console.log('ClaimCodeeee', claimCode);
  type CodeType = 'qr' | 'ean-13' | 'ean-8' | 'upc-a' | 'upc-e' | 'code-128'; // Add more if needed
  const scannedValue = JSON?.parse(scannedData || null);
  const patientIDGet = scannedValue?.[0]?.value;
  const [valueIpOp, setValueIpOp] = useState('op');
  const [valuechooseID, setValuechooseID] = useState('1');
  console.log('valuechooseID', valuechooseID);
  const patientIDNumber = patientIDGet?.slice(valuechooseID == '1' ? 0 : 0);
  const [uploadDocumentById, setUploadDocumentById] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [detalWithPatientId, setDetailWithPatientId] = useState<any>();
  console.log('detailWithPatientsjdn', detalWithPatientId?.[0]?.CLAIMCODE);
  console.log('uploadDocumenttttt', uploadDocumentById);
  console.log('valueIpOp', valueIpOp);
  console.log('ippppsd', valuechooseID);

  console.log('patinetIdNumber', parseInt(patientIDNumber));
  console.log('patientDatatata', typeof parseInt(patientId));

  interface CodeScannerConfig {
    codeTypes: CodeType[];
    onCodeScanned: (codes: Array<{value?: string}>) => void;
  }

  useEffect(() => {
    (async () => {
      const status = await Camera.requestCameraPermission();
      setHasPermission(status === 'granted');
    })();
  }, []);

  useEffect(() => {
    // Set the initial back camera device
    if (devices.length > 0) {
      setDevice(devices.find(d => d.position === 'back') || devices[0]); // Default to the first available camera
    }
  }, [devices]);

  const switchCamera = () => {
    // Switch between back and front camera
    if (device) {
      const newDevice = devices.find(d => d.position !== device.position);
      setDevice(newDevice || device); // If no other device, keep the current one
    }
  };

  if (!hasPermission) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Camera permission not granted</Text>
      </View>
    );
  }
  //  1001
  if (!device) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Camera device not found</Text>
      </View>
    );
  }

  const takePicture = async () => {
    // console.log('dfjgdfuh');
    if (camera.current) {
      const photo = await camera.current.takePhoto();
      setPicUrl(photo?.path);
      setPicScreenTaken(true);
      console.log('Picture taken:', photo);
    } else {
      console.warn('Camera is not ready yet.');
    }
  };

  const handlePostRequest = async () => {
    console.log('dfhndfjv', valueIpOp);
    try {
      // const myHeaders = new Headers();
      // myHeaders.append('Apikey', '0ee4198537b966818a4fbc1e81d7494d');

      // formData.append(
      //   valuechooseID == '1' ? 'patientid' : 'claimcode',
      //   parseInt(patientId),
      // );

      // formData.append('patientid', '78000145');

      // formData.append(
      //   changeStatus == false ? 'patientid' : 'claimcode',
      //   changeStatus == false ? Number(patientId) : Number(patientId),
      // );

      const formData = new FormData();
      formData.append('claimcode', Number(patientId));
      formData.append('patient-type', valueIpOp);
      console.log('formDataaaa', formData, valueIpOp);
      const response = await fetch(`${localUrl}/api/getpatientdetails`, {
        method: 'POST',
        // headers: myHeaders,

        headers: {
          Apikey: '0ee4198537b966818a4fbc1e81d7494d',
        },
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log('qqqqqjweje', data);
        // setPatientDetailData(data?.response);1
        // const claimCode = JSON.stringify(data?.response?.CLAIMCODES);
        // const inDigitClaimCode = JSON?.parse(claimCode);

        // setClaimCode(inDigitClaimCode);
        // Toast.show(data?.response?.message, Toast.LONG);

        const claimCode = JSON.stringify(data?.response?.CLAIMCODES);
        const inDigitClaimCode = JSON?.parse(claimCode);
        setDetailWithPatientId(inDigitClaimCode);
        console.log('inDigitClaimCode', inDigitClaimCode);
        setClaimCode(inDigitClaimCode[0]?.CLAIMCODE);
        setPatientDetailData(data?.response);
        setPatientDetail(true);
        setUploadDocumentById(true);
      } else {
        console.log('Login failed. Server response:', response.status);
      }
    } catch (error) {
      console.log('Error checking website:', (error as Error).message);
      Toast.show((error as Error).message, Toast.LONG);
    }
  };

  // const handleUploadDocument = async () => {
  //   setPatientDetail(true);
  //   try {
  //     const myHeaders = new Headers();
  //     myHeaders.append('Apikey', '0ee4198537b966818a4fbc1e81d7494d');
  //     const formData = new FormData();
  //     // formData.append('userid', 81000121);
  //     formData.append('patientid', parseInt(patientIDNumber));
  //     formData.append('claimcode', claimCode);
  //     formData.append('file[]', {
  //       uri: 'file://' + picUrl,
  //       type: 'image/jpeg',
  //       name: picUrl.split('/').pop(),
  //     });
  //     console.log('formDataaaaaa', formData, localUrl);
  //     const response = await fetch(`${localUrl}/api/uploaddocument`, {
  //       method: 'POST',
  //       headers: myHeaders,
  //       body: formData,
  //     });

  //     console.log('res>>>>>>>>>>>>>>>>>', response);
  //     if (response.ok) {
  //       const data = await response.json();
  //       console.log('datatataatatatata11111', data);
  //       // console.log('sucessssss', data?.message);
  //       Toast.show(data?.message, Toast.LONG);
  //       setCompleted(true);
  //       setPatientDetailData(data?.response);
  //     } else {
  //       console.log('Login failed. Server response:', response.status);
  //     }
  //   } catch (error) {
  //     console.log('Error checking website:', (error as Error).message);
  //   }
  // };

  const handlePostRequestByBarCode = async () => {
    console.log('helloofiirier');
    // setPatientDetail(true);
    try {
      const myHeaders = new Headers();
      myHeaders.append('Apikey', '0ee4198537b966818a4fbc1e81d7494d');
      const formData = new FormData();
      // formData.append('patientid', patientId);
      formData.append(
        valuechooseID == '1' ? 'patientid' : 'claimcode',
        parseInt(patientIDNumber),
      );
      formData.append('patient-type', valueIpOp);
      console.log('formData', formData, myHeaders);

      const response = await fetch(`${localUrl}/api/getpatientdetails`, {
        method: 'POST',
        headers: myHeaders,
        body: formData,
      });
      console.log('responseeeeee', response);
      if (response.ok) {
        const data = await response.json();
        Toast.show(JSON.stringify(data?.message), Toast.LONG);
        setPatientDetailData(data?.response);
        const claimCode = JSON?.stringify(data?.response?.CLAIMCODES);
        const inDigitClaimCode = JSON?.parse(claimCode);
        console.log('inDigitClaimCode', inDigitClaimCode);
        setClaimCode(inDigitClaimCode[0]?.CLAIMCODE);
        setPatientDetail(true);
      } else {
        console.log('Login failed. Server response:', response.status);
      }
    } catch (error) {
      console.log('Error checking website:', (error as Error).message);
      // Toast.show((error as Error).message, Toast.LONG);r
    }
  };

  const codeScanner: CodeScannerConfig = {
    codeTypes: ['qr', 'code-128'], // Use the defined codee types
    onCodeScanned: codes => {
      if (codes.length > 0) {
        console.log('codesss', JSON?.stringify(codes));
        setScannedData(JSON?.stringify(codes) ?? 'Unknown Code');
      }
      handlePostRequestByBarCode();
    },
  };

  const handleUploadByEnterId = async () => {
    console.log('rfheruhewufhweuf');
    try {
      const myHeaders = new Headers();
      myHeaders.append('Apikey', '0ee4198537b966818a4fbc1e81d7494d');
      const formData = new FormData();
      formData.append(
        'patientid',

        parseInt(detalWithPatientId?.[0]?.PATIENTID),
      );
      formData.append(
        'claimcode',
        parseInt(detalWithPatientId?.[0]?.CLAIMCODE),
      );
      formData.append('userid', userData?.response?.USERID);
      formData.append('file[]', {
        uri: 'file://' + picUrl,
        type: 'image/jpeg',
        name: picUrl.split('/').pop(),
      });
      console.log('formDataaa', formData);
      const response = await fetch(`${localUrl}/api/uploaddocument`, {
        method: 'POST',
        headers: myHeaders,
        body: formData,
      });
      console.log('responseeeeeeeeee', response);
      if (response.ok) {
        const data = await response.json();
        setCompleted(true);
        Toast.show(data?.message, Toast.LONG);
        setPatientDetailData(data?.response);
      } else {
        console.log('Login failed. Server response:', response.status);
      }
    } catch (error) {
      console.log('Error checking website:', (error as Error).message);
    }
  };

  const handleTakePic = () => {
    setTakePic(true);
  };

  return (
    <>
      {picScreenTaken == true ? (
        <View style={{flex: 1}}>
          <TouchableOpacity
            onPress={() => {
              setPicScreenTaken(false), setTakePic(false);
            }}>
            {/* <View
              style={{
                borderWidth: 1,
                borderRadius: 8,
                backgroundColor: '#151B54',
                paddingHorizontal: 115,
                paddingVertical: 10,
                width: 10,
                height: 30
              }}> */}
            <View
              style={{
                margin: 10,
                backgroundColor: 'green',
                width: '30%',
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: 20,
                paddingVertical: 5,
              }}>
              <Text style={{color: ' black', fontWeight: 600}}>Back</Text>
            </View>
            {/* </View> */}
          </TouchableOpacity>
          <View style={{flex: 2, marginTop: 20}}>
            <Image
              source={{uri: 'file://' + picUrl}}
              style={{height: '100%', width: '100%'}}
              resizeMode="contain"
            />
          </View>
          <View style={{flex: 2, margin: 20, gap: 30}}>
            <TouchableOpacity onPress={() => setPicScreenTaken(false)}>
              <View
                style={{
                  borderWidth: 1,
                  borderRadius: 8,
                  backgroundColor: '#151B54',
                  paddingHorizontal: 115,
                  paddingVertical: 10,
                }}>
                <Text style={{color: 'white', fontWeight: 600}}>
                  Upload Another Document
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                uploadDocumentById == true
                  ? handleUploadByEnterId()
                  : handleUploadDocument();
              }}>
              <View
                style={{
                  borderWidth: 1,
                  borderRadius: 8,
                  backgroundColor: '#151B54',
                  paddingHorizontal: 115,
                  paddingVertical: 10,
                }}>
                <Text style={{color: 'white', fontWeight: 600}}>
                  Upload Document
                </Text>
              </View>
            </TouchableOpacity>

            {completed == true && (
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',

                  justifyContent: 'center',
                  paddingHorizontal: 50,
                  alignItems: 'center',
                }}>
                <Text style={{color: 'green', fontWeight: 600, fontSize: 15}}>
                  Done
                </Text>
              </View>
            )}
          </View>
        </View>
      ) : takePic == true ? (
        <View style={{flex: 1}}>
          <Camera
            codeScanner={codeScanner}
            ref={camera}
            style={StyleSheet.absoluteFillObject}
            device={device}
            isActive={isActive}
            photo={true}
          />
          <View style={styles.container}>
            {/* <Image
              source={{uri: 'file://' + picUrl}}
              style={{height: 300, width: 300}}
              resizeMode="contain"
            /> */}
          </View>
          <View style={{marginTop: 620, marginLeft: 130}}>
            {/* <View style={{left: '50%'}}> */}
            <TouchableOpacity onPress={takePicture} style={styles.button}>
              <Text></Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : patientDetail == true ? (
        <View style={{flex: 1}}>
          <TouchableOpacity
            onPress={() => {
              setPatientDetail(false);
            }}>
            <View
              style={{
                padding: 10,
                backgroundColor: 'green',
                width: '20%',
                margin: 10,
                paddingHorizontal: 20,
              }}>
              <Text>Back</Text>
            </View>
          </TouchableOpacity>
          <View>
            <View style={{borderWidth: 1, padding: 4, margin: 10, gap: 10}}>
              <Text style={{color: 'black'}}>
                <Text style={{fontWeight: 600, color: 'black'}}>Name:</Text>
                {patientDetailData?.PATIENTNAME}
              </Text>
              <Text style={{color: 'black'}}>
                <Text style={{fontWeight: 600, color: 'black'}}>Address:</Text>
                {patientDetailData?.ADDRESS}
              </Text>

              <Text style={{color: 'black'}}>
                <Text style={{fontWeight: 600, color: 'black'}}>Dob_Ad:</Text>
                {patientDetailData?.DOBAD}
              </Text>
              <Text style={{color: 'black'}}>
                <Text style={{fontWeight: 600, color: 'black'}}>Dob_Vs:</Text>
                {patientDetailData?.DOBVS}
              </Text>

              <Text style={{color: 'black'}}>
                <Text style={{fontWeight: 600, color: 'black'}}>
                  Mobile_No:
                </Text>
                {patientDetailData?.MOBILENO}
              </Text>

              <Text style={{color: 'black'}}>
                <Text style={{fontWeight: 600, color: 'black'}}>
                  CLAIM CODE:
                </Text>
                {claimCode}
              </Text>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              {/* <View style={{borderWidth: 1, padding: 3, borderRadius: 10}}>
                <Text>Upload Resume</Text>
              </View> */}
              <TouchableOpacity onPress={handleTakePic}>
                <View
                  style={{
                    borderWidth: 1,
                    padding: 8,
                    paddingHorizontal: 20,
                    borderRadius: 10,
                    marginTop: 20,
                    backgroundColor: '#151B54',
                  }}>
                  <Text style={{color: 'white'}}>Click Pic</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ) : (
        <View style={{flex: 1}}>
          <View style={{flex: 4, backgroundColor: 'green'}}>
            <Camera
              codeScanner={codeScanner}
              ref={camera}
              style={StyleSheet.absoluteFillObject}
              device={device}
              isActive={isActive}
              photo={true}
            />
          </View>
          <View style={{flex: 2, padding: 2}}>
            <View
              style={{
                flexDirection: 'row',
                margin: 1,
                justifyContent: 'space-around',
                backgroundColor: 'white',
              }}>
              <View style={{width: 135}}>
                <DropdownComponent
                  value={valueIpOp}
                  setPatientType={setPatientType}
                  setValue={setValueIpOp}
                  data={data}
                />
              </View>
              <View style={{width: 135}}>
                <DropdownComponent
                  value={valuechooseID}
                  setPatientType={setPatientType}
                  data={datas}
                  setValue={setValuechooseID}
                />
              </View>
              <View>
                <CustomModal handlePostRequest={handlePostRequest}>
                  <View>
                    <View style={{flexDirection: 'row', padding: 2}}>
                      {/* <TouchableOpacity onPress={() => setChangeStatus(false)}> */}
                      {/* <View
                          style={{
                            borderWidth: 1.5,
                            padding: 4,
                            borderRadius: 4,
                            borderRightWidth: 2,
                            borderTopRightRadius: 0,
                            borderBottomRightRadius: 0,
                            backgroundColor:
                              changeStatus == false ? '#151B54' : 'white',
                          }}>
                          <Text
                            style={{
                              color: changeStatus == false ? 'white' : 'black',
                              fontWeight: 600,
                            }}>
                            PatientId
                          </Text>
                        </View> */}
                      {/* </TouchableOpacity> */}

                      <TouchableOpacity onPress={() => setChangeStatus(true)}>
                        <View
                          style={{
                            borderWidth: 1.5,
                            padding: 4,
                            borderRadius: 4,
                            marginHorizontal: 10,
                            borderTopLeftRadius: 0,
                            borderBottomLeftRadius: 0,
                            borderLeftWidth: 2,
                            backgroundColor:
                              changeStatus == true ? '#151B54' : 'white',
                          }}>
                          <Text
                            style={{
                              color: changeStatus == true ? 'white' : 'black',
                              fontWeight: 600,
                            }}>
                            ClaimCode
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                    {/* {changeStatus == false && (
                      <View style={{marginLeft: 10}}>
                        <TextInput
                          style={styles.input}
                          onChangeText={onChangePatientId}
                          value={patientId}
                          placeholder="Enter PatientId"
                          keyboardType="numeric"
                        />
                      </View>
                    )} */}

                    {/* {changeStatus == true && ( */}
                    <View style={{marginLeft: 10}}>
                      <TextInput
                        style={styles.input}
                        onChangeText={onChangePatientId}
                        value={patientId}
                        placeholder="Enter ClaimCode"
                        keyboardType="numeric"
                        placeholderTextColor="black"
                      />
                    </View>
                    {/* )} */}
                  </View>
                </CustomModal>
              </View>
            </View>
            <View
              style={{
                backgroundColor: '#151B54',
                paddingVertical: 40,
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: 50,
                flex: 2,
              }}>
              <Text style={{color: 'white'}}>MIDAS HEALTH SERVICES</Text>
              {/* <Text style={{color: 'white'}}>Kathmandu</Text> */}
            </View>
          </View>
        </View>
      )}

      {/* <View style={styles.container}>
       
        {/* Controls */}
      {/* <View style={styles.controls}>
        <View>
          <Text style={{color: 'red'}}>{scannedData}</Text>
        </View>
        <TouchableOpacity onPress={switchCamera} style={styles.button}>
          <Text style={styles.buttonText}>Switch Camera</Text>
        </TouchableOpacity>
        {/* Add other controls like taking photo */}
      {/* </View> */}
      {/* </View> */}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
  controls: {
    position: 'absolute',
    bottom: 40,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    padding: 30,
    borderRadius: 30,
    margin: 10,
    width: 90,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,

    width: 80,
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
