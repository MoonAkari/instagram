import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import Tippy from '@tippyjs/react/headless';
import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';

import Popover from '../popover/Popover';
import AccountItems from '../accountItems/AccountItems';
import useDebounce from '../../hooks/useDebounce';
import * as apiServices from '../../services/apiServices';

const cx = classNames.bind(styles);

let recentData = [
  {
    id: 1,
    first_name: '๐ Nightlife',
    last_name: 'Girl ๐',
    full_name: '๐ Nightlife Girl ๐',
    nickname: 'nightlifegirl',
    avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/1/6273950c4889b.jpg',
    bio: 'Quแบฉy lรชn :)',
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
  const [searchResult, setSearchResult] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef('');
  const debounce = useDebounce(inputValue, 500);

  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  const onInputClick = () => {
    inputRef.current.focus();
  };

  const handleClearBtn = () => {
    setInputValue('');
    setVisible(false);
  };

  //Handle display Recent search
  const RecentSearch = () => {
    return (
      <>
        <div className={cx('popover-header')}>
          <h4>Recent</h4>
          <button>Clear all</button>
        </div>

        {recentData.length > 0 ? (
          recentData.map((recentData) => {
            return (
              <AccountItems key={recentData.id} recentData={recentData} closeBtn onClick={() => setVisible(false)} />
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
    if (searchResult.length > 0) {
      return searchResult.map((data) => {
        return loading ? (
          <FontAwesomeIcon className={cx('loading-resultbar')} icon={faSpinner} />
        ) : (
          <AccountItems key={data.id} searchData={data} />
        );
      });
    } else {
      return loading ? (
        <FontAwesomeIcon className={cx('loading-resultbar')} icon={faSpinner} />
      ) : (
        <div className={cx('fallback')}>No results found.</div>
      );
    }
  };

  //Handle User API
  useEffect(() => {
    if (!debounce.trim()) {
      setSearchResult([]);
      return;
    }

    const fetchApi = async () => {
      setLoading(true);

      const result = await apiServices.getSearch(debounce);
      setSearchResult(result);

      setLoading(false);
    };
    fetchApi();
  }, [debounce]);

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
            {!!visible && !loading && (
              <FontAwesomeIcon className={cx('clear-icon')} icon={faCircleXmark} onClick={handleClearBtn} />
            )}
          </button>
          {loading && <FontAwesomeIcon className={cx('loading-icon')} icon={faSpinner} />}
        </div>
      </Tippy>
    </div>
  );
}

export default Search;
