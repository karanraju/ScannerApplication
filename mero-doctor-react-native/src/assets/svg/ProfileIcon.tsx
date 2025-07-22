import React from 'react';
import {Svg, Path} from 'react-native-svg';
const ProfileIcon = ({width = 20, height = 20, strokeColor = '#00B3A6'}) => {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M3.33337 15C3.33337 14.1159 3.68456 13.2681 4.30968 12.643C4.93481 12.0178 5.78265 11.6667 6.66671 11.6667H13.3334C14.2174 11.6667 15.0653 12.0178 15.6904 12.643C16.3155 13.2681 16.6667 14.1159 16.6667 15C16.6667 15.442 16.4911 15.8659 16.1786 16.1785C15.866 16.4911 15.4421 16.6667 15 16.6667H5.00004C4.55801 16.6667 4.13409 16.4911 3.82153 16.1785C3.50897 15.8659 3.33337 15.442 3.33337 15Z"
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10 8.33333C11.3807 8.33333 12.5 7.21404 12.5 5.83333C12.5 4.45262 11.3807 3.33333 10 3.33333C8.61929 3.33333 7.5 4.45262 7.5 5.83333C7.5 7.21404 8.61929 8.33333 10 8.33333Z"
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default ProfileIcon;
