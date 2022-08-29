import React, { useState } from "react";
import classNames from "classnames/bind";

import styles from "./TweetsPanel.module.scss";
import { Link } from "react-router-dom";

import Image from "~/components/Image";
import Button from "~/components/Button";

import config from "~/config";
const cx = classNames.bind(styles);

function FollowLists({ index, pin }) {
    const [isFollow, setIsFollow] = useState(false);

    return (
        <div className={cx("follow-lists-container")}>
            <Link
                to={config.routes.profile}
                className={cx("follow-lists-container-box")}
            >
                <div className={cx("follow-lists-box-image")}>
                    <Image src={pin.image} className={cx("box-image")} />
                </div>
                <div className={cx("follow-lists-right-box")}>
                    <div className={cx("follow-lists-box-title")}>
                        <div className={cx("title")}>
                            <h4>{pin.name}</h4>
                            <span>
                                {"@"}
                                {pin.username}
                            </span>
                        </div>
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
                    {pin.description && (
                        <div className={cx("description")}>
                            <span>{pin.description}</span>
                        </div>
                    )}
                </div>
            </Link>
        </div>
    );
}

export default FollowLists;
