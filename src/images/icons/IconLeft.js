import * as React from 'react';

const IconLeft = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={7}
    fill="none"
    // {...props}
  >
    <path
      fill={props.fill || '#FFC107'}
      // fillOpacity={0.5}
      d="m.328 4.517 1.793 2.315a.452.452 0 0 0 .65.057c.182-.17.208-.48.052-.706l-1.69-2.174h14.4c.26 0 .467-.226.467-.508 0-.282-.208-.508-.468-.508H1.134L2.824.819C2.978.62 2.953.31 2.77.113A.373.373 0 0 0 2.485 0c-.13 0-.26.056-.338.17L.354 2.483c-.468.622-.468 1.469-.026 2.033Z"
    />
  </svg>
);
export default IconLeft;
