import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './AccountItems.module.scss';

const cx = classNames.bind(styles);

function AccountItems() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/289157054_1917379391779380_3570754851425156383_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=0n49GUnvQ7wAX86uUCG&_nc_ht=scontent.fsgn2-5.fna&oh=00_AT_-GgVHGlbZO_B1q51UB3j63fpEuRjYARHjGDXb4qc5FA&oe=62CE3219"
        alt="avatar"
      />
      <div className={cx('info')}>
        <h4 className={cx('id-name')}>
          kuroyuki_jane
          <FontAwesomeIcon className={cx('verified-icon')} icon={faCircleCheck} />
        </h4>
        <p className={cx('name')}>Phuong Anh • Following</p>
      </div>
      <FontAwesomeIcon className={cx('close-icon')} icon={faXmark} />
    </div>
  );
}

export default AccountItems;
