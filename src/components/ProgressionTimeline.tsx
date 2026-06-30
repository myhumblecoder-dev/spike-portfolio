import { progression, tagline } from "@/content/progression"

export function ProgressionTimeline() {
  return (
    <section className="py-24 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-zinc-50 mb-8">The Progression</h2>
      <p className="text-lg text-zinc-400 mb-12">{tagline}</p>
      
      <ol className="space-y-12">
        {progression.map((milestone, index) => (
          <li key={index} className="relative pl-8 border-l border-zinc-800">
            {/* Timeline dot */}
            <div className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-zinc-50" />
            
            <div className="flex flex-col space-y-2">
              <span className="text-sm font-medium text-zinc-500 uppercase tracking-wider">
                {milestone.date}
              </span>
              <h3 className="text-xl font-semibold text-zinc-50">
                {milestone.title}
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                {milestone.body}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}