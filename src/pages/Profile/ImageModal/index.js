/* eslint-disable no-unused-vars */
import classNames from "classnames/bind";
import { Fragment } from "react";
import { useRecoilState } from "recoil";
import { Dialog, Transition } from "@headlessui/react";

// import Moment from "react-moment";
import { modalState, imageState } from "~/atoms/index";
import { CloseIcon } from "../../../components/Icons";
import styles from "./ImageModal.module.scss";
import Image from "../../../components/Image";

const cx = classNames.bind(styles);

function ImageModal() {
    const [isOpen, setIsOpen] = useRecoilState(modalState);
    const [image, setImage] = useRecoilState(imageState);

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
                            <div className={cx("box-image")}>
                                <Image src={image} />
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    );
}

export default ImageModal;
