import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
import Image from '../../components/Image/Image';
import Button from '../../components/button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faEllipsis } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Profile() {
  return (
    <div className={cx('wrapper')}>
      <header className={cx('introduction')}>
        <div className={cx('avatar-box')}>
          <Image
            className={cx('avatar')}
            src="https://scontent.fsgn15-1.fna.fbcdn.net/v/t1.6435-9/132297550_3543582379066097_1314718618935596856_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=BbSRsxJCfzIAX8k3AJO&_nc_ht=scontent.fsgn15-1.fna&oh=00_AT_EDz5SAF6PqcUqBy_O5a-ZUW_R78FsCX0TFCfBHCN4DQ&oe=62F3237D"
            alt="avatar"
            width="150px"
            height="150px"
            circle
          />
        </div>

        <div className={cx('info')}>
          <div className={cx('nickname-setting')}>
            <h4 className={cx('nickname')}>cien.le</h4>
            <Button border className={cx('message-btn')}>
              Message
            </Button>
            <Button primary small className={cx('follow-btn')}>
              Follow Back
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
              <b>31</b> posts
            </span>
            <Button text className={cx('follower-count')}>
              <b>69</b> followers
            </Button>
            <Button text className={cx('following-count')}>
              <b>111</b> following
            </Button>
          </div>
          <div className={cx('description')}>
            <div className={cx('name')}>K.</div>
            <div className={cx('gender')}>He/Him</div>
            <Button to="/" className={cx('website')}>
              🐸 @_notyourbaby.cow_
            </Button>
            <div className={cx('bio')}>Something about me</div>
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
