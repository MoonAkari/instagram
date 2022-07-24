import classNames from 'classnames/bind';
import styles from './defaultLayout.module.scss';
import Header from '../../components/Header/Header.js';

const cx = classNames.bind(styles);

function DashboardLayout({ children }) {
  return (
    <>
      <Header />
      <div className={cx('container')}>{children}</div>
    </>
  );
}

export default DashboardLayout;
