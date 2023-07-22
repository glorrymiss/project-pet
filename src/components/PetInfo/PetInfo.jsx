import {
  Container,
  WrapItem,
  Title,
  InfoItem,
  StyledBtnPlus,
  StyledBtn,
  WrapFoto,
  Avatar,
  WrapInfo,
  TextTitle,
  Text,
} from './PetInfo.styled';
import photoDefault from '../../images/userPageImages/photoDefault.svg';
import { Link } from 'react-router-dom';
// import Btn from 'components/Btn/Btn';

export const PetInfo = () => {
  const user = {
    name: 'Anna',
    birthday: '00.00.0000',
    type: 'Persian cat',
    comments:
      'Jack is a gray Persian cat with green eyes. He loves to be pampered and groomed, and enjoys playing with toys. Although a bitshy, hes a loyal and affectionate lap cat',
  };

  return (
    <Container>
      <Title>My pets:</Title>
      <ul>
        <WrapItem key={user.type}>
          <Link to="/add-pet">
            <StyledBtnPlus icon={'IconPlus'} text={'Add Pet'} />
          </Link>

          <WrapFoto>
            <Avatar>
              <img src={photoDefault} alt="Avatar" />
            </Avatar>
          </WrapFoto>
          <WrapInfo>
            <StyledBtn icon={'IconTrash2'} transparent={true} />
            <InfoItem>
              <Text>
                <TextTitle>Name: </TextTitle>
                {user.name}
              </Text>
            </InfoItem>
            <InfoItem>
              <Text>
                <TextTitle>Date of birth: </TextTitle>
                {user.birthday}
              </Text>
            </InfoItem>
            <InfoItem>
              <Text>
                <TextTitle>Type: </TextTitle>
                {user.type}
              </Text>
            </InfoItem>
            <InfoItem>
              <Text>
                <TextTitle>Comments: </TextTitle>
                {user.comments}
              </Text>
            </InfoItem>
          </WrapInfo>
        </WrapItem>
      </ul>
    </Container>
  );
};
