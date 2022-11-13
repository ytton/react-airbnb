import React, { memo, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDetailInfoAction } from '../../store/modules/detail';
import { changeHeaderConfigAction } from '../../store/modules/global';
import DetailImagesSection from './components/detailImagesSection';
import DetailWrapper from './style';

const Detail = memo(() => {
  const params = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeHeaderConfigAction({ isFix: false, isAlpha: false }));
    dispatch(getDetailInfoAction(params.id));
  }, [dispatch, params.id]);

  return (
    <DetailWrapper>
      <DetailImagesSection />
      <div className="info-section"></div>
    </DetailWrapper>
  );
});

export default Detail;
