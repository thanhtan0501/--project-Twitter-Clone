import classNames from "classnames/bind";
import React, { useEffect, useRef, useState } from "react";
import { CloseIcon, SearchIcon } from "~/components/Icons";
import HeadlessTippy from "@tippyjs/react/headless";

import styles from "./SearchBox.module.scss";
import AccountItem from "../AccountItem";
import useDebounce from "~/hooks/useDebounce";
import { followList } from "~/utils/constant";
import Image from "../Image";
import Button from "../Button";
import { chooseItemState } from "~/atoms";
import { useRecoilState } from "recoil";

const cx = classNames.bind(styles);
function SearchBox({ tagsResult = false, className }) {
    const [searchValue, setSearchValue] = useState("");
    const [showResult, setShowResult] = useState(true);
    const [searchResult, setSearchResult] = useState([]);
    const [isChoose, setIsChoose] = useRecoilState(chooseItemState);

    const [tags, setTags] = useState([]);

    const inputRef = useRef();
    const debouncedValue = useDebounce(searchValue, 400);

    useEffect(() => {
        if (tags === []) {
            setIsChoose(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isChoose]);

    useEffect(() => {
        if (!debouncedValue.trim()) {
            setSearchResult([]);
            return;
        }

        const result = followList;
        setSearchResult(result);
    }, [debouncedValue]);

    const handleChange = (e) => {
        if (e.target.value[0] !== " ") {
            setSearchValue(e.target.value);
        }
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    const removeTags = (indexToRemove) => {
        setTags([...tags.filter((_, index) => index !== indexToRemove)]);
    };

    const handleChooseItem = (result) => {
        setIsChoose(true);
        setTags([...tags, result]);
        setSearchValue("");
        setSearchResult([]);
        inputRef.current.focus();
    };

    return (
        <div className={cx("search-box-container")}>
            <HeadlessTippy
                interactive
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div
                        className={cx("search-result")}
                        tabIndex="-1"
                        {...attrs}
                    >
                        <div className={cx("wrapper")}>
                            {searchResult.map((result) => (
                                <AccountItem
                                    key={result.id}
                                    result={result}
                                    onClick={() => handleChooseItem(result)}
                                />
                            ))}
                        </div>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx("search-container")}>
                    <div
                        className={cx("search-box", {
                            [className]: className,
                        })}
                    >
                        <button
                            className={cx("search-btn")}
                            onMouseDown={(e) => e.preventDefault()}
                        >
                            <SearchIcon />
                        </button>
                        <input
                            ref={inputRef}
                            value={searchValue}
                            type="text"
                            className={cx("search-input")}
                            placeholder="Search Twitter"
                            onChange={handleChange}
                            spellCheck={false}
                            onFocus={() => setShowResult(true)}
                        />
                    </div>
                    {tagsResult && tags !== [] && (
                        <div className={cx("tags-result")}>
                            <ul className={cx("tags")}>
                                {tags.map((tag, index) => (
                                    <li key={index} className={cx("tag")}>
                                        <div className={cx("tag-avatar")}>
                                            <Image src={tag.image} />
                                        </div>
                                        <div className={cx("tag-title")}>
                                            <span>{tag.name}</span>
                                        </div>
                                        <Button
                                            className={cx("tag-close-icon")}
                                            onClick={() => {
                                                removeTags(index);

                                                if (
                                                    tags.length === 0 &&
                                                    tags === []
                                                ) {
                                                    setIsChoose(!isChoose);
                                                }
                                            }}
                                        >
                                            <CloseIcon />
                                        </Button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default SearchBox;
