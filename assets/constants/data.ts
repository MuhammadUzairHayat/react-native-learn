import { icons } from "./icons";

const now = new Date();
const getFutureRenewal = (daysAhead: number) => {
  const date = new Date(now);
  date.setHours(9, 0, 0, 0);
  date.setDate(date.getDate() + daysAhead);
  return date.toISOString();
};

const getDaysLeft = (daysAhead: number) =>
  Math.max(
    1,
    Math.ceil(
      (new Date(getFutureRenewal(daysAhead)).getTime() - now.getTime()) /
        86400000,
    ),
  );

export const tabs: AppTab[] = [
  { name: "index", title: "Home", icon: icons.home },
  { name: "subscriptions", title: "Subscriptions", icon: icons.wallet },
  { name: "insights", title: "Insights", icon: icons.activity },
  { name: "settings", title: "Settings", icon: icons.setting },
];

export const HOME_USER = {
  name: "Adrian | JS Mastery",
};

export const HOME_BALANCE = {
  amount: 2489.48,
  nextRenewalDate: getFutureRenewal(18),
};

export const UPCOMING_SUBSCRIPTIONS: UpcomingSubscription[] = [
  {
    id: "spotify",
    icon: icons.spotify,
    name: "Spotify",
    price: 5.99,
    currency: "USD",
    daysLeft: getDaysLeft(2),
  },
  {
    id: "notion",
    icon: icons.notion,
    name: "Notion",
    price: 12.0,
    currency: "USD",
    daysLeft: getDaysLeft(4),
  },
  {
    id: "figma",
    icon: icons.figma,
    name: "Figma",
    price: 15.0,
    currency: "USD",
    daysLeft: getDaysLeft(6),
  },
];

export const HOME_SUBSCRIPTIONS: Subscription[] = [
  {
    id: "adobe-creative-cloud",
    icon: icons.adobe,
    name: "Adobe Creative Cloud",
    plan: "Teams Plan",
    category: "Design",
    paymentMethod: "Visa ending in 8530",
    status: "active",
    startDate: "2025-03-20T10:00:00.000Z",
    price: 77.49,
    currency: "USD",
    billing: "Monthly",
    renewalDate: getFutureRenewal(18),
    color: "#f5c542",
  },
  {
    id: "github-pro",
    icon: icons.github,
    name: "GitHub Pro",
    plan: "Developer",
    category: "Developer Tools",
    paymentMethod: "Mastercard ending in 2408",
    status: "active",
    startDate: "2024-11-24T10:00:00.000Z",
    price: 9.99,
    currency: "USD",
    billing: "Monthly",
    renewalDate: getFutureRenewal(21),
    color: "#e8def8",
  },
  {
    id: "claude-pro",
    icon: icons.claude,
    name: "Claude Pro",
    plan: "Pro Plan",
    category: "AI Tools",
    paymentMethod: "Amex ending in 1010",
    status: "paused",
    startDate: "2025-06-27T10:00:00.000Z",
    price: 20.0,
    currency: "USD",
    billing: "Monthly",
    renewalDate: getFutureRenewal(23),
    color: "#b8d4e3",
  },
  {
    id: "canva-pro",
    icon: icons.canva,
    name: "Canva Pro",
    plan: "Yearly Access",
    category: "Design",
    paymentMethod: "Visa ending in 7784",
    status: "cancelled",
    startDate: "2024-04-02T10:00:00.000Z",
    price: 119.99,
    currency: "USD",
    billing: "Yearly",
    renewalDate: getFutureRenewal(28),
    color: "#b8e8d0",
  },
];
