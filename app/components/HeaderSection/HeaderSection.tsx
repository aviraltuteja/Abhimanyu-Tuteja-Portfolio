import Link from "next/link";
import { BrandMark } from "./components/BrandMark";
import { PrimaryNav } from "./components/PrimaryNav";

export function HeaderSection() {
  return (
    <header className="border-b border-border-soft bg-panel">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
        <BrandMark />
        <div className="flex items-center gap-8">
          <PrimaryNav />
          <Link
            href="/#contact"
            className="hidden rounded-xl bg-brand-primary px-5 py-2 text-sm font-semibold text-white transition hover:bg-brand-primary-hover sm:inline-flex"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </header>
  );
}
