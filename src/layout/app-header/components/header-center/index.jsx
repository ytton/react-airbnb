import React, { memo, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { changeHeaderConfigAction } from '../../../../store/modules/global';
import RealSearch from './cps/realSearch';
import HeaderSearch from './cps/search';
import HeaderTabs from './cps/tabs';
import { StyleWrapper } from './style';

const HeaderCenter = memo(() => {
  const { isSearch, isAlpha } = useSelector(
    state => ({
      isSearch: state.global.headerConfig.isSearch,
      isAlpha: state.global.headerConfig.isAlpha
    }),
    shallowEqual
  );
  const options = ['搜索房源', '搜索体验'];
  const [currentTab, setCurrentTab] = useState('搜索房源');
  const dispatch = useDispatch();
  const changeIsSearch = value => {
    dispatch(changeHeaderConfigAction({ isSearch: value }));
  };
  return (
    <StyleWrapper isSearch={isSearch || isAlpha}>
      {isSearch || isAlpha ? (
        <HeaderTabs value={currentTab} changeValue={setCurrentTab} options={options} />
      ) : (
        <HeaderSearch onClick={() => changeIsSearch(true)} />
      )}
      <RealSearch isSearch={isSearch || isAlpha} />
    </StyleWrapper>
  );
});

export default HeaderCenter;
