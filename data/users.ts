import { User } from "../types";

/**
 * This array simulates a database consisting of a list of users.
 * After signing up with your auth solution (e.g. GitHub, Auth0)
 * place your user info in an object, with the email address you used
 * as the id.
 * The groupIds are the names of the groups the user is part of.
 * Group info is in /data/groups.ts
 */
export const users: Omit<User, "color">[] = [
  /*
  {
    id: "[YOUR EMAIL ADDRESS]",
    name: "[YOUR DISPLAY NAME]",
    avatar: "https://liveblocks.io/avatars/avatar-0.png",
    groupIds: ["product", "engineering", "design"],
  },
  */
  {
    id: "klaudioz@gmail.com",
    name: "Claudio Canales",
    avatar: "https://www.claud.dev/favicon.ico",
    groupIds: ["engineering"],
  },
  {
    id: "mislav.abha@example.com",
    name: "Mislav Abha",
    avatar: "https://liveblocks.io/avatars/avatar-3.png",
    groupIds: ["product", "engineering", "design"],
  },
  {
    id: "tatum.paolo@example.com",
    name: "Tatum Paolo",
    avatar: "https://liveblocks.io/avatars/avatar-4.png",
    groupIds: ["engineering", "design"],
  },
  {
    id: "anjali.wanda@example.com",
    name: "Anjali Wanda",
    avatar: "https://liveblocks.io/avatars/avatar-5.png",
    groupIds: ["product"],
  },
  {
    id: "emil.joyce@example.com",
    name: "Emil Joyce",
    avatar: "https://liveblocks.io/avatars/avatar-6.png",
    groupIds: ["product", "design"],
  },
];
