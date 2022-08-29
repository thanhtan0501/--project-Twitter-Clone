import classNames from "classnames/bind";

import { EllipsisIcon } from "../Icons";
import styles from "./Trending.module.scss";
import { nFormatter } from "~/utils/nFormatter";
// import Image from "../Image";

const cx = classNames.bind(styles);

function Trending({ result }) {
    return (
        <div className={cx("trending")}>
            <div className={cx("trending-content")}>
                <p className={cx("subtitle")}>{result.subtitle}</p>
                <h4 className={cx("title")}>{result.title}</h4>
                {result.count_tweets && (
                    <p className={cx("count-tweets")}>
                        <span>{nFormatter(result.count_tweets)}</span> Tweets
                    </p>
                )}
            </div>
            <div className={cx("ellipsis-btn")}>
                <EllipsisIcon />
            </div>
        </div>
    );
}

export default Trending;
