import * as React from 'react';
const IconMale = props => (
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
      d="M12.758 11a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 0V3m0 0 4 4m-4-4-4 4"
    />
  </svg>
);
export default IconMale;
