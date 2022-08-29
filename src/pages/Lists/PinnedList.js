/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import classNames from "classnames/bind";

import styles from "./Lists.module.scss";
import { Link } from "react-router-dom";

import Image from "~/components/Image";
import Button from "~/components/Button";

import config from "~/config";
import { collection, deleteDoc, doc, setDoc } from "firebase/firestore";
import { db } from "~/firebase/firebase";
import { followedState, followIdState, listPageData } from "~/atoms";
import { useRecoilState } from "recoil";
const cx = classNames.bind(styles);

function PinnedList({ index, pin }) {
    const [followed, setFollowed] = useRecoilState(followedState);
    const [followId, setFollowId] = useRecoilState(followIdState);
    const [pageData, setPageData] = useRecoilState(listPageData);

    const [isFollow, setIsFollow] = useState(false);

    const submitFollow = async (
        id,
        title,
        username,
        image,
        authorName,
        authorAvatar
    ) => {
        const followRef = collection(db, "posts");
        if (isFollow === false) {
            await setDoc(doc(followRef, `pinned-${id}`), {
                id: id,
                title: title,
                image: image,
                authorName: authorName,
                authorAvatar: authorAvatar,
                username: username,
            });
        } else {
            await deleteDoc(doc(followRef, `pinned-${id}`));
        }
        setIsFollow(!isFollow);
    };

    return (
        <div className={cx("discover-container")}>
            <Link
                to={config.routes.list_page}
                className={cx("discover-container-box")}
                onClick={() => setPageData(pin)}
            >
                <div className={cx("discover-left-box")}>
                    <div className={cx("discover-box-image")}>
                        <Image src={pin.image} className={cx("box-image")} />
                    </div>
                    <div className={cx("discover-box-title")}>
                        <div className={cx("title")}>
                            <span>{pin.title}</span>
                        </div>
                        <Link
                            to={config.routes.profile}
                            className={cx("author-info")}
                        >
                            {pin.authorAvatar && (
                                <Image
                                    src={pin.authorAvatar}
                                    className={cx("author-avatar")}
                                />
                            )}

                            {pin.authorName && <h4>{pin.authorName}</h4>}
                            <span>
                                {"@"}
                                {pin.username}
                            </span>
                        </Link>

                        {pin.description && (
                            <div className={cx("description")}>
                                <span>{pin.description}</span>
                            </div>
                        )}
                    </div>
                </div>
            </Link>
            <div className={cx("discover-right-box")}>
                {isFollow ? (
                    <Button
                        outline
                        small
                        className={cx("following-btn")}
                        onClick={(e) => {
                            e.stopPropagation();
                            submitFollow(
                                index,
                                pin.title,
                                pin.username,
                                pin.image,
                                pin.authorName,
                                pin.authorAvatar
                            );
                            setFollowed(false);
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
                            submitFollow(
                                index,
                                pin.title,
                                pin.username,
                                pin.image,
                                pin.authorName,
                                pin.authorAvatar
                            );
                            setFollowId(index);
                            setFollowed(true);
                        }}
                    >
                        Follow
                    </Button>
                )}
            </div>
        </div>
    );
}

export default PinnedList;
