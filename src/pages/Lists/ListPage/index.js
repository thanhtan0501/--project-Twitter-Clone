import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";

import styles from "./ListPage.module.scss";
import { Link, useNavigate } from "react-router-dom";

import Image from "~/components/Image";
import Button from "~/components/Button";
import { BackIcon, EllipsisIcon, ShareIcon } from "~/components/Icons";
import config from "~/config";
// import { listPageData } from "~/atoms";
// import { useRecoilState } from "recoil";
import { discoverList } from "~/utils/constant";
import { nFormatter } from "~/utils/nFormatter";

import { onSnapshot, collection, query, orderBy } from "firebase/firestore";
import { db } from "~/firebase/firebase";
import Post from "~/layouts/Component/Post";

const cx = classNames.bind(styles);

function ListPage() {
    const [isFollow, setIsFollow] = useState(false);
    // const [pageData, setPageData] = useRecoilState(listPageData);
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
    const data = discoverList[0];

    let navigate = useNavigate();

    return (
        <div className={cx("list-page")}>
            <div className={cx("list-page-header")}>
                <div className={cx("list-page-header-title")}>
                    <div
                        className={cx("icon", "back-icon")}
                        onClick={() => navigate(-1)}
                    >
                        <BackIcon />
                    </div>
                    <div className={cx("title")}>
                        <h2>{data.title}</h2>
                        <div className={cx("follow-username")}>
                            <span>
                                {"@"}
                                {data.username}
                            </span>
                        </div>
                    </div>
                </div>
                <div className={cx("icons-btn")}>
                    <div
                        className={cx("icon")}
                        // onClick={(e) => {
                        //     e.stopPropagation();
                        //     setIsOpen(true);
                        // }}
                    >
                        <ShareIcon />
                    </div>
                    <div className={cx("icon")}>
                        <EllipsisIcon />
                    </div>
                </div>
            </div>

            <div className={cx("list-page-container")}>
                <div className={cx("list-page-info")}>
                    <div className={cx("list-page-background")}>
                        <Image src={data.image} />
                    </div>
                    <div className={cx("list-page-info-box")}>
                        <div className={cx("list-page-info-title")}>
                            <h2>{data.title}</h2>
                        </div>
                        <div className={cx("list-page-info-name")}>
                            <Link
                                to={config.routes.profile}
                                className={cx("author-info")}
                            >
                                {data.authorAvatar && (
                                    <Image
                                        src={data.authorAvatar}
                                        className={cx("author-avatar")}
                                    />
                                )}

                                {data.authorName && <h4>{data.authorName}</h4>}
                                <span>
                                    {"@"}
                                    {data.username}
                                </span>
                            </Link>
                        </div>
                        <div className={cx("list-page-info-follow")}>
                            <div className={cx("follow", "following_num")}>
                                <h4>{nFormatter(data.member)} </h4>
                                <span>Members</span>
                            </div>
                            <div className={cx("follow", "followed_num")}>
                                <h4>{nFormatter(data.follower)}</h4>
                                <span>Followers</span>
                            </div>
                        </div>
                        <div className={cx("list-page-follow-btn")}>
                            {isFollow ? (
                                <Button
                                    outline
                                    small
                                    className={cx("following-btn")}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        e.preventDefault();
                                        setIsFollow(false);
                                    }}
                                >
                                    Following
                                </Button>
                            ) : (
                                <Button
                                    small
                                    className={cx("follow-btn")}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        e.preventDefault();
                                        setIsFollow(true);
                                    }}
                                >
                                    Follow
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
                {posts &&
                    posts.map((post, index) => (
                        <Post key={index} id={index} post={post.data()} />
                    ))}
            </div>
        </div>
    );
}

export default ListPage;
