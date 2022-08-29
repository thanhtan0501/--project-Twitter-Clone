import React from "react";
import classNames from "classnames/bind";

import styles from "./ProfileLayout.module.scss";
import Sidebar from "../Component/Sidebar";
import { trendingResults, followResults } from "~/utils/constant";

import Widgets from "../Component/Widgets";
// import Modal from "./Modal";

const cx = classNames.bind(styles);

function ProfileLayout({ children }) {
    return (
        <div className={cx("wrapper")}>
            <Sidebar />
            <div className={cx("container")}>
                <div className={cx("content")}>{children}</div>
                <Widgets
                    mightLikeResults={followResults}
                    trendingResults={trendingResults}
                />
            </div>
            {/* <Modal /> */}
        </div>
    );
}

export default ProfileLayout;
