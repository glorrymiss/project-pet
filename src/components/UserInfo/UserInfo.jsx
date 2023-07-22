import {
  Container,
  Wrap,
  Title,
  InfoItem,
  StyledBtnEdit,
  StyledBtn,
  WrapFoto,
  Avatar,
  WrapInfo,
  TextTitle,
  Text,
} from './UserInfo.styled';
import photoDefault from '../../images/userPageImages/photoDefault.svg';

export const UserInfo = () => {
  const user = {
    name: 'Anna',
    email: 'anna00@gmail.com|',
    birthday: '00.00.0000',
    phone: '+30000000000',
    city: 'Kyiv',
  };

  return (
    <Container>
      <Title>My information:</Title>
      <Wrap>
        <WrapFoto>
          <StyledBtnEdit icon={'IconEdit'} transparent={true} />
          <Avatar>
            <img src={photoDefault} alt="Avatar" />
          </Avatar>
        </WrapFoto>
        <WrapInfo>
          <InfoItem>
            <TextTitle>Name:</TextTitle>
            <Text>{user.name}</Text>
          </InfoItem>
          <InfoItem>
            <TextTitle>Email:</TextTitle>
            <Text>{user.email}</Text>
          </InfoItem>
          <InfoItem>
            <TextTitle>Birthday:</TextTitle>
            <Text>{user.birthday}</Text>
          </InfoItem>
          <InfoItem>
            <TextTitle>Phone:</TextTitle>
            <Text>{user.phone}</Text>
          </InfoItem>
          <InfoItem>
            <TextTitle>City:</TextTitle>
            <Text>{user.city}</Text>
          </InfoItem>
          <StyledBtn icon={'Iconlogout'} text={'Log Out'} transparent={true} />
        </WrapInfo>
      </Wrap>
    </Container>
  );
};
