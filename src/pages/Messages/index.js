import React from "react";
import classNames from "classnames/bind";
import styles from "./Messages.module.scss";
import MessageList from "./MessageList";
import MessageInbox from "./MessageInbox";

const cx = classNames.bind(styles);

function Messages() {
    return (
        <div className={cx("messages")}>
            <MessageList />
            <MessageInbox />
        </div>
    );
}

export default Messages;
