import classNames from "classnames/bind";
import React from "react";
import { Link } from "react-router-dom";
import { SettingIcon } from "~/components/Icons";
import Image from "~/components/Image";
import SearchBox from "~/components/SeachBox";
import Trending from "~/components/Trending";
import { eventResults, trendingResults } from "~/utils/constant";
import EventHappening from "./EventHappening";

import styles from "./Explore.module.scss";

const cx = classNames.bind(styles);

function Explore() {
    const topEvent = eventResults[0];
    return (
        <div className={cx("explore")}>
            {/* Header */}
            <div className={cx("explore-header")}>
                <div className={cx("explore-search")}>
                    <SearchBox className={cx("search-input")} />
                </div>
                <div className={cx("icon")}>
                    <SettingIcon />
                </div>
            </div>
            {/* container */}
            <div className={cx("explore-container")}>
                <div className={cx("explore-trending-background")}>
                    <div className={cx("background-image")}>
                        <Image
                            src={topEvent.image}
                            // onClick={(e) => {
                            //     e.stopPropagation();
                            //     setImage(info.background_image);
                            //     setIsOpen(true);
                            // }}
                        />
                    </div>
                    <div className={cx("explore-trending-title")}>
                        <div className={cx("info")}>
                            <div className={cx("classification")}>
                                <span>{topEvent.classification}</span>
                            </div>
                            <div className={cx("space")}>
                                <span>·</span>
                            </div>
                            <div className={cx("event_time")}>
                                <span>{topEvent.event_time}</span>
                            </div>
                        </div>
                        <div className={cx("title")}>
                            <h2>{topEvent.title}</h2>
                        </div>
                    </div>
                </div>
                {trendingResults && (
                    <div className={cx("explore-trending-content")}>
                        <h2 className={cx("trending-title")}>Trends for you</h2>
                        {trendingResults.map((result, index) => (
                            <Trending key={index} result={result} />
                        ))}
                        <button className={cx("more")}>
                            <Link to="/">Show more</Link>
                        </button>
                    </div>
                )}
                {eventResults && (
                    <div className={cx("explore-event-happening")}>
                        <h2 className={cx("trending-title")}>
                            What’s happening
                        </h2>
                        {eventResults.map((result, index) => (
                            <EventHappening key={index} result={result} />
                        ))}
                        <button className={cx("more")}>
                            <Link to="/">Show more</Link>
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Explore;
