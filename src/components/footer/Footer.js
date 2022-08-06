import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import Tippy from '@tippyjs/react/headless';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import FooterItems from './FooterItems';
import Popover from '../popover/Popover';
import Button from '../button/Button';
import FOOTER_ITEMS from './footerLinks';

const cx = classNames.bind(styles);

function Footer({ small }) {
  const [visible, setVisible] = useState(false);
  const [currentLanguge, setCurrentLanguge] = useState('English');

  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  const handleSelectLanguage = (language) => {
    setCurrentLanguge(language);
    setVisible(false);
  };
  const listRender = small ? FOOTER_ITEMS.filter((items) => !items.small) : FOOTER_ITEMS;

  const renderLanguageItem = () => {
    const lastItems = listRender.length - 1;
    return listRender[lastItems].childrenItems.map((item) => {
      return (
        <Button key={item.code} text onClick={() => handleSelectLanguage(item.title)} className={cx('language-item')}>
          {item.title}
        </Button>
      );
    });
  };

  return (
    <footer className={cx('footer')}>
      <ul className={cx('footer-list')}>
        {listRender.map((route) => (
          <FooterItems key={route.content} {...route} />
        ))}
      </ul>

      <div className={cx('sub-bar')}>
        <div>
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
              <Button
                className={cx('item')}
                text
                onClick={visible ? hide : show}
                iconRight={<FontAwesomeIcon icon={faAngleDown} style={{ fontSize: '1.4rem' }} />}
              >
                {currentLanguge}
              </Button>
            </li>
          </Tippy>
        </div>
        <span className={cx('copyright')}>© 2022 Onstagram from OutMeta</span>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  small: PropTypes.bool,
};

export default Footer;
