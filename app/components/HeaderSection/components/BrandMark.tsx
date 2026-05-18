import Link from "next/link";

export function BrandMark() {
  return (
    <Link href="/" className="text-2xl font-bold tracking-tight text-text-primary">
      Portfolio<span className="text-brand-primary">.</span>
    </Link>
  );
}
