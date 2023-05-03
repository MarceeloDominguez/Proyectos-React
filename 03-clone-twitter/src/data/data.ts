import { BiHomeCircle } from "react-icons/Bi";
import { BiHash } from "react-icons/Bi";
import { RiNotificationLine } from "react-icons/Ri";
import { IoPersonOutline } from "react-icons/all";
import { BsBookmark } from "react-icons/all";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";
import { IoPeopleOutline } from "react-icons/all";
import { RxTwitterLogo } from "react-icons/all";
import { AiOutlineMail } from "react-icons/ai";

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
    title: "Comunidades",
    icon: IoPeopleOutline,
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
