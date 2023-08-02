import React, { useEffect, useState } from 'react';
import NoticesCategoriesItem from '../NoticeCategoryItem/NoticesCategoriesItem';
import { NoticeContainer } from './NoticesCategoriesList.styled';
import { useParams } from 'react-router';
import { getFavoriteNotices, getNotices } from 'services';
import { Pagination } from 'components/Pagination/Pagination';
import { useSearchParams } from 'react-router-dom';

const NoticesCategoriesList = () => {
  const { categoryName } = useParams();
  const [noticesList, setNoticesList] = useState([]);
  const [page, setPage] = useState(1);
  const [quantityNotices, setQuantityNotices] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');
  const [error, seterror] = useState(null);

  if (2 === 1) {
    console.log('error', error);

    setSearchParams(null);
  } //це щоб лінтер не ругався

  console.log('categoryName', categoryName);

  useEffect(() => {
    if (categoryName === 'favorite') {
      console.log('page', page);

      getFavoriteNotices({
        page,
        limit: 12,
        search: search,
        categoryName,
      })
        .then(res => {
          console.log('res', res);

          if (res.status === 204) return;

          const { totalHits, favorite } = res.data;
          setNoticesList(favorite);
          setQuantityNotices(totalHits);
        })
        .catch(err => {
          console.log('err', err);

          setNoticesList([]);
          seterror(err);
        });
    } else if (categoryName === 'own') {
      // getUserNotices({ page, limit: 12, search: search, categoryName })
      //   .then(res => console.log('res', res))
      //   .catch(err => console.log('err', err));
    } else {
      getNotices({ page, limit: 12, search: search, categoryName }).then(
        res => {
          const { totalHits, notices } = res.data;
          setNoticesList(notices);
          setQuantityNotices(totalHits);
        }
      );
    }
  }, [page, search, categoryName]);

  return (
    <>
      <NoticeContainer>
        {noticesList.map(item => {
          return (
            <NoticesCategoriesItem
              key={item._id}
              animal={item}
              setNoticesList={setNoticesList}
            />
          );
        })}
      </NoticeContainer>
      <Pagination
        currentPage={page}
        totalPages={Math.ceil(quantityNotices / 12)}
        onPageChange={setPage}
        paginationLength={12} // Adjust this number as per your preference
      />
    </>
  );
};

export default NoticesCategoriesList;
