import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import AppFooter from './app-footer';
import AppHeader from './app-header';
import { LayoutWrapper } from './style';
export default function Layout() {
  const { showFooter, fixedHeader } = useSelector(
    state => ({
      showFooter: state.global.showFooter,
      fixedHeader: state.global.fixedHeader
    }),
    shallowEqual
  );
  return (
    <LayoutWrapper showFooter={showFooter} fixedHeader={fixedHeader}>
      <main>
        <AppHeader></AppHeader>
        <Outlet />
      </main>
      <AppFooter hidden={!showFooter} />
    </LayoutWrapper>
  );
}
