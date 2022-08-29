/* eslint-disable react-hooks/exhaustive-deps */
// import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import { onSnapshot, collection, query, orderBy } from "firebase/firestore";
import { db } from "~/firebase/firebase";

import styles from "./Home.module.scss";
import { StarIcon } from "~/components/Icons";
import TweetBox from "./TweetBox";
import Post from "../../layouts/Component/Post";
const cx = classNames.bind(styles);
function Home() {
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
        <div className={cx("feed")}>
            {/* Header */}
            {/* <div className={cx("header-title")}> */}
            <div className={cx("header")}>
                <div className={cx("title")}>
                    <h2>Home</h2>
                </div>
                <div className={cx("icon")}>
                    <StarIcon />
                </div>
            </div>
            {/* </div> */}

            {/* TweetBox */}
            <TweetBox />

            {/* Post */}
            {posts &&
                posts.map((post, index) => (
                    <Post key={index} id={index} post={post.data()} />
                ))}
        </div>
    );
}

export default Home;
