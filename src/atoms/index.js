import { atom } from "recoil";

export const modalState = atom({
    key: "modalState",
    default: false,
});
export const modalCommentState = atom({
    key: "modalCommentState",
    default: false,
});
export const chooseItemState = atom({
    key: "chooseItemState",
    default: false,
});

export const postIdState = atom({
    key: "postIdState",
    default: "",
});
export const imageState = atom({
    key: "imageState",
    default: "",
});

export const followedState = atom({
    key: "followedState",
    default: false,
    id: "",
});
export const followIdState = atom({
    key: "followIdState",
    default: -1,
});
export const pinnedlists = atom({
    key: "pinnedlists",
    default: [],
});
export const listPageData = atom({
    key: "listPageData",
    default: {},
});
