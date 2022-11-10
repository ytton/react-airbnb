import React, { memo } from 'react';
import HeaderLeft from './components/header-left';
import HeaderRight from './components/header-right';
import HeaderCenter from './components/header-center';
import { StyleWrapper } from './style';
import { shallowEqual, useSelector } from 'react-redux';
const AppHeader = memo(() => {
  const { fixedHeader } = useSelector(
    state => ({
      fixedHeader: state.global.fixedHeader
    }),
    shallowEqual
  );
  return (
    <StyleWrapper className="app-header" fixed={fixedHeader}>
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />
    </StyleWrapper>
  );
});

export default AppHeader;
