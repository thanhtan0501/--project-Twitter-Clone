/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import classNames from "classnames/bind";
import { Tab } from "@headlessui/react";

import styles from "./Profile.module.scss";
import { Link, useNavigate } from "react-router-dom";

import Image from "~/components/Image";
import Button from "~/components/Button";
import { BackIcon, LocationIcon, TimeStampIcon } from "~/components/Icons";
import { useRecoilState } from "recoil";
import { modalState, imageState } from "~/atoms";
import ImageModal from "./ImageModal";

import TweetsPanel from "./TweetsPanel";
import TweetReplyPanel from "./TweetReplyPanel";
import MediaPanel from "./MediaPanel";
import LikePanel from "./LikePanel";
import { nFormatter } from "~/utils/nFormatter";

const cx = classNames.bind(styles);
const navbarProfile = [
    {
        id: 1,
        title: "Tweets",
        panels: <TweetsPanel />,
    },
    {
        id: 2,
        title: "Tweets & replies",
        panels: <TweetReplyPanel />,
    },
    {
        id: 3,
        title: "Media",
        panels: <MediaPanel />,
    },
    {
        id: 4,
        title: "Likes",
        panels: <LikePanel />,
    },
];
function Profile() {
    const info = {
        name: "Thành Tấn",
        username: "ThanhTan0501",
        count_tweet: 0,
        background_image:
            "https://freenice.net/wp-content/uploads/2021/10/Background-Anime-dep-den-u-me-khong-cuong-duoc.jpg",
        avatar_image:
            "https://i.pinimg.com/474x/44/15/ba/4415ba5df0f4bfcee5893d6c441577e0.jpg",
        location: "Vietnam",
        time_stamp_create_user: " July 2018", // actually 'time_stamp_create_user' have a different data type
        following_number: 5,
        followed_number: 1,
    };
    const [image, setImage] = useRecoilState(imageState);
    const [isOpen, setIsOpen] = useRecoilState(modalState);
    const navOptionRef = useRef();

    let navigate = useNavigate();

    return (
        <div className={cx("profile")}>
            {/* header */}
            <div className={cx("header")}>
                <div className={cx("header-title")}>
                    <div
                        className={cx("icon", "back-icon")}
                        onClick={() => navigate(-1)}
                    >
                        <BackIcon />
                    </div>
                    <div className={cx("title")}>
                        <h2>{info.name}</h2>
                        <div className={cx("follow-username")}>
                            <span>{info.count_tweet} Tweets</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* container */}
            <div className={cx("container")}>
                <div className={cx("box-container")}>
                    <div className={cx("box-profile")}>
                        <div className={cx("background-image")}>
                            <Image
                                src={info.background_image}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setImage(info.background_image);
                                    setIsOpen(true);
                                }}
                            />
                        </div>

                        <div className={cx("info-profile")}>
                            <div className={cx("info-profile-header")}>
                                <div className={cx("info-profile-avatar")}>
                                    <Image
                                        src={info.avatar_image}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setImage(info.avatar_image);
                                            setIsOpen(true);
                                        }}
                                    />
                                </div>
                                <div className={cx("info-profile-edit-btn")}>
                                    <Button outline>Edit profile</Button>
                                </div>
                            </div>
                            <div className={cx("info-profile-content")}>
                                <h2 className={cx("name")}>{info.name}</h2>
                                <span className={cx("username")}>
                                    {"@"}
                                    {info.username}
                                </span>
                            </div>
                            <div className={cx("info-profile-location")}>
                                <div className={cx("profile-location")}>
                                    <LocationIcon />
                                    <span>{info.location}</span>
                                </div>
                                <div
                                    className={cx(
                                        "profile-location",
                                        "profile-time-stamp"
                                    )}
                                >
                                    <TimeStampIcon />
                                    <span>
                                        {"Joined "}
                                        {info.time_stamp_create_user}
                                    </span>
                                </div>
                            </div>
                            <div className={cx("info-profile-follow")}>
                                <Link
                                    to={"/"}
                                    className={cx("follow", "following_num")}
                                >
                                    <h4>
                                        {nFormatter(info.following_number)}{" "}
                                    </h4>
                                    <span> Following</span>
                                </Link>
                                <Link
                                    to={"/"}
                                    className={cx("follow", "followed_num")}
                                >
                                    <h4>{nFormatter(info.followed_number)}</h4>
                                    <span>Followed</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className={cx("box-navbar")}>
                        <Tab.Group>
                            <Tab.List className={cx("nav-header")}>
                                {navbarProfile.map((nav) => (
                                    <div
                                        key={nav.id}
                                        className={cx("option-text")}
                                    >
                                        <Tab
                                            className={(nav) =>
                                                cx("nav-option", {
                                                    active: nav.selected,
                                                })
                                            }
                                        >
                                            <span>{nav.title}</span>
                                        </Tab>
                                    </div>
                                ))}
                            </Tab.List>
                            <Tab.Panels className={cx("nav-panels")}>
                                {navbarProfile.map((nav) => (
                                    <Tab.Panel key={nav.id}>
                                        {nav.panels}
                                    </Tab.Panel>
                                ))}
                            </Tab.Panels>
                        </Tab.Group>
                    </div>
                </div>
            </div>
            <ImageModal />
        </div>
    );
}

export default Profile;
