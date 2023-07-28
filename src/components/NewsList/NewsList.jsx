import {
  Card,
  CardInfoContainer,
  CardTitle,
  Image,
  NewsContainer,
  NewsItem,
  Rectangle,
} from './NewsList.styled';

const NewsList = ({ newsList }) => {
  console.log('newsList', newsList);

  return (
    <NewsContainer>
      {newsList.map(news => (
        <NewsItem key={news._id}>
          <Rectangle />

          <Card>
            <Image src={news.imgUrl} />
            <CardInfoContainer>
              <CardTitle></CardTitle>
            </CardInfoContainer>
          </Card>
        </NewsItem>
      ))}
    </NewsContainer>
  );
};

export default NewsList;
