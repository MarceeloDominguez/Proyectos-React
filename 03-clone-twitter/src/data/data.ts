import { Data } from "../interface/data";

import { BiHomeCircle } from "react-icons/Bi";
import { BiHash } from "react-icons/Bi";
import { RiNotificationLine } from "react-icons/Ri";
import { IoPersonOutline } from "react-icons/all";
import { BsBookmark } from "react-icons/all";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";
import { RiFileListLine } from "react-icons/all";
import { RxTwitterLogo } from "react-icons/all";
import { AiOutlineMail } from "react-icons/ai";
//icon input main
import { IoLocationOutline } from "react-icons/all";
import { BsImage } from "react-icons/bs";
import { CiFaceSmile } from "react-icons/ci";
import { BsCalendarEvent } from "react-icons/bs";
import { IoOptionsSharp } from "react-icons/all";
import { AiOutlineFileGif } from "react-icons/ai";

export const listFollowsSuggestion = [
  {
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Bradley Walters",
    nickname: "@Bradley_123",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    name: "Zachary Harper",
    nickname: "@Zachary20",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Armando Joe",
    nickname: "@ArmandoG",
  },
];

export const trends = [
  {
    trendCountry: "Tendencia en Argentina",
    trend: "React",
    numberTweets: "4.256 ",
  },
  {
    trendCountry: "Tendencia en Argentina",
    trend: "Tailwind CSS",
    numberTweets: "2.986 ",
  },
  {
    trendCountry: "Tendencia en Argentina",
    trend: "TypeScript",
    numberTweets: "2.256 ",
  },
  {
    trendCountry: "Tendencia en Argentina",
    trend: "React Native",
    numberTweets: "1.025 ",
  },
];

export const navItems = [
  {
    title: "Inicio",
    icon: BiHomeCircle,
  },
  {
    title: "Explorar",
    icon: BiHash,
  },
  {
    title: "Notificaciones",
    icon: RiNotificationLine,
  },
  {
    title: "Mensajes",
    icon: AiOutlineMail,
  },
  {
    title: "Listas",
    icon: RiFileListLine,
  },
  {
    title: "Guardados",
    icon: BsBookmark,
  },
  {
    title: "Twitter Blue",
    icon: RxTwitterLogo,
  },
  {
    title: "Perfil",
    icon: IoPersonOutline,
  },
  {
    title: "Más opciones",
    icon: HiOutlineDotsCircleHorizontal,
  },
];

export const iconInputMain = [
  { icon: BsImage },
  { icon: AiOutlineFileGif },
  { icon: IoOptionsSharp },
  { icon: CiFaceSmile },
  { icon: BsCalendarEvent },
  { icon: IoLocationOutline },
];

export const dataForYou: Data[] = [
  {
    avatar: "https://randomuser.me/api/portraits/men/10.jpg",
    name: "lucas",
    nickname: "@lucas36",
    time: "19min",
    description:
      "Adipisicing laborum ea id laborum voluptate magna ut.Adipisicing laborum ea id laborum voluptate magna ut.Adipisicing laborum ea id laborum voluptate magna ut 🖐",
    image:
      "https://cdn.pixabay.com/photo/2016/02/10/21/59/landscape-1192669_640.jpg",
    verifield: false,
    chat: 2,
    retweet: 10,
    likeTweet: 6,
    statistics: 120,
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/10.jpg",
    name: "Maria Fernández",
    nickname: "@mariaF",
    time: "2h",
    description:
      "Amet sint amet pariatur cupidatat sint. Laboris magna veniam quis magna laboris id aliqua aliqua proident. Amet sint amet pariatur cupidatat sint. Laboris magna veniam quis magna laboris id aliqua aliqua proident. Amet sint amet pariatur cupidatat sint 💪",
    image:
      "https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_640.jpg",
    verifield: true,
    chat: 20,
    retweet: 100,
    likeTweet: 65,
    statistics: 520,
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/50.jpg",
    name: "lucia",
    nickname: "@lucia2023",
    time: "40min",
    description:
      "Elit est eiusmod laborum ut et cupidatat sit deserunt velit mollit sunt laboris. Veniam Lorem sint aliqua dolor 😊😴",
    image: null,
    verifield: true,
    chat: null,
    retweet: 1,
    likeTweet: 4,
    statistics: 12,
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/50.jpg",
    name: "Mario Gomez",
    nickname: "@mario_gomez",
    time: "1h",
    description:
      "Fugiat ipsum sit velit qui do consectetur cupidatat elit ut ut. Aute ipsum sit pariatur incididunt deserunt.",
    image:
      "https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_640.jpg",
    verifield: false,
    chat: 1,
    retweet: null,
    likeTweet: 3,
    statistics: 152,
  },
];

export const dataFollowing: Data[] = [
  {
    avatar: "https://randomuser.me/api/portraits/men/15.jpg",
    name: "Nick",
    nickname: "@nick",
    time: "55min",
    description:
      "Cupidatat voluptate elit tempor aliquip amet. Quis tempor tempor et quis voluptate.",
    image:
      "https://cdn.pixabay.com/photo/2013/06/12/22/20/mountains-139012_640.jpg",
    verifield: true,
    chat: 15,
    retweet: 55,
    likeTweet: 123,
    statistics: 1520,
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/25.jpg",
    name: "Katie Evans",
    nickname: "@KatieEvans",
    time: "2h",
    description:
      "Quis cupidatat dolore deserunt culpa. Minim aliquip irure consectetur voluptate sunt sunt duis voluptate cupidatat magna mollit esse do eu. Labore veniam Lorem officia consequat pariatur.",
    image: null,
    verifield: false,
    chat: 2,
    retweet: 10,
    likeTweet: 4,
    statistics: 120,
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/35.jpg",
    name: "Denise West",
    nickname: "@Denise_West",
    time: "30min",
    description:
      "Veniam ea exercitation nostrud exercitation culpa reprehenderit in 😊",
    image: null,
    verifield: false,
    chat: null,
    retweet: 2,
    likeTweet: 4,
    statistics: 96,
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    name: "Patrick Garrett",
    nickname: "@PatrickGtt23",
    time: "3h",
    description:
      "Fugiat ipsum sit velit qui do consectetur cupidatat elit ut ut. Aute ipsum sit pariatur incididunt deserunt.",
    image:
      "https://cdn.pixabay.com/photo/2017/12/03/22/11/winter-landscape-2995987_1280.jpg",
    verifield: true,
    chat: 10,
    retweet: 120,
    likeTweet: 356,
    statistics: 1152,
  },
];
