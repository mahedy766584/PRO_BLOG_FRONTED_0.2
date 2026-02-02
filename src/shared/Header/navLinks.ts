export type TNavItem =
  | {
    label: string;
    href: string;
    children?: never;
  }
  | {
    label: string;
    children: {
      label: string;
      href: string;
    }[];
    href?: never;
  };


export const NAV_ITEMS: TNavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Categories",
    children: [
      { label: "Web Development", href: "/home/library/web" },
      { label: "UI/UX Design", href: "/home/library/ui" },
      { label: "Backend", href: "/home/library/backend" },
    ],
  },
  {
    label: "Pages",
    children: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "FA question", href: "/faq" },
    ],
  },
];
