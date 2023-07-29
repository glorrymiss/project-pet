import React from 'react';
import { StatusContainer, StatusOption } from './StatusIndicator.styled';
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
    <div style={{ marginBottom: '24px' }}>
      <StatusContainer>
        <StatusOption className={getStatusClassName(1)}>
          Choose option
        </StatusOption>
        <StatusOption className={getStatusClassName(2)}>
          Personal details
        </StatusOption>
        <StatusOption className={getStatusClassName(3)}>More info</StatusOption>
      </StatusContainer>
    </div>
  );
};

export default StatusIndicator;
