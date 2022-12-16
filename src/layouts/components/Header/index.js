import classNames from 'classnames/bind';
import styles from './Header.module.scss'
import config from '~/config'
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faSignOut,
    faUser,
    faCircleXmark,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import Button from '~/components/Button';
import 'tippy.js/dist/tippy.css'
import Menu from '~/components/Popper/Menu';
import { InboxIcon, MessageIcon, SearchIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';
import { useState, useEffect } from 'react';
import AccountItem from '~/components/AccountItem';
import { Wrapper as PopperWrapper } from '~/components/Popper'
import { Link } from 'react-router-dom';



const cx = classNames.bind(styles);
const currentUser = true;

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English'
                },
                {
                    code: 'es',
                    title: 'Spanish'
                },
                {
                    code: 'fr',
                    title: 'French'
                },
                {
                    code: 'it',
                    title: 'Italia'
                },
                {
                    code: 'ja',
                    title: 'Japanese'
                },
                {
                    code: 'ko',
                    title: 'Korean'
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt'
                },
                {
                    code: 'de',
                    title: 'Germany'
                },
                {
                    code: 'ru',
                    title: 'Russian'
                },
                {
                    code: 'th',
                    title: 'Thailand'
                },
                {
                    code: 'zh',
                    title: 'Chinese'
                },
                {
                    code: 'hu',
                    title: 'Hungarian'
                },
                {
                    code: 'id',
                    title: 'Indonesian'
                },
                {
                    code: 'be',
                    title: 'Belarus'
                }
            ]
        }
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback'
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shotcuts',
    }
]

function Header() {

    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3, 4])
        }, 0)
    }, []);


    const handleMenuChange = (MenuItem) => {
        switch (MenuItem.type) {
            case 'language':
                //Handle change language
                break;
            default:
        }
    }

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@hoaa'
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin'
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings'
        },

        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true
        },
    ]

    return <header className={cx('wrapper')} >
        <div className={cx('inner')}>
            <div className={cx('logo')}>
                <Link to={config.routes.home} className={cx('logo-link')}><img src={images.logo} alt="Tiktok" /></Link>
            </div>

            <Search
                interactive
                visible={searchResult.length > 0}
                render={attrs => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>
                                Accounts
                            </h4>
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className={cx('search')}>
                    <input placeholder="Search accounts and videos" spellCheck={false} />
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                    <button className={cx('search-btn')}>
                        <SearchIcon />
                    </button>
                </div>
            </Search>

            <div className={cx('actions')}>
                {currentUser ? (
                    <>
                        <Tippy delay={[0, 200]} content="Upload video" placement='bottom'>
                            <button className={cx('action-btn')}>
                                <UploadIcon />
                            </button>
                        </Tippy>
                        <Tippy delay={[0, 200]} content="Messages" placement='bottom'>
                            <button className={cx('action-btn')}>
                                <MessageIcon />
                            </button>
                        </Tippy>
                        <Tippy delay={[0, 200]} content="Inbox" placement='bottom'>
                            <button className={cx('action-btn')}>
                                <InboxIcon />
                            </button>
                        </Tippy>
                    </>
                ) : (
                    <>
                        <Button text>Upload</Button>
                        <Button primary>Log in</Button>

                    </>
                )}
                <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                    {currentUser ? (
                        <Image src='https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/aa4f4cd5eaa0fd334b8200c804b7d836~c5_100x100.jpeg?x-expires=1670853600&x-signature=sb4I5HJC9b5WQQZh0Xrh4O8H0zQ%3D'
                            className={cx('user-avatar')}
                            alt='Nguyen Van A' />
                    ) : (
                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    )}
                </Menu>
            </div>
        </div>
    </header >
}

export default Header;