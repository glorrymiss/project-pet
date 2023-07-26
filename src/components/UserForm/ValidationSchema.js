import * as Yup from 'yup';

const regexName = /^[^\s][\S\s]{2,15}$/;
// const regexPhone = /^38\s\d{10}$/;
const regexCity = /^[^\S][\S\s]{2,15}$/;

export const validationSchema = Yup.object({
  name: Yup.string()
    .required('Name is required')
    .min(2, 'Name must be min 2')
    .max(15, 'Name must be max 16')
    .matches(regexName, 'Name must be max 16'),
  birthday: Yup.date()
    .max(new Date(), 'Birthday is future')
    .required('Birthday is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string()
   //  .matches(regexPhone, {
   //  	message: 'Invalid phone number',
   //  })
    .notRequired(),
  city: Yup.string()
    .min(4, 'City must be min 4')
    .matches(regexCity, 'The first letter must be uppercase')
    .notRequired(),
});