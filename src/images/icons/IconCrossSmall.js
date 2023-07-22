import * as React from 'react';
const IconCrossSmall = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke={props.fill || '#54ADFF'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16 8-8 8m0-8 8 8"
    />
  </svg>
);
export default IconCrossSmall;
