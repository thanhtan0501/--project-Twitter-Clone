/* eslint-disable no-unused-vars */
import classNames from "classnames/bind";
import { Fragment } from "react";
import { useRecoilState } from "recoil";
import { Dialog, Transition } from "@headlessui/react";

// import { useRouter } from "react-route-dom";
import { chooseItemState, modalState } from "~/atoms/index";
import { CloseIcon } from "../../../components/Icons";
import styles from "./Modal.module.scss";
import Button from "../../../components/Button";
import SearchBox from "~/components/SeachBox";

const cx = classNames.bind(styles);

function Modal() {
    const [isOpen, setIsOpen] = useRecoilState(modalState);
    const [isChoose, setIsChoose] = useRecoilState(chooseItemState);

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
                                <div className={cx("title")}>
                                    <span>New message</span>
                                </div>
                                <div className={cx("next-btn")}>
                                    <Button
                                        primary
                                        small
                                        disabled={!isChoose}
                                        // onClick={sendPost}
                                    >
                                        Next
                                    </Button>
                                </div>
                            </div>
                            <div className={cx("content")}>
                                <div className={cx("wrapper")}>
                                    <SearchBox
                                        className={cx("search-input")}
                                        tagsResult={true}
                                    />
                                </div>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    );
}

// const TagsInput = (props) => {
//     const [tags, setTags] = React.useState(props.tags);
//     const removeTags = (indexToRemove) => {
//         setTags([...tags.filter((_, index) => index !== indexToRemove)]);
//     };
//     const addTags = (event) => {
//         if (event.target.value !== "") {
//             setTags([...tags, event.target.value]);
//             props.selectedTags([...tags, event.target.value]);
//             event.target.value = "";
//         }
//     };
//     return (
//         <div className="tags-input">
//             <ul id="tags">
//                 {tags.map((tag, index) => (
//                     <li key={index} className="tag">
//                         <span className="tag-title">{tag}</span>
//                         <span
//                             className="tag-close-icon"
//                             onClick={() => removeTags(index)}
//                         >
//                             x
//                         </span>
//                     </li>
//                 ))}
//             </ul>
//             <input
//                 type="text"
//                 onKeyUp={(event) =>
//                     event.key === "Enter" ? addTags(event) : null
//                 }
//                 placeholder="Press enter to add tags"
//             />
//         </div>
//     );
// };

// const App = () => {
//     const selectedTags = (tags) => {
//         console.log(tags);
//     };
//     return (
//         <div className="App">
//             <TagsInput
//                 selectedTags={selectedTags}
//                 tags={["Nodejs", "MongoDB"]}
//             />
//         </div>
//     );
// };

// ReactDOM.render(<App />, document.getElementById("root"));

export default Modal;
