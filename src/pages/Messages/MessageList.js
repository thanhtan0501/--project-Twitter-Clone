/* eslint-disable no-unused-vars */
import React from "react";
import classNames from "classnames/bind";

import styles from "./Messages.module.scss";
import {
    EllipsisIcon,
    NewMessageIcon,
    SearchIcon,
    SettingIcon,
} from "~/components/Icons";
import Image from "~/components/Image";
import Button from "~/components/Button";
import { useRecoilState } from "recoil";
import { modalState } from "~/atoms";
import { followList } from "~/utils/constant";

const cx = classNames.bind(styles);

function MessageList() {
    const [isOpen, setIsOpen] = useRecoilState(modalState);

    return (
        <div className={cx("message-list")}>
            <div className={cx("header")}>
                <div className={cx("title")}>
                    <h2>Messages</h2>
                </div>
                <div className={cx("icons-btn")}>
                    <div className={cx("icon")}>
                        <SettingIcon />
                    </div>
                    <div
                        className={cx("icon")}
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsOpen(true);
                        }}
                    >
                        <NewMessageIcon />
                    </div>
                </div>
            </div>
            <div className={cx("message-container")}>
                <div className={cx("container")}>
                    {/* {-1 > 0 ? ( */}
                    {followList.length > 0 ? (
                        <>
                            <div className={cx("message-search")}>
                                <div className={cx("search-box")}>
                                    <SearchIcon />
                                    <input
                                        type="text"
                                        className={cx("search-input")}
                                        placeholder="Search Twitter"
                                    />
                                </div>
                            </div>
                            {followList.map((messbox, index) => (
                                <div key={index} className={cx("mess-box")}>
                                    <div className={cx("mess-info")}>
                                        <Image
                                            src={messbox.image}
                                            className={cx("user-avatar")}
                                        />
                                        <span>{messbox.username}</span>
                                    </div>
                                    <div className={cx("ellipsis-btn")}>
                                        <EllipsisIcon />
                                    </div>
                                </div>
                            ))}
                        </>
                    ) : (
                        <div className={cx("new-message")}>
                            <div className={cx("title")}>
                                <span>Welcome to your inbox!</span>
                            </div>
                            <div className={cx("subtitle")}>
                                Drop a line, share Tweets and more with private
                                conversations between you and others on Twitter.
                            </div>
                            <Button
                                primary
                                large
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setIsOpen(true);
                                }}
                            >
                                Write a message
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default MessageList;
