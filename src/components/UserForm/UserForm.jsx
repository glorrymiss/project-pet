import dateFormat from 'dateformat';
import { useFormik } from 'formik';
import { useState } from 'react';
import {
  WrapFileOk,
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
  StyledBtnFile,
  IconCameraOk,
  ErrorMessageRes,
} from './UserForm.styled';
import photoDefault from '../../images/userPageImages/photoDefault.svg';
// import IconCamera from 'images/icons/IconCamera';
import { validationSchema } from './ValidationSchema';
import { useDispatch } from 'react-redux';
import { updateUserInfo } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import ModalLog from 'components/ModalLog/ModalLog';
import theme from 'components/theme';
import { Notify } from 'notiflix';
import IconCheck from 'images/icons/IconCheck';
import IconCross from 'images/icons/IconCross';

 const UserForm = () => {
  const { user, error, currentTheme } = useAuth();
  // console.log(user);
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [isAvatar, setIsAvatar] = useState('');
  const [isAvatarOld, setIsAvatarOld] = useState('');
  const [avatarUrl, setAvatarUrl] = useState(user.avatar || '');
  const [avatarUrlOld, setAvatarUrlOld] = useState(user.avatar || '');
  const [isFile, setIsFile] = useState(false);

  const isOpenModal = () => {
    setIsModal(true);
  };
  const isCloseModal = () => {
    setIsModal(false);
  };
  const isEditUser = () => {
    setIsEdit(true);
  };
  const isFaleEdit = () => {
    setIsFile(false);
    setIsAvatar(isAvatarOld);
    setFieldValue('avatar', isAvatarOld);
    setAvatarUrl(avatarUrlOld);
  };
  const isFaleOkEdit = () => {
    setIsFile(false);
    setIsAvatarOld(isAvatar);
    setFieldValue('avatar', isAvatar);
    setAvatarUrlOld(avatarUrl);
  };

  const isChangeFile = e => {
    const { files } = e.currentTarget;
    const avatarUrl = URL.createObjectURL(files[0]);
    setIsAvatar(files[0]);
    if (files) {
      setIsFile(true);
      setAvatarUrl(avatarUrl);
    }
  };
  const isChangeInput = e => {
    const { name, value } = e.target;
    setFieldValue(name, value);
  };
  const changeBirthday = user.birthday
    ? dateFormat(user.birthday, 'dd.mm.yyyy')
    : '';

  const { setFieldValue, handleBlur, handleSubmit, values, errors, touched } =
    useFormik({
      initialValues: {
        avatar: isAvatar,
        name: user.name,
        email: user.email,
        birthday: user.birthday || '',
        phone: user.phone || '',
        city: user.city || '',
      },

      validationSchema: validationSchema,
      onSubmit: async values => {
        const v = {};
        //   console.log(values.avatar);
        if (avatarUrl && avatarUrl !== user.avatar) {
          v.avatar = values.avatar;
        }
        if (values.name !== user.name) {
          v.name = values.name;
        }
        if (values.email !== user.email) {
          v.email = values.email;
        }
        if (values.birthday !== user.birthday) {
          v.birthday = values.birthday;
        }
        if (values.phone !== user.phone) {
          v.phone = values.phone;
        }
        if (values.city !== user.city) {
          v.city = values.city;
        }
        //   alert(JSON.stringify(v, null, 2));
        setIsFile(false);
        const res = await dispatch(updateUserInfo(v));
        if (res.error) {
          Notify.failure(error.message);
          return;
        }
        setIsEdit(false);
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
          src={avatarUrl ? avatarUrl : photoDefault}
          alt="avatar"
        />
        <StyledLabel htmlFor="avatar" isEdit={isEdit} isFile={isFile}>
          <IconCameraOk />
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
        />
        {isFile && (
          <WrapFileOk>
            <StyledBtnFile onClick={isFaleOkEdit}>
              <IconCheck fill={theme[currentTheme].color.indicator} />
            </StyledBtnFile>
            <p>Confirm</p>
            <StyledBtnFile onClick={isFaleEdit}>
              <IconCross fill={theme[currentTheme].color.error} />
            </StyledBtnFile>
          </WrapFileOk>
        )}
      </WrapFoto>
      <WrapInfo onSubmit={handleSubmit}>
        <InfoItem>
          <TextTitle htmlFor="name">Name:</TextTitle>
          <Text
            disabled={!isEdit ? true : false}
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            onChange={isChangeInput}
            value={values.name}
            onBlur={handleBlur}
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
            type={!isEdit ? 'text' : 'date'}
            placeholder="00.00.0000"
            onChange={isChangeInput}
            value={!isEdit ? changeBirthday : values.birthday}
            onBlur={handleBlur}
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
            placeholder="+380000000000"
            onChange={isChangeInput}
            value={values.phone}
            onBlur={handleBlur}
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
            placeholder="Kyev"
            onChange={isChangeInput}
            value={values.city}
            onBlur={handleBlur}
          />
          {errors.city && touched.city ? (
            <ErrorMessage>{errors.city}</ErrorMessage>
          ) : null}
        </InfoItem>
        {isEdit && <StyledBtnSave type="submit">Save</StyledBtnSave>}
        {error && <ErrorMessageRes>{error.message}</ErrorMessageRes>}
      </WrapInfo>
      {!isEdit && (
        <StyledBtn
          icon={'Iconlogout'}
          text={'Log Out'}
          transparent={true}
          onClick={isOpenModal}
        />
      )}
      {isModal && <ModalLog close={isCloseModal} />}
    </Wrap>
  );
};

export default UserForm;
