import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { useLocation } from 'react-router-dom';

import styles from './OnepageLayout.module.scss';
import Footer from '../../components/footer/Footer';

const cx = classNames.bind(styles);

function OnepageLayout({ children }) {
  let location = useLocation();
  return (
    <>
      <div className={cx('container')}>
        <div className={cx('content')}>{children}</div>
        <footer className={cx('footer')}>{location.pathname === '/setting' ? <Footer small /> : <Footer />}</footer>
      </div>
    </>
  );
}

OnepageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default OnepageLayout;
