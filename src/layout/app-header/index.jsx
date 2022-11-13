import React, { memo, useEffect } from 'react';
import HeaderLeft from './components/header-left';
import HeaderRight from './components/header-right';
import HeaderCenter from './components/header-center';
import { StyleWrapper } from './style';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { changeHeaderConfigAction } from '../../store/modules/global';
import { ThemeProvider } from 'styled-components';
import { useLocation } from 'react-router-dom';
const AppHeader = memo(() => {
  const { headerConfig } = useSelector(
    state => ({
      headerConfig: state.global.headerConfig
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    const handleScroll = function (e) {
      const target = document.scrollingElement;
      dispatch(
        changeHeaderConfigAction({
          isAlpha: (location.pathname.startsWith('/home') || location.pathname === '/') && target.scrollTop <= 5,
          isSearch: false
        })
      );
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [dispatch, location.pathname]);
  return (
    <StyleWrapper className="app-header" {...headerConfig}>
      <ThemeProvider theme={headerConfig}>
        <HeaderLeft />
        <HeaderCenter />
        <HeaderRight />
      </ThemeProvider>
    </StyleWrapper>
  );
});

export default AppHeader;
