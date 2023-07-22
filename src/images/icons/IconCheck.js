import * as React from 'react';
const IconCheck = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    // {...props}
  >
    <path
      stroke={props.fill || '#54ADFF'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20 7 9 18l-5-5"
    />
  </svg>
);
export default IconCheck;
