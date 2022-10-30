import React, { memo } from 'react';
import { useEffect } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { getUsers, getUsers2 } from '../../services/modules/test';

const Home = memo(() => {
  useEffect(() => {
    (async () => {
      const [err, users] = await getUsers();
      const [err2, users2] = await getUsers2();
      if (err || err2) return;
      console.log(users);
      console.log(users2);
    })();
  }, []);
  const { count } = useSelector(
    state => ({
      count: state.home.count
    }),
    shallowEqual
  );
  return <div>Home:{count}</div>;
});
export default Home;
