import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { ROUTES } from '../../config/routes';
import { useSelector } from 'react-redux';

import { selectLoginStatus } from '../../store/selector';

function PrivateRoute({ children }) {
  let authenticated = useSelector(selectLoginStatus);
  return authenticated ? children : <Navigate to={ROUTES.LOGIN} replace />;
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
