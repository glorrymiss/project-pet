import * as React from 'react';
const SvgComponent = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    fill="none"
    // {...props}
  >
    <path
      stroke={props.fill || '#FFC107'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M22 24v-2a4 4 0 0 0-4-4h-8a4 4 0 0 0-4 4v2m12-14a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
    />
    <rect
      width={26.5}
      height={26.5}
      x={0.75}
      y={0.75}
      stroke={props.fill || '#FFC107'}
      strokeWidth={1.5}
      rx={13.25}
    />
  </svg>
);
export default SvgComponent;
