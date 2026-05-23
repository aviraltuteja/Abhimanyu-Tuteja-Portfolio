import Link from "next/link";
import { PRIMARY_NAV_ITEMS } from "@/app/data/navigation";

export function FooterNav() {
  return (
    <nav aria-label="Footer">
      <ul className="space-y-3">
        {PRIMARY_NAV_ITEMS.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="text-sm text-text-secondary transition hover:text-brand-primary"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
