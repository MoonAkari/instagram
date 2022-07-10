import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCircleXmark, faSpinner, faPlus } from '@fortawesome/free-solid-svg-icons';

import images from '../../assets/image/image';
import Popover from '../popover/Popover';
import AccountItems from '../accountItems/AccountItems';
import Button from '../button/Button';

const cx = classNames.bind(styles);

function Header() {
  const [isValue, setIsValue] = useState(null);

  const inputEl = useRef(null);
  const onDivClick = () => {
    inputEl.current.focus();
  };

  return (
    <header className={cx('header')}>
      <div className={cx('wrapper')}>
        <div className={cx('logo')} style={{ backgroundImage: `url(${images.logo})` }} />

        <Tippy
          interactive
          visible={false}
          render={(attrs) => (
            <div className="search-result" tabIndex="-1" {...attrs}>
              <Popover width={375}>
                <div className={cx('popover-header')}>
                  <h4>Recent</h4>
                  <button>Clear all</button>
                </div>
                <AccountItems />
                <AccountItems />
                <AccountItems />
                <AccountItems />
              </Popover>
            </div>
          )}
        >
          <div className={cx('search-bar')}>
            <input
              ref={inputEl}
              className={cx('input-box')}
              value={isValue}
              onChange={(e) => setIsValue(e.target.value)}
            />
            {!isValue && (
              <div className={cx('holder-search-icon')} onClick={onDivClick}>
                <FontAwesomeIcon className={cx('search-icon')} icon={faMagnifyingGlass} />
                <span>Search</span>
              </div>
            )}
            <button>
              <FontAwesomeIcon className={cx('clear-icon')} icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cx('loading-icon')} icon={faSpinner} />
          </div>
        </Tippy>

        <div className={cx('nav-bar')}>
          <Button primary small>
            Log in
          </Button>
          <Button text>Sign up</Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
