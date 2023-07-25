import { Container } from 'components/Container/Container';
import styled from 'styled-components';

export const ContainerLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const StuledContainer = styled(Container)`
  flex-grow: 3;
`;
