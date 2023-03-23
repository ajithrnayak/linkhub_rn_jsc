/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import Colors from './colors';

import {SafeAreaView, StatusBar, useColorScheme, View} from 'react-native';
import LinkList from './linklist';
import Header from './header';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const handleLinkPress = url => {
    console.log(`Link pressed: ${url}`);
  };
  return (
    <SafeAreaView style={[backgroundStyle, $container]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={$content}>
        <Header />
        <LinkList onPressLink={handleLinkPress} />
      </View>
    </SafeAreaView>
  );
};

export default App;

const $container = {
  flex: 1,
};

const $content = {
  flex: 1,
};
