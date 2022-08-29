/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { onSnapshot, collection, query, orderBy } from "firebase/firestore";
import classNames from "classnames/bind";
import { db } from "~/firebase/firebase";

import styles from "./LikePanel.module.scss";
import Post from "~/layouts/Component/Post";
const cx = classNames.bind(styles);

function LikePanel() {
    const [posts, setPosts] = useState([]);

    useEffect(
        () =>
            onSnapshot(
                query(collection(db, "posts"), orderBy("timestamp", "desc")),
                (snapshot) => {
                    setPosts(snapshot.docs);
                }
            ),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [db]
    );
    return (
        <div>
            {posts &&
                posts.map((post, index) => (
                    <Post key={index} id={index} post={post.data()} />
                ))}
        </div>
    );
}

export default LikePanel;
