import config from "~/config";
// Import Layout
import MessagesLayout from "~/layouts/MessagesLayout";
import ProfileLayout from "~/layouts/ProfileLayout";

import Home from "~/pages/Home";
import Explore from "~/pages/Explore";
import Notifications from "~/pages/Notifications";
import Messages from "~/pages/Messages";
import Bookmarks from "~/pages/Bookmarks";
import Lists from "~/pages/Lists";
import Profile from "~/pages/Profile";
import ListPage from "~/pages/Lists/ListPage";

// Router không cần đăng nhập vẫn xem được
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.notifications, component: Notifications },
    { path: config.routes.explore, component: Explore },
    {
        path: config.routes.messages,
        component: Messages,
        layout: MessagesLayout,
    },
    { path: config.routes.bookmarks, component: Bookmarks },
    { path: config.routes.lists, component: Lists },
    { path: config.routes.list_page, component: ListPage },
    {
        path: config.routes.profile,
        component: Profile,
        layout: ProfileLayout,
    },
];
// Router cần đăng nhập mới xem được
const privateRoutes = [];

export { publicRoutes, privateRoutes };
