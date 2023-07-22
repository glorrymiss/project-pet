import * as React from 'react';
const IconTrash2 = props => (
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
      d="M18 6v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6m9 0V5a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v1M4 6h16m-10 4v6m4-6v6"
    />
  </svg>
);
export default IconTrash2;
