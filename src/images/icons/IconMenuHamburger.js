import * as React from 'react';
const IconMenuHamburger = props => (
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
      d="M4 7h16M4 12h16M4 17h16"
    />
  </svg>
);
export default IconMenuHamburger;
