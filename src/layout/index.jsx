import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import AppFooter from './app-footer';
import AppHeader from './app-header';
import { LayoutWrapper } from './style';
export default function Layout() {
  const { showFooter } = useSelector(
    state => ({
      showFooter: state.global.showFooter
    }),
    shallowEqual
  );
  return (
    <LayoutWrapper>
      <main>
        <AppHeader></AppHeader>
        <Outlet />
      </main>
      <AppFooter hidden={!showFooter} />
    </LayoutWrapper>
  );
}
