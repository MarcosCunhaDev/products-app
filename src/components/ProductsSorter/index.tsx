import {View, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

export type criteriaT = 'price' | 'rating';
export type orderT = 'asc' | 'desc';

export const ProductsSorter = ({
  onSort,
}: {
  onSort: (criteria: criteriaT | null, order: orderT | null) => void;
}) => {
  const [items, setItems] = useState([
    {label: 'None', value: ''},
    {label: 'Price (Low to High)', value: 'price-asc'},
    {label: 'Price (High to Low)', value: 'price-desc'},
    {label: 'Rating (Low to High)', value: 'rating-asc'},
    {label: 'Rating (Low to Low)', value: 'rating-desc'},
  ]);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  const handleSort = (selectedValue: string | null) => {
    if (selectedValue) {
      const [criteria, order]: string[] = selectedValue.split('-');
      onSort(criteria as criteriaT, order as orderT);
    } else {
      onSort(null, null);
    }
  };

  return (
    <View style={{marginBottom: 10, paddingVertical: 10}}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 10,
        }}>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          onChangeValue={handleSort}
          setValue={setValue}
          setItems={setItems}
          placeholder={'Sort By'}
          style={styles.dropdown}
          dropDownContainerStyle={styles.dropdownContainer}
          textStyle={styles.dropdownText}
          placeholderStyle={styles.placeholderText}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    zIndex: 1,
  },
  dropdown: {
    backgroundColor: 'tomato',
    borderWidth: 0,
    borderRadius: 8,
  },
  dropdownContainer: {
    backgroundColor: 'tomato',
    borderWidth: 0,
    borderRadius: 8,
    marginTop: 5,
  },
  dropdownText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 500,
  },
  placeholderText: {
    color: '#fff',
    fontWeight: 600,
  },
});
