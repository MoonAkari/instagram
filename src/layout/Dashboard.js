import { Routes, Route } from 'react-router-dom';
import { privateRoutes } from '../routes/dashboardRoutes';

import PrivateRoute from '../components/PrivateRoute/PrivateRoute';
import DefaultLayout from './defaultLayout/DefaultLayout';
import OnepageLayout from './OnepageLayout/OnepageLayout';
import NotFound from '../pages/NotFound/NotFound';

function DashboardLayout() {
  return (
    <Routes>
      {privateRoutes.map((route) => {
        const Layout = route.layout === OnepageLayout ? OnepageLayout : DefaultLayout;
        const Page = route.component;
        return (
          <Route
            key={route.path}
            path={route.path}
            element={
              <PrivateRoute>
                <Layout>
                  <Page />
                </Layout>
              </PrivateRoute>
            }
          />
        );
      })}
      <Route element={<NotFound />} />
    </Routes>
  );
}

export default DashboardLayout;
