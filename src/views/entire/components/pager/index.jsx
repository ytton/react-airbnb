import { Pagination } from '@mui/material';
import React, { memo } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getEntireListAction } from '@/store/modules/entire';
import EntirePagerWrapper from './style';
import { useEffect } from 'react';

const EntirePager = memo(() => {
  const { total, currentPage, pageSize } = useSelector(
    state => ({
      total: state.entire.total,
      currentPage: state.entire.currentPage,
      pageSize: state.entire.pageSize
    }),
    shallowEqual
  );
  const totalPage = Math.ceil(total / pageSize);
  const dispatch = useDispatch();
  const handleChange = (e, page) => {
    dispatch(getEntireListAction({ currentPage: page, pageSize: 20 }));
  };
  useEffect(() => {
    return () => {
      document.documentElement.scrollTop = 0;
    };
  }, [currentPage]);
  return (
    <EntirePagerWrapper>
      <Pagination count={totalPage} page={currentPage} onChange={handleChange} color="primary" />
      <div>
        第 {(currentPage - 1) * 20 + 1} – {currentPage * 20} 个房源，共超过 {total} 个
      </div>
      <div className="desc">包含额外附加费用及适用税费。</div>
    </EntirePagerWrapper>
  );
});

export default EntirePager;
