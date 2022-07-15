import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './AccountItems.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function AccountItems({ recentData, searchData, closeBtn, onClick, ...passProps }) {
  const props = { onClick, ...passProps };
  let data = recentData ? recentData : searchData;

  return (
    <Link to={`/@${data.nickname}`} {...props} className={cx('wrapper')}>
      <img className={cx('avatar')} src={data.avatar} alt="avatar" />
      <div className={cx('info')}>
        <h4 className={cx('id-name')}>
          {data.nickname}
          {data.tick && <FontAwesomeIcon className={cx('verified-icon')} icon={faCircleCheck} />}
        </h4>
        <p className={cx('name')}>{data.full_name} • Following</p>
      </div>
      {closeBtn ? <FontAwesomeIcon className={cx('close-icon')} icon={faXmark} /> : ''}
    </Link>
  );
}

export default AccountItems;
