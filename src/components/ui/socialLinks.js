import { AtSign } from "lucide-react";
import { CONTACT_INFO } from "../../data/contactInfo";
import { InstagramIcon, FacebookIcon } from "./SocialIcons";

// Threads' logo is a stylised "@", so lucide's AtSign stands in for it.
export const SOCIAL_LINKS = [
  { name: "Instagram", url: CONTACT_INFO.instagramUrl, Icon: InstagramIcon },
  { name: "Facebook", url: CONTACT_INFO.facebookUrl, Icon: FacebookIcon },
  { name: "Threads", url: CONTACT_INFO.threadsUrl, Icon: AtSign },
];
