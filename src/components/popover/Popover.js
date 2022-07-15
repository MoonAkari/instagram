import classNames from 'classnames/bind';
import styles from './Popover.module.scss';

const cx = classNames.bind(styles);

function Popover({ width = '375px', height = '362px', children }) {
  return (
    <div className={cx('popover-box')} style={{ width: `${width}`, height: `${height}` }}>
      {children}
    </div>
  );
}

export default Popover;
