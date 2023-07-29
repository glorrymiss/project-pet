import IconChevronDown from 'images/icons/IconChevronDown';
import IconChevronUp from 'images/icons/IconChevronUp';
import IconRound from 'images/icons/IconRound';
import IconCheckRound from 'images/icons/IconCheckRound';

import {
  List,
  ListBtn,
  AgeSubList,
  GenderSubList,
  Icon,
  CheckedIcon,
  ItemText,
  ItemCheckbox,
} from './FilterLists.styled';

const ageInformationData = [
  { text: '3-12 m', filter: '3m-12m' },
  { text: 'up to 1 year', filter: '1y' },
  { text: 'up to 2 year', filter: '2y' },
];
const genderInformationData = ['female', 'male'];

const FilterLists = ({
  isAgeMenuOpen,
  isGenderMenuOpen,
  toggleMenu,
  setGenderFilter,
  setAgeFilter,
  age,
  gender,
}) => {
  return (
    <>
      <List>
        <ListBtn type="button" id="Age" onClick={toggleMenu}>
          {!isAgeMenuOpen && <IconChevronDown />}
          {isAgeMenuOpen && <IconChevronUp />}
          By age
        </ListBtn>
        <AgeSubList isShown={isAgeMenuOpen}>
          {ageInformationData.map(item => (
            <ItemText key={item.text}>
              <ItemCheckbox
                type="checkbox"
                checked={age === item.filter}
                onChange={() =>
                  setAgeFilter(age === item.filter ? '' : item.filter)
                }
              />
              {age === item.filter && (
                <CheckedIcon isShown={isAgeMenuOpen}>
                  <IconCheckRound />
                </CheckedIcon>
              )}
              {age !== item.filter && (
                <Icon isShown={isAgeMenuOpen}>
                  <IconRound />
                </Icon>
              )}

              {item.text}
            </ItemText>
          ))}
        </AgeSubList>
      </List>
      <List>
        <ListBtn type="button" id="Gender" onClick={toggleMenu}>
          {!isGenderMenuOpen && <IconChevronDown />}
          {isGenderMenuOpen && <IconChevronUp />}
          By gender
        </ListBtn>
        <GenderSubList isShown={isGenderMenuOpen}>
          {genderInformationData.map(item => (
            <ItemText key={item}>
              <ItemCheckbox
                type="checkbox"
                checked={gender === item}
                onChange={() => setGenderFilter(gender === item ? '' : item)}
              />
              {gender === item && (
                <CheckedIcon isShown={isGenderMenuOpen}>
                  <IconCheckRound />
                </CheckedIcon>
              )}
              {gender !== item && (
                <Icon isShown={isGenderMenuOpen}>
                  <IconRound />
                </Icon>
              )}

              {item}
            </ItemText>
          ))}
        </GenderSubList>
      </List>
    </>
  );
};

export default FilterLists;
