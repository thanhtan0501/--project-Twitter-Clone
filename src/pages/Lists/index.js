/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";

import styles from "./Lists.module.scss";
import { Link, useNavigate } from "react-router-dom";

import Image from "~/components/Image";
import Button from "~/components/Button";
import { followedState, followIdState, pinnedlists } from "~/atoms";
import { BackIcon, EllipsisIcon, NewListIcon } from "~/components/Icons";
import config from "~/config";
import { db } from "~/firebase/firebase";
import PinnedList from "./PinnedList";
import { useRecoilState } from "recoil";
import { doc, getDoc } from "firebase/firestore";
import YourList from "./YourList";
import { discoverList } from "~/utils/constant";
const cx = classNames.bind(styles);

function Lists() {
    const [followed, setFollowed] = useRecoilState(followedState);
    const [followId, setFollowId] = useRecoilState(followIdState);
    const [pinnedLists, setPinnedLists] = useRecoilState(pinnedlists);

    // const [isFollow, setIsFollow] = useState(false);
    const [yourLists, setYourLists] = useState([]);

    let navigate = useNavigate();

    useEffect(() => {
        if (followed) {
            console.log("Đang follow: ", followed, followId);

            const text = async () => {
                const followRef = doc(db, "posts", `pinned-${followId}`);
                const docData = await getDoc(followRef);
                setYourLists((prev) => [...prev, docData.data()]);
            };
            text();
        } else {
            const text = async () => {
                if (yourLists) {
                    const temp = yourLists.some(
                        (yourList) => yourList.id === followId
                    );
                    if (temp === true) {
                        console.log("Đang unfollow: ", temp, followId);
                        const newLists = await yourLists.filter(
                            (list) => list.id !== followId
                        );
                        setYourLists(newLists);
                    }
                }
            };
            text();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [followed, followId]);
    console.log(yourLists);

    return (
        <div className={cx("list")}>
            <div className={cx("header")}>
                <div className={cx("header-title")}>
                    <div
                        className={cx("icon", "back-icon")}
                        onClick={() => navigate(-1)}
                    >
                        <BackIcon />
                    </div>
                    <div className={cx("title")}>
                        <h2>Lists</h2>
                        <div className={cx("follow-username")}>
                            <span>
                                {"@"}
                                ThanhTan0501
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
                        <NewListIcon />
                    </div>
                    <div className={cx("icon")}>
                        <EllipsisIcon />
                    </div>
                </div>
            </div>

            <div className={cx("pinned-lists")}>
                <div className={cx("pinned-lists-header")}>
                    <div className={cx("pinned-lists-header-title")}>
                        <h4>Pinned Lists</h4>
                    </div>
                    <div className={cx("pinned-lists-header-edit-btn")}>
                        {pinnedLists.length > 0 && (
                            <Button outline small>
                                Edit
                            </Button>
                        )}
                    </div>
                </div>

                {/* Pinned Lists */}
                <div className={cx("pinned-lists-container")}>
                    {/* {-1 > 0 ? ( */}
                    {pinnedLists.length > 0 ? (
                        pinnedLists.map((pin, index) => (
                            <Link
                                to={config.routes.home}
                                key={index}
                                className={cx("pinned-container")}
                            >
                                <div className={cx("pinned-container-box")}>
                                    <div className={cx("pinned-box-image")}>
                                        <Image
                                            src={pin.image}
                                            className={cx("box-image")}
                                        />
                                    </div>
                                    <div className={cx("pinned-box-title")}>
                                        <span>{pin.title}</span>
                                    </div>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <div className={cx("no-item")}>
                            <span>No item</span>
                        </div>
                    )}
                </div>
            </div>

            {/* Discover new Lists */}
            <div className={cx("discover-lists")}>
                <div className={cx("discover-lists-header")}>
                    <div className={cx("discover-lists-header-title")}>
                        <h4>Discover new Lists</h4>
                    </div>
                </div>
                <div className={cx("discover-list-container")}>
                    {discoverList.length > 0 ? (
                        discoverList.map((pin, index) => (
                            <PinnedList key={index} index={index} pin={pin} />
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

            {/* Your Lists */}
            <div className={cx("your-lists")}>
                <div className={cx("discover-lists-header")}>
                    <div className={cx("discover-lists-header-title")}>
                        <h4>Your Lists</h4>
                    </div>
                </div>
                <div className={cx("discover-list-container")}>
                    {yourLists.length > 0 ? (
                        yourLists.map((pin, index) => (
                            <YourList key={index} index={index} pin={pin} />
                        ))
                    ) : (
                        <div className={cx("no-item")}>
                            <span>No item</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Lists;
