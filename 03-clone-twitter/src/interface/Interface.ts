import { IconType } from "react-icons";

export interface Followers {
  avatar: string;
  name: string;
  nickname: string;
}

export interface Trend {
  trendCountry: string;
  trend: string;
  numberTweets: string;
}

export interface navItem {
  title: string;
  icon: IconType;
}
