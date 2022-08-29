/* eslint-disable no-unused-vars */
import React from "react";
import classNames from "classnames/bind";

import styles from "./Messages.module.scss";
import { DetailIcon, StickIcon } from "~/components/Icons";
import Image from "~/components/Image";
import Button from "~/components/Button";
import { useRecoilState } from "recoil";
import { modalState } from "~/atoms";
import { followList } from "~/utils/constant";

const cx = classNames.bind(styles);

function MessageInbox() {
    const [isOpen, setIsOpen] = useRecoilState(modalState);
    const mess = followList[0];
    return (
        <div className={cx("message-inbox")}>
            {mess ? (
                <div className={cx("header", "mess-inbox-header")}>
                    <Image src={mess.image} className={cx("avatar")} />
                    <div className={cx("follow-content")}>
                        <div className={cx("content")}>
                            <div className={cx("follow-name")}>
                                <h4 className={cx("name")}>{mess.name}</h4>
                                {mess.tick && <StickIcon />}
                            </div>
                            <h5 className={cx("follow-username")}>
                                {"@"}

                                {mess.username}
                            </h5>
                        </div>
                    </div>
                    <div className={cx("icons-btn")}>
                        <div className={cx("icon")}>
                            <DetailIcon />
                        </div>
                    </div>
                </div>
            ) : (
                <div className={cx("box-message")}>
                    <div className={cx("select-message")}>
                        <div className={cx("select-message-title")}>
                            <h1>Select a message</h1>
                        </div>
                        <div className={cx("select-message-subtitle")}>
                            <span>
                                Choose from your existing conversations, start a
                                new one, or just keep swimming.
                            </span>
                        </div>
                        <Button
                            primary
                            large
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsOpen(true);
                            }}
                        >
                            New message
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default MessageInbox;
