import React from 'react';
import {StyleSheet, TextInput, View, useColorScheme} from 'react-native';
import SearchIcon from './search-icon';
import Colors from './colors';

const SearchBar = ({
  value,
  placeholder = 'Search',
  onChangeText,
  onSubmitEditing,
}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const bgColor = isDarkMode ? Colors.darker : Colors.lighter;
  const textColor = isDarkMode
    ? Colors.primaryDarkText
    : Colors.secondaryDarkText;
  const borderColor = isDarkMode ? '#374E6D' : '#DCDCDC';

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: bgColor, borderColor: borderColor},
      ]}>
      {<SearchIcon />}
      <TextInput
        style={[styles.input, {color: textColor}]}
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,
    elevation: 2,
    height: 40,
    gap: 8,
    boxSizing: 'border-box',
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
});

export default SearchBar;
