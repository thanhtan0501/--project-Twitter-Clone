import React from "react";
import classNames from "classnames/bind";

import styles from "../TweetsPanel/TweetsPanel.module.scss";
import { Link } from "react-router-dom";
import FollowLists from "../TweetsPanel/FollowLists";
import { followList } from "~/utils/constant";

const cx = classNames.bind(styles);

function TweetReplyPanel() {
    return (
        <div className={cx("tweets-panel")}>
            <div className={cx("tweets-panel-lists")}>
                <div className={cx("tweets-panel-lists-header")}>
                    <div className={cx("tweets-panel-lists-header-title")}>
                        <h4>Who to follow</h4>
                    </div>
                </div>
                <div className={cx("tweets-panel-list-container")}>
                    {followList.length > 0 ? (
                        followList.map((pin, index) => (
                            <FollowLists key={index} index={index} pin={pin} />
                        ))
                    ) : (
                        <div className={cx("no-item")}>
                            <span>No item</span>
                        </div>
                    )}
                </div>

                <Link to="/" className={cx("more")}>
                    <span>Show more</span>
                </Link>
            </div>
            <div className={cx("tweets-panel-lists")}>
                <div className={cx("tweets-panel-lists-header")}>
                    <div className={cx("tweets-panel-lists-header-title")}>
                        <h4>Topics to follow</h4>
                        <span>
                            Tweets about the Topics you follow show up in your
                            Home timeline
                        </span>
                    </div>
                </div>
                <div className={cx("tweets-panel-list-container")}>
                    {/* {followList.length > 0 ? (
                        followList.map((pin, index) => (
                            <FollowLists key={index} index={index} pin={pin} />
                        ))
                    ) : ( */}
                    <div className={cx("no-item")}>
                        <span>No item</span>
                    </div>
                    {/* )} */}
                </div>

                <Link to="/" className={cx("more")}>
                    <span>More Topics</span>
                </Link>
            </div>
        </div>
    );
}

export default TweetReplyPanel;
