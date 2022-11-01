import React, { memo } from 'react';
import IconLogo from '@/assets/svg/icon_logo';
import { StyleWrapper } from './style';
const HeaderLeft = memo(() => {
  return <StyleWrapper>
    <div className="logo">
    <IconLogo />
    </div>
  </StyleWrapper>;
});

export default HeaderLeft;
