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
import dateFormat from 'dateformat';

const NewsList = ({ newsList }) => {
  return (
    <NewsContainer>
      {newsList.map(news => (
        <NewsItem key={news._id}>
          <Rectangle />

          <Card>
            <WrapperImage>
              <Image
                src={news.imgUrl}
                onError={e => {
                  e.target.src = 'https://loremflickr.com/400/252';
                }}
              />
            </WrapperImage>

            <CardInfoContainer>
              <Description>
                <CardTitle>{news.title}</CardTitle>
                <CardText>{news.text}</CardText>
              </Description>
              <Wrapper>
                <Data>{dateFormat(news.date, 'dd/mm/yyyy')}</Data>
                <ReadMore target="_blank" href={news.url}>
                  Read more
                </ReadMore>
              </Wrapper>
            </CardInfoContainer>
          </Card>
        </NewsItem>
      ))}
    </NewsContainer>
  );
};

export default NewsList;
