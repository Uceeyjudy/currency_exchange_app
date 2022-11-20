import introducersIcon from "../assets/svg/IntroducersIcon.svg";
import affliatesIcon from "../assets/svg/AffliateIcon.svg";
import FXToolsIcon from "../assets/svg/FXToolsIcon.svg";
import SecureIcon from "../assets/svg/SecureIcon.svg";
import DollarIcon from "../assets/svg/DollarIcon.svg";

// referral partners data

export const PartnersTypeArray = [
  {
    id: 1,
    icon: introducersIcon,
    header: "Introducers",
    description:
      "Help your clients save time and money when making international payments, recommend Street Rates and benefit from:",
    list: [
      {
        id: 1,
        text: "Bank beating exchange rates and no fees from Street Rates for your clients",
      },
      {
        id: 2,
        text: "Access to a range of tools and widgets to enhance your website",
      },
      {
        id: 3,
        text: "Generate an income stream for your business",
      },
    ],
  },
  {
    id: 2,
    icon: affliatesIcon,
    header: "Affliates",
    description:
      "Monetise your traffic by joining the Street Rates affiliate program on Impact Radius. You'll benefit from:",
    list: [
      {
        id: 1,
        text: "Easy to generate trackable links",
      },
      {
        id: 2,
        text: "Real time reporting with in-depth click and conversion data",
      },
      {
        id: 3,
        text: "Creative suite of banners and bespoke ads",
      },
    ],
  },
];

// whychoose data
export const WhyChooseArray = [
  {
    id: 1,
    header: "FX Tools",
    icon: FXToolsIcon,
    description:
      "Stay one step ahead of the competition with the latest tools and market insights so you can make informed decisions.",
  },
  {
    id: 2,
    header: "Secure",
    icon: SecureIcon,
    description:
      "We take the greatest care in ensuring the safety of Street Rates. Your data is safe with Street Rates.",
  },
  {
    id: 3,
    header: "Market Experts",
    icon: DollarIcon,
    description:
      "We closely monitor the markets, to tailor our services to your business; With our support, our clients can make targeted and educated trading decisions.",
  },
];
