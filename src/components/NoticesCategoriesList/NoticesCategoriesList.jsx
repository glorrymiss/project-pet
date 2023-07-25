import { useParams } from 'react-router-dom';

const NoticesCategoriesList = () => {
  const { categoryName } = useParams();

  return (
    <div>
      <p>NoticesCategoriesList</p>
      <p>{categoryName}</p>
    </div>
  );
};

export default NoticesCategoriesList;
