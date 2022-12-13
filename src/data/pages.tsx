import Contacts from "../pages/Contacts/Contacts";
import Explore from "../pages/Explore/Explore";
import Gallery from "../pages/Gallery/Gallery";
import Tickets from "../pages/Tickets/Tickets";
import Video from "../pages/Video/Video";
import Visiting from "../pages/Visiting/Visiting";
import Welcome from "../pages/Welcome/Welcome";
import { Page } from "../types";

export const pages: Page[] = [
  {
    id: 0,
    path: "/",
    element: Welcome,
    linkName: "Welcome",
  },
  {
    id: 1,
    path: "visiting",
    element: Visiting,
    linkName: "Visiting",
  },
  {
    id: 2,
    path: "explore",
    element: Explore,
    linkName: "Explore",
  },
  {
    id: 3,
    path: "video",
    element: Video,
    linkName: "Video",
  },
  {
    id: 4,
    path: "gallery",
    element: Gallery,
    linkName: "Gallery",
  },
  {
    id: 5,
    path: "tickets",
    element: Tickets,
    linkName: "Tickets",
  },
  {
    id: 6,
    path: "contacts",
    element: Contacts,
    linkName: "Contacts",
  },
];
