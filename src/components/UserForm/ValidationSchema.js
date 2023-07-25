import * as Yup from 'yup';

const regexName = /^[^\s][\S\s]{0,15}[^\s]$/;
// const regexPhone = /^\+\38\d{10}$/;

export const validationSchema = Yup.object({
  name: Yup.string()
    .required('Name is required')
    .matches(regexName, 'Name must be between 2 and 16 characters'),
  birthday: Yup.string().notRequired(),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string()
    //  .matches(regexPhone, {
    //    message: 'Invalid phone number',
    //  })
    .notRequired(),
  city: Yup.string().notRequired(),
});