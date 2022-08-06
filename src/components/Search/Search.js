import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import Tippy from '@tippyjs/react/headless';
import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';

import Popover from '../popover/Popover';
import AccountItems from '../accountItems/AccountItems';
import useDebounce from '../../hooks/useDebounce';
import { fetchUsersBySearch, setEmptySearchTerm } from '../../store/usersAPI/action';
import { getUserSelected } from '../../store/userSelected/action';
import { selectUsersFromApi } from '../../store/selector';

const cx = classNames.bind(styles);

let recentData = [
  {
    id: 1,
    first_name: '💃 Nightlife',
    last_name: 'Girl 💃',
    full_name: '💃 Nightlife Girl 💃',
    nickname: 'nightlifegirl',
    avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/1/6273950c4889b.jpg',
    bio: 'Quẩy lên :)',
    tick: false,
    followings_count: 0,
    followers_count: 0,
    likes_count: 0,
    website_url: 'https://fullstack.edu.vn/',
    facebook_url: '',
    youtube_url: '',
    twitter_url: '',
    instagram_url: '',
    created_at: '2022-05-05 15:34:44',
    updated_at: '2022-05-05 16:12:44',
  },
];

function Search() {
  const [inputValue, setInputValue] = useState('');
  const [visible, setVisible] = useState(false);
  const debounce = useDebounce(inputValue, 500);
  const inputRef = useRef('');
  const dispatch = useDispatch();

  const usersFromApi = useSelector(selectUsersFromApi);

  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  const onInputClick = () => {
    inputRef.current.focus();
  };

  const handleClearBtn = () => {
    setInputValue('');
    setVisible(false);
  };

  const handleClickResult = (userData) => {
    dispatch(getUserSelected(userData));
    setVisible(false);
    setInputValue('');
  };

  //Handle User API
  useEffect(() => {
    if (!debounce.trim()) {
      dispatch(setEmptySearchTerm());
      return;
    }
    dispatch(fetchUsersBySearch(debounce));
  }, [debounce, dispatch]);

  //Handle display Recent search
  const RecentSearch = () => {
    return (
      <>
        <div className={cx('popover-header')}>
          <h4>Recent</h4>
          <button>Clear all</button>
        </div>

        {recentData.length > 0 ? (
          recentData.map((recentSearch) => {
            return (
              <AccountItems
                key={recentSearch.id}
                recentData={recentSearch}
                closeBtn
                onClick={() => handleClickResult(recentSearch)}
              />
            );
          })
        ) : (
          <div className={cx('fallback')}>No recent searches.</div>
        )}
      </>
    );
  };

  //Handle display search result
  const SearchResultComp = () => {
    if (usersFromApi.listUsers.length > 0) {
      return usersFromApi.listUsers.map((searchUser) => {
        return usersFromApi.loading ? (
          <FontAwesomeIcon key={searchUser.id} className={cx('loading-resultbar')} icon={faSpinner} />
        ) : (
          <AccountItems key={searchUser.id} searchData={searchUser} onClick={() => handleClickResult(searchUser)} />
        );
      });
    } else {
      return usersFromApi.loading ? (
        <FontAwesomeIcon className={cx('loading-resultbar')} icon={faSpinner} />
      ) : (
        <div className={cx('fallback')}>No results found.</div>
      );
    }
  };

  return (
    <div className={cx('container')}>
      <Tippy
        interactive
        visible={visible}
        onClickOutside={hide}
        placement="bottom"
        render={(attrs) => (
          <div className="search-result" tabIndex="-1" {...attrs}>
            <Popover>{debounce ? <SearchResultComp /> : <RecentSearch />}</Popover>
          </div>
        )}
      >
        <div className={cx('search-bar')}>
          <input
            ref={inputRef}
            className={cx('input-box')}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onFocus={show}
            placeholder={visible ? 'Search' : undefined}
            style={visible ? { color: '#262626' } : { color: 'transparent' }}
          />
          {!visible && (
            <div className={cx('holder-search-icon')} onClick={onInputClick}>
              <FontAwesomeIcon className={cx('search-icon')} icon={faMagnifyingGlass} />
              <span>{inputValue ? inputValue : 'Search'}</span>
            </div>
          )}
          <button>
            {!!visible && !usersFromApi.loading && (
              <FontAwesomeIcon className={cx('clear-icon')} icon={faCircleXmark} onClick={handleClearBtn} />
            )}
          </button>
          {usersFromApi.loading && <FontAwesomeIcon className={cx('loading-icon')} icon={faSpinner} />}
        </div>
      </Tippy>
    </div>
  );
}

export default Search;
