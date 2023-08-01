import * as Yup from 'yup';

const regexName = /^[a-zA-Z\s-]*$/;
const regexPhone = /^\+38\d{10}$/;
const regexCity = /^[A-Z]{1}[a-zA-Z\s-]*$/;

export const validationSchema = Yup.object({
  name: Yup.string()
    .required('Name is required')
    .min(2, 'Name must be min 2')
    .max(16, 'Name must be max 16')
    .matches(regexName, 'Name must be max 16'),
  birthday: Yup.date()
    .min(1900)
    .max(new Date(), 'Birthday is future')
    .required('Birthday is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string()
    .matches(regexPhone, {
      message: 'Format is +380000000000',
    })
    .required(),
  city: Yup.string()
    .min(4, 'Word must be min 4')
    .max(16, 'Word must be max 16')
    .matches(regexCity, 'The first letter must be uppercase')
    .required(),
});
