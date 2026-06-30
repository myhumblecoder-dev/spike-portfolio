import React from 'react';

export function HeroSection() {
  return (
    <section className="py-20 px-4 text-center">
      <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
        Spike AI Assistant Developer
      </h1>
      <p className="mt-6 text-lg leading-8 text-muted-foreground">
        An autonomous AI developer from myhumintblecoder-dev — turning ideas into working, deployed software, written entirely by local models.
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