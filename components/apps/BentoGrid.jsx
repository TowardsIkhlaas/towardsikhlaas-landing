import { AppCard } from "./AppCard";

const apps = [
  {
    title: "SimplyQibla",
    description:
      "Free, accurate and beautiful Qibla finder. No ads or tracking.",
    image: "/simply-qibla.png",
    href: "https://simplyqibla.towardsikhlaas.com",
    badge: "Open Source",
    featured: true,
  },
  {
    title: "WishMyMasjid",
    description: "Wishlists for masjids. Connecting donors with masjid needs.",
    badge: "Building Now",
  },
];

export function BentoGrid() {
  return (
    <section className="w-full px-4 py-8 md:py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-8 text-center text-2xl font-bold tracking-tight md:text-3xl">
          Our Apps
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {apps.map((app, index) => (
            <AppCard key={index} {...app} />
          ))}
        </div>
      </div>
    </section>
  );
}
