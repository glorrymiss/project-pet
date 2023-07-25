import * as Component from './LoginForm.styled'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logIn } from 'redux/auth/operations';
import { Formik} from 'formik';
import * as Yup from 'yup'
import { useAuth } from 'hooks';
import theme from 'components/theme';
import IconCheck from 'images/icons/IconCheck';
import IconEyeClosed from 'images/icons/IconEyeClosed'
import IconEyeOpen from 'images/icons/IconEyeOpen';
import IconCross from 'images/icons/IconCross';
import Notiflix from 'notiflix';



const validationSchema = Yup.object().shape({
    email:Yup.string().required("Field is a required").email('Enter a valid Email'),
    password:Yup.string().required("Field is a required")
    .min(6, "Password must be at least 6 characters")
    .max(16, "Password must be less at 16 characters")
    .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,16}$/,
        'Password must contain at least 1 uppercase letter, 1 lowercase letter and 1 number'
      )
      
    })
   

const LoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { currentTheme } = useAuth();
    const [openPassword, setOpenPassword] = useState(false);

    const handleOpenPassword = () => setOpenPassword(openPassword => !openPassword);

   const handleLogInSubmit = async (values) => {
     const res = await dispatch(
        logIn({
           email: values.email,
           password: values.password,
         })
       );
       if (res.error || res.payload.status === 401) {
        Notiflix.Notify.failure(res.payload.message);
      } else {
        navigate('/user');
      }
    }
    
return(
    <Formik
      initialValues={{
        email: '',
        password: ''
      }}
      validationSchema={validationSchema}
      onSubmit={handleLogInSubmit}
      >
         {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => {
          const isPasswordValid = values.password && values.password.length>=6;
          
    return(
     <Component.FormStyled  onSubmit={handleSubmit}>
        <Component.Title>Login</Component.Title>
        <Component.Wrap>
        
         <label style={{position:'relative'}}>
              <Component.FieldStyled 
                error={errors.email && touched.email && errors.email}
                valid={values.email}
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder='Email'
                required/>
              {errors.email && touched.email && errors.email  && <Component.IconCrossStyle fill={theme[currentTheme].color.error}/>}
              {values.email && !errors.email &&  <Component.WrapIcons><IconCheck fill={theme[currentTheme].color.indicator}/></Component.WrapIcons>}
              <Component.TextError>{errors.email && touched.email && errors.email}</Component.TextError>
          </label>
        
          <label style={{position:'relative'}}>
              <Component.FieldStyled
                error={errors.password && touched.password && errors.password}
                type={openPassword ? 'text':'password'}
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder='Password'
                style={{
                  borderColor:
                    errors.password && touched.password && errors.password
                      ? theme[currentTheme].color.error
                      : isPasswordValid
                      ? theme[currentTheme].color.indicator
                      : theme[currentTheme].color.btnDark,
                }}
                required/>
                
              <Component.WrapIcons>
                <div onClick={handleOpenPassword}>
                  {openPassword ? 
                      <IconEyeOpen
                      fill={errors.password && touched.password
                        ? theme[currentTheme].color.error
                        : isPasswordValid
                        ? theme[currentTheme].color.btnLogOut 
                        : theme[currentTheme].color.btnDark}/> :
                  <IconEyeClosed
                      fill={errors.password && touched.password
                        ? theme[currentTheme].color.error
                        : isPasswordValid
                        ? theme[currentTheme].color.btnLogOut 
                        : theme[currentTheme].color.btnDark}/>
                    } 
                </div>
              {errors.password && touched.password && errors.password  && <IconCross fill={theme[currentTheme].color.error}/>}
              {values.password && !errors.password &&  <IconCheck fill={theme[currentTheme].color.indicator}/>}
              </Component.WrapIcons>

          
          

                  {errors.password && touched.password && errors.password &&
                  <Component.TextError>{errors.password}</Component.TextError>}
                  {!errors.password && touched.password && <Component.SuccessText>Password is secure</Component.SuccessText>}
              </label> 
        </Component.Wrap>
        <Component.Button type='submit'>Login</Component.Button>
        <Component.Text>Don't have an account?<Component.StyledNavLink to="/register">Register</Component.StyledNavLink></Component.Text>
     </Component.FormStyled>
           )
            }}
        </Formik>
      )
    };
export default LoginForm


