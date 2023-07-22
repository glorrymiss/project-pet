import * as React from 'react';
const IconLocation1 = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    // {...props}
  >
    <path
      stroke={props.fill || '#54ADFF'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.758 11c0 4.418-3.582 8-8 10-4.418-2-8-5.582-8-10a8 8 0 1 1 16 0Z"
    />
    <path
      stroke={props.fill || '#54ADFF'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.758 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    />
  </svg>
);
export default IconLocation1;
