import React, { memo } from 'react';
import HeaderLeft from './components/header-left';
import HeaderRight from './components/header-right';
import HeaderCenter from './components/header-center';
import { StyleWrapper } from './style';
const AppHeader = memo(() => {
  return (
    <StyleWrapper className="app-header">
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />
    </StyleWrapper>
  );
});

export default AppHeader;
