import * as React from 'react';
const IconArrowLeft = props => (
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
      d="M4 12h16M4 12l6-6m-6 6 6 6"
    />
  </svg>
);
export default IconArrowLeft;
