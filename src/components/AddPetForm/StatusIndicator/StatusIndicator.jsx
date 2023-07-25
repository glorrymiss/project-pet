import React from 'react';
import { StatusContainer } from './StatusIndicator.styled';
import css from './statusIndicator.module.css';

const StatusIndicator = ({ currentStatus }) => {
  const getStatusClassName = status => {
    if (currentStatus === status) {
      return css.textStatusCurrent;
    } else if (currentStatus > status) {
      return css.textStatusDone;
    } else {
      return css.textStatus;
    }
  };

  return (
    <div>
      <StatusContainer>
        <li className={getStatusClassName(1)}>Choose option</li>
        <li className={getStatusClassName(2)}>Personal details</li>
        <li className={getStatusClassName(3)}>More info</li>
      </StatusContainer>
    </div>
  );
};

export default StatusIndicator;
