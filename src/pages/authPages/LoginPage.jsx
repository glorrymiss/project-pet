import { Helmet } from "react-helmet";
import { RegisterBackground } from "./RegisterPage.styled";

const { default: LoginForm } = require("components/LoginForm/LoginForm")

const LoginPage = () => {
  return( 
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <RegisterBackground>
        <LoginForm/>
      </RegisterBackground>
    </>
  ) ;
};

export default LoginPage;
