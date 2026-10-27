---
type: "blog"
title: "Why AI Productivity Gains Don’t Scale"
date: "2026-10-25"
category: "Organization & Process"
tags: ["AI adoption", "organizational productivity", "process design"]
excerpt: "Processes and culture that help teams avoid the illusion of speed, workslop and unsustainable work intensity."
featured: false
---

<div className="article-section">
  <p>This article began with a question from client project work. We had encountered both successful and unsuccessful AI adoption: workflows that became easier to run, alongside polished outputs that created more work for other people. We wanted to understand how to classify these patterns, anticipate the risks and manage them before they spread.</p>
  <p>What follows combines observations from practice with secondary research on AI adoption, including experiments, surveys and field studies published in 2025–2026. We distinguish those findings from our own operating recommendations. These sources examine different settings; together, they help explain why individual gains do not automatically become organizational gains.</p>
  <p>The upside is already visible. Dashboards can surface quality outliers without a manual roll-up. A database-connected Slack bot can report training-funnel counts on schedule. A bounded request in a Slack thread can become a pull request ready for review. In the work informing this article, these uses removed recurring coordination effort.</p>
  <p>But the same organization can also accumulate long documents with weak conclusions, feedback without evidence and more simultaneous work than people can sustain. The important question is what happens to a task all the way through delivery—including the work that lands on the next person.</p>
</div>

<nav aria-label="Article contents" className="my-10 border-y border-slate-200 py-5">
  <p className="mb-3 text-xs font-semibold tracking-widest text-slate-500">IN THIS ARTICLE</p>
  <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-navy-600">
    <a className="hover:underline" href="#three-pitfalls">Three pitfalls</a>
    <a className="hover:underline" href="#framework">The 2×2 framework</a>
    <a className="hover:underline" href="#operating-practices">Operating practices</a>
    <a className="hover:underline" href="#response-table">Response table</a>
  </div>
</nav>

<section id="three-pitfalls" className="article-section" aria-labelledby="pitfalls-title">
  <h2 id="pitfalls-title">Three ways individual gains fail to scale</h2>

  <h3 id="illusion-of-speed">1. The illusion of speed: feeling faster while taking longer</h3>
  <p>In METR’s early-2025 randomized trial, 16 experienced open-source developers completed 246 real issues in repositories they knew well. Tasks were assigned to allow or disallow AI. Participants mainly used Cursor Pro with Claude 3.5/3.7 Sonnet. They expected AI to reduce completion time by 24%; afterward, they estimated a 20% reduction. Actual completion time was <strong>19% longer</strong> when AI was allowed. <a className="source-link" href="https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/">[1: METR trial]</a></p>
  <blockquote>
    <p>“they still believed AI had sped them up by 20%.”</p>
    <footer>METR, <cite><a href="https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/">July 2025 research summary</a></cite></footer>
  </blockquote>
  <p>The activity analysis helps explain the gap. Across 74 labeled task recordings, time shifted away from manual coding and searching toward prompting, waiting and reviewing AI output. The researchers identified repository familiarity, complexity, implicit context, AI reliability and over-optimism as likely contributors. These are explanatory findings, rather than separately randomized causes. <a className="source-link" href="https://arxiv.org/html/2507.09089v2#S3.SS2">[2: Activity analysis]</a></p>
  <p>For a team, the risk is easy to recognize: visible iteration feels productive while the deliverable barely advances. Another prompt seems inexpensive, so exploration continues beyond the point where it helps. Our proposed response is to define the goal, completion criteria and a hard stop before starting. At the stop, either deliver a verified unit of work or deliberately change the approach.</p>
  <p className="evidence-note">Scope matters: this was experienced developers using early-2025 tools on familiar repositories. METR’s February 2026 follow-up reported that selection and measurement problems prevented a reliable estimate of the newer tools’ effect. The durable lesson is to measure delivery time in your setting. <a href="https://metr.org/blog/2026-02-24-uplift-update/">[3: Follow-up]</a></p>

  <h3 id="workslop">2. Workslop: transferring unfinished thinking to someone else</h3>
  <p>Workslop looks like completed work but leaves the recipient to interpret, verify, repair or redo it. The first HBR article introduced the problem; BetterUp’s public summary reports that roughly 40% of 1,150 surveyed U.S. desk workers had received it in the previous month, with around two hours spent resolving each incident. These are self-reports, rather than audited time records. <a className="source-link" href="https://hbr.org/2025/09/ai-generated-workslop-is-destroying-productivity">[4: HBR]</a> <a className="source-link" href="https://www.betterup.com/workslop">[5: Survey summary]</a></p>
  <p>In practice, the missing substance usually becomes clear at the handoff:</p>
  <ul>
    <li><strong>A review</strong> offers broad criticism without locating the problem or showing evidence.</li>
    <li><strong>An analysis</strong> presents figures and recommendations without explaining how one supports the other.</li>
    <li><strong>A policy guide</strong> sounds authoritative but leaves exceptions and required actions unclear.</li>
  </ul>
  <p>For illustration, a reviewer might save ten minutes by forwarding generated feedback, then consume thirty minutes of a colleague’s time as that colleague tries to locate the alleged issue. The sender’s task tracker records completion. The team has inherited a deficit.</p>
  <p>HBR’s January 2026 follow-up adds an organizational explanation. In the survey, 41% reported encouragement to use AI without detailed guidance; 53% acknowledged sending workslop at least sometimes. The authors describe a pattern linking pressure for visible AI returns, vague mandates, overloaded employees and superficial compliance that passes verification work downstream. It is an interpretation of survey evidence, not a proven causal sequence. <a className="source-link" href="https://hbr.org/2026/01/why-people-create-ai-workslop-and-how-to-stop-it">[6: Follow-up analysis]</a></p>
  <p>This changes the management response. Repeated low-quality handoffs should prompt questions about workload, guidance and responsibility for quality. Shaming AI use makes it harder to discuss how an output was produced or what remains unchecked.</p>

  <h3 id="work-intensification">3. Work intensification: capability grows faster than sustainable capacity</h3>
  <p>Berkeley researchers Aruna Ranganathan and Xingqi Maggie Ye studied one roughly 200-person U.S. technology company through eight months of observation and more than 40 interviews. Their work, presented in HBR and a university research interview in February 2026, identified three patterns: employees took on broader tasks, work entered former breaks and evenings, and multiple AI-supported threads ran simultaneously. <a className="source-link" href="https://hbr.org/2026/02/ai-doesnt-reduce-work-it-intensifies-it">[7: HBR article]</a> <a className="source-link" href="https://newsroom.haas.berkeley.edu/ai-promised-to-free-up-workers-time-uc-berkeley-haas-researchers-found-the-opposite/">[8: Researcher interview]</a></p>
  <blockquote>
    <p>“what was once extra effort becomes standard performance.”</p>
    <footer>Xingqi Maggie Ye, <cite><a href="https://newsroom.haas.berkeley.edu/ai-promised-to-free-up-workers-time-uc-berkeley-haas-researchers-found-the-opposite/">UC Berkeley Haas research interview</a></cite></footer>
  </blockquote>
  <p>People could feel momentum and expanded capability in individual sessions while feeling more stretched across the workday. This single-company, ongoing study does not establish a universal burnout effect. It does reveal a plausible management trap: newly possible work becomes an expectation before anyone decides whether it deserves the attention.</p>
  <p>Our practical implication is to separate capability from commitment. A team needs an explicit choice about which additional work to take on, which to defer and where to preserve recovery. Finishing an automated task should not silently create an obligation to start another.</p>
</section>

<section className="article-section" aria-labelledby="unit-title">
  <h2 id="unit-title">The unit of improvement is the complete workflow</h2>
  <p>These pitfalls occur at different points. METR highlights costs inside task execution. Workslop exposes costs transferred between people. Berkeley’s observations draw attention to costs that accumulate across time. A productivity assessment that stops at the first draft misses all three.</p>
  <aside className="my-8 border-l-2 border-navy-500 bg-slate-50 px-6 py-5" aria-label="A practical time accounting model">
    <p className="mb-2 text-sm font-semibold text-navy-600">A practical accounting model</p>
    <p className="!m-0 text-base leading-relaxed"><strong>Net time saved</strong> = direct execution time saved − context and prompting − verification and rework − additional effort imposed on recipients.</p>
  </aside>
  <p>This is our operating model, not a formula estimated by the cited studies. It asks teams to include hidden effort in their own measurements. Quality still needs an acceptance standard, and a time saving achieved through unsustainable work intensity is unlikely to last.</p>
</section>

<section id="framework" className="mt-16" aria-labelledby="framework-title">
  <div className="article-section">
    <h2 id="framework-title">A 2×2 framework for choosing where to start</h2>
    <p>Two properties help distinguish adoption opportunities: <strong>how structured the execution method is</strong>, and <strong>how easily output quality can be measured</strong>. A known process reduces execution uncertainty; an assessable result gives the team a way to tell whether the work succeeded.</p>
  </div>

  <figure className="my-8 rounded-lg border border-slate-200 bg-white p-5 sm:p-8" aria-labelledby="matrix-title">
    <figcaption id="matrix-title" className="mb-6 text-lg font-semibold text-slate-950">AI adoption framework</figcaption>
    <div className="framework-scroll" role="region" aria-label="AI adoption framework; scroll horizontally on small screens" tabIndex="0">
    <div className="framework-chart">
    <div className="framework-column-labels">
      <p className="text-center text-sm font-semibold text-navy-600">Output quality: easy to measure</p>
      <p className="text-center text-sm font-semibold text-slate-600">Output quality: hard to measure</p>
    </div>
    <div className="framework-body">
      <div className="framework-y-labels">
        <div className="framework-y-label"><span>Task execution: structured and known</span></div>
        <div className="framework-y-label"><span>Task execution: unstructured</span></div>
      </div>
    <div className="framework-quadrants">
      <span className="framework-axis framework-axis-x" aria-hidden="true" />
      <span className="framework-axis framework-axis-y" aria-hidden="true" />
      <section className="quadrant bg-blue-50/70" aria-labelledby="quadrant-a">
        <p className="quadrant-axis">More structured · Easy to measure</p>
        <h3 id="quadrant-a"><span className="quadrant-letter">A</span> Automate reliably</h3>
        <p>Known steps with testable results.</p>
        <p className="quadrant-example">Testable code changes, dashboard refreshes, structured data cleanup.</p>
        <p className="quadrant-action">Define rules and checks; automate within them.</p>
      </section>
      <section className="quadrant" aria-labelledby="quadrant-c">
        <p className="quadrant-axis">More structured · Hard to measure</p>
        <h3 id="quadrant-c"><span className="quadrant-letter">C</span> Apply with controls</h3>
        <p>A repeatable process with quality that requires judgment or later outcomes.</p>
        <p className="quadrant-example">Hiring interviews, peer feedback, performance reviews.</p>
        <p className="quadrant-action">Require evidence; people own the decision.</p>
      </section>
      <section className="quadrant bg-blue-50/70" aria-labelledby="quadrant-b">
        <p className="quadrant-axis">Less structured · Easy to measure</p>
        <h3 id="quadrant-b"><span className="quadrant-letter">B</span> Explore and test</h3>
        <p>A new method with clear performance criteria.</p>
        <p className="quadrant-example">New algorithms, analytical methods, forecast models.</p>
        <p className="quadrant-action">Compare against a baseline, then stop at the agreed threshold.</p>
      </section>
      <section className="quadrant" aria-labelledby="quadrant-d">
        <p className="quadrant-axis">Less structured · Hard to measure</p>
        <h3 id="quadrant-d"><span className="quadrant-letter">D</span> Experiment cautiously</h3>
        <p>Open-ended work with ambiguous success criteria.</p>
        <p className="quadrant-example">New product concepts, new process design, unfamiliar-market strategy.</p>
        <p className="quadrant-action">Keep scope small; retain contextual judgment.</p>
      </section>
    </div>
    </div>
    </div>
    </div>
    <p className="framework-scroll-hint">Scroll horizontally to view the full framework.</p>
  </figure>

  <div className="article-section">
    <p>Use the framework for a specific workflow or step. A single job may span several quadrants. Generating a candidate-screening summary, judging the evidence and making a hiring decision can require different controls.</p>
    <p>Novelty alone does not make AI unsuitable. A new forecasting approach can be tested against held-out data, making it a good candidate for quadrant B. Conversely, a recurring performance review can remain hard to evaluate despite a familiar template. Repetition does not remove the need for judgment.</p>

    <h3 className="quadrant-discussion-title"><QuadrantTracker quadrant="A" /><span>Quadrant A in practice: Stripe Minions</span></h3>
    <p>In February 2026, Stripe reported more than 1,000 merged pull requests per week whose code was entirely produced by its Minions agents, with human review. The workflow connects Slack requests to repository context, isolated development environments, automated linting and tests, and reviewable pull requests. Stripe also caps the automated CI loop at two rounds. <a className="source-link" href="https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents">[9: Stripe engineering report]</a></p>
    <p>This is a company-reported operating result, not a causal estimate of organization-wide productivity. Its useful design feature is concrete: context and checks are part of the workflow, and iteration has a limit. That is why we place this use in quadrant A.</p>

    <h3 className="quadrant-discussion-title"><QuadrantTracker quadrant="C" /><span>Quadrant C in practice: AI interviews, human hiring decisions</span></h3>
    <p>A field experiment with PSG Global Solutions, conducted in 2025 and described in Jabarian and Henkel’s September 2026 working paper, randomized 67,056 eligible applications across AI interviews, human interviews and a choice condition. The setting was entry-level customer-service recruitment. Both interview modes used the same guidelines; human recruiters made every hiring decision. <a className="source-link" href="https://luca-henkel.github.io/papers/InterviewAI.pdf">[10: Field experiment]</a></p>
    <p>The offer rate was 9.73% after AI interviews versus 8.70% after human interviews: <strong>1.03 percentage points, or about 12% higher</strong>. Job starts and employment lasting at least one month also increased among assigned applicants. The researchers interpreted the pattern as more consistent, adaptive information collection.</p>
    <p>We place this workflow in quadrant C because running an interview is structured while assessing the information and the applicant still requires judgment. The study measured downstream outcomes; our placement does not imply that hiring quality is unmeasurable. Nor does the result establish the same benefit for specialist-expert selection.</p>
  </div>
</section>

<section id="operating-practices" className="article-section" aria-labelledby="practices-title">
  <h2 id="practices-title">Operating practices that make the gains usable</h2>
  <p>The following practices combine the research with our own recommendations. They should be tested in the team’s context, with clear ownership for both the output and the effort required to use it.</p>

  <h3>Give generation a completion condition</h3>
  <p>Before a session starts, specify the decision or deliverable, the evidence required and the stopping point. For a model comparison, that might mean a fixed test set, baseline and performance threshold. For a process proposal, it might mean one recommendation with assumptions and unresolved questions.</p>
  <p>Deliver in completed units. A hard stop should lead to a usable result or an explicit change of plan. An unfinished document needs a draft label and a clear request for the review it requires. Additional ideas can go into a backlog instead of expanding the current task indefinitely.</p>

  <h3>Make the author responsible for a usable handoff</h3>
  <p>Before sharing a document or review, the author should check the claims, connect conclusions to evidence and remove material that does not help the reader. When the writing makes the audience work too hard, the author should edit for legibility and clarity. Cutting irrelevant content is part of completing the work.</p>
  <p>This does not require manual approval of every automated output. A validated, recurring KPI bot can use automated checks and periodic audits. New claims, contextual judgments and consequential recommendations need a person who can explain and stand behind them.</p>
  <p>For a review, the difference is tangible. <em>Illustrative example:</em> “Improve the screening process” leaves the colleague to diagnose the issue. “The tracker’s completion count includes duplicate expert IDs; here are three examples, the affected query and the proposed correction” gives them something they can act on.</p>

  <h3>Make uncertainty safe to discuss</h3>
  <p>Normalize saying that AI helped draft an output. More useful than a disclosure alone is a clear distinction between confirmed facts with evidence, interpretations and unresolved claims. The recipient should know what can support a decision and what still needs work.</p>
  <blockquote>
    <p>“For our participants, trust in their team reduced workslop by 61%.”</p>
    <footer>Niederhoffer, Robichaux and Hancock, <cite><a href="https://mediapool.hm.edu/media/fk10/fk10_lokal/relaunch_3/masterstudiengaenge_1/hrm/eignungspruefung/why-people-create-ai-workslop-and-how-to-stop-it-EBSCO-FullText-01_30_2026.pdf#page=7">HBR, January 2026, p. 7</a></cite></footer>
  </blockquote>
  <p>Here, trust includes admitting AI use, questioning quality and asking for feedback without stigma. The 61% figure is an association reported from survey analysis, not the effect of a trust-building intervention. It supports taking the social conditions of AI work seriously. <a className="source-link" href="https://hbr.org/2026/01/why-people-create-ai-workslop-and-how-to-stop-it">[6]</a></p>
  <p>Leaders can make this practical by discussing incomplete evidence without blame, giving role-specific examples of acceptable work and addressing repeated poor handoffs. If the same person is always repairing everyone else’s output, the team needs to recognize and resolve that workload.</p>

  <h3>Protect focus and sustainable capacity</h3>
  <p>The Berkeley researchers recommend intentional pauses, sequencing and human grounding: moments to reconsider decisions, coherent phases of work and protected dialogue. <a className="source-link" href="https://newsroom.haas.berkeley.edu/ai-promised-to-free-up-workers-time-uc-berkeley-haas-researchers-found-the-opposite/">[8]</a></p>
  <p>Our application is to batch non-urgent outputs, preserve focused work and end times, and keep regular human check-ins. Managers should decide explicitly how to use newly available capacity. Teams need permission to decline additional low-priority work, even when AI makes starting it easy.</p>
</section>

<section id="response-table" className="mt-16" aria-labelledby="response-title">
  <div className="article-section">
    <h2 id="response-title">Match the response to the problem</h2>
    <p>A general instruction to “use AI better” leaves too much unresolved. The response needs to address the specific cost that the workflow is creating.</p>
  </div>
  <div className="my-8 overflow-x-auto rounded-lg border border-slate-200" role="region" aria-label="Responses to the three AI adoption pitfalls" tabIndex="0">
    <table className="response-table w-full min-w-[760px] border-collapse text-left text-sm">
      <caption className="sr-only">An organizational response matched to each AI adoption pitfall</caption>
      <thead>
        <tr>
          <th scope="col">Response level</th>
          <th scope="col">Illusion of speed</th>
          <th scope="col">Workslop</th>
          <th scope="col">Intensification and fatigue</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Contributing conditions</th>
          <td>Perceived speed obscures total effort; iteration and scope keep growing.</td>
          <td>Overload, unclear guidance and weak ownership of output quality.</td>
          <td>Broader scope, parallel work and eroding recovery boundaries.</td>
        </tr>
        <tr>
          <th scope="row">Individual practice</th>
          <td>Set a goal, completion criteria and hard stop.</td>
          <td>Keep useful substance, check evidence and flag uncertainty.</td>
          <td>Prioritize, limit scope and batch non-urgent output.</td>
        </tr>
        <tr>
          <th scope="row">Team culture and process</th>
          <td>Converge on completed units of delivery.</td>
          <td>Normalize disclosure, questions and accountable review.</td>
          <td>Protect focus, breaks, end times and human check-ins.</td>
        </tr>
        <tr>
          <th scope="row">Leadership responsibility</th>
          <td>Measure total delivery effort, including verification and rework.</td>
          <td>Set role-specific guidance; address recurring quality and workload problems.</td>
          <td>Manage sustainable capacity as technical capability grows.</td>
        </tr>
      </tbody>
    </table>
  </div>
  <p className="mb-10 text-xs leading-relaxed text-slate-500">Yottabyte synthesis of the cited findings and our operating proposals. The pathways and interventions require evaluation in each organization. On small screens, scroll the table horizontally.</p>
</section>

<section className="article-section" aria-labelledby="start-title">
  <h2 id="start-title">Start with one workflow and follow the work through</h2>
  <p>Choose a recurring bottleneck. Locate it in the framework, define an acceptable result and observe the effort required from everyone involved. Compare the resulting delivery time and quality with the previous approach. Then look for costs appearing elsewhere: cleanup assigned to colleagues, delayed decisions or work spreading into recovery time.</p>
  <p>Scale the parts that produce a usable improvement. Redesign the parts that shift effort or exhaust attention. Organizational productivity depends on what people can reliably finish, understand and use together.</p>
</section>

<section id="references" className="mt-16 border-t border-slate-200 pt-8" aria-labelledby="references-title">
  <h2 id="references-title" className="mb-5 text-xl font-semibold text-slate-950">Sources and research notes</h2>
  <p className="mb-6 text-sm leading-relaxed text-slate-600">Client observations are qualitative and anonymized. The 2×2 framework and operating recommendations are Yottabyte’s synthesis. Surveys describe reported experiences; the Berkeley work is an ongoing single-company observation; Stripe’s account is self-reported; the PSG study is a working paper. BetterUp’s research and commentary come from an organization that sells workplace development services.</p>
  <ol className="reference-list space-y-4 text-sm leading-relaxed text-slate-600">
    <li id="ref-1">Joel Becker, Nate Rush, Beth Barnes and David Rein. <a href="https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/">Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity.</a> METR, July 10, 2025. Randomized field trial.</li>
    <li id="ref-2">Becker et al. <a href="https://arxiv.org/html/2507.09089v2">Same-titled research paper, arXiv:2507.09089v2.</a> July 25, 2025. See §3.2 for activity analysis and Appendix C for contributing factors.</li>
    <li id="ref-3">Joel Becker, Nate Rush, Tom Cunningham, David Rein and Khalid Mahamud. <a href="https://metr.org/blog/2026-02-24-uplift-update/">We are Changing our Developer Productivity Experiment Design.</a> METR, February 24, 2026.</li>
    <li id="ref-4">Kate Niederhoffer, Gabriella Rosen Kellerman, Angela Lee, Alex Liebscher, Kristina Rapuano and Jeffrey T. Hancock. <a href="https://hbr.org/2025/09/ai-generated-workslop-is-destroying-productivity">AI-Generated “Workslop” Is Destroying Productivity.</a> Harvard Business Review, September 22, 2025; updated September 25.</li>
    <li id="ref-5">BetterUp Labs and Stanford Social Media Lab. <a href="https://www.betterup.com/workslop">Workslop: The Hidden Cost of AI-Generated Busywork.</a> Public summary of the September 2025 survey of 1,150 U.S. desk workers.</li>
    <li id="ref-6">Kate Niederhoffer, Alexi Robichaux and Jeffrey T. Hancock. <a href="https://hbr.org/2026/01/why-people-create-ai-workslop-and-how-to-stop-it">Why People Create AI “Workslop”—and How to Stop It.</a> Harvard Business Review, January 16, 2026. <a href="https://mediapool.hm.edu/media/fk10/fk10_lokal/relaunch_3/masterstudiengaenge_1/hrm/eignungspruefung/why-people-create-ai-workslop-and-how-to-stop-it-EBSCO-FullText-01_30_2026.pdf">Publicly available full-text PDF</a>; trust passage on p. 7.</li>
    <li id="ref-7">Aruna Ranganathan and Xingqi Maggie Ye. <a href="https://hbr.org/2026/02/ai-doesnt-reduce-work-it-intensifies-it">AI Doesn’t Reduce Work—It Intensifies It.</a> Harvard Business Review, February 9, 2026.</li>
    <li id="ref-8">Laura Counts. <a href="https://newsroom.haas.berkeley.edu/ai-promised-to-free-up-workers-time-uc-berkeley-haas-researchers-found-the-opposite/">AI promised to free up workers’ time. UC Berkeley Haas researchers found the opposite.</a> UC Berkeley Haas, February 18, 2026. Interview with Xingqi Maggie Ye; observation dates are not specified.</li>
    <li id="ref-9">Alistair Gray. <a href="https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents">Minions: Stripe’s one-shot, end-to-end coding agents.</a> Stripe, February 9, 2026.</li>
    <li id="ref-10">Brian Jabarian and Luca Henkel. <a href="https://luca-henkel.github.io/papers/InterviewAI.pdf">Voice AI in Firms: A Natural Field Experiment on Automated Job Interviews.</a> Working-paper version dated September 10, 2026. Experiment conducted March–June 2025. <a href="https://arxiv.org/abs/2607.28222v2">Archived arXiv v2</a>.</li>
  </ol>
</section>
