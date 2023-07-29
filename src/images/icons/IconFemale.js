import * as React from 'react';
const IconFemale = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    // {...props}
  >
    <path
      stroke={props.fill || '#F43F5E'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.758 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 0v8m-3-3h6"
    />
  </svg>
);
export default IconFemale;
