import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

import Button from '../button/Button';

const cx = classNames.bind(styles);

function FooterItems({ content, href, underline, childrenItems }) {
  return (
    <>
      {!childrenItems ? (
        <li className={cx('footer-item')}>
          <Button className={cx('item')} href={href} text underline={underline}>
            {content}
          </Button>
        </li>
      ) : (
        <></>
      )}
    </>
  );
}

FooterItems.propTypes = {
  content: PropTypes.string.isRequired,
  href: PropTypes.string,
  underline: PropTypes.bool,
  childrenItems: PropTypes.array,
};

export default FooterItems;
