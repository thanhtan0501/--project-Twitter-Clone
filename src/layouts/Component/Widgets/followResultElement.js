import React from "react";
import classNames from "classnames/bind";

import styles from "./Widget.module.scss";
import { StickIcon } from "~/components/Icons";

import { Link } from "react-router-dom";
import Image from "~/components/Image";
import Button from "~/components/Button";

const cx = classNames.bind(styles);

function followResultElement({ result }) {
    return (
        <>
            <Link to={`/${result.username}`}>
                <div className={cx("box-follower")}>
                    <Image src={result.userImg} className={cx("avatar")} />
                    <div className={cx("follow-content")}>
                        <div className={cx("content")}>
                            <div className={cx("follow-name")}>
                                <h4 className={cx("name")}>{result.name}</h4>
                                {result.tick && <StickIcon />}
                            </div>
                            <h5 className={cx("follow-username")}>
                                {"@"}
                                {result.username}
                            </h5>
                        </div>
                        <Button small className={cx("follow-btn")}>
                            Follow
                        </Button>
                    </div>
                </div>
            </Link>
        </>
    );
}

export default followResultElement;
