import React, { useState, useRef } from "react";
import classNames from "classnames/bind";
// import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import {
    addDoc,
    collection,
    doc,
    serverTimestamp,
    updateDoc,
} from "@firebase/firestore";
import { getDownloadURL, ref, uploadString } from "@firebase/storage";
import { db, storage } from "~/firebase/firebase";

import styles from "./TweetBox.module.scss";
import { Link } from "react-router-dom";
import config from "~/config";
import Image from "~/components/Image";
import Button from "~/components/Button";
import {
    CloseIcon,
    EmojiIcon,
    GifIcon,
    ImageIcon,
    LocationIcon,
    PollIcon,
    ScheduleIcon,
} from "~/components/Icons";

const cx = classNames.bind(styles);

function TweetBox() {
    const [input, setInput] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const [showEmoji, setShowEmoji] = useState(false);
    const [loading, setLoading] = useState(false);
    const filePickerRef = useRef(null);

    const sendPost = async () => {
        if (loading) return;
        setLoading(true);

        const docRef = await addDoc(collection(db, "posts"), {
            // id:user.uid,
            // username:user.name,
            // userImg:user.image,
            // tag:user.tag,
            text: input,
            timestamp: serverTimestamp(),
        });
        const imageRef = ref(storage, `posts/${docRef.id}/image`);

        if (selectedFile) {
            await uploadString(imageRef, selectedFile, "data_url").then(
                async () => {
                    const downloadURL = await getDownloadURL(imageRef);
                    await updateDoc(doc(db, "posts", docRef.id), {
                        image: downloadURL,
                    });
                }
            );
        }

        setLoading(false);
        setInput("");
        setSelectedFile(null);
        setShowEmoji(false);
    };

    const addImageToPost = (e) => {
        const reader = new FileReader();
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }

        reader.onload = (readerEvent) => {
            setSelectedFile(readerEvent.target.result);
        };
    };

    const addEmoji = (e) => {
        let sym = e.unified.split("-");
        let codesArray = [];
        sym.forEach((el) => codesArray.push("0x" + el));
        let emoji = String.fromCodePoint(...codesArray);
        setInput(input + emoji);
    };

    return (
        <div className={cx("tweet-box")}>
            <div className={cx("box-avatar")}>
                <Link to={config.routes.explore}>
                    <Image
                        src="https://i.pinimg.com/474x/44/15/ba/4415ba5df0f4bfcee5893d6c441577e0.jpg"
                        className={cx("user-avatar")}

                        // src={currentUser.image}
                        // alt={currentUser.userName}
                        // fallback={currentUser.image}
                    />
                </Link>
            </div>

            <div className={cx("box-input")}>
                <div
                    className={cx("tweet-box-input", {
                        selectedFile: selectedFile,
                        input: input,
                    })}
                >
                    <textarea
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        rows="2"
                        placeholder="What's happening?"
                    />
                    {selectedFile && (
                        <div className={cx("image-input")}>
                            <div
                                className={cx("upload-image")}
                                onClick={() => setSelectedFile(null)}
                            >
                                <CloseIcon />
                            </div>
                            <img src={selectedFile} alt="" />
                        </div>
                    )}
                </div>

                <div className={cx("toolbar")}>
                    <div className={cx("items-btn")}>
                        <div
                            className={cx("item")}
                            onClick={() => filePickerRef.current.click()}
                        >
                            <ImageIcon />
                            <input
                                type="file"
                                onChange={addImageToPost}
                                ref={filePickerRef}
                                hidden
                            />
                        </div>
                        <div className={cx("item")}>
                            <GifIcon />
                        </div>
                        <div className={cx("item")}>
                            <PollIcon />
                        </div>
                        <div
                            className={cx("item")}
                            onClick={() => setShowEmoji(!showEmoji)}
                        >
                            <EmojiIcon />
                        </div>
                        <div className={cx("item")}>
                            <ScheduleIcon />
                        </div>
                        <div className={cx("item")}>
                            <LocationIcon />
                        </div>

                        {showEmoji && (
                            <div className={cx("emoji-panel")}>
                                <Picker
                                    onEmojiSelect={addEmoji}
                                    set="twitter"
                                    perLine="9"
                                    maxFrequentRows="1"
                                    emojiSize="20"
                                    autoFocus="true"
                                    theme="light"
                                />
                            </div>
                        )}
                    </div>
                    <div className={cx("tweet-btn")}>
                        <Button
                            primary
                            disabled={!input.trim() && !selectedFile}
                            onClick={sendPost}
                        >
                            Tweet
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TweetBox;
