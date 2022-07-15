import classNames from 'classnames/bind';
import styles from './MenuItem.module.scss';
import Button from '../../button/Button';

const cx = classNames.bind(styles);

function MenuItem({ item = [], onClick }) {
  const props = { onClick };

  return (
    <Button text to={item.to} className={cx('menu-item')} iconLeft={item.icon} {...props}>
      {item.title}
    </Button>
  );
}

export default MenuItem;
