import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import DashboardLayout from './layout/Dashboard';
import { publicRoutes } from './routes/dashboardRoutes';
import OnepageLayout from './layout/OnepageLayout/OnepageLayout';
import DefaultLayout from './layout/defaultLayout/DefaultLayout';
import { Provider } from 'react-redux';

import { store, persistor } from './store/store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
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
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              );
            })}
            <Route path="*" element={<DashboardLayout />} />;
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
