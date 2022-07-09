import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { privateRoute, publicRoute } from './routes/dashboardRoutes';
import DashboardLayout from './layout/defaultLayout/Dashboard';
import SettingLayout from './layout/SettingLayout/SettingLayout';

function App() {
  return (
    <Router>
      <Routes>
        {publicRoute.map((route, index) => {
          const Layout = route.layout === SettingLayout ? SettingLayout : DashboardLayout;
          const Page = route.component;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;
