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
} from './PetsData.styled';
import photoPetsDefault from '../../images/userPageImages/photoPetsDefault.svg';
import { useNavigate } from 'react-router-dom';
// import { useAuth } from 'hooks';
// import Btn from 'components/Btn/Btn';

export const PetsData = () => {
  //   const { currentTheme } = useAuth();
  const navigate = useNavigate();
  const pets = [{
    avatar: '',
    name: 'Anna',
    birthday: '00.00.0000',
    type: 'Persian cat',
    comments:
      'Jack is a gray Persian cat with green eyes. He loves to be pampered and groomed, and enjoys playing with toys. Although a bitshy, hes a loyal and affectionate lap cat',
  }];
  const navAddPet = () => {
    navigate('/add-pet');
  };

  return (
    <Container>
      <Title>My pets:</Title>
		  <ul>
			  {pets.map((pet) => {
				  return (
            <WrapItem key={pet.type}>
              <StyledBtnPlus
                icon={'IconPlus'}
                text={'Add Pet'}
                onClick={navAddPet}
              />
              <WrapFoto>
                <Avatar>
                  <img
                    src={!pet.avatar ? photoPetsDefault : pet.avatar}
                    alt="Avatar"
                  />
                </Avatar>
              </WrapFoto>
              <WrapInfo>
                <StyledBtn icon={'IconTrash2'} transparent={true} />
                <InfoItem>
                  <Text>
                    <TextTitle>Name: </TextTitle>
                    {pet.name}
                  </Text>
                </InfoItem>
                <InfoItem>
                  <Text>
                    <TextTitle>Date of birth: </TextTitle>
                    {pet.birthday}
                  </Text>
                </InfoItem>
                <InfoItem>
                  <Text>
                    <TextTitle>Type: </TextTitle>
                    {pet.type}
                  </Text>
                </InfoItem>
                <InfoItem>
                  <Text>
                    <TextTitle>Comments: </TextTitle>
                    {pet.comments}
                  </Text>
                </InfoItem>
              </WrapInfo>
            </WrapItem>
          );
			  })}
      </ul>
    </Container>
  );
};
