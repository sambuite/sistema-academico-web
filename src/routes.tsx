import { Router, Redirect, Route, RouteProps } from 'react-router-dom';

import Home from './pages/Home';
import ListUsers from './pages/ListUsers';
import RegisterUsers from './pages/RegisterUsers';
import UpdateUsers from './pages/UpdateUsers';
import Login from './pages/Login';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import history from './history';
import RegisterProfessors from './pages/RegisterProfessors';

type CustomRouteProps = RouteProps & {
  isPrivate?: boolean;
};

const CustomRoute = ({ isPrivate, ...rest }: CustomRouteProps) => {
  const { loading, authenticated } = useContext(AuthContext);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (isPrivate && !authenticated) {
    return <Redirect to="/login" />;
  }

  return <Route {...rest} />;
};

const Routes = () => {
  return (
    <Router history={history}>
      <CustomRoute component={Home} path="/" exact />
      <CustomRoute component={Login} path="/login" />
      <CustomRoute component={RegisterUsers} path="/register-users" />
      <CustomRoute component={RegisterProfessors} path="/register-professors" />
      <CustomRoute isPrivate component={ListUsers} path="/list-users" />
      <CustomRoute isPrivate component={UpdateUsers} path="/update-users" />
    </Router>
  );
};

export default Routes;
