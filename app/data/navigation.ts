export type NavItem = {
  label: string;
  href: string;
};

export const PRIMARY_NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Journey", href: "/journey" },
  { label: "Gallery", href: "/photo-gallery" },
  { label: "Blogs", href: "/blogs" },
];
