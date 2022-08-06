import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './popup.module.scss';
import { Link, NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

function Popup() {
  return (
    <div className={cx('container')}>
      <div className={cx('content')}></div>
      <div className={cx('overlay')}></div>
    </div>
  );
}

export default Popup;
