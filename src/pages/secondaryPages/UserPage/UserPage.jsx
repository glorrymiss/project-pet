import { PetInfo } from 'components/PetInfo/PetInfo';
import { UserInfo } from 'components/UserInfo/UserInfo';
import {
  Container,
} from './UserPage.styled';

const UserPage = () => {
  return (
    <Container>
      <UserInfo />
      <PetInfo />
    </Container>
  );
};

export default UserPage;
