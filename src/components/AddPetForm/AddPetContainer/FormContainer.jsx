import { FormCntr, FormCntrThird } from './FormContainer.styled';

export const FormContainer = ({ children }) => {
  return (
    <div>
      <FormCntr>{children}</FormCntr>
    </div>
  );
};

export const FormContainerThird = ({ children }) => {
  return (
    <div>
      <FormCntrThird>{children}</FormCntrThird>
    </div>
  );
};
