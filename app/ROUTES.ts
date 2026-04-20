import {
  Home,
  Settings,
  // DollarSign,
  // Wifi,
  LayoutDashboard,
  Video,
  Share2,
  User2,
  Image,

  // PlusCircle,
  Plus,
  Radio,
  Building2,
  LucideIcon,
  RadioTower,
  ShieldCheck,
  Users,
  Wifi,
  Zap,
} from "lucide-react";
import { MonitorPlay } from "lucide-react";
export type Route = {
  title: string;
  url: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  subItems?: { title: string; url: string }[];
};


// {
//   title: "Home",
//   url: "/",
//   icon: Home,
// },
// {
//   title: "Dashboard",
//   url: "/dashboard",
//   icon: LayoutDashboard,
// },
// {
//   title: "Stream",
//   url: "/stream",
//   icon: Settings,
//   subItems: [
//     { title: "Stream", url: "/dashboard/stream" },
//     { title: "Stream Settings", url: "/dashboard/stream/stream-settings" },
//     { title: "Platforms", url: "/dashboard/stream/platforms" },
//   ],
// },
// // {
// //   title: "Projects",
// //   url: "/dashboard/projects",
// //   icon: Database,
// // },
// {
//   title: "Videos",
//   url: "/dashboard/videos",
//   icon: Video,
//   subItems: [
//     { title: "All Videos", url: "/dashboard/videos" },
//     { title: "Clips", url: "/dashboard/videos/clips" },
//     { title: "Montages", url: "/dashboard/videos/montages" },
//     { title: "Renders", url: "/dashboard/videos/renders" },
//     { title: "Favorites", url: "/dashboard/videos/favorites" },
//     { title: "Analytics", url: "/dashboard/analytics" },
//     { title: "Storage", url: "/dashboard/storage" },
//   ],
// },
// {
//   title: "Social",
//   url: "/dashboard/social",
//   icon: Share2,
// },
// {
//   title: "Thumbnail Generator",
//   url: "/dashboard/thumbnail-generator",
//   icon: Image,
// },
// {
//   title: "Stream Settings",
//   url: "/dashboard/stream-settings",
//   icon: Settings,
// },

// {
//   title: "Platforms",
//   url: "/dashboard/platforms",
//   icon: Wifi,
// },
// {
//   title: "Account",
//   url: "/dashboard/account",
//   icon: User2,
// },

// {
//   title: "Upgrade",
//   url: "/pricing",
//   icon: Plus,
// },

// {
//   subItems: [
//     { title: "Calendar", url: "/social/calendar" },
//   ],
// },
// {
//   subItems: [{ title: "Connections", url: "/connections" }],
// },

export const productionRoutes: Route[] = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Admin",
    url: "/admin",
    icon: Settings,
  },
  {
    title: "Stream",
    url: "/stream",
    icon: MonitorPlay,
    subItems: [
      { title: "Stream", url: "/dashboard/stream" },
      { title: "Stream Settings", url: "/dashboard/stream/stream-settings" },
      { title: "Insights", url: "/dashboard/stream/insights" },
      { title: "Platforms", url: "/dashboard/stream/platforms" },
    ],
  },
  {
    title: "Radio",
    url: "/dashboard/radio",
    icon: Radio,
    subItems: [
      { title: "Applications", url: "/dashboard/radio/dashboard" },
      // { title: "Builder", url: "/dashboard/radio/wizard" },
    ],
  },
  {
    title: "Account",
    url: "/dashboard/account",
    icon: User2,
  },
];

export const developmentRoutes: Route[] = [
  ...productionRoutes,
  {
    title: "Videos",
    url: "/dashboard/videos",
    icon: Video,
    subItems: [
      { title: "All Videos", url: "/dashboard/videos" },
      { title: "Clips", url: "/dashboard/videos/clips" },
      { title: "Montages", url: "/dashboard/videos/montages" },
      { title: "Renders", url: "/dashboard/videos/renders" },
      { title: "Favorites", url: "/dashboard/videos/favorites" },
      { title: "Analytics", url: "/dashboard/analytics" },
      { title: "Storage", url: "/dashboard/storage" },
    ],
  },
  {
    title: "Social",
    url: "/dashboard/social",
    icon: Share2,
  },
  {
    title: "Thumbnail Generator",
    url: "/dashboard/thumbnail-generator",
    icon: Image,
  },
];

export const routes: Route[] =
  process.env.NODE_ENV === "production" ? productionRoutes : developmentRoutes;

export const footerLinks = {
  Product: [
    { title: "Reliability Platform", href: "/features" },
    { title: "Pricing", href: "/pricing" },
    { title: "Integrations", href: "/integrations" },
    { title: "Release Notes", href: "/changelog" },
    { title: "Product Roadmap", href: "/roadmap" },
  ],
  Resources: [
    { title: "Blog", href: "/blog" },
    { title: "Tutorials", href: "/tutorials" },
    { title: "Help Center", href: "/help-center" },
    { title: "API Docs", href: "/api-docs" },
    { title: "Community", href: "/community" },
  ],
  Company: [
    { title: "About", href: "/about" },
    { title: "Careers", href: "/careers" },
    { title: "Press", href: "/press" },
    { title: "Partners", href: "/partners" },
    { title: "Contact Sales", href: "/contact-sales" },
  ],
  Legal: [
    { title: "Privacy", href: "/privacy" },
    { title: "Terms", href: "/terms-of-service" },
    { title: "Security", href: "/security" },
    { title: "Cookies", href: "/cookie-policy" },
  ],
};


export type MenuLink = {
  title: string;
  href: string;
  description: string;
  icon: LucideIcon;
};

export type MenuGroup = {
  title: string;
  eyebrow: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  items: MenuLink[];
};

export const menuGroups: MenuGroup[] = [
  {
    title: "Solutions",
    eyebrow: "Reliability infrastructure",
    description:
      "Relyy gives live teams one reliability layer for failover, monitoring, and recovery across every destination.",
    ctaLabel: "Explore platform features",
    ctaHref: "/features",
    items: [
          {
        title: "RelyyCast",
        description:
          "Restore stable delivery quickly after source or ingest instability.",
        href: "/relyycast",
        icon: Zap,
      },
      {
        title: "RelyyDJ",
        description:
          "Switch to a healthy backup source before viewers notice disruption.",
        href: "/dj",
        icon: ShieldCheck,
      },
  
      // {
      //   title: "RelyyStream",
      //   description:
      //     "Keep constant visibility into stream health and incident signals.",
      //   href: "/relyystream",
      //   icon: RadioTower,
      // },
      // {
      //   title: "RelyyRadio",
      //   description:
      //     "Apply consistent reliability standards across every destination.",
      //   href: "/relyy-radio",
      //   icon: Wifi,
      // },
    ],
  },
  {
    title: "Use Cases",
    eyebrow: "Built for every live operator",
    description:
      "Relyy adapts to solo creators, event teams, production agencies, and always-on channels without extra operational complexity.",
    ctaLabel: "Talk to sales",
    ctaHref: "/contact-sales",
    items: [
      {
        title: "Independent Creators",
        description:
          "Protect audience growth and revenue without a dedicated ops team.",
        href: "/use-cases/independent-creators",
        icon: Users,
      },
      {
        title: "Production Teams",
        description:
          "Standardize live reliability across shows, clients, and operators.",
        href: "/use-cases/production-teams",
        icon: Building2,
      },
      {
        title: "Live Events",
        description:
          "Keep launches, sponsors, and ticketed streams online under pressure.",
        href: "/use-cases/live-events",
        icon: Wifi,
      },
      {
        title: "Always-On Channels",
        description:
          "Run uninterrupted 24/7 channels with scalable reliability controls.",
        href: "/use-cases/always-on-channels",
        icon: RadioTower,
      },
    ],
  },
];

export const primaryLinks = [
 // { title: "Pricing", href: "/pricing" },
  { title:  "Downloads", href: "/downloads" },
   { title: "About", href: "/about" },

 { title: "Blog", href: "/blog" },

  //{ title: "Contact Sales", href: "/contact" },
];
