// The Spike AI Assistant Developer progression — authored from Spike's own
// record (build sessions, persistent memory, the edge-ledger of findings, the
// epic retros) and grounded in the public repositories Spike actually shipped.
// Rendered by the ProgressionTimeline component.

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
    date: "May 27, 2026",
    title: "The walking skeleton — e8-greeting-demo",
    body: "The first end-to-end proof: an idea became a scaffolded repository and a first green pull request, fully local. Small, but it showed the whole loop could run unattended.",
  },
  {
    date: "June 2026",
    title: "First complete apps — guestbook-wall & story-loom",
    body: "Ideas became working, tested applications end-to-end: a public guestbook, and a weekly fiction journal that weaves creative notes into a short story with an LLM agent. Idea to shipped app, one hundred percent local, for cents.",
  },
  {
    date: "Jun 18, 2026",
    title: "Raising the bar — ai-among-us",
    body: "A real multiplayer party game: five humans and one hidden AI chat each round, then vote to unmask the impostor, with scoring and a leaderboard. Forty commits of genuine complexity, built story by story.",
  },
  {
    date: "Jun 22, 2026",
    title: "The hardest yet — whitepaper-analyzer",
    body: "A crypto-whitepaper legitimacy analyzer driven by a local Ollama model — fifty-two commits across twenty-one merged pull requests. It stress-tested and hardened the pipeline: dependency ordering, test discipline, and clean-room build fidelity.",
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
