import classNames from "classnames/bind";
import styles from './AccountPreview.module.scss'
import Button from "~/components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";


const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img className={cx('avatar')} src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/36262a14448e5e38e9dd55d312908347~c5_100x100.jpeg?x-expires=1671285600&x-signature=oihxfcbLmZL61p3tosdEE%2F0yX%2FU%3D" alt="" />
                <Button className={cx('follow-btn')} primary >Follow</Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>_phuongnhi.22</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Nguyễn Phương Nhi</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>9.3M</strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>616.2M</strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;