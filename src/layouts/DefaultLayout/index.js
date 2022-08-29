import classNames from "classnames/bind";
import PropTypes from "prop-types";
import Modal from "~/layouts/DefaultLayout/Modal";
import { trendingResults, followResults } from "~/utils/constant";
import Sidebar from "../Component/Sidebar";
import Widgets from "../Component/Widgets";

import styles from "./DefaultLayout.module.scss";
const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx("wrapper")}>
            <Sidebar />
            <div className={cx("container")}>
                <div className={cx("content")}>{children}</div>
                <Widgets
                    trendingResults={trendingResults}
                    followResults={followResults}
                />
            </div>
            <Modal />
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
