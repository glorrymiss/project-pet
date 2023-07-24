import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import {
  Wrap,
  WrapFoto,
  Avatar,
  WrapInfo,
  InfoItem,
  TextTitle,
  Text,
  StyledBtnSave,
  ErrorMessage,
} from './UserForm.styled';
import photoDefault from '../../images/userPageImages/photoDefault.svg';
import IconCamera from 'images/icons/IconCamera';
import { validationSchema } from './ValidationSchema';
import { useDispatch } from 'react-redux';
import { updateUserInfo } from 'redux/auth/operations';
import { useAuth } from 'hooks';

export const UserForm = ({ close }) => {
	const { user } = useAuth();
  const dispatch = useDispatch();
	const [avatar, setAvatar] = useState('' || user.avatar);

  const isChangeFile = e => {
    const { files } = e.currentTarget;
	  const avatarUrl = URL.createObjectURL(files[0]);
	  setFieldValue('avatar', avatarUrl);
	//   console.log(avatar);
	  setAvatar(avatarUrl);
  };

  const {
    setFieldValue,
    handleBlur,
    handleSubmit,
    handleChange,
    values,
    errors,
    touched,
  } = useFormik({
    initialValues: {
      avatar: user.avatar,
      name: user.name,
      email: user.email,
      birthday: user.birthday,
      phone: user.phone,
      city: user.city,
    },
    validationSchema: validationSchema,
	  onSubmit: async values => {
		//  setFieldValue('avatar', avatar);
      // console.log(avatar);
      alert(JSON.stringify(values, null, 2));
      close();
      try {
        await dispatch(updateUserInfo(values));
      } catch (error) {
        console.log(error.message);
      }
    },
  });
//   useEffect(() => {
//    setFieldValue('name', user.name);
//    setFieldValue('email', user.email);
//    setFieldValue('phone', user.phone);
//    setFieldValue('city', user.city);
//    setFieldValue('birthday', user.birthday);
//    setAvatar(user.avatar);
//   }, [user, setFieldValue]);
//   console.log(user);

  return (
    <Wrap>
      <WrapFoto>
        <Avatar key={avatar} src={!avatar ? photoDefault : avatar} alt="" />
        <label htmlFor="avatar">
          <IconCamera />
          {/* <Btn icon={'IconCrossSmall'} transparent={true} /> */}
          Edit photo
        </label>
        <input
          id="avatar"
          name="avatar"
          type="file"
          accept="image/png, image/jpeg"
          multiple
          onChange={isChangeFile}
          style={{ display: 'none' }}
          // value={formik.values.avatar}
        />
      </WrapFoto>
      <WrapInfo onSubmit={handleSubmit}>
        <InfoItem>
          <TextTitle htmlFor="name">Name:</TextTitle>
          <Text
            id="name"
            name="name"
            type="text"
            onChange={handleChange}
            value={values.name}
            onBlur={handleBlur}
            className={errors.name && touched.name ? 'InvalidInput' : ''}
          />
          {errors.name && touched.name ? (
            <ErrorMessage>{errors.name}</ErrorMessage>
          ) : null}
        </InfoItem>
        <InfoItem>
          <TextTitle htmlFor="email">Email:</TextTitle>
          <Text
            id="email"
            name="email"
            type="email"
            onChange={handleChange}
            value={values.email}
            onBlur={handleBlur}
            className={errors.name && touched.name ? 'InvalidInput' : ''}
          />
          {errors.email && touched.email ? (
            <ErrorMessage>{errors.email}</ErrorMessage>
          ) : null}
        </InfoItem>
        <InfoItem>
          <TextTitle htmlFor="birthday">Birthday:</TextTitle>
          <Text
            id="birthday"
            name="birthday"
            type="text"
            onChange={handleChange}
            value={values.birthday}
            onBlur={handleBlur}
            className={errors.name && touched.name ? 'InvalidInput' : ''}
          />
          {errors.birthday && touched.birthday ? (
            <ErrorMessage>{errors.birthday}</ErrorMessage>
          ) : null}
        </InfoItem>
        <InfoItem>
          <TextTitle htmlFor="birthday">Phone:</TextTitle>
          <Text
            id="phone"
            name="phone"
            type="phone"
            onChange={handleChange}
            value={values.phone}
            onBlur={handleBlur}
            className={errors.name && touched.name ? 'InvalidInput' : ''}
          />
          {errors.phone && touched.phone ? (
            <ErrorMessage>{errors.phone}</ErrorMessage>
          ) : null}
        </InfoItem>
        <InfoItem>
          <TextTitle htmlFor="birthday">City:</TextTitle>
          <Text
            id="city"
            name="city"
            type="text"
            onChange={handleChange}
            value={values.city}
            onBlur={handleBlur}
            className={errors.name && touched.name ? 'InvalidInput' : ''}
          />
          {errors.city && touched.city ? (
            <ErrorMessage>{errors.city}</ErrorMessage>
          ) : null}
        </InfoItem>
        <StyledBtnSave type="submit">Save</StyledBtnSave>
      </WrapInfo>
    </Wrap>
  );
};
