import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { register } from 'redux/auth/operations';
import theme from 'components/theme';
import { useAuth } from 'hooks';

import * as Element from './RegisterForm.styled';

import IconCheck from 'images/icons/IconCheck';
import IconCross from 'images/icons/IconCross';
import IconEyeOpen from 'images/icons/IconEyeOpen';
import IconEyeClosed from 'images/icons/IconEyeClosed';
import { Notify } from 'notiflix';

const registerSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .matches(/^[a-zA-Z\s]*$/),
  email: Yup.string()
    .email('Enter a valid Email')
    .required('Email is required')
    .matches(
      /^(?=.{10,63}$)(([0-9A-Za-z]{1}[-0-9A-z.]{1,}[0-9A-Za-z]{1})@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/,
      'Enter a valid Email'
    ),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .max(16, 'Password must be at most 16 characters')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number'
    ),
  confirmPassword: Yup.string()
    .required('Confirm password is required')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

const data = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { currentTheme } = useAuth();

  const dispatch = useDispatch();
  const { error } = useAuth();

  const handleClickShowPassword = () => setShowPassword(show => !show);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword(show => !show);

  const handleFormSubmit = async values => {
    const credentials = {
      name: values.name,
      email: values.email,
      password: values.password,
    };

    await dispatch(register(credentials));
    if (error) {
      Notify.failure(error.message);
    }
  };

  return (
    <Formik
      initialValues={data}
      validationSchema={registerSchema}
      validateOnChange={false}
      onSubmit={handleFormSubmit}
    >
      {({
        values,
        errors,
        setErrors,
        touched,
        handleChange,
        handleBlur,
        isSubmitting,
        handleSubmit,
        resetForm,
      }) => {
        const isPasswordValid = values.password && values.password.length >= 8;
        const handleFieldChange = e => {
          const { name } = e.target;
          setErrors({ ...errors, [name]: '' });
          handleChange(e);
        };

        return (
          <Element.RegisterFormEl onSubmit={handleSubmit}>
            <Element.RegisterFormTitle>Registration</Element.RegisterFormTitle>
            <Element.RegisterFormUsernameContainer
              error={errors.name && touched.name}
            >
              <Element.RegisterFormUsernameInputContainer
                error={errors.name && touched.name}
                style={{
                  borderColor:
                    errors.name && touched.name ? '#F43F5E' : '#54ADFF',
                }}
              >
                <Element.RegisterFormInput
                  type="string"
                  name="name"
                  placeholder="Name"
                  value={values.name}
                  onChange={handleFieldChange}
                  onBlur={handleBlur}
                />
                {errors.name && touched.name && values.name && (
                  <Element.ErrorIcon
                    onClick={() => {
                      resetForm({ values: { ...values, name: '' } });
                    }}
                  >
                    <IconCross fill={theme[currentTheme].color.error} />
                  </Element.ErrorIcon>
                )}
              </Element.RegisterFormUsernameInputContainer>
              {errors.name && touched.name && (
                <Element.ErrorMessage name="name">
                  {errors.name}
                </Element.ErrorMessage>
              )}
            </Element.RegisterFormUsernameContainer>

            <Element.RegisterFormEmailContainer
              error={errors.email && touched.email}
            >
              <Element.RegisterFormEmailInputContainer
                error={errors.email && touched.email}
                style={{
                  borderColor:
                    errors.email && touched.email ? '#F43F5E' : '#54ADFF',
                }}
              >
                <Element.RegisterFormInput
                  type="string"
                  name="email"
                  placeholder="Email"
                  value={values.email}
                  onChange={handleFieldChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email && values.email && (
                  <Element.ErrorIcon
                    onClick={() => {
                      resetForm({ values: { ...values, email: '' } });
                    }}
                  >
                    <IconCross fill={theme[currentTheme].color.error} />
                  </Element.ErrorIcon>
                )}
              </Element.RegisterFormEmailInputContainer>

              {errors.email && touched.email && (
                <Element.ErrorMessage name="email">
                  {errors.email}
                </Element.ErrorMessage>
              )}
            </Element.RegisterFormEmailContainer>

            <Element.RegisterFormPasswordContainer
              error={errors.password && touched.password}
              secure={isPasswordValid}
            >
              <Element.RegisterFormPasswordInputContainer
                error={errors.password && touched.password}
                secure={isPasswordValid}
                style={{
                  borderColor:
                    errors.password && touched.password
                      ? '#F43F5E'
                      : isPasswordValid
                      ? '#00C3AD'
                      : '#54ADFF',
                }}
              >
                <Element.RegisterFormInput
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Password"
                  value={values.password}
                  onChange={handleFieldChange}
                  onBlur={handleBlur}
                />
                <Element.PasswordIcon>
                  <Element.EyeIcon
                    onClick={handleClickShowPassword}
                    error={errors.password && touched.password}
                    secure={isPasswordValid}
                  >
                    {showPassword ? (
                      <IconEyeOpen
                        fill={
                          errors.password && touched.password
                            ? theme[currentTheme].color.error
                            : isPasswordValid
                            ? theme[currentTheme].color.indicator
                            : theme[currentTheme].color.btnDark
                        }
                      />
                    ) : (
                      <IconEyeClosed
                        fill={
                          errors.password && touched.password
                            ? theme[currentTheme].color.error
                            : isPasswordValid
                            ? theme[currentTheme].color.indicator
                            : theme[currentTheme].color.btnDark
                        }
                      />
                    )}
                  </Element.EyeIcon>
                  {isPasswordValid && (
                    <Element.CheckMarkIcon>
                      <IconCheck fill={theme[currentTheme].color.indicator} />
                    </Element.CheckMarkIcon>
                  )}
                  {errors.password && touched.password && values.password && (
                    <Element.ErrorIcon
                      onClick={() => {
                        resetForm({ values: { ...values, password: '' } });
                      }}
                    >
                      <IconCross fill={theme[currentTheme].color.error} />
                    </Element.ErrorIcon>
                  )}
                </Element.PasswordIcon>
              </Element.RegisterFormPasswordInputContainer>

              {errors.password && touched.password && (
                <Element.ErrorMessage>{errors.password}</Element.ErrorMessage>
              )}
              {isPasswordValid && (
                <Element.InfoMessage valid={isPasswordValid}>
                  Sufficient password length
                </Element.InfoMessage>
              )}
            </Element.RegisterFormPasswordContainer>

            <Element.RegisterFormPasswordContainer
              error={errors.confirmPassword && touched.confirmPassword}
            >
              <Element.RegisterFormPasswordInputContainer
                error={errors.confirmPassword && touched.confirmPassword}
                style={{
                  borderColor:
                    errors.confirmPassword && touched.confirmPassword
                      ? '#F43F5E'
                      : '#54ADFF',
                }}
              >
                <Element.RegisterFormInput
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  placeholder="Confirm password"
                  value={values.confirmPassword}
                  onChange={handleFieldChange}
                  onBlur={handleBlur}
                />
                <Element.PasswordIcon>
                  <Element.EyeIcon
                    onClick={handleClickShowConfirmPassword}
                    error={errors.confirmPassword && touched.confirmPassword}
                  >
                    {showConfirmPassword ? (
                      <IconEyeOpen
                        fill={
                          errors.confirmPassword && touched.confirmPassword
                            ? theme[currentTheme].color.error
                            : isPasswordValid
                            ? theme[currentTheme].color.indicator
                            : theme[currentTheme].color.btnDark
                        }
                      />
                    ) : (
                      <IconEyeClosed
                        fill={
                          errors.confirmPassword && touched.confirmPassword
                            ? theme[currentTheme].color.error
                            : isPasswordValid
                            ? theme[currentTheme].color.indicator
                            : theme[currentTheme].color.btnDark
                        }
                      />
                    )}
                  </Element.EyeIcon>
                  {errors.confirmPassword &&
                    touched.confirmPassword &&
                    values.confirmPassword && (
                      <Element.ErrorIcon
                        onClick={() => {
                          resetForm({
                            values: { ...values, confirmPassword: '' },
                          });
                        }}
                      >
                        <IconCross fill={theme[currentTheme].color.error} />
                      </Element.ErrorIcon>
                    )}
                </Element.PasswordIcon>
              </Element.RegisterFormPasswordInputContainer>

              {errors.confirmPassword && touched.confirmPassword && (
                <Element.ErrorMessage>
                  {errors.confirmPassword}
                </Element.ErrorMessage>
              )}
            </Element.RegisterFormPasswordContainer>

            {error && (
              <Element.RegisterErrorMessage>
                This email is already in use. Please, try with another email!
              </Element.RegisterErrorMessage>
            )}

            <Element.RegisterBtn type="submit" disabled={isSubmitting}>
              Registration
            </Element.RegisterBtn>
            <Element.LoginText>
              Already have an account?
              <Element.LoginLink to={'/login'}>Log In</Element.LoginLink>
            </Element.LoginText>
          </Element.RegisterFormEl>
        );
      }}
    </Formik>
  );
};

export default RegisterForm;
