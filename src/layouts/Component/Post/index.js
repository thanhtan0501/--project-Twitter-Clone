/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import classNames from "classnames/bind";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { db } from "~/firebase/firebase";
import { deleteDoc, doc, setDoc } from "firebase/firestore";

// import Modal from "~/layouts/DefaultLayout/Modal";
import styles from "./Post.module.scss";
import {
    CloseIcon,
    EllipsisIcon,
    LikeActiveIcon,
    LikeIcon,
    ReplyIcon,
    RetweetIcon,
    ShareIcon,
    StickIcon,
    TextIcon,
} from "~/components/Icons";
import config from "~/config";
import Image from "~/components/Image";
import { modalCommentState, postIdState } from "~/atoms";

const cx = classNames.bind(styles);

function Post({ id, post }) {
    post.avatar =
        "https://i.pinimg.com/474x/44/15/ba/4415ba5df0f4bfcee5893d6c441577e0.jpg";
    post.displayName = "Thành Tấn";
    post.username = "ThanhTan0501";
    post.verified = true;

    const [comments, setComments] = useState([]);
    const [likes, setLikes] = useState([]);
    const [liked, setLiked] = useState(false);

    const [postId, setPostId] = useRecoilState(postIdState);
    const [isOpenComment, setIsOpenComment] = useRecoilState(modalCommentState);

    // useEffect(
    //     () =>
    //         onSnapshot(
    //             query(
    //                 collection(db, "posts", id, "comments"),
    //                 orderBy("timestamp", "desc")
    //             ),
    //             (snapshot) => setComments(snapshot.docs)
    //         ),
    //     [db, id]
    // );

    // useEffect(
    //     () =>
    //         onSnapshot(
    //             collection(db, "posts", "like"),
    //             // orderBy("timestamp", "desc")
    //             (snapshot) => {
    //                 // setLikes(snapshot.docs);
    //                 setLikes(snapshot.docs);
    //             }
    //         ),
    //     [db]
    // );
    // console.log(likes.data);

    // useEffect(
    //     () =>
    //         onSnapshot(collection(db, "posts"), (snapshot) =>
    //             setLikes(snapshot.docs)
    //         ),
    //     [db, id]
    // );

    // useEffect(
    //     () => setLiked(likes.findIndex((like) => like.id === id) !== -1),
    //     [likes]
    // );

    const likePost = async () => {
        if (liked === false) {
            await setDoc(doc(db, "posts", `like`), {
                id_post: id,
                username: post.username,
            });
        } else {
            await deleteDoc(doc(db, "posts", `like`));
        }
        setLiked(!liked);
    };

    return (
        <div className={cx("box-post")}>
            <div className={cx("header")}>
                <div className={cx("header-icon")}>
                    <TextIcon />
                </div>
                <div className={cx("header-title")}>
                    <div className={cx("discover-title")}>
                        <Link to="/follow" className={cx("discover-link")}>
                            <span>Wildlife photography</span>
                        </Link>
                    </div>
                    <div className={cx("see-more")}>
                        <div className={cx("space")}>
                            <span>·</span>
                        </div>
                        <Link to={"/follow"} className={cx("see-more-link")}>
                            See more
                        </Link>
                        <div className={cx("dismiss")}>
                            <div className={cx("dismiss-btn")}>
                                <CloseIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx("container")}>
                <div className={cx("avatar")}>
                    <Link to={config.routes.explore}>
                        <Image
                            src={post.avatar}
                            className={cx("user-avatar")}
                            fallback={post.avatar}
                        />
                    </Link>
                </div>
                <div className={cx("content")}>
                    <div className={cx("header-content")}>
                        <div className={cx("header-name")}>
                            <div className={cx("name")}>
                                <Link to={config.routes.explore}>
                                    <span>{post.displayName}</span>
                                </Link>

                                {post.verified && <StickIcon />}
                            </div>
                            <div className={cx("username")}>
                                <Link to={config.routes.explore}>
                                    <span>@{post.username}</span>
                                </Link>
                                <div className={cx("space")}>
                                    <span>·</span>
                                </div>
                                <div className={cx("time")}>
                                    <Link to={config.routes.home}>
                                        <span>
                                            <Moment fromNow>
                                                {post?.timestamp?.toDate()}
                                            </Moment>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className={cx("header-icon-menu")}>
                            <button className={cx("ellipsis-btn")}>
                                <EllipsisIcon />
                            </button>
                        </div>
                    </div>
                    <div className={cx("user-title")}>
                        <div className={cx("title")}>
                            {post.text && (
                                <span className={cx("text")}>{post.text}</span>
                            )}
                        </div>
                        <div className={cx("asset")}>
                            {post.image && (
                                <Image
                                    src={post.image}
                                    art={post.image}
                                    className={cx("post-asset")}
                                />
                            )}
                        </div>
                        <div className={cx("button")}>
                            <div
                                className={cx("action", "reply")}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setPostId(id);
                                    setIsOpenComment(true);
                                }}
                            >
                                <div className={cx("action-btn")}>
                                    <ReplyIcon />
                                </div>
                                <div className={cx("count-action")}>
                                    {comments.length > 0 && (
                                        <span>{comments.length}</span>
                                    )}
                                </div>
                            </div>
                            <div className={cx("action", "retweet")}>
                                <div className={cx("action-btn")}>
                                    <RetweetIcon />
                                </div>
                                <div className={cx("count-action")}>
                                    {/* <span>1</span> */}
                                </div>
                            </div>
                            <div
                                className={cx("action", "like")}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    likePost();
                                }}
                            >
                                <div className={cx("action-btn")}>
                                    {liked ? (
                                        <LikeActiveIcon
                                            className={cx("like-active")}
                                        />
                                    ) : (
                                        <LikeIcon />
                                    )}
                                </div>
                                <div
                                    className={cx(
                                        "count-action",
                                        `${liked && "like-active"}`
                                    )}
                                >
                                    {likes.length > 0 && (
                                        <span>{likes.length}</span>
                                    )}
                                </div>
                            </div>
                            <div className={cx("action", "share")}>
                                <div className={cx("action-btn")}>
                                    <ShareIcon />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Modal /> */}
        </div>
    );
}

export default Post;
