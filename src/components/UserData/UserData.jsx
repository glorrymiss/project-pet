import { Container, Title } from './UserData.styled';
import { UserForm } from 'components/UserForm/UserForm';

export const UserData = () => {
  return (
    <Container>
      <Title>My information:</Title>
      <UserForm />
    </Container>
  );
};
