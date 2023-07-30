import { Container } from 'components/Container/Container';
import {
  Card,
  CardInfoContainer,
  CardText,
  CardTitle,
  Data,
  Description,
  Image,
  NewsContainer,
  NewsItem,
  ReadMore,
  Rectangle,
  Wrapper,
  WrapperImage,
} from './NewsList.styled';

const NewsList = ({ newsList }) => {
  // console.log('newsList', newsList);

  return (
    <Container>
      <NewsContainer>
        {newsList.map(news => (
          <NewsItem key={news._id}>
            <Rectangle />

            <Card>
              <WrapperImage>
                <Image src={news.imgUrl} />
              </WrapperImage>

              <CardInfoContainer>
                <Description>
                  <CardTitle>{news.title}</CardTitle>
                  <CardText>{news.text}</CardText>
                </Description>
                <Wrapper>
                  {/* <Data>
                    {dateFormat(news.date, 'dddd, mmmm dS, yyyy, h:MM:ss TT')}
                  </Data> */}
                  <ReadMore url={news.url}>Read more</ReadMore>
                </Wrapper>
              </CardInfoContainer>
            </Card>
          </NewsItem>
        ))}
      </NewsContainer>
    </Container>
  );
};

export default NewsList;
