import React, { memo } from 'react';
import IconLogo from '@/assets/svg/icon_logo';
import { StyleWrapper } from './style';
import { useNavigate } from 'react-router-dom';
const HeaderLeft = memo(() => {
  const navigate = useNavigate();
  const goHome = () => navigate('/');
  return (
    <StyleWrapper>
      <div className="logo" onClick={goHome}>
        <IconLogo />
      </div>
    </StyleWrapper>
  );
});

export default HeaderLeft;
