import classNames from "classnames/bind";

import styles from "./EventHappening.module.scss";
import Image from "~/components/Image";

const cx = classNames.bind(styles);

function EventHappening({ result }) {
    return (
        <div className={cx("event-happening")}>
            <div className={cx("event-happening-content")}>
                <div className={cx("info")}>
                    <div className={cx("classification")}>
                        <span>{result.classification}</span>
                    </div>
                    <div className={cx("space")}>
                        <span>·</span>
                    </div>
                    <div className={cx("event_time")}>
                        <span>{result.event_time}</span>
                    </div>
                </div>
                <div className={cx("title")}>
                    <span>{result.title}</span>
                </div>
            </div>
            <div className={cx("event-happening-background")}>
                <Image src={result.image} />
            </div>
        </div>
    );
}

export default EventHappening;
