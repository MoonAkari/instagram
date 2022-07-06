import Header from '../../components/Header/Header.js';

function DashboardLayout({ children }) {
  return (
    <>
      <Header />
      <div className="container">
        <div className="content">{children}</div>
      </div>
    </>
  );
}

export default DashboardLayout;
