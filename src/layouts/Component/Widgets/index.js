/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// import PropTypes from "prop-types";
import classNames from "classnames/bind";

import styles from "./Widget.module.scss";
import { EllipsisIcon, StickIcon } from "~/components/Icons";
import Trending from "~/components/Trending";
import { Link } from "react-router-dom";
import Image from "~/components/Image";
import Button from "~/components/Button";
import SearchBox from "~/components/SeachBox";
// import followResultElement from "./followResultElement";

// import Search from "./Search";

const cx = classNames.bind(styles);

function Widgets({ mightLikeResults, trendingResults, followResults }) {
    return (
        <div className={cx("widget")}>
            <SearchBox />

            {mightLikeResults && (
                <div className={cx("widget-follow")}>
                    <h2 className={cx("follow-title")}>You might like</h2>
                    {mightLikeResults.map((result, index) => (
                        <Link key={index} to={`/${result.username}`}>
                            <div className={cx("box-follower")}>
                                <Image
                                    src={result.userImg}
                                    className={cx("avatar")}
                                />
                                <div className={cx("follow-content")}>
                                    <div className={cx("content")}>
                                        <div className={cx("follow-name")}>
                                            <h4 className={cx("name")}>
                                                {result.name}
                                            </h4>
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
                    ))}
                    <button className={cx("more")}>
                        <Link to="/">Show more</Link>
                    </button>
                </div>
            )}

            {trendingResults && (
                <div className={cx("widget-trending")}>
                    <h2 className={cx("trending-title")}>Trends for you</h2>
                    {trendingResults.map((result, index) => (
                        <Trending key={index} result={result} />
                    ))}
                    <button className={cx("more")}>
                        <Link to="/">Show more</Link>
                    </button>
                </div>
            )}

            {followResults && (
                <div className={cx("widget-follow")}>
                    <h2 className={cx("follow-title")}>Who to follow</h2>
                    {followResults.map((result, index) => (
                        <Link key={index} to={`/${result.username}`}>
                            <div className={cx("box-follower")}>
                                <Image
                                    src={result.userImg}
                                    className={cx("avatar")}
                                />
                                <div className={cx("follow-content")}>
                                    <div className={cx("content")}>
                                        <div className={cx("follow-name")}>
                                            <h4 className={cx("name")}>
                                                {result.name}
                                            </h4>
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
                    ))}
                    <button className={cx("more")}>
                        <Link to="/">Show more</Link>
                    </button>
                </div>
            )}

            <div className={cx("widget-footer")}>
                <a href="#" className={cx("footer-link")} target="_blank">
                    <span>Terms of Service</span>
                </a>
                <a href="#" className={cx("footer-link")} target="_blank">
                    <span>Privacy Policy</span>
                </a>
                <a href="#" className={cx("footer-link")} target="_blank">
                    <span>Cookie Policy</span>
                </a>
                <a href="#" className={cx("footer-link")} target="_blank">
                    <span>Accessibility</span>
                </a>
                <a href="#" className={cx("footer-link")} target="_blank">
                    <span>Ads info</span>
                </a>
                <div className={cx("footer-link", "footer-more")}>
                    <span>More</span>
                    <EllipsisIcon />
                </div>
                <div className={cx("footer-link", "footer-copy")}>
                    <span>© 2022 Twitter, Inc.</span>
                </div>
            </div>
        </div>
    );
}

export default Widgets;
