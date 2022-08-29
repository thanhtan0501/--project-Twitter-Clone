/* eslint-disable no-unused-vars */
import classNames from "classnames/bind";
import { Fragment, useState } from "react";
import { useRecoilState } from "recoil";
import { Dialog, Transition } from "@headlessui/react";

import Moment from "react-moment";
import { modalCommentState, postIdState } from "~/atoms/index";
import {
    CloseIcon,
    EmojiIcon,
    GifIcon,
    ImageIcon,
    ScheduleIcon,
    StickIcon,
} from "../../../components/Icons";
import styles from "./Modal.module.scss";
import Image from "../../../components/Image";
import Button from "../../../components/Button";

const cx = classNames.bind(styles);

function Modal() {
    const [isOpen, setIsOpen] = useRecoilState(modalCommentState);
    const [postId, setPostId] = useRecoilState(postIdState);
    const [post, setPost] = useState();
    const [comment, setComment] = useState("");
    // const router = useRouter();

    // useEffect(
    //     () =>
    //         onSnapshot(doc(db, "posts", postId), (snapshot) => {
    //             setPost(snapshot.data());
    //         }),
    //     [db]
    // );

    const sendComment = async (e) => {
        // e.preventDefault();
        // await addDoc(collection(db, "posts", "comments"), {
        //     comment: comment,
        //     // username: session.user.name,
        //     // tag: session.user.tag,
        //     // userImg: session.user.image,
        //     timestamp: serverTimestamp(),
        // });
        // setIsOpen(false);
        // setComment("");
        // // router.push(`/${postId}`);
    };
    const closeModal = () => {
        setIsOpen(false);
    };
    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog
                as="div"
                className={cx("modal-dialog")}
                onClose={closeModal}
                open={isOpen}
            >
                <div className={cx("modal-container")}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className={cx("dialog-overlay")} />
                    </Transition.Child>

                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <div className={cx("container")}>
                            <div className={cx("header-container")}>
                                <div
                                    className={cx("close-icon")}
                                    onClick={closeModal}
                                >
                                    <CloseIcon />
                                </div>
                            </div>
                            <div className={cx("content")}>
                                <div className={cx("wrapper")}>
                                    <div className={cx("post-user")}>
                                        <span
                                            className={cx("post-user-info")}
                                        />
                                        <div>
                                            <Image
                                                // src={post?.userImg}
                                                src="https://i.pinimg.com/474x/44/15/ba/4415ba5df0f4bfcee5893d6c441577e0.jpg"
                                                alt=""
                                                className={cx("user-avatar")}
                                            />
                                        </div>
                                        <div>
                                            <div className={cx("info")}>
                                                <div className={cx("name")}>
                                                    <span>
                                                        {/* {post.displayName} */}
                                                        Thanh Tan
                                                    </span>
                                                    {/* {post.verified && <StickIcon />} */}
                                                    {true && <StickIcon />}
                                                </div>
                                                <div className={cx("username")}>
                                                    <span>
                                                        @{/* {post.username} */}
                                                        ThanhTan0501
                                                    </span>

                                                    <div
                                                        className={cx("space")}
                                                    >
                                                        <span>·</span>
                                                    </div>
                                                    <div className={cx("time")}>
                                                        <span>
                                                            <Moment fromNow>
                                                                {/* {post?.timestamp?.toDate()} */}
                                                                11h
                                                            </Moment>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className={cx("text-title")}>
                                                {/* {post?.text} */}Playing
                                                around with my #svelte project
                                                from yesterday. You can now
                                                switch between two models.
                                                #threejsJourney #threejs #webgl
                                                https://pic.twitter.com/f3AFmaKnas
                                            </p>
                                        </div>
                                    </div>

                                    <div className={cx("user-comment")}>
                                        <Image
                                            // src={post?.userImg}
                                            src="https://i.pinimg.com/474x/44/15/ba/4415ba5df0f4bfcee5893d6c441577e0.jpg"
                                            alt=""
                                            className={cx("user-avatar")}
                                        />
                                        <div className={cx("user-input")}>
                                            <textarea
                                                value={comment}
                                                onChange={(e) =>
                                                    setComment(e.target.value)
                                                }
                                                placeholder="Tweet your reply"
                                                rows="2"
                                            />

                                            <div className={cx("toolbar")}>
                                                <div
                                                    className={cx("items-btn")}
                                                >
                                                    <div className={cx("item")}>
                                                        <ImageIcon />
                                                    </div>
                                                    <div className={cx("item")}>
                                                        <GifIcon />
                                                    </div>

                                                    <div className={cx("item")}>
                                                        <EmojiIcon />
                                                    </div>

                                                    <div className={cx("item")}>
                                                        <ScheduleIcon />
                                                    </div>
                                                </div>
                                                <div
                                                    className={cx("reply-btn")}
                                                >
                                                    <Button
                                                        primary
                                                        type="submit"
                                                        onClick={sendComment}
                                                        disabled={
                                                            !comment.trim()
                                                        }
                                                    >
                                                        Reply
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    );
}

export default Modal;
