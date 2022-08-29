import React from "react";
import classNames from "classnames/bind";

import styles from "./Notifications.module.scss";
import { SettingIcon } from "~/components/Icons";

const cx = classNames.bind(styles);

function Notifications() {
    return (
        <div className={cx("feed")}>
            {/* Header */}
            <div className={cx("header")}>
                <div className={cx("header-title")}>
                    <div className={cx("title")}>
                        <h2>Notifications</h2>
                    </div>
                    <div className={cx("icon")}>
                        <SettingIcon />
                    </div>
                </div>
                <div className={cx("nav")}>
                    <div className={cx("all", "nav-btn")}>
                        <span>All</span>
                    </div>
                    <div className={cx("mentions", "nav-btn")}>
                        <span>Mentions</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Notifications;
