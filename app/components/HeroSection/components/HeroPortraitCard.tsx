import Image from "next/image";
import profileImage from "@/public/profile.webp";

export function HeroPortraitCard() {
  return (
    <article className="mx-auto w-full max-w-sm rounded-2xl border border-border-soft bg-panel p-3 shadow-sm lg:mt-3">
      <div className="heroGradientAnimated relative overflow-hidden rounded-xl p-5">
        <div className="mx-auto overflow-hidden rounded-lg">
          <Image
            src={profileImage}
            alt="Abhimanyu Tuteja"
            placeholder="blur"
            preload={true}
            className="w-full object-cover"
          />
        </div>
        <div className="mt-4 rounded-lg bg-panel px-4 py-3 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-primary">
            Impact & Leadership
          </p>
          <p className="mt-1.5 text-sm italic text-text-secondary">
            &quot;Education is the most powerful tool you can use to change the
            world.&quot;
          </p>
        </div>
      </div>
    </article>
  );
}
