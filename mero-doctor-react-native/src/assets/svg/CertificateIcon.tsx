import React from 'react';
import {Svg, Path} from 'react-native-svg';

interface CertificateIconProps {
  width: number;
  height: number;
  fill?: string;
  xmlns?: string;
}

const CertificateIcon: React.FC<CertificateIconProps> = ({
  width,
  height,
  fill = '#1E1E1E',
  xmlns = 'http://www.w3.org/2000/svg',
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 25 24"
      fill="none"
      xmlns={xmlns}>
      <Path
        d="M15.5 2.5V4C15.5 5.414 15.5 6.121 15.94 6.56C16.378 7 17.085 7 18.5 7H20"
        stroke="#1E1E1E"
        strokeOpacity="0.7"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.5 11H16.5M8.5 14H16.5M8.5 17H12.67M4.5 16V8C4.5 5.172 4.5 3.757 5.379 2.879C6.257 2 7.672 2 10.5 2H14.672C15.08 2 15.285 2 15.469 2.076C15.652 2.152 15.797 2.296 16.086 2.586L19.914 6.414C20.204 6.704 20.348 6.848 20.424 7.032C20.5 7.215 20.5 7.42 20.5 7.828V16C20.5 18.828 20.5 20.243 19.621 21.121C18.743 22 17.328 22 14.5 22H10.5C7.672 22 6.257 22 5.379 21.121C4.5 20.243 4.5 18.828 4.5 16Z"
        stroke="#1E1E1E"
        strokeOpacity="0.7"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default CertificateIcon;
