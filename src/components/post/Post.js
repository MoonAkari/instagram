import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Post.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faPaperPlane, faBookmark, faFaceSmile } from '@fortawesome/free-regular-svg-icons';
import { faEllipsis, faHeart as heartFill, faBookmark as bookmarkFill } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import Image from '../Image/Image';
import Button from '../button/Button';
import { setLikeStatus, setBookmarkStatus, addComment, setLikeCommentStatus } from '../../store/posts/action';

const cx = classNames.bind(styles);

function Post({ data, currentUser, className }) {
  const [like, setLike] = useState(data.liked);
  const [bookmarked, setBookmarked] = useState(data.bookmarked);
  const [commentValue, setCommentValue] = useState('');
  const dispatch = useDispatch();
  let classes = cx('wrapper', { [className]: className });

  const handleLike = () => {
    setLike(!like);
    dispatch(
      setLikeStatus({
        id: data.id,
        liked: !like,
      }),
    );
  };

  const handleLikeComment = (commentId) => {
    dispatch(
      setLikeCommentStatus({
        id: data.id,
        comments: {
          id: commentId,
        },
      }),
    );
  };

  const handleBookmark = () => {
    setBookmarked(!bookmarked);
    dispatch(
      setBookmarkStatus({
        id: data.id,
        bookmarked: !bookmarked,
      }),
    );
  };

  const handleAddCmt = () => {
    dispatch(
      addComment({
        postId: data.id,
        user_id: 1000,
        current_user: currentUser.name,
        content: commentValue,
      }),
    );
    setCommentValue('');
  };

  return (
    <div className={classes}>
      <header className={cx('header')}>
        <Image
          className={cx('avatar')}
          src="https://scontent.fsgn15-1.fna.fbcdn.net/v/t1.6435-9/132297550_3543582379066097_1314718618935596856_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=BbSRsxJCfzIAX8k3AJO&_nc_ht=scontent.fsgn15-1.fna&oh=00_AT_EDz5SAF6PqcUqBy_O5a-ZUW_R78FsCX0TFCfBHCN4DQ&oe=62F3237D"
          to={`/@${data.user_nickname}`}
          alt="avatar"
          width="32px"
          height="32px"
          circle
        />
        <div className={cx('id-name')}>
          <Button text to={`/@${data.user_nickname}`}>
            {data.user_nickname}
          </Button>
        </div>
        <Button icon>
          <FontAwesomeIcon icon={faEllipsis} className={cx('menu-icon')} />
        </Button>
      </header>

      <div className={cx('image')}>
        <Image src={data.image} alt="post" width="100%" height="100%" />
      </div>

      <div className={cx('content')}>
        <section className={cx('action-bar')}>
          <div className={cx('action-left')}>
            {!like ? (
              <Button icon className={cx('action-icon')} onClick={handleLike}>
                <FontAwesomeIcon icon={faHeart} />
              </Button>
            ) : (
              <Button icon className={cx('action-icon-active')} onClick={handleLike}>
                <FontAwesomeIcon icon={heartFill} className={cx('hear-fill')} />
              </Button>
            )}

            <Button icon className={cx('action-icon')}>
              <FontAwesomeIcon icon={faComment} />
            </Button>
            <Button icon className={cx('action-icon')}>
              <FontAwesomeIcon icon={faPaperPlane} />
            </Button>
          </div>

          <div className={cx('action-right')}>
            {!bookmarked ? (
              <Button icon className={cx('action-icon')} onClick={handleBookmark}>
                <FontAwesomeIcon icon={faBookmark} />
              </Button>
            ) : (
              <Button icon className={cx('action-icon-active')} onClick={handleBookmark}>
                <FontAwesomeIcon icon={bookmarkFill} />
              </Button>
            )}
          </div>
        </section>

        {data.likes_count ? (
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
              {data.liked ? (
                <Button text underline to={`/@${data.user_nickname}`}>
                  You,&nbsp;
                </Button>
              ) : (
                <></>
              )}
              <Button text underline to="/@kuroyuki_jane" style={{ margin: '0' }}>
                kuroyuki_jane
              </Button>
              &nbsp;and&nbsp;
              <Button text>{data.likes_count} others</Button>
            </div>
          </section>
        ) : (
          <></>
        )}

        <div className={cx('content-bar')}>
          <div className={cx('status')}>
            <div>
              <Button text underline to={`/@${data.user_nickname}`} className={cx('id-status')}>
                {data.user_nickname}&nbsp;
              </Button>
              <span className={cx('status-content')}>{data.title}</span>
            </div>
          </div>

          {data.comments.length > 2 ? (
            <Button className={cx('load-all')}>View all {data.comments.length} comments</Button>
          ) : (
            <></>
          )}
          <div className={cx('comment-content')}>
            {data.comments ? (
              data.comments.map((comment) => (
                <div className={cx('comment')} key={comment.id}>
                  <div>
                    <Button text underline to={`/@${comment.user_nickname}`} className={cx('id-comment')}>
                      {comment.user_nickname}&nbsp;
                    </Button>
                    <span>{comment.body}</span>
                  </div>
                  {!comment.liked ? (
                    <Button icon className={cx('like-comment')} onClick={() => handleLikeComment(comment.id)}>
                      <FontAwesomeIcon icon={faHeart} />
                    </Button>
                  ) : (
                    <Button icon className={cx('like-comment-active')} onClick={() => handleLikeComment(comment.id)}>
                      <FontAwesomeIcon icon={heartFill} className={cx('hear-fill')} />
                    </Button>
                  )}
                </div>
              ))
            ) : (
              <></>
            )}
          </div>
        </div>

        <div style={{ display: 'flex' }}>
          <Button text to="/" className={cx('time-bar')}>
            6 days ago
          </Button>
        </div>
      </div>

      <div className={cx('comment-box')}>
        <FontAwesomeIcon icon={faFaceSmile} className={cx('emotion-btn')} />
        <input
          value={commentValue}
          onChange={(e) => setCommentValue(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') handleAddCmt();
          }}
          placeholder="Add a comment..."
          className={cx('comment-input')}
        />
        <Button onClick={handleAddCmt} disable={commentValue ? false : true} text className={cx('post-btn')}>
          Post
        </Button>
      </div>
    </div>
  );
}

Post.propTypes = {
  data: PropTypes.object,
  currentUser: PropTypes.object,
  className: PropTypes.string,
};

export default Post;
