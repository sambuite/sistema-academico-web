import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import ListUsers from './pages/ListUsers';
import RegisterUsers from './pages/RegisterUsers';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={RegisterUsers} path="/register-users" />
      <Route component={ListUsers} path="/list-users" />
    </BrowserRouter>
  );
};

export default Routes;
