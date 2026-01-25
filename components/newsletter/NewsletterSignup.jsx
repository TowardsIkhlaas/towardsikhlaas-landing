import Script from "next/script";

export function NewsletterSignup() {
  return (
    <section className="w-full py-4 px-4">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
          Build for Muslims!
        </h2>
        <p className="mt-2 text-ink-muted">
          Sign up for our monthly newsletter to see:
        </p>
        <ul className="mt-2 text-sm text-ink-muted text-center list-inside">
          <li>Apps Muslims are building</li>
          <li>Potential jobs & tech tips</li>
          <li>And cool community stories!</li>
        </ul>

        {/* Beehiiv embed */}
        <div className="mt-6 flex justify-center">
          <Script
            async
            src="https://subscribe-forms.beehiiv.com/embed.js"
            strategy="lazyOnload"
          />
          <iframe
            src="https://subscribe-forms.beehiiv.com/72166e4f-079a-45e0-8188-d35a728a1e1f"
            className="beehiiv-embed"
            data-test-id="beehiiv-embed"
            frameBorder="0"
            scrolling="no"
            style={{
              width: "408px",
              height: "55px",
              margin: 0,
              borderRadius: 0,
              backgroundColor: "transparent",
              boxShadow: "none",
              maxWidth: "100%",
            }}
          />
        </div>
      </div>
    </section>
  );
}
