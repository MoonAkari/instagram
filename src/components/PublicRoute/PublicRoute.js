import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { ROUTES } from '../../config/routes';
import { selectLoginStatus } from '../../store/selector';

function PublicRoute({ children }) {
  let authenticated = useSelector(selectLoginStatus);
  return authenticated ? <Navigate to={ROUTES.HOME} replace /> : children;
}

PublicRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PublicRoute;
