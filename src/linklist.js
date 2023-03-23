import React, {useEffect, useState} from 'react';
import data from '../data/links';
import SearchBar from './searchbar';
import Colors from './colors';

import {
  FlatList,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

const LinkList = ({onPressLink}) => {
  const [links, setLinks] = useState([]);
  const isDarkMode = useColorScheme() === 'dark';

  const themeStyle = {
    backgroundColor: isDarkMode ? Colors.dark : Colors.light,
    borderBottomColor: isDarkMode ? Colors.borderDark : Colors.borderLight,
  };

  useEffect(() => {
    setLinks(data);
  }, []);

  const renderItem = ({item}) => {
    const imageUrl = `https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${item.url}&size=24`;
    return (
      <TouchableOpacity
        onPress={() => onPressLink(item.url)}
        style={[$item, themeStyle]}>
        <Text
          style={[
            $title,
            {
              color: isDarkMode
                ? Colors.primaryDarkText
                : Colors.primaryLightText,
            },
          ]}>
          {item.title}
        </Text>
        <Text
          numberOfLines={3}
          style={[
            $description,
            {
              color: isDarkMode
                ? Colors.secondaryDarkText
                : Colors.secondaryLightText,
            },
          ]}>
          {item.description}
        </Text>
        <View style={$link}>
          <Image
            style={$tinyLogo}
            source={{
              uri: imageUrl,
            }}
          />
          <Text
            style={[
              $url,
              {
                color: isDarkMode
                  ? Colors.tertiaryDarkText
                  : Colors.tertiaryLightText,
              },
            ]}>
            {item.url}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={$container}>
      <View style={$searchContainer}>
        <SearchBar
          placeholder="Search by title or link..."
          value={''}
          onChangeText={text => {
            console.log(text);
          }}
        />
      </View>
      <FlatList
        style={$items}
        data={links}
        renderItem={renderItem}
        keyExtractor={item => item.url}
      />
    </View>
  );
};

export default LinkList;

const $container = {
  flex: 1,
};

const $searchContainer = {
  alignItems: 'center',
  justifyContent: 'center',
  paddingHorizontal: 24,
  height: 72,
};

const $items = {};

const $item = {
  paddingVertical: 20,
  borderBottomWidth: 1,
  paddingHorizontal: 24,
};

const $title = {
  fontSize: 18,
  fontWeight: 'bold',
  marginBottom: 8,
};

const $description = {
  fontSize: 16,
  fontWeight: 'normal',
};

const $url = {
  fontSize: 16,
  fontWeight: 'normal',
};

const $tinyLogo = {
  height: 24,
  width: 24,
  marginRight: 8,
};

const $link = {
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: 20,
};
