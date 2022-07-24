import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SideBar.module.scss';
import Tippy from '@tippyjs/react/headless';
import { useState } from 'react';

import Button from '../button/Button';
import Popover from '../popover/Popover';

const cx = classNames.bind(styles);

function SidebarItems({ content, href, underline, childrenItems }) {
  const [visible, setVisible] = useState(false);

  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  const renderLanguageItem = () => {
    return childrenItems.map((item) => {
      return (
        <Button key={item.code} text onClick={() => setVisible(false)} className={cx('language-item')}>
          {item.title}
        </Button>
      );
    });
  };

  return (
    <>
      {!childrenItems ? (
        <li className={cx('footer-item')}>
          <Button className={cx('item')} href={href} text underline={underline}>
            {content}
          </Button>
        </li>
      ) : (
        <Tippy
          visible={visible}
          onClickOutside={hide}
          interactive
          placement="bottom-start"
          render={(attrs) => (
            <div className="content" tabIndex="-1" {...attrs}>
              <Popover width="150px" height="100%" className={cx('popover')}>
                {renderLanguageItem()}
              </Popover>
            </div>
          )}
        >
          <li className={cx('language')}>
            <Button className={cx('item')} href={href} text underline={underline} onClick={visible ? hide : show}>
              {content}
            </Button>
          </li>
        </Tippy>
      )}
    </>
  );
}

SidebarItems.propTypes = {
  content: PropTypes.string.isRequired,
  href: PropTypes.string,
  underline: PropTypes.bool,
  childrenItems: PropTypes.array,
};

export default SidebarItems;
