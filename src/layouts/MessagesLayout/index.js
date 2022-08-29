import React from "react";
import classNames from "classnames/bind";

import styles from "./MessagesLayout.module.scss";
import Sidebar from "../Component/Sidebar";
import Modal from "./Modal";

const cx = classNames.bind(styles);

function MessagesLayout({ children }) {
    return (
        <div className={cx("wrapper")}>
            <Sidebar />
            <div className={cx("container")}>{children}</div>
            <Modal />
        </div>
    );
}

export default MessagesLayout;
