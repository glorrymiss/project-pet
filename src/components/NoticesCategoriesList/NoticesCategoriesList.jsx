import React, { useEffect, useState } from 'react';
import NoticesCategoriesItem from '../NoticeCategoryItem/NoticesCategoriesItem';
import { NoticeContainer } from './NoticesCategoriesList.styled';
import { useParams } from 'react-router';
import {
  getFavoriteNotices,
  getNotices,
  getUserNotices,
} from 'services/notices';
import { Pagination } from 'components/Pagination/Pagination';
import { useSearchParams } from 'react-router-dom';
import { Notify } from 'notiflix';
import { useAuth } from 'hooks';

const NoticesCategoriesList = () => {
  const { categoryName } = useParams();
  const { user } = useAuth();

  const [error, seterror] = useState(null);

  const [quantityNotices, setQuantityNotices] = useState(0);
  const [noticesList, setNoticesList] = useState([]);

  const [page, setPage] = useState(1);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';
  const gender = searchParams.get('gender') || '';
  const age = searchParams.get('age') || '';

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
        age,
        gender,
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
      getUserNotices({
        page,
        limit: 12,
        query: query,
        age,
        gender,
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
    } else {
      getNotices({ page, limit: 12, query: query, categoryName, age, gender })
        .then(res => {
          const { totalNotices, notices } = res.data;
          Notify.success(`Found ${totalNotices} notices`, {
            timeout: 4000,
          });
          setNoticesList(notices);
          setQuantityNotices(totalNotices);
        })
        .catch(err => {
          console.log('err', err);

          setNoticesList([]);
        });
    }
  }, [page, query, categoryName, age, gender]);

  return (
    <>
      <NoticeContainer>
        {noticesList.map(item => {
          if (
            categoryName === 'favorite' &&
            user?.favorite &&
            !user?.favorite?.includes(item._id)
          ) {
            return;
          }
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
