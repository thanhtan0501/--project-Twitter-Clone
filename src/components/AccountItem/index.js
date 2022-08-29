import PropTypes from "prop-types";
import classNames from "classnames/bind";
import Image from "~/components/Image";
import styles from "./AccountItem.module.scss";
import { StickIcon } from "../Icons";

const cx = classNames.bind(styles);

function AccountItem({ result, onClick }) {
    return (
        <div className={cx("box-follower")} onClick={onClick}>
            <Image src={result.image} className={cx("avatar")} />
            <div className={cx("follow-content")}>
                <div className={cx("content")}>
                    <div className={cx("follow-name")}>
                        <h4 className={cx("name")}>{result.name}</h4>
                        {result.tick && <StickIcon />}
                    </div>
                    <h5 className={cx("follow-username")}>
                        {"@"}
                        {result.username}
                    </h5>
                </div>
            </div>
        </div>
    );
}

// Xác định kiểu dữ liệu truyền vào là obj, nếu ko phải obj sẽ báo lỗi cụ thể.
AccountItem.propTypes = {
    result: PropTypes.object.isRequired,
};

export default AccountItem;
