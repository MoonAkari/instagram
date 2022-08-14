import classNames from 'classnames/bind';
import styles from './style.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

import images from '../../assets/image/image';
import Button from '../../components/button/Button';
import { setLoginSuccess } from '../../store/auth/action';

const cx = classNames.bind(styles);

function LoginLayout() {
  const [usernameValue, setUsernameValue] = useState('');
  const [pwdValue, setPwdValue] = useState('');
  const [errorAlert, setErrorAlert] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (usernameValue.length < 6) {
      setErrorAlert("The username you entered doesn't belong to an account. Please check your username and try again.");
      return false;
    }
    // if (usernameValue !== 'sonsonson' && pwdValue !== '3lanson') {
    //   setErrorAlert('Sorry, your password was incorrect. Please double-check your password.');
    //   return false;
    // } else {
    dispatch(setLoginSuccess(true));
    // }
  };

  const handleUsernameInput = (e) => {
    setUsernameValue(e.target.value);
  };

  const handlePwdInput = (e) => {
    setPwdValue(e.target.value);
  };

  return (
    <>
      <div className={cx('side-image')} style={{ backgroundImage: `url(${images.phoneLogin})` }} />

      <div className={cx('wrapper')}>
        <div className={cx('login-box')}>
          <div className={cx('logo')}>
            <img className={cx('logo-img')} src={images.logoLogin} alt="logo"></img>
          </div>

          <form action="/login" acceptCharset="utf-8" className={cx('login-form')} onClick={(e) => e.preventDefault()}>
            <div className={cx('login-content')}>
              <div className={cx('input-wrapper')}>
                <div className={cx('input-box')}>
                  <input
                    className={cx('input-login', { active: usernameValue })}
                    type="text"
                    value={usernameValue}
                    onChange={handleUsernameInput}
                    autoFocus
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') handleLogin();
                    }}
                    required
                  />
                  <span className={cx('description', { active: usernameValue })}>
                    Phone number, username, or email{' '}
                  </span>
                </div>
              </div>

              <div className={cx('input-wrapper')}>
                <div className={cx('input-box')}>
                  <input
                    className={cx('input-login', { active: pwdValue })}
                    type="password"
                    value={pwdValue}
                    onChange={handlePwdInput}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') handleLogin();
                    }}
                    required
                  />
                  <span className={cx('description', { active: pwdValue })}>Password</span>
                </div>
              </div>
            </div>

            <div className={cx('login-btn-wrapper')}>
              <Button
                primary
                small
                className={cx('login-btn')}
                onClick={handleLogin}
                disable={!(usernameValue && pwdValue.length > 5)}
              >
                Log In
              </Button>
            </div>
          </form>

          <div className={cx('divider')}>
            <div className={cx('divider-line')}></div>
            <div className={cx('divider-text')}>
              <span>OR</span>
            </div>
            <div className={cx('divider-line')}></div>
          </div>
          <Button text icon className={cx('facebook-login')} iconLeft={<FontAwesomeIcon icon={faFacebookSquare} />}>
            Log in with Facebook
          </Button>
          {errorAlert && <span className={cx('error-alert')}>{errorAlert}</span>}
          <Button text className={cx('fogot-pwd')}>
            Fogot password?
          </Button>
        </div>

        <div className={cx('change-box')}>
          <label className={cx('change-content')}>
            Don't have an account?&nbsp;
            <Button text to="/register" className={cx('change-btn')}>
              Sign up
            </Button>
          </label>
        </div>

        <div className={cx('getapp')}>
          <label>Get the app.</label>
          <div className={cx('app')}>
            <Button text href="https://www.apple.com/services/">
              <img
                className={cx('app-image')}
                alt="App Store"
                src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
                style={{ width: `136px`, height: '40px' }}
              />
            </Button>
            <Button
              text
              href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D3CF5831F-ADC6-4F1A-9497-390D60C16F05%26utm_content%3Dlo%26utm_medium%3Dbadge"
            >
              <img
                className={cx('app-image')}
                alt="Google Play"
                src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
                style={{ width: `136px`, height: '40px' }}
              />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginLayout;
