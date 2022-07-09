import classNames from 'classnames/bind';
import styles from './defaultLayout.module.scss';
import Header from '../../components/Header/Header.js';

const cx = classNames.bind(styles);

function DashboardLayout({ children }) {
  return (
    <>
      <Header />
      <div className={cx('container')}>
        <div className={cx('content')}>{children}</div>
        <aside className={cx('sidebar')}></aside>
      </div>
    </>
  );
}

export default DashboardLayout;
