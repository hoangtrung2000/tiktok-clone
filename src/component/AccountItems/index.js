import React from 'react';
import classNames from 'classnames/bind';
import styles from './AccountItems.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItems() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/f465ba98f4349fc23f730157d5da5507~c5_300x300.webp?x-expires=1652590800&x-signature=%2FX02XSkoG8zgyCLssqxtQw62ouA%3D"
        alt="Name user"
      />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>Tarran Dasha</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </h4>
        <span className={cx('username')}>tarrannn</span>
      </div>
    </div>
  );
}

export default AccountItems;
