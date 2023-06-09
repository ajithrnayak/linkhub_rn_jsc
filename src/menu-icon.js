import React from 'react';
import {useColorScheme} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const MenuIcon = props => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1Zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1ZM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1Z"
        fill={isDarkMode ? '#CAD7ED' : '#7C7C7C'}
      />
    </Svg>
  );
};

export default MenuIcon;
