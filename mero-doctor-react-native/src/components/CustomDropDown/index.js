import React, {useEffect, useState} from 'react';
import {StyleSheet, Modal} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';

const data = [
  {label: 'In Patient', value: 'ip'},
  {label: 'Out Patient', value: 'op'},
];

const DropdownComponent = ({setPatientType, data, setValue, value}) => {
  // const [value, setValue] = useState(null);
  // console.log('valuee', value);

  // useEffect(() => {
  //   if (value) {
  //     setPatientType(value);
  //   }
  // }, [value]);

  return (
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      itemTextStyle={styles.itemTextStyle}
      iconStyle={styles.iconStyle}
      data={data}
      //   search
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder="Select"
      searchPlaceholder="Search..."
      value={value}
      onChange={item => {
        setValue(item.value);
      }}
    />
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  dropdown: {
    // margin: 16,
    marginHorizontal: 15,
    height: 25,
    borderBottomColor: 'gray',
    fontSize: 12,
    // borderBottomWidth: 0.5,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 14,
  },
  selectedTextStyle: {
    fontSize: 14,
    fontWeight: 600,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    fontSize: 14,
    height: 40,
    fontSize: 12,
    borderWidth: 0,
    fontWeight: 600,
  },
  itemTextStyle: {
    fontSize: 13,
    fontWeight: 600,
    color: 'black', // Change dropdown items text color
  },
});
