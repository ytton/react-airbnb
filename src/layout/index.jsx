import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import AppFooter from './app-footer';
import AppHeader from './app-header';
import { LayoutWrapper } from './style';
export default function Layout() {
  const { showFooter, fixedHeader, isAlpha } = useSelector(
    state => ({
      showFooter: state.global.footerConfig.isShow,
      fixedHeader: state.global.headerConfig.isFix,
      isAlpha: state.global.headerConfig.isAlpha
    }),
    shallowEqual
  );
  return (
    <LayoutWrapper showFooter={showFooter} isAlpha={isAlpha} fixedHeader={fixedHeader}>
      <main>
        <AppHeader></AppHeader>
        <Outlet />
      </main>
      <AppFooter hidden={!showFooter} />
    </LayoutWrapper>
  );
}
