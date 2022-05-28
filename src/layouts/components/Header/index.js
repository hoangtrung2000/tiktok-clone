import React from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';

import Button from '~/component/Button';
import Image from '~/component/Image';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Search from '../Search';

import {
  FeedbackIcon,
  InboxIcon,
  KeyBoardIcon,
  LanguageIcon,
  MessageIcon,
  ProfileIcon,
  SettingIcon,
  SignOutIcon,
  TitokCoin,
  UploadIcon,
} from '~/component/Icons';
import Menu from '~/component/Popper/Menu';
import config from '~/config';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
  {
    icon: <LanguageIcon />,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vie',
          title: 'Tieng Viet',
        },
      ],
    },
  },
  {
    icon: <FeedbackIcon />,
    title: 'Feedback and help',
    to: '/feedback',
  },
  {
    icon: <KeyBoardIcon />,
    title: 'Keyboard shorcuts',
  },
];
function Header() {
  const currentUser = true;

  const handleMenuChange = (menuItem) => {
    console.log(menuItem);
  };

  const userMenu = [
    {
      icon: <ProfileIcon />,
      title: 'View Profile',
      to: '/@dasha',
    },
    {
      icon: <TitokCoin />,
      title: 'Get coins',
      to: '/coin',
    },
    {
      icon: <SettingIcon />,
      title: 'Setting',
      to: '/setting',
    },
    ...MENU_ITEMS,
    {
      icon: <SignOutIcon />,
      title: 'Log out',
      to: '/logout',
      separate: true,
    },
  ];

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <Link to={config.routes.home} className={cx('logo-link')}>
          <img src={images.logo} alt="tiktok" />
        </Link>

        <Search />

        <div className={cx('actions')}>
          {currentUser ? (
            <>
              <Tippy delay={[0, 50]} content="Upload videos" placement="bottom">
                <button className={cx('action-btn')}>
                  <UploadIcon />
                </button>
              </Tippy>
              <Tippy delay={[0, 50]} content="Message" placement="bottom">
                <button className={cx('action-btn')}>
                  <MessageIcon width="2.6rem" height="2.6rem" />
                </button>
              </Tippy>
              <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                <button className={cx('action-btn')}>
                  <InboxIcon />
                  <span className={cx('badge')}>12</span>
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary>Log in</Button>
            </>
          )}
          <Menu
            items={currentUser ? userMenu : MENU_ITEMS}
            onChange={handleMenuChange}
          >
            {currentUser ? (
              <Image
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/f465ba98f4349fc23f730157d5da5507~c5_300x300.webp?x-expires=1652590800&x-signature=%2FX02XSkoG8zgyCLssqxtQw62ouA%3D"
                className={cx('user-avatar')}
                alt="username"
              />
            ) : (
              <button className={cx('more-btn')}>
                <img src={images.more} alt="more actions" />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
