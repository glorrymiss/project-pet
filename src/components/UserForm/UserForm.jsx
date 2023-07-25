import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import {
	StyledLabel,
  StyledBtn,
  Wrap,
  WrapFoto,
  Avatar,
  WrapInfo,
  InfoItem,
  TextTitle,
  Text,
  StyledBtnSave,
  StyledBtnEdit,
  ErrorMessage,
} from './UserForm.styled';
import photoDefault from '../../images/userPageImages/photoDefault.svg';
import IconCamera from 'images/icons/IconCamera';
import { validationSchema } from './ValidationSchema';
import { useDispatch } from 'react-redux';
import { updateUserInfo } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { ModalApproveAction } from 'components/ModalApproveAction/ModalApproveAction';

export const UserForm = ({ close }) => {
  const { user } = useAuth();
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const [isModal, setIsModal] = useState(false);

  const isOpenModal = () => {
    setIsModal(true);
  };
  const isCloseModal = () => {
    setIsModal(false);
  };

  const isEditUser = () => {
    setIsEdit(true);
  };

  const isChangeFile = e => {
    const { files } = e.currentTarget;
    const avatarUrl = URL.createObjectURL(files[0]);
    setFieldValue('avatar', avatarUrl);
    //   console.log(avatar);
    //  setAvatar(avatarUrl);
  };
  const isChangeInput = e => {
    //  setTouched('birthday', false);
    const { name, value } = e.target;
    // setFieldTouched('birthday', e.currentTarget.value, false);
    // setFieldValue('birthday', e.currentTarget.value, false);
    // console.log(birthday);
    setFieldValue(name, value);
    console.log(touched.value);
  };

  const {
    setTouched,
    setFieldTouched,
    setFieldValue,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
  } = useFormik({
    initialValues: {
      avatar: user.avatar || photoDefault,
      name: user.name,
      email: user.email,
      birthday: user.birthday || '00.00.0000',
      phone: user.phone || '+380000000000',
      city: user.city || 'no info',
    },
    validationSchema: validationSchema,
    onSubmit: async values => {
      //  setFieldValue('avatar', avatar);
      // console.log(avatar, city, phone);
      alert(JSON.stringify(values, null, 2));
      setIsEdit(false);
      // close();
      try {
        await dispatch(updateUserInfo(values));
      } catch (error) {
        console.log(error.message);
      }
    },
  });

  return (
    <Wrap>
      <StyledBtnEdit
        icon={'IconEdit'}
        transparent={true}
        onClick={isEditUser}
        isEdit={isEdit}
      />
      <WrapFoto>
        <Avatar
          key="avatar"
          src={!user.avatar ? photoDefault : user.avatar}
          alt="avatar"
        />
        <StyledLabel htmlFor="avatar" isEdit={isEdit}>
          <IconCamera />
          {/* <Btn icon={'IconCrossSmall'} transparent={true} /> */}
          Edit photo
        </StyledLabel>
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
        {/* <div>
          <StyledBtn
            icon={'IconCheck'}
            transparent={true}
            onClick={isOpenModal}
          />
          <p>Confirm</p>
          <StyledBtn
            icon={'IconCross'}
            transparent={true}
            onClick={isOpenModal}
          />
        </div> */}
      </WrapFoto>
      <WrapInfo onSubmit={handleSubmit}>
        <InfoItem>
          <TextTitle htmlFor="name">Name:</TextTitle>
          <Text
            disabled={!isEdit ? true : false}
            id="name"
            name="name"
            type="text"
            onChange={isChangeInput}
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
            disabled={!isEdit ? true : false}
            id="email"
            name="email"
            type="email"
            onChange={isChangeInput}
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
            disabled={!isEdit ? true : false}
            id="birthday"
            name="birthday"
            type="text"
            onChange={isChangeInput}
            value={values.birthday}
            onBlur={handleBlur}
            className={errors.name && touched.name ? 'InvalidInput' : ''}
          />
          {errors.birthday && touched.birthday ? (
            <ErrorMessage>{errors.birthday}</ErrorMessage>
          ) : null}
        </InfoItem>
        <InfoItem>
          <TextTitle htmlFor="phone">Phone:</TextTitle>
          <Text
            disabled={!isEdit ? true : false}
            id="phone"
            name="phone"
            type="phone"
            onChange={isChangeInput}
            value={values.phone}
            onBlur={handleBlur}
            className={errors.name && touched.name ? 'InvalidInput' : ''}
          />
          {errors.phone && touched.phone ? (
            <ErrorMessage>{errors.phone}</ErrorMessage>
          ) : null}
        </InfoItem>
        <InfoItem>
          <TextTitle htmlFor="city">City:</TextTitle>
          <Text
            disabled={!isEdit ? true : false}
            id="city"
            name="city"
            type="text"
            onChange={isChangeInput}
            value={values.city}
            onBlur={handleBlur}
            className={errors.name && touched.name ? 'InvalidInput' : ''}
          />
          {errors.city && touched.city ? (
            <ErrorMessage>{errors.city}</ErrorMessage>
          ) : null}
        </InfoItem>
        {isEdit && (
          <StyledBtnSave type="submit" text="Save" onClick={handleSubmit} />
        )}
      </WrapInfo>
      {!isEdit && (
        <StyledBtn
          icon={'Iconlogout'}
          text={'Log Out'}
          transparent={true}
          onClick={isOpenModal}
        />
      )}
      {isModal && <ModalApproveAction close={isCloseModal} id={user.id} />}
    </Wrap>
  );
};
