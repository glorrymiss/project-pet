import RegisterForm from 'components/RegisterForm/RegisterForm';
import { Helmet } from 'react-helmet';

import { RegisterBackground, RegisterBorder } from './RegisterPage.styled';

const RegisterPage = () => {
  return (
    <>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterBackground>
        <RegisterBorder>
          <RegisterForm />
        </RegisterBorder>
      </RegisterBackground>
    </>
  );
};

export default RegisterPage;
