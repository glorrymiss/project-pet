import { IconWrap, StuledInput, Wrap } from './FormSearch.styled';
import IconSearch from '../../images/icons/IconSearch';
import theme from 'components/theme';
import { useAuth } from 'hooks';
import { useSearchParams } from 'react-router-dom';

const FormSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const { currentTheme } = useAuth();
  const handleChange = e => {
    setSearchParams({ query: e.target.value });
  };

  return (
    <Wrap>
      <StuledInput
        placeholder="Search"
        value={query || ''}
        onChange={e => handleChange(e)}
      />
      <IconWrap>
        <IconSearch fill={theme[currentTheme].color.btnDark} />
      </IconWrap>
    </Wrap>
  );
};

export default FormSearch;
