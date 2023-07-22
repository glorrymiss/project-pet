import IconArrowLeft from './IconArrowLeft';
import IconCamera from './IconCamera';
import IconCheck from './IconCheck';
import IconCheckRound from './IconCheckRound';
import IconChevronDown from './IconChevronDown';
import IconChevronUp from './IconChevronUp';
import IconClock from './IconClock';
import IconCross from './IconCross';
import IconCrossSmall from './IconCrossSmall';
import IconEdit from './IconEdit';
import IconEyeClosed from './IconEyeClosed';
import IconEyeOpen from './IconEyeOpen';
import IconFemale from './IconFemale';
import IconFilters2 from './IconFilters2';
import IconFilters3 from './IconFilters3';
import IconHeart from './IconHeart';
import IconLocation1 from './IconLocation1';
import IconMale from './IconMale';
import IconMenuHamburger from './IconMenuHamburger';
import IconPawprint1 from './IconPawprint1';
import IconPlus from './IconPlus';
import IconPlusSmall from './IconPlusSmall';
import IconRound from './IconRound';
import IconSearch from './IconSearch';
import IconTrash2 from './IconTrash2';
import IconUser1 from './IconUser1';
import Iconlogout from './Iconlogout';

const ListIcons = (fill, name) => {
  const list = {
    Iconlogout: <Iconlogout fill={fill} />,
    IconCross: <IconCross fill={fill} />,
    IconCrossSmall: <IconCrossSmall fill={fill} />,
    IconMenuHamburger: <IconMenuHamburger fill={fill} />,
    IconUser1: <IconUser1 fill={fill} />,
    IconPawprint1: <IconPawprint1 fill={fill} />,
    IconHeart: <IconHeart fill={fill} />,
    IconArrowLeft: <IconArrowLeft fill={fill} />,
    IconCamera: <IconCamera fill={fill} />,
    IconCheckRound: <IconCheckRound fill={fill} />,
    IconCheck: <IconCheck fill={fill} />,
    IconChevronDown: <IconChevronDown fill={fill} />,
    IconChevronUp: <IconChevronUp fill={fill} />,
    IconClock: <IconClock fill={fill} />,
    IconEdit: <IconEdit fill={fill} />,
    IconEyeClosed: <IconEyeClosed fill={fill} />,
    IconEyeOpen: <IconEyeOpen fill={fill} />,
    IconFemale: <IconFemale fill={fill} />,
    IconFilters2: <IconFilters2 fill={fill} />,
    IconFilters3: <IconFilters3 fill={fill} />,
    IconLocation1: <IconLocation1 fill={fill} />,
    IconMale: <IconMale fill={fill} />,
    IconPlusSmall: <IconPlusSmall fill={fill} />,
    IconPlus: <IconPlus fill={fill} />,
    IconRound: <IconRound fill={fill} />,
    IconSearch: <IconSearch fill={fill} />,
    IconTrash2: <IconTrash2 fill={fill} />,
  };

  return list[name];
};

export default ListIcons;
