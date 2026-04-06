import { FooterMeta } from "./components/FooterMeta";

export function FooterSection() {
  return (
    <footer id="contact" className="border-t border-border-soft bg-panel">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-6 py-6 text-center sm:px-8 lg:px-12">
        <FooterMeta />
      </div>
    </footer>
  );
}
