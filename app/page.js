import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 h-full w-full bg-[radial-gradient(#333438_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_80%_at_50%_50%,#000_70%,transparent_100%)]">
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full">
        <Image
          className="relative select-none dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
          src="https://towardsikhlaas.com/towards_ikhlaas_type_logo.svg"
          alt="Towards Ikhlaas Logo"
          width={1000}
          height={33}
          priority
        />
      </div>

      <p className="fixed font-extralight left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        Open-source apps for Muslims, by Muslims.
      </p>

      <div className="mb-32 grid text-center overflow-hidden lg:max-w-5xl lg:w-full lg:mb-16 lg:grid-cols-1 lg:text-left justify-items-center items-center">
        <a
          href="https://simplyqibla.towardsikhlaas.com"
          className="group relative rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-100 hover:bg-cover hover:bg-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-none group-hover:bg-[url('https://towardsikhlaas.com/brown.jpg')] group-hover:bg-cover group-hover:bg-center transition-all duration-300"></div>
          <h2 className={`mb-3 text-2xl font-semibold relative z-10`}>
            SimplyQibla{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 relative z-10`}>
            Most accurate qibla. Open-source.
          </p>
        </a>
      </div>

      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <div className="fixed bottom-0 left-0 mb-4 flex h-12 w-full items-end justify-center p-4">
          <a
            className="flex place-items-center gap-1 px-4 py-2 hover:text-lime-400 transition-colors duration-300"
            href="https://github.com/TowardsIkhlaas"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className="flex place-items-center gap-1 px-4 py-2 hover:text-amber-400 transition-colors duration-300"
            href="https://forms.gle/KGkR4JpjZYmysNwD6"
            target="_blank"
            rel="noopener noreferrer"
          >
            Collaborate
          </a>
          <a
            className="flex place-items-center gap-2 px-4 py-2 hover:text-cyan-400 transition-colors duration-300"
            href="https://ko-fi.com/TowardsIkhlaas"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ko-Fi
          </a>
        </div>
      </div>
    </main>
  );
}
