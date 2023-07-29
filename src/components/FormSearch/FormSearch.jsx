import { StuledInput } from './FormSearch.styled';

const FormSearch = ({ setSearchValue }) => {
  const handleChange = e => {
    // console.log('e', e.currentTarget.value);
    setSearchValue(e.currentTarget.value);
  };

  return <StuledInput placeholder="Search" onChange={e => handleChange(e)} />;
};

export default FormSearch;
