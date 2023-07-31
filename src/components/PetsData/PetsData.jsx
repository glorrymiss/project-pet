import {
  Container,
  WrapItem,
  Title,
  StyledBtnPlus,
} from './PetsData.styled';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect} from 'react';
import { fetchPets } from 'redux/pets/operation';
import { usePets } from '../../hooks';
import PetItem from 'components/PetItem/PetItem';

  const PetsData = () => {
  const dispatch = useDispatch();
	const { pets } = usePets();

  const navigate = useNavigate();
  const navAddPet = () => {
    navigate('/add-pet');
	};
	
	useEffect(() => {
    dispatch(fetchPets());
  }, [dispatch]);

  return (
    <Container>
      <Title>My pets:</Title>
      <StyledBtnPlus icon={'IconPlus'} text={'Add Pet'} onClick={navAddPet} />

      {pets.length === 0 ? (
        <p>You don't have pets</p>
      ) : (
        <ul>
          {pets.map(pet => {
            return (
					<WrapItem key={pet._id}>
						<PetItem pet={pet} />
              </WrapItem>
            );
          })}
        </ul>
      )}
    </Container>
  );
};

export default PetsData;
