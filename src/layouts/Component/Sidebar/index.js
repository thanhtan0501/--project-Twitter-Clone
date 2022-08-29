import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import images from "~/assets/images";
import Button from "~/components/Button";
import { EllipsisIcon, MoreIcon, TweetButtonIcon } from "~/components/Icons";
import Image from "~/components/Image";
import { sidebarOption } from "~/utils/constant";
import styles from "./Sidebar.module.scss";
import SidebarOption from "./SidebarOption";

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div className={cx("sidebar")}>
            <div>
                {/* Twitter icon */}
                <Link to="/" className={cx("logo")}>
                    <img src={images.logo} alt="Twitter" />
                </Link>

                {/* SidebarOption */}
                <div className={cx("option")}>
                    {sidebarOption.map((option, index) => (
                        <SidebarOption
                            key={index}
                            title={option.title}
                            to={option.to}
                            icon={option.icon}
                            activeIcon={option.activeIcon}
                        />
                    ))}
                    <div className={cx("sidebar_option")}>
                        <div className={cx("sidebar-option")}>
                            <MoreIcon />
                            <span className={cx("title")}>More</span>
                        </div>
                    </div>
                </div>

                {/* Button */}
                <div className={cx("sidebar-button")}>
                    <Button primary large className={cx("tweet")}>
                        Tweet
                    </Button>
                    <Button primary className={cx("tweet-button-icon")}>
                        <TweetButtonIcon />
                    </Button>
                </div>
            </div>
            {/* User */}
            <div className={cx("sidebar-user")}>
                <Image
                    src="https://i.pinimg.com/474x/44/15/ba/4415ba5df0f4bfcee5893d6c441577e0.jpg"
                    className={cx("user-avatar")}

                    // src={currentUser.image}
                    // className={cx("user-avatar")}
                    // alt={currentUser.userName}
                    // fallback={currentUser.image}
                />
                <div className={cx("user-info")}>
                    <div className={cx("user-des-info")}>
                        <h4 className={cx("name")}>Thành Tấn</h4>

                        <span className={cx("username")}>@ThanhTan0501</span>
                    </div>
                    <div className={cx("ellipsis-btn")}>
                        <EllipsisIcon />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
