import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import Image from '../../components/Image/Image';
import Button from '../../components/button/Button';
import { selectUserSelected, selectUserByPathname } from '../../store/selector';
import { getUserByPathname } from '../../store/users/action';

const cx = classNames.bind(styles);

function Profile() {
  const userSelected = useSelector(selectUserSelected);
  const userByPathname = useSelector(selectUserByPathname);
  const user = userByPathname.id ? userByPathname : userSelected;

  const { pathname } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserByPathname(pathname));
  }, [pathname, dispatch]);

  return (
    <div className={cx('wrapper')}>
      <header className={cx('introduction')}>
        <div className={cx('avatar-box')}>
          <Image className={cx('avatar')} src={user.avatar} alt="avatar" width="150px" height="150px" circle />
        </div>

        <div className={cx('info')}>
          <div className={cx('nickname-setting')}>
            <h4 className={cx('nickname')}>{user.nickname}</h4>
            {user.follow_you && user.followed && (
              <Button border className={cx('message-btn')}>
                Message
              </Button>
            )}
            <Button primary small className={cx('follow-btn')}>
              {user.follow_you ? 'Follow Back' : 'Follow'}
            </Button>
            <Button primary small className={cx('suggest-btn')}>
              <FontAwesomeIcon icon={faAngleDown} />
            </Button>
            <Button icon className={cx('option-btn')}>
              <FontAwesomeIcon icon={faEllipsis} />
            </Button>
          </div>
          <div className={cx('counter')}>
            <span className={cx('post-count')}>
              <b>{user.likes_count}</b> posts
            </span>
            <Button text className={cx('follower-count')}>
              <b>{user.followers_count}</b> followers
            </Button>
            <Button text className={cx('following-count')}>
              <b>{user.followings_count}</b> following
            </Button>
          </div>
          <div className={cx('description')}>
            <div className={cx('name')}>{user.full_name}</div>
            {/* <div className={cx('gender')}>He/Him</div> */}
            {user.website && (
              <Button to="/" className={cx('website')}>
                🐸 @_notyourbaby.cow_
              </Button>
            )}
            <div className={cx('bio')}>{user.bio}</div>
            {/* <div className={cx('status')}>Follow by SomeOne</div> */}
          </div>
        </div>
      </header>

      <div className={cx('stories')}></div>
      <div className={cx('navbar')}></div>
      <div className={cx('content')}></div>
    </div>
  );
}

export default Profile;
