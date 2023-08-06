import React, { useEffect, useState } from 'react';
import NoticesCategoriesItem from '../NoticeCategoryItem/NoticesCategoriesItem';
import { NoticeContainer } from './NoticesCategoriesList.styled';
import { useParams } from 'react-router';
import Title from 'components/Title/Title';
import {
  getFavoriteNotices,
  getNotices,
  getUserNotices,
} from 'services/notices';
import { Pagination } from 'components/Pagination/Pagination';
import { useSearchParams } from 'react-router-dom';
import { Notify } from 'notiflix';
import { useAuth } from 'hooks';
import { Cat } from 'components/NotFound/NotFound.styled';

/*
/**|======================================
/**| import images
/**|======================================
*/
import notfound_sm_1x from 'images/NotFoundImages/notfound-sm@1x-1.webp';
import notfound_sm_2x from 'images/NotFoundImages/notfound-sm@2x-2.webp';
import notfound_md_1x from 'images/NotFoundImages/notfound-md@1x-1.webp';
import notfound_md_2x from 'images/NotFoundImages/notfound-md@2x-2.webp';
import notfound_lg_1x from 'images/NotFoundImages/notfound-lg@1x-1.webp';
import notfound_lg_2x from 'images/NotFoundImages/notfound-lg@2x-2.webp';

const NoticesCategoriesList = () => {
  const { categoryName } = useParams();
  const { user } = useAuth();

  const [error, seterror] = useState(null);

  const [quantityNotices, setQuantityNotices] = useState(0);
  const [noticesList, setNoticesList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';
  const gender = searchParams.get('gender') || '';
  const age = searchParams.get('age') || '';
  const page = searchParams.get('page') || 1;

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

  const newSetSearchParams = (key, value) => {
    setSearchParams(pref => {
      const Query = {};
      for (const [key, value] of pref.entries()) {
        Query[key] = value;
      }

      return {
        ...Query,
        [key]: value,
      };
    });
  };

  return noticesList?.length === 0 ||
    (categoryName === 'favorite' && user.favorite.length === 0) ? (
    <>
      <Title>Ooops! Nothing found :(</Title>

      <Cat
        srcSet={`${notfound_sm_1x} 280w, ${notfound_sm_2x} 560w, ${notfound_md_1x} 704w, ${notfound_md_2x} 1408w, ${notfound_lg_1x} 822w, ${notfound_lg_2x} 1644w`}
        sizes="(min-width: 1280px) 1644px, (min-width: 1280px) 822px, (min-width: 768px) 1408px, (min-width: 768px) 704px,  100vw"
        alt="not found page"
        loading="lazy"
      />
    </>
  ) : (
    <>
      <NoticeContainer error={error}>
        {noticesList.map(item => {
          if (
            categoryName === 'favorite' &&
            user?.favorite &&
            !user?.favorite?.includes(item._id)
          ) {
            return <></>;
          }
          return (
            <NoticesCategoriesItem
              key={item._id}
              animal={item}
              setNoticesList={e => setNoticesList(e)}
            />
          );
        })}
      </NoticeContainer>
      {quantityNotices > 12 && (
        <Pagination
          currentPage={page}
          totalPages={Math.ceil(quantityNotices / 12)}
          onPageChange={e => newSetSearchParams('page', e)}
          paginationLength={12} // Adjust this number as per your preference
        />
      )}
    </>
  );
};

export default NoticesCategoriesList;
