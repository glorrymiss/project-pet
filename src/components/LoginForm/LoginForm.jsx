import {Title, FieldStyled, FormStyled, Button, Text, Wrap, StyledNavLink, TextError} from './LoginForm.styled'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Formik} from 'formik';
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
    email:Yup.string().required("Field is a required").email('Enter a valid email'),
    password:Yup.string().required("Field is a required")
    .min(6, "Password must be at least 8 characters")
    .max(16, "Password must be less at 16 characters")
    .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,16}$/,
        'Password must contain at least 1 uppercase letter, 1 lowercase letter and 1 number'
      )
      
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
      validationSchema={validationSchema}
      onSubmit={values => {
        handleLogInSubmit()
        console.log("submit", values);
      }}>
         {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
     <FormStyled  onSubmit={handleSubmit}>
        <Title>Login</Title>
        <Wrap>
        <FieldStyled type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
             placeholder='Email' 
             required/>
        <TextError>
                  {errors.email && touched.email && errors.email}
        </TextError>
        <FieldStyled  type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
             placeholder='Password'
             required/>
     
        <TextError>
                  {errors.password && touched.password && errors.password }
        </TextError>
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


