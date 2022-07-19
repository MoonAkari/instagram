import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  className,
  primary = false,
  border = false,
  rounded = false,
  text = false,
  icon = false,
  small = false,
  medium = false,
  larger = false,
  iconLeft = false,
  iconRight = false,
  color = false,
  lightActive = true,
  darkActive = false,
  children,
  onClick,
  disable = false,
  ...passProps
}) {
  let Component = 'button';
  const props = { onClick, ...passProps };

  if (to) {
    props.to = to;
    Component = Link;
  } else if (href) {
    props.href = href;
    Component = 'a';
  }

  if (disable) {
    delete props.onClick;
  }

  const classes = cx('wrapper', {
    [className]: className,
    primary,
    border,
    rounded,
    text,
    icon,
    small,
    medium,
    larger,
    disable,
    color,
    lightActive,
    darkActive,
  });

  return (
    <Component className={classes} {...props}>
      {iconLeft && <span className={cx('iconLeft')}>{iconLeft}</span>}
      <span>{children}</span>
      {iconRight && <span className={cx('iconRight')}>{iconRight}</span>}
    </Component>
  );
}

Button.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  className: PropTypes.string,
  primary: PropTypes.bool,
  border: PropTypes.bool,
  rounded: PropTypes.bool,
  text: PropTypes.bool,
  icon: PropTypes.bool,
  small: PropTypes.bool,
  medium: PropTypes.bool,
  larger: PropTypes.bool,
  iconLeft: PropTypes.node,
  iconRight: PropTypes.node,
  color: PropTypes.string,
  lightActive: PropTypes.bool,
  darkActive: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func,
  disable: PropTypes.bool,
};

export default Button;
