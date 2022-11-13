import { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getHomeInfoAction } from '@/store/modules/home';
import { changeHeaderConfigAction } from '@/store/modules/global';

export function useInitData() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeHeaderConfigAction({ isFix: true }));
    dispatch(getHomeInfoAction());
  }, [dispatch]);

  return useSelector(
    state => ({
      goodPriceRoomInfo: state.home.goodPriceRoomInfo,
      hotRoomInfo: state.home.hotRoomInfo,
      discountRoomInfo: state.home.discountRoomInfo,
      longForCityInfo: state.home.longForCityInfo,
      highScoreRoomInfo: state.home.highScoreRoomInfo
    }),
    shallowEqual
  );
}
