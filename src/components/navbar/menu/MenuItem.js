import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './MenuItem.module.scss';
import Button from '../../button/Button';

const cx = classNames.bind(styles);

function MenuItem({ item = [], onClick, ...passProps }) {
  const props = { onClick, ...passProps };

  return (
    <Button text to={item.to} className={cx('menu-item')} iconLeft={item.icon} {...props}>
      {item.title}
    </Button>
  );
}

MenuItem.propType = {
  MenuItem: PropTypes.array.isRequired,
  onClick: PropTypes.func,
};

export default MenuItem;
