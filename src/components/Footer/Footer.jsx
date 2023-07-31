import { FooterStyled } from './Footer.styled';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <>
      <FooterStyled>
        ©reated with love 💖 <Link to="/team">by GoIT students</Link> 🐾 2023
      </FooterStyled>
    </>
  );
};
