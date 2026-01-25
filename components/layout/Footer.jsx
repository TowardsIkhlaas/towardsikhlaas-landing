export function Footer() {
  const links = [
    {
      label: "GitHub",
      href: "https://github.com/TowardsIkhlaas",
      hoverColor: "hover:text-lime-600",
    },
    {
      label: "Collaborate",
      href: "https://forms.gle/KGkR4JpjZYmysNwD6",
      hoverColor: "hover:text-amber-600",
    },
    {
      label: "Contact",
      href: "mailto:towardsikhlaas+landing@gmail.com",
      hoverColor: "hover:text-cyan-600",
    },
  ];

  return (
    <footer className="w-full border-t py-6">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-4 px-4">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-4 py-2 text-sm transition-colors duration-300 ${link.hoverColor}`}
          >
            {link.label}
          </a>
        ))}
      </div>
      <p className="mt-4 text-center text-xs text-ink-muted">
        Towards Ikhlaas © {new Date().getFullYear()}
      </p>
    </footer>
  );
}
