import { fetchOrgRepos } from "@/lib/github";
import { HeroSection } from "@/components/HeroSection";
import { ProgressionTimeline } from "@/components/ProgressionTimeline";
import { ProjectsGallery } from "@/components/ProjectsGallery";

export const revalidate = 3600;

export default async function Home() {
  const repos = await fetchOrgRepos("myhumblecoder-dev");

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50">
      <HeroSection />
      <ProgressionTimeline />
      <ProjectsGallery repos={repos} />
    </main>
  );
}