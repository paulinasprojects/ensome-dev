import {
  BrainIsometric,
  ChartIsometric,
  KeyIsometric,
  DataIsometric,
  PieChartIsometric,
  BotIconIsometric,
} from "@/components/common/icons";

import { v4 as uuidv4 } from "uuid";

export const TestimonialsData = [
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/dymlzmyuo/image/upload/v1737546097/testimonial-one_rpk8zm.png",
    name: "Alex Bern",
    position: "CEO of PixelPerfect",
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/dymlzmyuo/image/upload/v1737546123/testimonial-two_mbeht4.png",
    name: "Ruben Chifundo",
    position: "CEO of NOX",
  },
];

export const MonthlyPricingData = [
  {
    id: uuidv4(),
    tier: "Starter",
    price: 5,
    perUser: "per editor/month",
    users: "Small plan for starters",
    items: [
      "For small teams - 5 users",
      "Community support",
      "Individual data - 20GB",
    ],
  },
  {
    id: uuidv4(),
    tier: "Professional",
    price: 20,
    perUser: "per editor/month",
    users: "For users who want more",
    items: [
      "For medium teams - 15 users",
      "Individual support",
      "Individual data - 60GB",
    ],
  },
  {
    id: uuidv4(),
    tier: "Organization",
    price: 50,
    perUser: "per editor/month",
    users: "The best solution for Pro",
    items: [
      "For big teams - unlimited",
      "Individual support",
      "Individual data - unlimited",
      "Data history",
    ],
  },
];

export const YearlyPricingData = [
  {
    id: uuidv4(),
    tier: "Starter",
    price: 60,
    perUser: "per editor/year",
    users: "Small plan for starters",
    items: [
      "For small teams - 5 users",
      "Community support",
      "Individual data - 20GB",
    ],
  },
  {
    id: uuidv4(),
    tier: "Professional",
    price: 240,
    perUser: "per editor/year",
    users: "For users who want more",
    items: [
      "For medium teams - 15 users",
      "Individual support",
      "Individual data - 60GB",
    ],
  },
  {
    id: uuidv4(),
    tier: "Organization",
    price: 600,
    perUser: "per editor/year",
    users: "The best solution for Pro",
    items: [
      "For big teams - unlimited",
      "Individual support",
      "Individual data - unlimited",
      "Data history",
    ],
  },
];

export const ourClientsData = [
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/dymlzmyuo/image/upload/v1737712565/logo_1_pstg5q.png",
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/dymlzmyuo/image/upload/v1737712588/logo_2_pcyfe3.png",
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/dymlzmyuo/image/upload/v1737712605/logo_3_htkm1y.png",
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/dymlzmyuo/image/upload/v1737712630/logo_4_wmtgva.png",
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/dymlzmyuo/image/upload/v1737712671/logo_5_nyksan.png",
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/dymlzmyuo/image/upload/v1737712687/logo_6_qxpqi3.png",
  },
];

export const ourClientsDarkData = [
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/dymlzmyuo/image/upload/v1738141134/logo_1_1_lbl2d1.png",
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/dymlzmyuo/image/upload/v1738141162/logo_2_1_vwb8oo.png",
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/dymlzmyuo/image/upload/v1738140999/logo_3_1_vid6ks.png",
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/dymlzmyuo/image/upload/v1738141184/logo_4_1_uoxeft.png",
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/dymlzmyuo/image/upload/v1738141207/logo_5_1_wadb8h.png",
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/dymlzmyuo/image/upload/v1738141231/logo_6_1_yuaxil.png",
  },
];

export const footerQuickLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Solutions",
    href: "/solutions",
  },
  {
    title: "Contact",
    href: "/contact-us",
  },
  {
    title: "Our team",
    href: "/our-team",
  },
  {
    title: "About Us",
    href: "/about-us",
  },
  {
    title: "Services",
    href: "/services",
  },
  {
    title: "FAQ",
    href: "/faq",
  },
];

export const footerServiceLinks = [
  {
    tile: "Pages",
    href: "/pages",
  },
  {
    tile: "Elements",
    href: "/elements",
  },
  {
    tile: "FAQ",
    href: "/service-faq",
  },
  {
    tile: "Pricing",
    href: "/pricing",
  },
  {
    tile: "Site map",
    href: "/site-map",
  },
];

export const servicesData = [
  {
    id: uuidv4(),
    icon: BrainIsometric,
    title: "Machine Learning",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
  },
  {
    id: uuidv4(),
    icon: ChartIsometric,
    title: "Embed analytics",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
  },
  {
    id: uuidv4(),
    icon: KeyIsometric,
    title: "Access Control",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
  },
  {
    id: uuidv4(),
    icon: DataIsometric,
    title: "Data analytics",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
  },
  {
    id: uuidv4(),
    icon: PieChartIsometric,
    title: "Machine Learning",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
  },
  {
    id: uuidv4(),
    icon: BotIconIsometric,
    title: "Artificial intelligence",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
  },
];

export const OtherServicesData = [
  {
    id: uuidv4(),
    name: "Machine Learning",
  },
  {
    id: uuidv4(),
    name: "Embeded analytics",
  },
  {
    id: uuidv4(),
    name: "Data analytics",
  },
  {
    id: uuidv4(),
    name: "Big data consulting",
  },
  {
    id: uuidv4(),
    name: "Artificial Intelligence",
  },
];

export const historySections = [
  {
    id: uuidv4(),
    title: "Ensome Foundation",
    content:
      "Sed ut perspiciatis unde omnis lite natus error sit voluptatem accusantium doloremque laudantium, totam rem apertam, eaque ipsa quaeab lib inventore. Donec tincidunt tempor.",
  },
  {
    id: uuidv4(),
    title: "Research & Development",
    content:
      "Sed ut perspiciatis unde omnis lite natus error sit voluptatem accusantium doloremque laudantium, totam rem apertam, eaque ipsa quaeab lib inventore. Donec tincidunt tempor.",
  },
  {
    id: uuidv4(),
    title: "New Vertical Markets",
    content:
      "Sed ut perspiciatis unde omnis lite natus error sit voluptatem accusantium doloremque laudantium, totam rem apertam, eaque ipsa quaeab lib inventore. Donec tincidunt tempor.",
  },
  {
    id: uuidv4(),
    title: "Stellar Growth",
    content:
      "Sed ut perspiciatis unde omnis lite natus error sit voluptatem accusantium doloremque laudantium, totam rem apertam, eaque ipsa quaeab lib inventore. Donec tincidunt tempor.",
  },
];

export const ourAchievementsData = [
  {
    id: uuidv4(),
    number: "1830+",
    title: "Projects executed",
  },
  {
    id: uuidv4(),
    number: 220,
    title: "Data analysed",
  },
  {
    id: uuidv4(),
    number: 390,
    title: "Data managed",
  },
  {
    id: uuidv4(),
    number: "834+",
    title: "Satisfied customers",
  },
];
