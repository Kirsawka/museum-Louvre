import { Attraction } from "../types";
import RoyalPalace from "../assets/img/RoyalPalace.jpg";
import DenonWing from "../assets/img/DenonWing.jpg";
import ColonnadePerrault from "../assets/img/ColonnadePerrault.jpg";
import Greekhall from "../assets/img/Greekhall.jpg";
import MonaLisa from "../assets/img/MonaLisa.jpg";
import NightPalace from "../assets/img/NightPalace.jpg";

export const attractions: Attraction[] = [
  {
    id: 0,
    image: RoyalPalace,
    title: "Royal Palace",
    firstLineText: "360° Virtual Tour",
    secondLineText: "Google Street Panorama View",
    link: "https://www.google.com/maps/@48.8606882,2.3356791,3a,90y,328.36h,87.55t/data=!3m7!1e1!3m5!1sAF1QipMZ9YgnArbwEIbTDANeSQYFu9gNqpW_2Sv8FBvY!2e10!3e12!7i4352!8i1815",
  },
  {
    id: 1,
    image: DenonWing,
    title: "Denon Wing",
    firstLineText: "360° Virtual Tour",
    secondLineText: "Google Street Panorama View",
    link: "https://www.google.com/maps/@48.8563254,2.3352706,3a,75y,90t/data=!3m7!1e1!3m5!1sAF1QipNRj_CwP4coDMYdCHj6qHeBeJpI2VxU5BUsOX4F!2e10!3e12!7i11000!8i5500",
  },
  {
    id: 2,
    image: ColonnadePerrault,
    title: "Colonnade Perrault",
    firstLineText: "360° Virtual Tour",
    secondLineText: "Google Street Panorama View",
    link: "https://www.google.com/maps/@48.8601723,2.3395439,3a,88.4y,322.04h,84.25t/data=!3m7!1e1!3m5!1sAF1QipNMZGQuEA-pAUvIG_eP_2f3gWTKZEJ6XLVJ-Pgb!2e10!3e12!7i10240!8i5120",
  },
  {
    id: 3,
    image: Greekhall,
    title: "Greek hall",
    firstLineText: "360° Virtual Tour",
    secondLineText: "Google Street Panorama View",
    link: "https://www.google.com/maps/@48.860183,2.3356156,3a,90y,177.69h,95.61t/data=!3m7!1e1!3m5!1sAF1QipP7uFZnTITRe-7AEVAgHAfqiCL-03gvBHcYWgF3!2e10!3e12!7i5472!8i2736",
  },
  {
    id: 4,
    image: MonaLisa,
    title: "Mona Lisa",
    firstLineText: "360° Virtual Tour",
    secondLineText: "Google Street Panorama View",
    link: "https://www.google.com/maps/@48.8598788,2.3355157,3a,82.2y,7.53h,94t/data=!3m7!1e1!3m5!1sAF1QipO1wkUUbyzpPjj-OR0mR5etZJT-xl-40XK8rDQ3!2e10!3e12!7i10240!8i5120",
  },
  {
    id: 5,
    image: NightPalace,
    title: "Night Palace",
    firstLineText: "360° Virtual Tour",
    secondLineText: "Google Street Panorama View",
    link: "https://www.google.com/maps/@48.8563254,2.3352706,3a,90y,21.26h,79.91t/data=!3m7!1e1!3m5!1sAF1QipPpGAowYatVyk3MMGnZAaQkYm2EUk-Dlca06SS5!2e10!3e12!7i11304!8i5652",
  },
];
