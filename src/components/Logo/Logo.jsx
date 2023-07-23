import { NavLink } from 'react-router-dom';
import { StyleImg } from './Logo.styled';
// import logo from '../images/LogoMax.png';

const Logo = () => {
  return (
    <NavLink to="/main">
      <StyleImg alt="" />
    </NavLink>
  );
};

export default Logo;
