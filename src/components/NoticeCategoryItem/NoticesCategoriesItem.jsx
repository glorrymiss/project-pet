import { Header, NotiveItem, Status, Information, BtnStyled, InformationItem, Favorite, Top, Footer, LearnMore } from "./NoticesCategoriesItem.styled"

const NoticesCategoriesItem = ({ animal }) => {
  const showDetails = () => {
    console.log(`Animal id is ${animal.id}`);
  }

  return (
    <NotiveItem>
      <Header img={animal.img}>
        <Top>
          <Status>{animal.status}</Status>
          <Favorite>
            <BtnStyled icon={'IconHeart'} transparent={true} />
          </Favorite>
        </Top>
        <Information>
          <InformationItem>
            <BtnStyled icon={'IconLocation1'} transparent={true} />
            <span>{animal.location}</span>
          </InformationItem>
          <InformationItem>
            <BtnStyled icon={'IconClock'} transparent={true} />
            <span>{animal.age}</span>
          </InformationItem>
          <InformationItem>
            <BtnStyled icon={'IconFemale'} transparent={true} />
            <span>{animal.gender}</span>
          </InformationItem>

        </Information>
      </Header>
      <Footer>
        <h2>
          {animal.describe}
        </h2>
        <LearnMore onClick={showDetails}>
          Learn more
        </LearnMore>
      </Footer>
    </NotiveItem>
  );
};

export default NoticesCategoriesItem;