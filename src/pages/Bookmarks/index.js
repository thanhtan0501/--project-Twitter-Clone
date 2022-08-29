import React from "react";
import classNames from "classnames/bind";

import styles from "./Bookmarks.module.scss";
import Image from "~/components/Image";
const cx = classNames.bind(styles);
function Bookmarks() {
    return (
        <div className={cx("feed")}>
            {/* Header */}
            <div className={cx("header")}>
                <div className={cx("header-title")}>
                    <h2>Bookmarks</h2>
                    <div className={cx("follow-username")}>
                        <span>
                            {"@"}
                            ThanhTan0501
                            {/* {result.username} */}
                        </span>
                    </div>
                </div>
            </div>

            <div className={cx("container")}>
                <div className={cx("bookmarks-tweet")}>
                    <div className={cx("bookmark-image")}>
                        <Image src="https://abs.twimg.com/sticky/illustrations/empty-states/book-in-bird-cage-800x400.v1.png" />
                    </div>
                    <div className={cx("bookmark-title")}>
                        <div className={cx("title")}>
                            <h1>Save Tweets for later</h1>
                        </div>
                        <div className={cx("subtitle")}>
                            <span>
                                Don't let the good ones fly away! Bookmark
                                Tweets to easily find them again in the future.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Bookmarks;
