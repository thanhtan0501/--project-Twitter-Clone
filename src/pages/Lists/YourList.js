import React, { useState } from "react";
import classNames from "classnames/bind";

import styles from "./Lists.module.scss";
import { Link } from "react-router-dom";

import Image from "~/components/Image";

import config from "~/config";
import { pinnedlists } from "~/atoms";
import { useRecoilState } from "recoil";

import { PinnedActiveIcon, PinnedIcon } from "~/components/Icons";
const cx = classNames.bind(styles);

function YourList({ index, pin }) {
    const [pinned, setPinned] = useState(false);
    const [pinnedLists, setPinnedLists] = useRecoilState(pinnedlists);

    const pinnedPost = (e) => {
        e.stopPropagation();
        if (!pinned) {
            setPinnedLists((prev) => {
                const newPinnedList = [...prev, pin];
                return newPinnedList;
            });
        } else {
            setPinnedLists((prev) => {
                const newPinnedList = prev.filter((list, i) => i !== index);
                return newPinnedList;
            });
        }
        console.log(pinnedLists);
        setPinned(!pinned);
    };
    return (
        <>
            <div
                key={index}
                className={cx("discover-container", "your-list-container")}
            >
                <Link
                    to={config.routes.list_page}
                    className={cx("discover-container-box")}
                >
                    <div className={cx("discover-left-box")}>
                        <div className={cx("discover-box-image")}>
                            <Image
                                src={pin.image}
                                className={cx("box-image")}
                            />
                        </div>
                        <div className={cx("discover-box-title")}>
                            <div className={cx("title")}>
                                <span>{pin.title}</span>
                            </div>
                            <Link
                                to={config.routes.profile}
                                className={cx("author-info")}
                            >
                                <Image
                                    src={pin.authorAvatar}
                                    className={cx("author-avatar")}
                                />

                                <h4>{pin.authorName}</h4>
                                <span>
                                    {"@"}
                                    {pin.username}
                                </span>
                            </Link>
                        </div>
                    </div>
                </Link>
                <div className={cx("discover-right-box")} onClick={pinnedPost}>
                    <div className={cx("action-btn")}>
                        {pinned ? <PinnedActiveIcon /> : <PinnedIcon />}
                    </div>
                </div>
            </div>
        </>
    );
}

export default YourList;
