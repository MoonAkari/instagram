import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './defaultLayout.module.scss';
import Header from '../../components/Header/Header.js';
import Footer from '../../components/footer/Footer';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <div className={cx('container')}>
      <Header />
      <div className={cx('content')}>{children}</div>
      {children.type.name === 'Profile' ? (
        <footer className={cx('footer')}>
          <Footer small />
        </footer>
      ) : (
        <></>
      )}
    </div>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
