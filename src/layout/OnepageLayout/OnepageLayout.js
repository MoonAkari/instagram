import classNames from 'classnames/bind';
import styles from './OnepageLayout.module.scss';

const cx = classNames.bind(styles);

function OnepageLayout({ children }) {
  return (
    <>
      <div className={cx('container')}>
        <div className={cx('content')}>{children}</div>
        <footer className={cx('footer')}>footer</footer>
      </div>
    </>
  );
}

export default OnepageLayout;
