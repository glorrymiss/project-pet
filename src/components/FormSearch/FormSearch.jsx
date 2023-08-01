import { IconWrap, StuledInput, Wrap } from './FormSearch.styled';
import IconSearch from '../../images/icons/IconSearch'
import theme from 'components/theme';
import { useAuth } from 'hooks';



const FormSearch = ({ setSearchValue }) => {
  const { currentTheme } = useAuth();
  const handleChange = e => {
    
    // console.log('e', e.currentTarget.value);
    setSearchValue(e.currentTarget.value);
  };

  return(
    <Wrap>
      <StuledInput placeholder="Search" onChange={e => handleChange(e)} />
      <IconWrap>
      <IconSearch fill={theme[currentTheme].color.btnDark}/>
      </IconWrap>
    </Wrap>
  ) 
};

export default FormSearch;
