import {Title, FieldStyled, FormStyled, Button, Text, Wrap, StyledNavLink, TextError} from './LoginForm.styled'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Formik} from 'formik';
import * as Yup from 'yup'

const validLogInSchema = Yup.object().shape({
email:Yup.string().email('Enter a valid email').required(),
password:Yup.string().min(6, 'To short!').max(16, 'To long!').required()
})
   

const LoginForm = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    const handleLogInSubmit = event => {
        event.preventDefault();

    dispatch(
         logIn({
            email: email,
            password: password,
          })
        );
        reset();
      };

    const reset = () => {
        setEmail('');
        setPassword('');
      };

return(
    <> 
     <Formik
      initialValues={{
        email: '',
        password: ''
      }}
      validationSchema={validLogInSchema}
      onSubmit={values => {
        console.log("submit", values);
      }}>
        {({ errors, touched }) => (
     <FormStyled
      onSubmit={handleLogInSubmit}
      >
        <Title>Login</Title>
        <Wrap>
        <FieldStyled type="email"
            name="email"
            value={email}
            onChange={(event)=>setEmail(event.currentTarget.value)}
             placeholder='Email' 
             required/>
              {touched.email && errors.email &&  <TextError>{errors.email}</TextError> }
        <FieldStyled  type="password"
            name="password"
            value={password}
            onChange={(event)=>setPassword(event.currentTarget.value)}
             placeholder='Password'
             required/>
              {touched.password && errors.password &&  <TextError>{errors.password}</TextError> }
        </Wrap>
        <Button type='submit'>Login</Button>
        <Text>Don't have an account?<StyledNavLink to="/register">Register</StyledNavLink></Text>
     </FormStyled>
     )}
     </Formik>
    </>
   
)
}

export default LoginForm