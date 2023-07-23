 import { useFormik } from 'formik';
import { useState } from 'react';
import { Wrap, WrapFoto, Avatar, WrapInfo, InfoItem, TextTitle, Text, StyledBtnSave} from './UserForm.styled';
import photoDefault from '../../images/userPageImages/photoDefault.svg';
import Btn from 'components/Btn/Btn';

export const UserForm = ({user, close}) => {
	const [avatar, setAvatar] = useState('' || user.avatar);
	console.log(avatar);

	function isChangeFile(e) {
		const { files } = e.currentTarget;
		const avatarUrl = URL.createObjectURL(files[0])
		setAvatar(avatarUrl);
	}


   const formik = useFormik({
     initialValues: {
		avatar: user.avatar,
       name: user.name,
       email: user.email,
       birthday: user.birthday,
		 phone: user.phone,
		 city: user.city,
     },
		onSubmit: values => {
			console.log(avatar);
			alert(JSON.stringify(values, null, 2));
			close();
     },
	});
   return (
		<Wrap>
			<WrapFoto>
            <Avatar key={avatar} src={!avatar?photoDefault:avatar} alt="" />
				<label htmlFor="avatar">
					<Btn icon={'IconCrossSmall'} transparent={true} />
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
			<WrapInfo onSubmit={formik.handleSubmit}>
				<InfoItem>
					<TextTitle htmlFor="name">Name:</TextTitle>
					<Text
						id="name"
						name="name"
						type="text"
						onChange={formik.handleChange}
						value={formik.values.name}
               />
				</InfoItem>
				<InfoItem>
					<TextTitle htmlFor="email">Email:</TextTitle>
					<Text
						id="email"
						name="email"
						type="email"
						onChange={formik.handleChange}
						value={formik.values.email}
					/>
				</InfoItem>
				<InfoItem>
					<TextTitle htmlFor="birthday">Birthday:</TextTitle>
					<Text
						id="birthday"
						name="birthday"
						type="text"
						onChange={formik.handleChange}
						value={formik.values.birthday}
						/>
				</InfoItem>
				<InfoItem>
					<TextTitle htmlFor="birthday">Phone:</TextTitle>
					<Text
						id="phone"
						name="phone"
						type="phone"
						onChange={formik.handleChange}
						value={formik.values.phone}
						/>
				</InfoItem>
				<InfoItem>
					<TextTitle htmlFor="birthday">City:</TextTitle>
					<Text
						id="city"
						name="city"
						type="text"
						onChange={formik.handleChange}
						value={formik.values.city}
						/>
				</InfoItem>
				<StyledBtnSave  type="submit">Save</StyledBtnSave>
			</WrapInfo>
       
     </Wrap>
   );
};
