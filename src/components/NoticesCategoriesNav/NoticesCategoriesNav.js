import { useAuth } from 'hooks';
import { BtnNavLink, ContainerNav } from './NoticesCategoriesNav.styled';

const NoticesCategoriesNav = () => {
  const { isLoggedIn } = useAuth();
  return (
    <ContainerNav>
      <BtnNavLink to="sell">sell</BtnNavLink>
      <BtnNavLink to="lost-found">lost/found</BtnNavLink>
      <BtnNavLink to="for-free">in good hands</BtnNavLink>
      {isLoggedIn && <BtnNavLink to="favorite">favorite ads</BtnNavLink>}
      {isLoggedIn && <BtnNavLink to="own">my ads</BtnNavLink>}
    </ContainerNav>
  );
};

export default NoticesCategoriesNav;
