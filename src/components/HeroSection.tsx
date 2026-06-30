import React from 'react';
import { siteName, heroSubtitle, githubUrl } from "@/content/site";

export function HeroSection() {
  return (
    <section className="py-20 px-4 text-center">
      <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
        {siteName}
      </h1>
      <p className="mt-6 text-lg leading-8 text-muted-foreground">
        {heroSubtitle}
      </p>
      <div className="mt-10 flex items-center justify-center">
        <a
          href={githubUrl}
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