import classNames from 'classnames/bind';
import styles from './style.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

import images from '../../assets/image/image';
import Button from '../../components/button/Button';
import { setLoginSuccess } from '../../store/auth/action';

const cx = classNames.bind(styles);

function RegisterLayout() {
  const [numberEmail, setNumberEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [pwdValue, setPwdValue] = useState('');
  const [errorAlert, setErrorAlert] = useState('');
  const dispatch = useDispatch();

  const handleSignUp = () => {
    dispatch(setLoginSuccess(true));
  };

  // const formTest = [numberEmailCheck(), fullNameCheck(), usernameCheck(), pwdCheck()];

  const handleNumberEmailValue = (e) => {
    setNumberEmail(e.target.value);
  };

  const numberEmailCheck = () => {
    const phoneNumRegax = /^\d{10}$/;
    const emailRegax = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!phoneNumRegax.test(numberEmail) || !emailRegax.test(numberEmail)) {
      setErrorAlert('Invalid phone number or email');
      return false;
    }
  };

  const HandleFullNameValue = (e) => {
    setFullName(e.target.value);
  };

  const HandleUsernameValue = (e) => {
    setUsername(e.target.value);
  };

  const HandlepwdValue = (e) => {
    setPwdValue(e.target.value);
  };

  return (
    <>
      <div className={cx('wrapper')}>
        <div className={cx('signin-box')}>
          <div className={cx('logo')}>
            <img className={cx('logo-img')} src={images.logoLogin} alt="logo"></img>
          </div>

          <div className={cx('slogan')}>
            <span>Sign up to see photos and videos from your friends.</span>
          </div>

          <Button
            primary
            small
            className={cx('facebook-login', 'signup-site')}
            iconLeft={<FontAwesomeIcon icon={faFacebookSquare} />}
          >
            Log in with Facebook
          </Button>
          <div className={cx('divider')}>
            <div className={cx('divider-line')}></div>
            <div className={cx('divider-text')}>
              <span>OR</span>
            </div>
            <div className={cx('divider-line')}></div>
          </div>

          <form action="#" acceptCharset="utf-8" className={cx('login-form')} onClick={(e) => e.preventDefault()}>
            <div className={cx('signup-content')}>
              <div className={cx('input-wrapper')}>
                <div className={cx('input-box')}>
                  <input
                    className={cx('input-login', { active: numberEmail })}
                    type="text"
                    value={numberEmail}
                    onChange={handleNumberEmailValue}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') handleSignUp();
                    }}
                    onBlur={(e) => console.log(e.target.onblur)}
                    autoFocus
                    required
                  />
                  <span className={cx('description', { active: numberEmail })}>Mobile Number or Email </span>
                </div>
              </div>

              <div className={cx('input-wrapper')}>
                <div className={cx('input-box')}>
                  <input
                    className={cx('input-login', { active: fullName })}
                    type="text"
                    value={fullName}
                    onChange={HandleFullNameValue}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') handleSignUp();
                    }}
                    required
                  />
                  <span className={cx('description', { active: fullName })}>Full Name </span>
                </div>
              </div>

              <div className={cx('input-wrapper')}>
                <div className={cx('input-box')}>
                  <input
                    className={cx('input-login', { active: username })}
                    type="password"
                    value={username}
                    onChange={HandleUsernameValue}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') handleSignUp();
                    }}
                    required
                  />
                  <span className={cx('description', { active: username })}>Username</span>
                </div>
              </div>

              <div className={cx('input-wrapper')}>
                <div className={cx('input-box')}>
                  <input
                    className={cx('input-login', { active: pwdValue })}
                    type="password"
                    value={pwdValue}
                    onChange={HandlepwdValue}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') handleSignUp();
                    }}
                    required
                  />
                  <span className={cx('description', { active: pwdValue })}>Password</span>
                </div>
              </div>
            </div>

            <div className={cx('term-content')}>
              <p className={cx('term')}>
                People who use our service may have uploaded your contact information to Instagram.{' '}
                <a href="https://www.facebook.com/help/instagram/261704639352628">Learn More</a>
                <br />
                <br />
                By signing up, you agree to our <a href="https://help.instagram.com/581066165581870">Terms</a> ,{' '}
                <a href="https://www.facebook.com/privacy/policy">Privacy Policy</a> and{' '}
                <Link to="/legal/cookies/">Cookies Policy</Link> .
              </p>
            </div>

            <div className={cx('login-btn-wrapper')}>
              <Button primary small className={cx('login-btn')} onClick={handleSignUp} disable={!(pwdValue.length > 5)}>
                Sign Up
              </Button>
            </div>
          </form>

          {errorAlert && <span className={cx('error-alert')}>{errorAlert}</span>}
        </div>

        <div className={cx('change-box')}>
          <label className={cx('change-content')}>
            Have an account?&nbsp;
            <Button to="/login" text className={cx('change-btn')}>
              Log in
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

export default RegisterLayout;
