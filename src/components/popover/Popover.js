import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Popover.module.scss';

const cx = classNames.bind(styles);

function Popover({ className, width = '375px', height = '362px', children }) {
  const classes = cx('popover-box', {
    [className]: className,
  });

  return (
    <div className={classes} style={{ width: `${width}`, height: `${height}` }}>
      {children}
    </div>
  );
}

Popover.propTypes = {
  className: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Popover;
