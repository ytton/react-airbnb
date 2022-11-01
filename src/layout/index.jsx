import React from 'react';
import { Outlet } from 'react-router-dom';
import AppFooter from './app-footer';
import AppHeader from './app-header';
import { LayoutWrapper } from './style';
export default function Layout() {
  return (
    <LayoutWrapper>
      <main>
        <AppHeader></AppHeader>
        <Outlet />
      </main>
      <AppFooter />
    </LayoutWrapper>
  );
}
