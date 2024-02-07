import {StyleSheet} from 'react-native';
import React from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import {swotItems} from '../constant/SwotContants';

const SWOTDropdown = ({
  selectDropDown,
}: {
  selectDropDown: (selectedItem: string) => {};
}) => {
  return (
    <SelectDropdown
      data={swotItems}
      onSelect={(selectedItem: string, _index) => {
        selectDropDown(selectedItem);
      }}
      buttonTextAfterSelection={(selectedItem, _index) => {
        return selectedItem;
      }}
      rowTextForSelection={(item, _index) => {
        return item;
      }}
      buttonStyle={styles.dropdownButton}
      buttonTextStyle={styles.dropdownButtonText}
      dropdownStyle={styles.dropdown}
      rowStyle={styles.dropdownRow}
    />
  );
};

export default SWOTDropdown;

const styles = StyleSheet.create({
  dropdownButton: {
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    // backgroundColor: '#ECECEC',
    borderWidth: 1,
    // borderColor: '#BDBDBD',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropdownButtonText: {
    fontSize: 16,
    color: '#333',
  },
  dropdown: {
    marginTop: 2,
    borderRadius: 8,
  },
  dropdownRow: {
    // paddingVertical: 15,
    // paddingHorizontal: 20,
  },
});
