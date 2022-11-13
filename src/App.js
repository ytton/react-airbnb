import routes from '@/router';
import { useEffect } from 'react';
import { useLocation, useRoutes } from 'react-router-dom';
function App() {
  const location = useLocation();
  console.log(location);
  useEffect(() => {
    document.documentElement.scrollTo({ top: 0 });
  }, [location.pathname]);
  return useRoutes(routes);
}

export default App;
