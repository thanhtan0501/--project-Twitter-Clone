import React from "react";
import classNames from "classnames/bind";
import { GoogleLogin /*googleLogout*/ } from "@react-oauth/google";

import styles from "./Login.module.scss";
import { CloseIcon } from "../Icons";
import images from "~/assets/images";
import { createOrGetUser } from "~/utils/service";

const cx = classNames.bind(styles);

function Login() {
    return (
        <div className={cx("login-container")}>
            <div className={cx("login-box")}>
                <div className={cx("login-header")}>
                    <div
                        className={cx("close-icon")}
                        // onClick={}
                    >
                        <div className={cx("icon")}>
                            <CloseIcon />
                        </div>
                    </div>
                    <div className={cx("logo")}>
                        <img src={images.logo} alt="Twitter" />
                    </div>
                    <div className={cx("empty-box")}></div>
                </div>
                <div className={cx("login-footer")}>
                    <div className={cx("login-footer-container")}>
                        <div className={cx("title")}>Đăng nhập vào Twitter</div>
                        <div className={cx("login-with")}>
                            <div className={cx("google-login")}>
                                <GoogleLogin
                                    onSuccess={(res) => createOrGetUser(res)}
                                    onError={(res) => console.log(res)}
                                    width="300px"
                                    text="continue_with"
                                    shape="pill"
                                    logo_alignment="center"
                                />
                            </div>
                        </div>
                        <div className={cx("or")}>
                            <div className={cx("dash1")}></div>
                            <div className={cx("letter")}>
                                <span>Hoặc</span>
                            </div>
                            <div className={cx("dash2")}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
