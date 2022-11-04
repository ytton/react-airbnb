import React, { memo, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeShowFooterAction } from '../../store/modules/global';

const Entire = memo(() => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeShowFooterAction(false));
    return () => {
      dispatch(changeShowFooterAction(true));
    };
  }, [dispatch]);
  return <div>Entire</div>;
});

export default Entire;
