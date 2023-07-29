import { useEffect, useState } from 'react';
import { FilterWrapper, Btn, Filters, FiltersText } from './Filter.styled';
import IconFilters3 from 'images/icons/IconFilters3';
import theme from 'components/theme';
import { useAuth, useWindowSize } from 'hooks';
import FilterLists from 'components/FilterList/FilterLists';
import ReferenceFilter from 'components/FilterReference/FilterReference';

const Filter = () => {
  const [isListOpen, setIsListOpen] = useState(false);
  const [isAgeListOpen, setAgeIsListOpen] = useState(false);
  const [isGenderListOpen, setGenderIsListOpen] = useState(false);
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [screenWidth] = useWindowSize();
  const { currentTheme } = useAuth();

  useEffect(() => {
    const filterBtn = document.getElementById('filtersBtn');
    const list = document.getElementById('filtersMenu');

    const clickBeyondFilterList = e => {
      if (
        e.target !== list &&
        !list.contains(e.target) &&
        e.target !== filterBtn &&
        !filterBtn.contains(e.target)
      )
        setIsListOpen(false);
    };

    document.body.addEventListener('click', clickBeyondFilterList);

    return () =>
      document.body.removeEventListener('click', clickBeyondFilterList);
  }, []);

  const filtersToggle = e => {
    if (e.currentTarget.id === 'Age') {
      setAgeIsListOpen(prevState => !prevState);

      return;
    }

    if (e.currentTarget.id === 'Gender') {
      setGenderIsListOpen(prevState => !prevState);

      return;
    }

    setAgeIsListOpen(false);
    setGenderIsListOpen(false);
    setIsListOpen(prevState => !prevState);
  };

  const ageBtnText = age => {
    switch (age) {
      case '3m-12m':
        return '3-12 m';

      case '1y':
        return '1 year';

      case '2y':
        return '2 year';

      default:
        return '';
    }
  };

  return (
    <FilterWrapper>
      {age !== '' && (
        <ReferenceFilter
          text={ageBtnText(age)}
          clickHandler={() => setAge('')}
        />
      )}
      {gender !== '' && (
        <ReferenceFilter text={gender} clickHandler={() => setGender('')} />
      )}
      <Btn
        id="filtersBtn"
        type="button"
        onClick={filtersToggle}
        isOpen={isListOpen}
        aria-label="Show filters"
        age={age}
        gender={gender}
      >
        {screenWidth >= 768 && 'Filter'}
        <IconFilters3
          fill={
            isListOpen || age !== '' || gender !== ''
              ? theme[currentTheme].color.background
              : theme[currentTheme].color.btnDark
          }
        />
      </Btn>
      <Filters
        id="filtersMenu"
        isOpen={isListOpen}
        isAgeMenuOpen={isAgeListOpen}
        isGenderMenuOpen={isGenderListOpen}
      >
        <FiltersText>Filters</FiltersText>
        <FilterLists
          isAgeMenuOpen={isAgeListOpen}
          isGenderMenuOpen={isGenderListOpen}
          toggleMenu={filtersToggle}
          setGenderFilter={setGender}
          setAgeFilter={setAge}
          age={age}
          gender={gender}
        />
      </Filters>
    </FilterWrapper>
  );
};

export default Filter;
