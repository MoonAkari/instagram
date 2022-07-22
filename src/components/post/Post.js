import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Post.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faPaperPlane, faBookmark, faFaceSmile } from '@fortawesome/free-regular-svg-icons';
import { faEllipsis, faHeart as heartFill, faBookmark as bookmarkFill } from '@fortawesome/free-solid-svg-icons';

import Image from '../Image/Image';
import Button from '../button/Button';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Post({ data, className }) {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [commentValue, setCommentValue] = useState('');

  let classes = cx('wrapper', { [className]: className });

  return (
    <div className={classes}>
      <header className={cx('header')}>
        <Image
          className={cx('avatar')}
          src="https://scontent.fsgn15-1.fna.fbcdn.net/v/t1.6435-9/132297550_3543582379066097_1314718618935596856_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=BbSRsxJCfzIAX8k3AJO&_nc_ht=scontent.fsgn15-1.fna&oh=00_AT_EDz5SAF6PqcUqBy_O5a-ZUW_R78FsCX0TFCfBHCN4DQ&oe=62F3237D"
          to="/@monmotion"
          alt="avatar"
          width="32px"
          height="32px"
          circle
        />
        <div className={cx('id-name')}>
          <Button text to="/@monmotion">
            monmotion
          </Button>
        </div>
        <Button icon>
          <FontAwesomeIcon icon={faEllipsis} className={cx('menu-icon')} />
        </Button>
      </header>

      <div className={cx('image')}>
        <Image
          src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.6435-9/81172370_2628303377260673_4951614233021251584_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=B3iBJs6CAwUAX8IwZO2&_nc_ht=scontent.fsgn2-4.fna&oh=00_AT958DV1swmQe6Tr6omtIplsIx8A-WnZJInKUXNipOew9w&oe=62FF3793"
          alt="post"
          width="100%"
          height="100%"
        />
      </div>

      <div className={cx('content')}>
        <section className={cx('action-bar')}>
          <div className={cx('action-left')}>
            <Button icon className={cx('action-icon')} onClick={() => setLiked(!liked)}>
              {!liked ? (
                <FontAwesomeIcon icon={faHeart} />
              ) : (
                <FontAwesomeIcon icon={heartFill} className={cx('hear-fill')} />
              )}
            </Button>
            <Button icon className={cx('action-icon')}>
              <FontAwesomeIcon icon={faComment} />
            </Button>
            <Button icon className={cx('action-icon')}>
              <FontAwesomeIcon icon={faPaperPlane} />
            </Button>
          </div>

          <div className={cx('action-right')} onClick={() => setBookmarked(!bookmarked)}>
            <Button icon className={cx('action-icon')}>
              {!bookmarked ? <FontAwesomeIcon icon={faBookmark} /> : <FontAwesomeIcon icon={bookmarkFill} />}
            </Button>
          </div>
        </section>

        <section className={cx('liked-bar')}>
          <Image
            src="https://scontent.fsgn15-1.fna.fbcdn.net/v/t1.6435-9/132297550_3543582379066097_1314718618935596856_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=BbSRsxJCfzIAX8k3AJO&_nc_ht=scontent.fsgn15-1.fna&oh=00_AT_EDz5SAF6PqcUqBy_O5a-ZUW_R78FsCX0TFCfBHCN4DQ&oe=62F3237D"
            alt="avatar"
            circle
            width="20px"
            height="20px"
          />
          <div className={cx('description')}>
            &nbsp;Liked by&nbsp;
            <Button text underline to="/@kuroyuki_jane">
              kuroyuki_jane
            </Button>
            &nbsp;and&nbsp;
            <Button text>6 others</Button>
          </div>
        </section>

        <div className={cx('content-bar')}>
          <div className={cx('status')}>
            <div>
              <Button text underline to="/@monmotion/" className={cx('id-status')}>
                monmotion&nbsp;
              </Button>
              <span>Đồ án times</span>
            </div>
          </div>

          <Button className={cx('load-more')}>View all 5 comments</Button>
          <div className={cx('comment-content')}>
            <div className={cx('comment')}>
              <div>
                <Button text underline to="/@lamtran_1/" className={cx('id-comment')}>
                  lamtran_1&nbsp;
                </Button>
                <span>
                  Ủa đi in chi ngta chỉ cho k in đòi về vẽ ngựa ngựa Ủa đi in chi ngta chỉ cho k in đòi về vẽ ngựa ngựa
                  Ủa đi in chi ngta chỉ cho k in đòi về vẽ ngựa ngựa
                </span>
              </div>
              <Button icon className={cx('like-comment')}>
                <FontAwesomeIcon icon={faHeart} />
              </Button>
            </div>

            <div className={cx('comment')}>
              <div>
                <Button text underline to="/@thaochoach15/" className={cx('id-comment')}>
                  thaochoach15&nbsp;
                </Button>
                <span>đi ĐS rất không rủ </span>
              </div>
              <Button icon className={cx('like-comment')}>
                <FontAwesomeIcon icon={faHeart} />
              </Button>
            </div>
          </div>
        </div>

        <Button text to="/" className={cx('time-bar')}>
          6 days ago
        </Button>
      </div>

      <div className={cx('comment-box')}>
        <FontAwesomeIcon icon={faFaceSmile} className={cx('emotion-btn')} />
        <input
          onChange={(e) => setCommentValue(e.target.value)}
          placeholder="Add a comment..."
          className={cx('comment-input')}
        />
        <Button disable={commentValue ? false : true} text className={cx('post-btn')}>
          Post
        </Button>
      </div>
    </div>
  );
}

Post.propTypes = {
  data: PropTypes.node,
  className: PropTypes.string,
};

export default Post;
