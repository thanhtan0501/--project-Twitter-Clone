import config from "~/config";
import {
    BookmarksActiveIcon,
    BookmarksIcon,
    ExploreActiveIcon,
    ExploreIcon,
    HomeActiveIcon,
    HomeIcon,
    ListsActiveIcon,
    ListsIcon,
    MessagesActiveIcon,
    MessagesIcon,
    NotificationActiveIcon,
    NotificationIcon,
    ProfileActiveIcon,
    ProfileIcon,
} from "~/components/Icons";

export const sidebarOption = [
    {
        title: "Home",
        to: config.routes.home,
        icon: <HomeIcon />,
        activeIcon: <HomeActiveIcon />,
    },
    {
        title: "Explore",
        to: config.routes.explore,
        icon: <ExploreIcon />,
        activeIcon: <ExploreActiveIcon />,
    },
    {
        title: "Notifications",
        to: config.routes.notifications,
        icon: <NotificationIcon />,
        activeIcon: <NotificationActiveIcon />,
    },
    {
        title: "Messages",
        to: config.routes.messages,
        icon: <MessagesIcon />,
        activeIcon: <MessagesActiveIcon />,
    },
    {
        title: "Bookmarks",
        to: config.routes.bookmarks,
        icon: <BookmarksIcon />,
        activeIcon: <BookmarksActiveIcon />,
    },
    {
        title: "Lists",
        to: config.routes.lists,
        icon: <ListsIcon />,
        activeIcon: <ListsActiveIcon />,
    },
    {
        title: "Profile",
        to: config.routes.profile,
        icon: <ProfileIcon />,
        activeIcon: <ProfileActiveIcon />,
    },
];
export const eventResults = [
    {
        id: 1,
        classification: "US national news",
        event_time: "LIVE",
        title: "Affidavit in Trump search cites prior discovery of secret documents",
        image: "https://ca-times.brightspotcdn.com/dims4/default/57c3096/2147483647/strip/true/crop/4480x2520+0+0/resize/1486x836!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F24%2Fb8%2F2a3c4a6a44b58b432f3f4cdc841c%2Faptopix-trump-fbi-65472.jpg",
    },
    {
        id: 2,
        classification: "COVID-19",
        event_time: "LIVE",
        title: "COVID-19: Updates for the US",
        image: "https://nld.mediacdn.vn/291774122806476800/2021/10/26/coronavirus-2-16352154698241886954380.jpg",
    },
    {
        id: 3,
        classification: "Formula 1",
        event_time: "Last night",
        title: "Spa Grand Prix",
        image: "https://pbs.twimg.com/media/E94gBMIXsAA9iLP?format=jpg&name=large",
    },
    {
        id: 4,
        classification: "News",
        event_time: "LIVE",
        title: "Health experts explain the difference between monkeypox and COVID-19",
        image: "https://i.guim.co.uk/img/media/1b1a818aea2fd9f774b4081defaf8bd8effd06cd/0_16_3500_2101/master/3500.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=d90ea0bfae03050aaa967657b8c16178",
    },
    {
        id: 5,
        classification: "Sports",
        event_time: "LIVE",
        title: "It's Varun Chakaravarthy's birthday 🎂",
        image: "https://cdn.indianhotdeal.com/wp-content/uploads/2021/05/122928659_176422414076303_3580488408011284413_n.jpg",
    },
    {
        id: 6,
        classification: "War in Ukraine",
        event_time: "LIVE",
        title: "Latest updates on the war in Ukraine",
        image: "https://www.aljazeera.com/wp-content/uploads/2022/03/AP22070609336904.jpg?resize=770%2C513",
    },
    {
        id: 7,
        classification: "Space",
        event_time: "LIVE",
        title: "NASA launches Artemis I",
        image: "https://www.wuft.org/news/files/2022/08/aretmis-i-on-launch-pad-wednesday-1200x782.jpg",
    },
];

export const trendingResults = [
    {
        title: "VÀO ĐÂY NÀO",
        subtitle: "Trending in Vietnam",
        count_tweets: null,
    },
    {
        title: "LẤY SĐT ZALO",
        subtitle: "Trending in Vietnam",
        count_tweets: null,
    },
    {
        title: "#may_bay_ba_gia",
        subtitle: "Trending in Vietnam",
        count_tweets: null,
    },
    {
        title: "Liveshow",
        subtitle: "Trending in Vietnam",
        count_tweets: 2611,
    },
    {
        title: "#massage_in_riyadh",
        subtitle: "Trending in Vietnam",
        count_tweets: 9374,
    },
    {
        title: "hưng",
        subtitle: "Trending in Vietnam",
        count_tweets: 39000,
    },
    {
        title: "#tinnong",
        subtitle: "Trending in Vietnam",
        count_tweets: 2841,
    },
    {
        title: "#AnhHosoMoi",
        subtitle: "Trending in Vietnam",
        count_tweets: 36300,
    },
    {
        title: "#스타쉽_아이브_샵_바꿔",
        subtitle: "Trending in Vietnam",
        count_tweets: null,
    },
    {
        title: "Taiwan",
        subtitle: "Politics · Trending",
        count_tweets: 74500,
    },
];

export const followResults = [
    {
        userImg:
            "https://cdnb.artstation.com/p/assets/images/images/009/952/387/large/pablo-dobarro-dev1.jpg?1521743024",
        name: "santu",
        username: "santumaam",
        tick: false,
    },
    {
        userImg:
            "https://cdna.artstation.com/p/assets/images/images/035/469/268/large/kalle-.jpg?1639893233",
        name: "Airi",
        username: "pix_bun",
        tick: false,
    },
    {
        userImg:
            "https://cdnb.artstation.com/p/assets/images/images/044/221/313/large/ida-faber-01.jpg?1639421293",
        name: "ether ❄️",
        username: "ethertf2",
        tick: false,
    },
    {
        userImg:
            "https://cdna.artstation.com/p/assets/images/images/000/634/096/large/jason-cecrle-taylor-final-with-signature-filtered.jpg?1429288368",
        name: "Taylor Swift",
        username: "taylorswift13",
        tick: true,
    },
];

export const followList = [
    {
        id: 1,
        image: "https://cdna.artstation.com/p/assets/images/images/053/044/800/large/fred-arsenault-beauty-01.jpg?1661285918",
        name: "Marcelo Caram Pessoa",
        username: "marcelogp9",
        tick: true,
        description:
            "Sonhando e lutando por um Brasil sem corrupção ! Anti-pt e coligados !!!",
    },
    {
        id: 2,
        image: "https://cdna.artstation.com/p/assets/images/images/052/725/394/large/chen-wang-cm-a.jpg?1660531532",
        name: "AlmanaraLuxuryVillas",
        username: "almanararesort",
        tick: false,
        description:
            "Almanara is a collection of 6 Luxury Executive Villas & Boutique Hotel, situated on the white sands of Diani Beach, Kenya.",
    },
    {
        id: 3,
        image: "https://cdna.artstation.com/p/assets/images/images/053/175/788/large/thales-simonato-pose-frame.jpg?1661598807",
        name: "Doodle World",
        username: "DoodleWorldRBLX",
        tick: true,
        description:
            "Official twitter for Doodle World, a game by @wishRBLX, @its_oIiverr, Klutzu, and @ilyannnna on Roblox",
    },
];

export const discoverList = [
    {
        image: "https://file.coin98.com/images/crypto-la-gi-62U6jO2QkkrVHFmX.png",
        title: "Crypto News",
        authorName: "Narendra Bhupati",
        username: "B4Bhupati",
        member: 96,
        follower: 3200,
        authorAvatar:
            "https://thumbs.dreamstime.com/b/portrait-handsome-smiling-young-man-folded-arms-isolated-gray-background-joyful-cheerful-men-crossed-hands-studio-shot-172868988.jpg",
    },
    {
        image: "https://phongduy.com/wp-content/uploads/2021/12/Altcoin.jpg",
        title: "Crypto",
        authorName: "Truong Ngoc Son",
        username: "TruongNgocSon20",
        member: 140,
        follower: 6524,
        authorAvatar:
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    },
    {
        image: "https://img.freepik.com/free-vector/cryptocurrency-bitcoin-golden-coins-isolated-white_1017-31520.jpg?w=2000",
        title: "Coin Master",
        authorName: "Iki Hernández",
        username: "RikiLuiss_",
        member: 580,
        follower: 13526,
        authorAvatar:
            "https://www.vadoetornoweb.com/wp-content/uploads/2020/07/1920_andreas-tostmann-480x480.jpg",
    },
];
