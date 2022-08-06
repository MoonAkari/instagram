import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Image.module.scss';
import { Link, NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

function Image({
  to,
  href,
  navLink,
  alt,
  width = '24px',
  height = '24px',
  src,
  circle = false,
  children,
  className,
  onClick,
  disable = false,
  ...passProps
}) {
  let Component = 'div';
  const props = { onClick, ...passProps };

  if (href) {
    props.href = href;
    Component = 'a';
  } else if (to && navLink) {
    props.to = to;
    Component = NavLink;
  } else if (to) {
    props.to = to;
    Component = Link;
  }

  if (disable) {
    delete props.onClick;
  }

  const classes = cx({
    [className]: className,
    circle,
    disable,
  });

  return (
    <Component className={cx('wrapper')} {...props}>
      <img className={cx('image', classes)} alt={alt} src={src} style={{ width: `${width}`, height: `${height}` }} />
      {children && <span>{children}</span>}
    </Component>
  );
}

Image.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  navLink: PropTypes.bool,
  alt: PropTypes.node.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  circle: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  src: PropTypes.string,
  onClick: PropTypes.func,
  disable: PropTypes.bool,
};

export default Image;
