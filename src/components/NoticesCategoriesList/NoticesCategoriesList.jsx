import { useParams } from 'react-router-dom';

const NoticesCategoriesList = () => {
  const { categoryName } = useParams();

  return (
    <div style={{ flexGrow: 1 }}>
      <p>NoticesCategoriesList</p>
      <p>{categoryName}</p>
    </div>
  );
};

export default NoticesCategoriesList;
