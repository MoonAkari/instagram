import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { useSelector } from 'react-redux';

import Image from '../../components/Image/Image';
import Post from '../../components/post/Post';
import SideBar from '../../components/sidebar/SideBar';
import { postsInfo, selectCurrentUser } from '../../store/selector';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPost } from '../../store/posts/action';

const cx = classNames.bind(styles);

function Home() {
  let isStories = true;
  const posts = useSelector(postsInfo);
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getPost());
  // }, [dispatch]);

  return (
    <div className={cx('container')}>
      <div className={cx('content')}>
        {isStories && (
          <div className={cx('stories-bar')}>
            <div className={cx('story-wrapper')}>
              <Image
                className={cx('avatar')}
                src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.6435-9/132297550_3543582379066097_1314718618935596856_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=bEiWcr08F6MAX9mqzqt&_nc_ht=scontent.fsgn2-6.fna&oh=00_AT-6JXwIIycFKpPGbwF5hfZVFr89CXqjZ6Awq4XIT8a4Kw&oe=631EA4FD"
                alt="avatar"
                width="56px"
                height="56px"
                circle
              />
              <h4 className={cx('id-name')}>monmotion</h4>
            </div>
          </div>
        )}

        {posts.map((post) => (
          <Post key={post.id} data={post} currentUser={currentUser} />
        ))}
      </div>
      <aside className={cx('sidebar')}>
        <SideBar />
      </aside>
    </div>
  );
}

export default Home;
