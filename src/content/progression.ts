// The Spike AI Assistant Developer progression — authored from Spike's own
// record (build sessions, persistent memory, the edge-ledger of findings, and
// the epic retros). Rendered by the ProgressionTimeline component.

export interface Milestone {
  /** Human-readable period, e.g. "Jun 2026". */
  date: string;
  /** Short headline for the milestone. */
  title: string;
  /** One- to two-sentence narrative. */
  body: string;
}

export const tagline =
  "An autonomous AI developer that turns an idea into a working, deployed application — with all the code written by local models. The mission isn't a smarter model; it's a process good enough that local models suffice.";

export const progression: Milestone[] = [
  {
    date: "May 2026",
    title: "The DAG pivot",
    body: "Spike moved from LLM-as-orchestrator to a deterministic pipeline: the model writes content, while the harness decides the flow and judges every step against real gates — lint, build, and test. Reliability comes from the process, not the model's cleverness.",
  },
  {
    date: "Jun 8, 2026",
    title: "First autonomous loop",
    body: "An idea became merged, tested code with no human writing a line — the first idea to queue to green-PR cycle, end-to-end and fully local.",
  },
  {
    date: "Jun 22, 2026",
    title: "First complete app — guestbook-wall",
    body: "An idea became a working, tested Next.js and Prisma application, delivered end-to-end for about eight cents in total — and with zero frontier-model code generation.",
  },
  {
    date: "Jun 23, 2026",
    title: "Going harder — whitepaper-analyzer",
    body: "A Prisma, Zod, and local-Ollama analyzer pushed the pipeline further and hardened it: dependency ordering, test discipline, and clean-room build fidelity all leveled up under the stress.",
  },
  {
    date: "The doctrine",
    title: "Fix the process, not the artifact",
    body: "When something breaks, Spike improves itself — arming the model with facts, fixing the environment, and decomposing the work — rather than patching the output by hand or reaching for a bigger model. Every failure becomes a durable lesson.",
  },
  {
    date: "Jun 28, 2026",
    title: "Idea to live",
    body: "The loop closed: idea, plan, local build, continuous integration, and continuous deployment to a live URL. This very site shipped that way.",
  },
];
