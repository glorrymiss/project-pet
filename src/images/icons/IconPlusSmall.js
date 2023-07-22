import * as React from 'react';
const IconPlusSmall = props => (
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
      d="M12 7v10m-5-5h10"
    />
  </svg>
);
export default IconPlusSmall;
