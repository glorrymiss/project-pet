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
} from './NewsList.styled';

const NewsList = ({ newsList }) => {
  // console.log('newsList', newsList);

  return (
    <NewsContainer>
      {newsList.map(news => (
        <NewsItem key={news._id}>
          <Rectangle />

          <Card>
            <Image src={news.imgUrl} />
            <CardInfoContainer>
              <Description>
                <CardTitle>{news.title}</CardTitle>
                <CardText>{news.text}</CardText>
              </Description>
              <Wrapper>
                <Data>{news.date}</Data>
                <ReadMore url={news.url}>Read more</ReadMore>
              </Wrapper>
            </CardInfoContainer>
          </Card>
        </NewsItem>
      ))}
    </NewsContainer>
  );
};

export default NewsList;
