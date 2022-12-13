import youtube from "../assets/svg/youtube.svg";
import instagram from "../assets/svg/instagram.svg";
import facebook from "../assets/svg/facebook.svg";
import twitter from "../assets/svg/twitter.svg";
import pinterest from "../assets/svg/pinterest.svg";
import { Social } from "../types";

export const socials: Social[] = [
  {
    id: 0,
    title: "Youtube",
    link: "https://www.youtube.com/user/louvre",
    icon: youtube,
  },
  {
    id: 1,
    title: "Instagram",
    link: "https://www.instagram.com/museelouvre/",
    icon: instagram,
  },
  {
    id: 2,
    title: "Facebook",
    link: "https://www.facebook.com/museedulouvre",
    icon: facebook,
  },
  {
    id: 3,
    title: "Twitter",
    link: "https://twitter.com/museelouvre",
    icon: twitter,
  },
  {
    id: 4,
    title: "Pinterest",
    link: "https://www.pinterest.fr/museedulouvre/",
    icon: pinterest,
  },
];
