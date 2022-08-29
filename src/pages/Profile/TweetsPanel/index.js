/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import { onSnapshot, collection, query, orderBy } from "firebase/firestore";
import { db } from "~/firebase/firebase";

import Post from "~/layouts/Component/Post";

import styles from "./TweetsPanel.module.scss";
import { Link } from "react-router-dom";
import FollowLists from "./FollowLists";
import { followList } from "~/utils/constant";

const cx = classNames.bind(styles);

function TweetsPanel() {
    const [posts, setPosts] = useState([]);

    useEffect(
        () =>
            onSnapshot(
                query(collection(db, "posts"), orderBy("timestamp", "desc")),
                (snapshot) => {
                    setPosts(snapshot.docs);
                }
            ),
        [db]
    );
    return (
        <div className={cx("tweets-panel")}>
            {posts &&
                posts.map((post, index) => (
                    <Post key={index} id={index} post={post.data()} />
                ))}
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

export default TweetsPanel;
