import { lazy } from 'react';
import NotFounded from '@/components/NotFounded';
import Layout from '@/layout';
const Home = lazy(() => import('@/views/home'));
const Detail = lazy(() => import('@/views/detail'));
const Entire = lazy(() => import('@/views/entire'));
export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/detail/:id',
        element: <Detail />
      },
      {
        path: '/entire',
        element: <Entire />
      },
      {
        path: '*',
        element: <NotFounded />
      }
    ]
  }
];

export default routes;
