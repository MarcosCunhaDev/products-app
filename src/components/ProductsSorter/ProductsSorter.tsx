import {View, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {LoaderContainer, Wrapper} from './ProductsSorter.styles';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);
export type criteriaT = 'price' | 'rating';
export type orderT = 'asc' | 'desc';

export const ProductsSorter = ({
  onSort,
  isLoading = false,
}: {
  onSort: (criteria: criteriaT | null, order: orderT | null) => void;
  isLoading: boolean;
}) => {
  const [items, setItems] = useState([
    {label: 'None', value: ''},
    {label: 'Price (Low to High)', value: 'price-asc'},
    {label: 'Price (High to Low)', value: 'price-desc'},
    {label: 'Rating (Low to High)', value: 'rating-asc'},
    {label: 'Rating (High to Low)', value: 'rating-desc'},
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

  if (isLoading) {
    return (
      <Wrapper>
        <LoaderContainer>
          <ShimmerPlaceHolder
            LinearGradient={LinearGradient}
            style={{flex: 1, width: '100%'}}
          />
        </LoaderContainer>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
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
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    backgroundColor: 'tomato',
    borderRadius: 8,
    height: 40,
  },
  dropdownContainer: {
    backgroundColor: 'tomato',
    // borderWidth: 0,
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
