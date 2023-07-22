import * as React from 'react';
const IconCross = props => (
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
      d="M19 5 5 19M5 5l14 14"
    />
  </svg>
);
export default IconCross;
