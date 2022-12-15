import Contacts from "./pages/Contacts/Contacts";
import Explore from "./pages/Explore/Explore";
import Gallery from "./pages/Gallery/Gallery";
import Tickets from "./pages/Tickets/Tickets";
import Video from "./pages/Video/Video";
import Visiting from "./pages/Visiting/Visiting";
import Welcome from "./pages/Welcome/Welcome";

export type NavListProps = {
  pages: Page[];
};

export type SocialListProps = {
  socials: Social[];
};

export type TicketTypeProps = {
  ticketTypes: string[];
};

export type VideoListProps = {
  videos: VideoSlide[];
};

export type PictureComparisonProps = {
  imageBefore: string;
  imageAfter: string;
};

export type SvgIconProps = {
  pathToIcon: string;
  className?: string;
  onClickHandler?: () => void;
};

export type VideoControlsProps = {
  togglePlay: () => void;
  volumeProgressHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  toggleVolume: () => void;
  playProgressHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  openFullscreen: () => void;
};

export type VideoVolumeControlProps = {
  volumeProgressHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  toggleVolume: () => void;
};

export type VideoPlayControlProps = {
  togglePlay: () => void;
  playProgressHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type AmountProps = {
  totalPrice: number;
};

export type TicketCountProps = {
  id: string;
  value: number;
  subtitle: string;
  price?: number;
  className?: string;
};

export type BookingProps = {
  ticketTypes: string[];
};

export type OverviewBookingProps = {
  info: string;
  svgIcon: string;
  iconName: string;
  className: string;
};

export type OverviewTicketsProps = {
  price: number;
  count: number;
  id: string;
  totalPrice: number;
};

export type DateSelectProps = {
  cardDate: string[];
  name: string;
};

export type BookingFormsProps = {
  ticketTypes: string[];
  times: string[];
};

export type Page = {
  id: number;
  path: string;
  element:
    | typeof Welcome
    | typeof Visiting
    | typeof Explore
    | typeof Video
    | typeof Gallery
    | typeof Tickets
    | typeof Contacts;
  linkName: string;
};

export type Attraction = {
  id: number;
  image: string;
  title: string;
  firstLineText: string;
  secondLineText: string;
  link: string;
};

type GeoMarkerFeatures = {
  type: string;
  properties: {};
  geometry: {
    type: string;
    coordinates: number[];
  };
};

export type GeoMarker = {
  type: string;
  features: GeoMarkerFeatures[];
};

export type Social = {
  id: number;
  title: string;
  link: string;
  icon: string;
};

export type VideoSlide = {
  id: number;
  src: string;
  width: string;
  height: string;
  title: string;
  frameBorder: string;
  allow: string;
};

export type cardDate = {
  months: string[];
  years: string[];
};

export type Price = {
  basic: { permanent: number; temporary: number; combined: number };
  senior: { permanent: number; temporary: number; combined: number };
};
