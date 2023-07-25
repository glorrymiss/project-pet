import { useAuth } from 'hooks';

const { NavLink } = require('react-router-dom');

const NoticesCategoriesNav = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav>
      <NavLink to="sell">sell</NavLink>
      <NavLink to="lost-found">lost/found</NavLink>
      <NavLink to="for-free">in good hands</NavLink>
      {isLoggedIn && <NavLink to="favorite">favorite ads</NavLink>}
      {isLoggedIn && <NavLink to="own">my ads</NavLink>}
    </nav>
  );
};

export default NoticesCategoriesNav;
