import { NavLink } from 'react-router-dom';
// import logo from '../images/LogoMax.png';

const Logo = () => {
  return (
    <NavLink to="/main">
      <img src={require('../../images/LogoMax.png')} alt="" />
    </NavLink>
  );
};

export default Logo;
