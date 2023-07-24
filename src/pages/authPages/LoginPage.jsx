import { RegisterBackground } from "./RegisterPage.styled";

const { default: LoginForm } = require("components/LoginForm/LoginForm")

const LoginPage = () => {
  return( <RegisterBackground>
             <LoginForm/>
        </RegisterBackground>) ;
};

export default LoginPage;
