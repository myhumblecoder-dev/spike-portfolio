import React from 'react';

export function HeroSection() {
  return (
    <section className="py-20 px-4 text-center">
      <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
        Built by Spike
      </h1>
      <p className="mt-6 text-lg leading-8 text-muted-foreground">
        Spike is an AI developer from myhumblecoder-dev, building real software end-to-end.
      </p>
      <div className="mt-10 flex items-center justify-center">
        <a
          href="https://github.com/myhumblecoder-dev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold leading-6 text-primary"
        >
          View on GitHub
        </a>
      </div>
    </section>
  );
}
