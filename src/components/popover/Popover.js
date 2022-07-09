import classNames from 'classnames/bind';
import styles from './Popover.module.scss';

const cx = classNames.bind(styles);

function Popover({ width, children }) {
  return (
    <div className={cx('popover-box')} style={{ width: `${width}px` }}>
      {children}
    </div>
  );
}

export default Popover;
