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

export default Button;
