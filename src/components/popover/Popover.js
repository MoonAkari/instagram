import PropTypes from 'prop-types';
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

Popover.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Popover;
