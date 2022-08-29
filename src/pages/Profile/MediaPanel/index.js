import React from "react";
import classNames from "classnames/bind";

import styles from "./MediaPanel.module.scss";
import Image from "~/components/Image";

const cx = classNames.bind(styles);

function MediaPanel() {
    return (
        <div className={cx("media-panel")}>
            <div className={cx("media-panel-tweet")}>
                <div className={cx("media-panel-image")}>
                    <Image src="https://abs.twimg.com/sticky/illustrations/empty-states/masked-doll-head-with-camera-800x400.v1.png" />
                </div>
                <div className={cx("media-panel-title")}>
                    <div className={cx("title")}>
                        <h1>Lights, camera … attachments!</h1>
                    </div>
                    <div className={cx("subtitle")}>
                        <span>
                            When you send Tweets with photos or videos in them,
                            it will show up here.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MediaPanel;
