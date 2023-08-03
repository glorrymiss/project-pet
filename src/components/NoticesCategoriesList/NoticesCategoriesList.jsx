import React, { useEffect, useState } from 'react';
import NoticesCategoriesItem from '../NoticeCategoryItem/NoticesCategoriesItem';
import { NoticeContainer } from './NoticesCategoriesList.styled';
import { useParams } from 'react-router';
import { getFavoriteNotices, getNotices, getUserNotices } from 'services';
import { Pagination } from 'components/Pagination/Pagination';
import { useSearchParams } from 'react-router-dom';
import { Notify } from 'notiflix';

const NoticesCategoriesList = () => {
  const { categoryName } = useParams();
  const [noticesList, setNoticesList] = useState([]);
  const [page, setPage] = useState(1);

  const [quantityNotices, setQuantityNotices] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';
  const [error, seterror] = useState(null);

  if (2 === 1) {
    console.log('error', error);
    setSearchParams(null);
  } //це щоб лінтер не ругався

  useEffect(() => {
    if (categoryName === 'favorite') {
      getFavoriteNotices({
        page,
        limit: 12,
        query: query,
        categoryName,
      })
        .then(res => {
          const { totalNotices, notices } = res.data;
          Notify.success(`Found ${totalNotices} notices`, {
            timeout: 4000,
          });
          setNoticesList(notices);
          setQuantityNotices(totalNotices);
        })
        .catch(err => {
          Notify.failure(err.response.data.message, {
            timeout: 4000,
          });
          setNoticesList([]);
          seterror(err);
        });
    } else if (categoryName === 'own') {
      getUserNotices({ page, limit: 12, query: query, categoryName })
        .then(res => {
          const { totalNotices, notices } = res.data;
          Notify.success(`Found ${totalNotices} notices`, {
            timeout: 4000,
          });
          setNoticesList(notices);
          setQuantityNotices(totalNotices);
        })
        .catch(err => {
          Notify.failure(err.response.data.message, {
            timeout: 4000,
          });
          setNoticesList([]);
          seterror(err);
        });
    } else {
      console.log('query', query);

      getNotices({ page, limit: 12, query: query, categoryName })
        .then(res => {
          const { totalNotices, notices } = res.data;
          Notify.success(`Found ${totalNotices} notices`, {
            timeout: 4000,
          });
          setNoticesList(notices);
          setQuantityNotices(totalNotices);
        })
        .catch(err => {
          Notify.failure(err.response.data.message, {
            timeout: 4000,
          });
          setNoticesList([]);
        });
    }
  }, [page, query, categoryName]);

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
