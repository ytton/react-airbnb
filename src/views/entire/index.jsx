import React, { memo, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getEntireListAction } from '../../store/modules/entire';
import { changeHeaderConfigAction, changeFooterConfigAction } from '../../store/modules/global';
import EntireFilter from './components/filter';
import EntireContent from './components/content';

const Entire = memo(() => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeFooterConfigAction({ isShow: false }));
    dispatch(changeHeaderConfigAction({ isFix: true, isAlpha: false }));
    dispatch(getEntireListAction());
    return () => {
      dispatch(changeFooterConfigAction({ isShow: true }));
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
