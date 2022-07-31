import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './defaultLayout.module.scss';
import Header from '../../components/Header/Header.js';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      <div className={cx('container')}>{children}</div>
    </>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
