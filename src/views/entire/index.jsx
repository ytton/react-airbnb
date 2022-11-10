import React, { memo, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getEntireListAction } from '../../store/modules/entire';
import { changeFixedHeaderAction, changeShowFooterAction } from '../../store/modules/global';
import EntireFilter from './components/filter';
import EntireContent from './components/content';

const Entire = memo(() => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeShowFooterAction(false));
    dispatch(changeFixedHeaderAction(true));
    dispatch(getEntireListAction());
    return () => {
      dispatch(changeShowFooterAction(true));
    };
  }, [dispatch]);

  return (
    <>
      <EntireFilter />
      <EntireContent />
    </>
  );
});

export default Entire;
