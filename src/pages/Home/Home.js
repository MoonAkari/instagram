import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Image from '../../components/Image/Image';
import Post from '../../components/post/Post';

const cx = classNames.bind(styles);

function Home() {
  let isStories = true;

  return (
    <div className={cx('container')}>
      {isStories && (
        <div className={cx('stories-bar')}>
          <div className={cx('story-wrapper')}>
            <Image
              className={cx('avatar')}
              src="https://scontent.fsgn15-1.fna.fbcdn.net/v/t1.6435-9/132297550_3543582379066097_1314718618935596856_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=BbSRsxJCfzIAX8k3AJO&_nc_ht=scontent.fsgn15-1.fna&oh=00_AT_EDz5SAF6PqcUqBy_O5a-ZUW_R78FsCX0TFCfBHCN4DQ&oe=62F3237D"
              alt="avatar"
              width="56px"
              height="56px"
              circle
            />
            <h4 className={cx('id-name')}>monmotion</h4>
          </div>
        </div>
      )}

      <Post></Post>
    </div>
  );
}

export default Home;
