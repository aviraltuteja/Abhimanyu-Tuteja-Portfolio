import Link from "next/link";

type NavItem = {
  label: string;
  href: string;
};

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Method", href: "/#approach" },
  { label: "Outcomes", href: "/#outcomes" },
  { label: "Gallery", href: "/photo-gallery" },
  { label: "Start", href: "/#start" },
];

export function PrimaryNav() {
  return (
    <nav aria-label="Primary" className="hidden md:block">
      <ul className="flex items-center gap-7">
        {NAV_ITEMS.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="text-sm font-medium text-text-secondary transition hover:text-text-primary"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
