import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import DashboardLayout from './layout/Dashboard';
import { publicRoutes } from './routes/dashboardRoutes';
import PublicRoute from './components/PublicRoute/PublicRoute';
import OnepageLayout from './layout/OnepageLayout/OnepageLayout';
import DefaultLayout from './layout/defaultLayout/DefaultLayout';
import { store, persistor } from './store/store';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
        <Router>
          <Routes>
            {publicRoutes.map((route) => {
              const Layout = route.layout === OnepageLayout ? OnepageLayout : DefaultLayout;
              const Page = route.component;
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  element={
                    <PublicRoute>
                      <Layout>
                        <Page />
                      </Layout>
                    </PublicRoute>
                  }
                />
              );
            })}
            <Route path="*" element={<DashboardLayout />} />;
            <Route element={<NotFound />} />;
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
