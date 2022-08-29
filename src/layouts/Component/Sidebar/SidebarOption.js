import PropTypes from "prop-types";
import classNames from "classnames/bind";
import { NavLink } from "react-router-dom";

import styles from "./Sidebar.module.scss";

const cx = classNames.bind(styles);

function SidebarOption({ title, to, icon, activeIcon }) {
    return (
        // NavLink nó có hỗ trợ 1 cái prop là children, ta có thể dùng như sau
        <>
            <NavLink
                className={(nav) =>
                    cx("sidebar_option", { active: nav.isActive })
                }
                to={to}
                children={({ isActive }) => {
                    const iconCurrent = isActive ? activeIcon : icon;
                    return (
                        <div className={cx("sidebar-option")}>
                            {iconCurrent}
                            <span className={cx("title")}>{title}</span>
                        </div>
                    );
                }}
            />
        </>
    );
}

SidebarOption.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node,
    activeIcon: PropTypes.node,
};

export default SidebarOption;
