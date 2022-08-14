import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SideBar.module.scss';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { FOOTER_ITEMS } from './FooterLinks';
import Image from '../Image/Image';
import Button from '../button/Button';
import SidebarItems from './Items';
import { getUserSelected } from '../../store/userSelected/action';
import * as apiServices from '../../services/apiServices';

const cx = classNames.bind(styles);

function SideBar({ data, className }) {
  let classes = cx('wrapper', { [className]: className });

  const [suggestResult, setsuggestResult] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchApi = async () => {
      const result = await apiServices.getSuggBar();
      setsuggestResult(result);
    };
    fetchApi();
  }, []);

  const handleClickItem = (userData) => {
    dispatch(getUserSelected(userData));
  };

  const renderSuggestItem = () => {
    return suggestResult.map((item, index) => {
      return index < 5 ? (
        <li key={item.id} className={cx('sugg-item')} onClick={() => handleClickItem(item)}>
          <Image
            className={cx('avatar')}
            src={item.avatar}
            to={`/@${item.nickname}`}
            alt="avatar"
            width="32px"
            height="32px"
            circle
          />
          <div className={cx('id-name')}>
            <Button text underline to={`/@${item.nickname}`} className={cx('id')}>
              {item.nickname}
            </Button>
            <span className={cx('status')}>Follows you</span>
          </div>
          <Button text className={cx('follow-btn')}>
            Follow
          </Button>
        </li>
      ) : (
        <></>
      );
    });
  };

  return (
    <div className={classes}>
      <header className={cx('user')}>
        <Image
          className={cx('user-avatar')}
          src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.6435-9/132297550_3543582379066097_1314718618935596856_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=bEiWcr08F6MAX9mqzqt&_nc_ht=scontent.fsgn2-6.fna&oh=00_AT-6JXwIIycFKpPGbwF5hfZVFr89CXqjZ6Awq4XIT8a4Kw&oe=631EA4FD"
          to="/@monmotion"
          alt="avatar"
          width="56px"
          height="56px"
          circle
        />
        <div className={cx('user-id-name')}>
          <Button text to="/@monmotion" className={cx('user-id')}>
            monmotion
          </Button>
          <span className={cx('user-name')}>Son Luong Thai</span>
        </div>
        <Button text className={cx('switch-btn')}>
          Switch
        </Button>
      </header>

      <div className={cx('suggest')}>
        <div className={cx('header')}>
          <p>Suggestions For You</p>
          <Button text to="/explore/people/" className={cx('see-all')}>
            See All
          </Button>
        </div>
        <ul className={cx('sugg-list')}>{renderSuggestItem()}</ul>
      </div>

      <footer className={cx('footer')}>
        <ul className={cx('footer-list')}>
          {FOOTER_ITEMS.map((route) => (
            <SidebarItems key={route.content} {...route} />
          ))}
        </ul>
        <span className={cx('copyright')}>© 2022 ONSTAGRAM FROM OUTMETA</span>
      </footer>
    </div>
  );
}

SideBar.propTypes = {
  data: PropTypes.array,
  className: PropTypes.string,
};

export default SideBar;
