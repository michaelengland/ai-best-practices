# AI Tools & Your Business: A Policy Guide - Content Outline

> **Next step:** Use **/deckwright:design** to plan slides and visual direction.

## Overview
- **Estimated duration**: ~15-20 minute self-serve read
- **Total sections**: 13
- **Narrative doc**: [narrative.md](narrative.md)
- **Disclaimer**: This deck is for informational purposes only and does not constitute legal, compliance, or regulatory advice. Companies should consult qualified legal counsel for their specific situation. All provider policies were verified on 24 February 2026 and are subject to change.

## Content Outline

### Section 1: Title — AI Tools & Your Business
**Key message**: This deck helps you make informed AI tool and policy decisions — it's a practical guide, not legal advice
**Content**:
- Title: "AI Tools & Your Business"
- Subtitle: "A guide to choosing the right AI setup for your company"
- Disclaimer: "For informational purposes only — not legal advice. Consult qualified counsel for your situation."
- "Last verified: February 2026"
**Emphasis**: high
**Speaker notes**: This is a self-serve reference deck for decision makers who are responsible for AI tooling choices but are not compliance or technical experts. Provider policies change frequently — always check current documentation before making decisions. Nothing in this deck constitutes legal advice; it is intended to help companies ask the right questions and make informed choices. Consult qualified legal counsel before implementing any policy.

### Section 2: Your team is already using AI
**Key message**: AI isn't coming — it's already in your company, whether you chose it or not
**Content**:
- Two scenarios side by side: "Just ChatGPT" (no tools, employees using free tiers quietly) vs "Wild West" (too many tools, no coordination)
- The breadth: Engineering, Finance, Marketing, Operations, everyone — not just an engineering problem
- "Vibe coding" across departments: non-engineers building scripts and automations without guardrails
**Emphasis**: medium
**Speaker notes**: Both scenarios are problems. The first has no visibility or control — the company thinks it's "not doing AI yet" but employees are already using free ChatGPT, personal Claude accounts, whatever they find. The second embraced AI aggressively but nobody coordinated: engineering has Claude Code, marketing uses ChatGPT Plus, finance runs analysis in Claude, ops evaluates insurance claims in ChatGPT. AI now spans every department — this is a whole-company policy issue, not an engineering one. Non-technical staff using Claude Code to build analysis tools and internal scripts without engineering guardrails is a growing pattern.
**Transition**: The pressure to adopt is real — competitors are moving fast. But the cost of doing it wrong is worse.

### Section 3: What can go wrong
**Key message**: These aren't hypothetical risks — real companies, real consequences, no sophisticated attacks required
**Content**:
- Samsung (2023): Engineers pasted proprietary code into free ChatGPT. Data entered training pipeline. Company-wide ban.
- Tea App (2025): 72,000 user photos including 13,000 government IDs in unsecured cloud bucket. Leaked to 4chan. Class action lawsuit.
- OpenAI fined EUR 15M (Dec 2024): Italy's Garante. First GDPR enforcement specifically targeting a generative AI company.
- The common thread: all failures of deliberate choice, not sophisticated attacks.
**Emphasis**: high
**Speaker notes**: Samsung: the leak was an employee pasting code into a free tool — not a breach, not a hack. Tea App: built with rapid AI-assisted development, promised users ID photos would be deleted immediately; instead 72,000 images sat in an unsecured bucket. Three fundamentals skipped: no data inventory, no data minimisation, no follow-through on their own policies. OpenAI fine: processing EU users' data for model training without lawful basis, insufficient transparency, no age verification. These are all public, sourced incidents. Sources: Business Insider, Lawfare, Reuters.
**Transition**: These incidents happened because companies didn't understand the rules. Here's what you need to know.

### Section 4: Five rules you need to know
**Key message**: GDPR and EU AI Act for AI tools, simplified to five rules that cover what decision makers need
**Content**:
- Rule 1: Typing data into an AI tool = processing it (GDPR applies immediately)
- Rule 2: Your company is liable, not the tool (you're the data controller)
- Rule 3: Free tiers are a different legal world (no DPA, may train on your data)
- Rule 4: Data has to stay protected when it crosses borders (DPA ≠ data residency)
- Rule 5: AI literacy training is now law (EU AI Act Article 4, enforceable now)
- The fines: up to 4% global turnover (GDPR) or 7% (EU AI Act)
**Emphasis**: high
**Speaker notes**: Rule 1: "Processing" under GDPR means any operation on personal data — collection, storage, retrieval, use, transmission. The moment a customer name enters a prompt, GDPR applies. Rule 2: The "data controller" (your company) carries primary liability, not the "data processor" (the AI provider). Rule 3: Enterprise tiers have DPAs, no-training guarantees, compliance controls — free tiers have none of this. Same tool, completely different legal standing. Rule 4: EU data sent to US servers needs legal cover — SCCs are valid but carry residual risk; EU data residency is the stronger posture. Rule 5: EU AI Act Article 4 is enforceable now; this is a legal requirement, not a suggestion. Note: this is a simplified summary to inform decisions — consult legal counsel for specific obligations.
**Transition**: Now you know the rules. But not all providers play by the same ones.

### Section 5: Paying ≠ protected
**Key message**: Paying for a tool doesn't mean you have enterprise protections — the tier matters enormously
**Content**:
- The gotcha: Claude Pro/Max, ChatGPT Plus, GitHub Copilot Free — popular or paid tiers still under consumer terms
- Claude Pro/Max: Consumer Terms, training allowed (opt-out available), no DPA
- ChatGPT Plus: trains by default (account-level opt-out), no DPA
- GitHub Copilot Free: allows training on your code
- Only Team/Enterprise/API tiers get: no training, DPA, compliance controls
- The bright line: free and consumer tiers are not approved for work use
**Emphasis**: high
**Speaker notes**: This is the single most common mistake. Decision makers assume "we're paying, so we're covered." But Claude Pro ($20/month) is under Anthropic's Consumer Terms — training is allowed (with opt-out), no DPA applies, the contracting entity is Anthropic PBC (US), not Anthropic Ireland. Only Claude Team/Enterprise/API are under Commercial Terms with the explicit contractual prohibition on training and the DPA with EU SCCs. Same pattern at OpenAI: Plus trains by default with account-level opt-out. Same at GitHub: Free tier allows training on your code. The tier distinction is the highest-impact thing to communicate in this deck.
**Transition**: So which tiers, from which providers? Let's compare.

### Section 6: The provider landscape
**Key message**: Before choosing a specific AI provider, EU companies face a structural choice: EU-native platform or direct US provider relationship
**Content**:
- The two approaches:
  - **Platform approach**: An EU-native AI platform sits in front of multiple models — one DPA with an EU company, EU data residency by default, access to all major models through one interface
  - **Direct provider approach**: Choose a tier from one of the four major US providers
- Langdock (platform approach): German GmbH, Azure Frankfurt, ISO 27001, SOC 2 Type II, no training, ~€23.20/user/month. 30+ models (Claude, GPT-5, Gemini 2.5, Mistral) with many in EU regions. Used by Merck (33k MAU), Der Spiegel, Personio, Volksbank.
- Direct provider comparison table (OpenAI / Anthropic / Google / Microsoft):

| | OpenAI | Anthropic | Google | Microsoft |
|---|---|---|---|---|
| General use | ChatGPT | Claude.ai | Gemini | Copilot |
| Coding | Codex | Claude Code | Gemini Code Assist | GitHub Copilot |
| Enterprise no-training? | Yes (Business/Enterprise) | Yes (Team/Enterprise/API) | Yes (Workspace/Vertex) | Yes (M365/Business+) |
| DPA available? | Business/Enterprise/API | Team/Enterprise/API | Workspace/Vertex | M365/Azure/GH Business+ |
| EU data residency? | Enterprise/Edu + API | No (workaround via GCP/AWS) | Native (Vertex, 10+ EU regions) | M365 EU Boundary + Azure |
| Transfer mechanism | SCCs (not DPF-certified) | SCCs via Anthropic Ireland | CDPA | DPA + EU Data Boundary |

**Emphasis**: high
**Speaker notes**: The platform/direct choice is the structural insight for EU companies. Langdock's main advantage: EU data residency by default on the standard tier — no tier gotchas, no cross-border transfer complexity, one DPA with an EU company. It supports Claude, GPT, and Gemini models, so you're not sacrificing model quality. The direct provider table remains relevant for companies with existing vendor relationships or specific model requirements. Key table observations: (1) every provider offers no-training at the right tier; (2) EU data residency varies — Google is native across 10+ EU regions, OpenAI added it for Enterprise/Edu, Microsoft has EU Data Boundary (with exceptions — Anthropic model calls and Bing queries excluded), Anthropic has no direct EU residency; (3) OpenAI is NOT DPF-certified. Provider policies change frequently — verify before acting.
**Transition**: The table shows the "what." But the gap between a DPA and actual EU data residency matters more than most people realise.

### Section 7: DPA ≠ data residency
**Key message**: A DPA is necessary but not sufficient — it governs the relationship, it doesn't control where your data goes
**Content**:
- A DPA says: "you won't train on my data" and "you'll help with deletion requests." It does NOT control geography.
- DPA + SCCs = legally defensible, same posture as using Salesforce or Microsoft 365. But data still goes to US servers.
- EU data residency = data never leaves the EU. No cross-border transfer to justify. No Schrems-style risk.
- Both are GDPR-legal. The difference is risk under regulatory scrutiny.
- The honest reality: assume PII will enter your tools. Cyberhaven found 11% of data pasted into ChatGPT is sensitive. You cannot policy your way around this.
**Emphasis**: high
**Speaker notes**: DPA + SCCs is the standard practice for EU companies using US SaaS — this isn't unusual. The residual risk is that SCCs have been invalidated before (Schrems I in 2015, Schrems II in 2020) and AI tools are under heightened regulatory scrutiny (EUR 15M OpenAI fine, EDPB ChatGPT Taskforce). EU data residency removes this risk entirely. The Cyberhaven statistic (11% sensitive data) means you cannot rely on training employees to never paste PII — the architecture must assume they will. For EU companies with EU customers handling any personal data, the stronger posture is EU data residency as the default. This is our informed opinion, not legal advice — consult counsel for your specific situation.
**Transition**: So how do you get EU data residency when your preferred provider doesn't offer it directly?

### Section 8: Workarounds — EU data residency for any provider
**Key message**: You can use your preferred AI tools with EU data residency by routing through cloud providers
**Content**:
- Claude Code on GCP Vertex AI: set `CLAUDE_CODE_USE_VERTEX=1` with EU region. Google is processor, Anthropic is sub-processor. Covered by Google's CDPA. 10+ EU regions.
- Claude Code on AWS Bedrock: set `CLAUDE_CODE_USE_BEDROCK=1` with EU region (Ireland, Frankfurt). Covered by AWS DPA.
- Azure OpenAI / Microsoft Foundry: GPT models via Azure with Standard or DataZone deployment in EU regions. Avoid "Global" deployment type.
- M365 Copilot: EU Data Boundary covers most usage for EU users, but Anthropic model calls and Bing web search queries are currently excluded.
**Emphasis**: medium
**Speaker notes**: These workarounds are the practical answer for EU companies wanting the best models with EU data compliance. The GCP/Vertex route is the most versatile — Claude models available in Belgium, Netherlands, Frankfurt, Zurich, Paris, Milan, Finland, Warsaw, Madrid, London. Full model lineup: Opus 4.6, Sonnet 4.6, Haiku 4.5. Mistral also available on Vertex in EU regions. The Claude Code environment variables are simple to configure and are documented at code.claude.com. Azure OpenAI is the equivalent for GPT models — use Standard or DataZone deployment, not Global. M365 Copilot's EU Data Boundary is automatic for EU users but the Anthropic subprocessor exception (added Jan 2026) is worth noting.
**Transition**: Now you have the landscape and the tools. Time for the actual decision.

### Section 9: The two-path architecture
**Key message**: Split your AI usage into two paths based on data sensitivity — this makes policy practical rather than restrictive
**Content**:
- General work (no PII): drafting copy, brainstorming, coding with test data, research. DPA + enterprise tier is sufficient.
- PII work: customer data, financial records, production debugging, claims processing. EU data residency is the stronger posture.
- For EU companies: make the default path EU-resident, because PII will enter accidentally
- Applies to every department:
  - Marketing writing generic copy → general path
  - Ops evaluating a real customer claim → PII path
  - Finance modelling with anonymised data → general path
  - Finance analysing named client accounts → PII path
**Emphasis**: medium
**Speaker notes**: This is the "Default / PII" split. The key insight is that this isn't restrictive — it's an architectural choice that makes the right thing the easy thing. For EU companies, the honest recommendation is: make the default path EU-resident. You can't prevent PII from entering tools, so make it safe when it does. For non-EU companies, the two-path model still applies (enterprise tier for everything, extra controls for sensitive data) but without the data residency requirement. The examples span departments deliberately — this isn't just an engineering concern.
**Transition**: With the landscape understood and the architecture chosen, here's the concrete setup.

### Section 10: Five questions to drive your decision
**Key message**: You don't need to be a compliance expert — ask these five questions to determine the right setup for your company
**Content**:
- 1. What data touches the tool? (PII = enterprise tier minimum; sensitive + EU = EU residency)
- 2. Where are your customers? (EU customers = GDPR applies, consider residency not just SCCs)
- 3. Engineering vs everyone else? (Different departments = different risk profiles)
- 4. How many tools can you manage? (Every direct provider relationship = a DPA, a tier distinction, training. EU companies evaluating from scratch: consider a platform like Langdock — one DPA, one interface, all models.)
- 5. What's your compliance maturity? (No DPO = pick the simplest path)
**Emphasis**: medium
**Speaker notes**: Question 1 is most important — determines minimum tier and whether EU residency matters. Question 4 is what most companies underestimate: each direct provider relationship is a DPA to sign, a tier distinction to communicate to employees, and a training programme to run. For EU companies, the platform approach collapses this: one DPA with an EU company, one interface for employees, one admin dashboard for policy. Question 5 is about honesty — if you don't have a DPO, pick the simplest path: Langdock or one provider at enterprise tier with a signed DPA.
**Transition**: If you want a concrete starting point instead of a framework, here's what we'd suggest.

### Section 11: The recommended setup
**Key message**: A concrete, opinionated starting point — EU companies should start with an EU-native platform
**Content**:
- **For EU companies** — assume PII will enter:
  - **Option A — EU-native platform (recommended)**: Langdock. German GmbH, Azure Frankfurt, EU data residency by default, no training, ISO 27001 + SOC 2 Type II. One DPA with an EU company. 30+ models through one interface. ~€23.20/user/month.
  - **Option B — Embedded AI**: M365 Copilot (~$30/user/month add-on, EU Data Boundary) or Google Workspace Gemini (native EU, CDPA). Worth considering regardless of your current stack — particularly if you want to minimise vendor count.
  - **Option C — Direct provider**: ChatGPT Enterprise (EU data residency available) or Claude Team (DPA + EU SCCs, no direct EU residency). Valid if you have a strong model preference or existing enterprise contract.
  - Coding: Claude Code via Vertex AI or Bedrock in EU region. GitHub Copilot Business/Enterprise.
- **For non-EU companies**:
  - General use: Claude Team or ChatGPT Business — DPA, no training, straightforward.
  - Coding: Claude Code (Team/Enterprise/API) or GitHub Copilot Business.
- **The bright line**: Free / consumer tiers are not approved for work. Full stop.
**Emphasis**: high
**Speaker notes**: The EU recommendation leads with Langdock as the default for companies evaluating from scratch — EU-native, EU data residency out of the box, no tier complexity. Options B and C are genuine alternatives: M365 Copilot and Workspace Gemini are strong regardless of your current stack (particularly seamless if you already have an enterprise agreement with Microsoft or Google), and ChatGPT Enterprise/Claude Team are valid for companies with specific model preferences or existing contracts. Claude Team via Langdock is an option if you want Claude's models with EU data residency. The bright line on free tiers is unchanged: Claude Pro/Max (Consumer Terms), ChatGPT Plus (trains by default), GitHub Copilot Free (training allowed), consumer Copilot without M365 login — all off the table for work. These are informed suggestions, not legal advice.
**Transition**: The tools are chosen. Now you need the policy to govern them.

### Section 12: What your AI policy needs
**Key message**: Six components of a basic AI acceptable use policy — a starting point to adapt with your legal team
**Content**:
- 1. Approved tools list (which tools, which tiers, living document)
- 2. Data classification (what can vs cannot go into AI tools)
- 3. The two-path rule (general work vs PII-safe setup)
- 4. Incident reporting (PII in unapproved tool = potential data breach, 72-hour notification)
- 5. AI literacy training (required by EU AI Act Article 4 — legal requirement)
- 6. Roles and responsibilities (who approves tools, who monitors, who responds)
**Emphasis**: medium
**Speaker notes**: This is a starting point, not an exhaustive policy — have your legal team review and adapt it. Templates are available: GDPR Local offers a free AI literacy policy template, FRSecure has an AI acceptable use policy template. The most overlooked component is incident reporting: employees need to know what to do if they accidentally paste PII into an unapproved tool (treat it as a potential data breach, 72-hour GDPR notification). AI literacy training is enforceable under EU AI Act Article 4 — it's not optional. Make it clear that the company is liable (not individual employees), but individuals must follow the policy.
**Transition**: Let's bring it all together.

### Section 13: The deliberate choice
**Key message**: The gap between using AI safely and using AI recklessly is a choice — and it's yours to make
**Content**:
- Callback to opening: "Just ChatGPT" and "Wild West" both stem from the same gap — the absence of a deliberate choice
- The gap between using AI safely and using AI recklessly isn't about which model is smartest
- It's about which setup you choose — and whether you choose at all
**Emphasis**: high
**Speaker notes**: Let this land. The deck has given the reader the framework, the comparison, the recommendation, and the policy checklist. The closing reframes the entire deck as an empowering choice, not a restrictive burden. The audience should leave feeling confident that they can make this decision — not that they need to hire a compliance consultancy first (though legal review of the final policy is always recommended).

## Source References

### Incidents & Enforcement
- [Samsung ChatGPT ban](https://www.businessinsider.com/samsung-chatgpt-leak-2023-4) — Samsung employees pasted proprietary code into ChatGPT (2023)
- [Tea App data exposure](https://www.lawfaremedia.org/article/when-the-vibe-are-off--the-security-risks-of-ai-generated-code) — 72,000 user photos leaked via unsecured cloud bucket (2025)
- [OpenAI EUR 15M GDPR fine](https://www.reuters.com/technology/italy-fines-openai-15-million-euros-over-privacy-rules-breach-2024-12-20/) — Italy's Garante, first GenAI-specific GDPR enforcement (Dec 2024)
- [EDPB ChatGPT Taskforce report](https://www.edpb.europa.eu/our-work-tools/our-documents/other/report-work-undertaken-chatgpt-taskforce_en) — European Data Protection Board investigation (2024)
- [LinkedIn EUR 310M fine](https://www.dataprotection.ie/en/news-media/press-releases/irish-data-protection-commission-fines-linkedin-ireland-eu310-million) — Hidden behavioural profiling (Oct 2024)
- [Clearview AI EUR 30.5M fine](https://www.autoriteitpersoonsgegevens.nl/en/current/dutch-dpa-imposes-a-fine-on-clearview-because-of-illegal-data-collection-for-facial-recognition) — Illegal facial image scraping (Sep 2024)

### GDPR & Regulation
- [GDPR Article 28 (Processor obligations)](https://gdpr-info.eu/art-28-gdpr/) — DPA requirements
- [GDPR Article 44-49 (International transfers)](https://gdpr-info.eu/art-44-gdpr/) — Cross-border data transfer rules
- [GDPR Article 83 (Penalties)](https://gdpr-info.eu/art-83-gdpr/) — Up to 4% global turnover
- [EU AI Act Article 4 (AI Literacy)](https://artificialintelligenceact.eu/article/4/) — Mandatory AI literacy training
- [EU AI Act Article 99 (Penalties)](https://artificialintelligenceact.eu/article/99/) — Up to 7% global turnover
- [EDPB guidance on international transfers](https://www.edpb.europa.eu/sme-data-protection-guide/international-data-transfers_en) — SME transfer guidance
- [TechGDPR on AI and GDPR](https://techgdpr.com/blog/ai-and-the-gdpr-understanding-the-foundations-of-compliance/) — GDPR foundations for AI

### Langdock
- [Langdock Homepage](https://langdock.com/) — platform overview, model-agnostic enterprise AI adoption
- [Langdock Security](https://langdock.com/security) — ISO 27001, SOC 2 Type II, EU hosting, no model training, DPA
- [Langdock Enterprise](https://langdock.com/enterprise) — deployment options (multi-tenant SaaS to on-premise), BYOK, interoperability
- [Langdock Trust Center FAQ](https://trust.langdock.com/faq) — GDPR compliance details: hosted in Frankfurt (Azure), EU entity, DPA in terms
- [Langdock Models](https://langdock.com/models) — full model list with EU/global region indicators
- [Langdock Pricing](https://langdock.com/pricing) — ~€23.20/user/month (Business, up to 1,000 users, AI models included)

### Provider Policies — OpenAI
- [OpenAI Enterprise Privacy](https://openai.com/enterprise-privacy/) — No-training policy, DPA, SOC 2 for Business/Enterprise (updated Jan 2026)
- [OpenAI DPA](https://openai.com/policies/data-processing-addendum/) — Covers ChatGPT Business, Enterprise, and API. Uses SCCs (not DPF-certified)
- [OpenAI Data Residency](https://help.openai.com/en/articles/9903489-data-residency-and-inference-residency-for-chatgpt) — EU data residency for Enterprise/Edu (storage + inference)
- [OpenAI Training Data Usage](https://help.openai.com/en/articles/5722486-how-your-data-is-used-to-improve-model-performance) — Free/Plus train by default, account-level opt-out
- [OpenAI Trust Portal](https://trust.openai.com/) — SOC 2 Type 2, ISO 27001/27017/27018/27701/42001, CSA STAR
- [Codex (GPT-5.3-Codex)](https://openai.com/index/introducing-gpt-5-3-codex/) — Cloud-based agentic platform (Feb 2026)

### Provider Policies — Anthropic
- [Anthropic Privacy Policy](https://www.anthropic.com/legal/privacy) — Data handling, Anthropic Ireland entity, SCCs
- [Anthropic Commercial Terms](https://www.anthropic.com/legal/commercial-terms) — "Anthropic may not train models on Customer Content" (Team/Enterprise/API)
- [Anthropic Consumer Terms](https://www.anthropic.com/legal/consumer-terms) — Governs Free/Pro/Max; training allowed with opt-out
- [Anthropic DPA](https://www.anthropic.com/legal/data-processing-addendum) — Commercial Services DPA with EU SCCs (Module 2 & 3), Irish law
- [Anthropic Trust Center](https://trust.anthropic.com) — SOC 2 Type II, ISO 27001, ISO 42001, HIPAA, CSA STAR, NIST 800-171, FedRAMP High
- [Anthropic Subprocessors](https://trust.anthropic.com/subprocessors) — GCP + AWS worldwide infrastructure
- [Claude Code Legal](https://code.claude.com/docs/en/legal-and-compliance) — Terms depend on plan tier (Consumer vs Commercial)
- [Claude Code Third-Party Integrations](https://code.claude.com/docs/en/third-party-integrations) — Vertex AI, Bedrock, and Foundry backend support

### Provider Policies — Google
- [Google Cloud CDPA](https://cloud.google.com/terms/data-processing-addendum) — Google's Data Processing Addendum
- [Google Cloud Data Residency](https://cloud.google.com/terms/data-residency) — EU data location commitments for Vertex AI and Gemini Code Assist
- [Gemini API Terms](https://ai.google.dev/gemini-api/terms) — EEA/UK/Swiss users get paid-tier data terms on free quota
- [Gemini Apps Privacy Hub](https://support.google.com/gemini/answer/13594961) — Consumer app data handling, Keep Activity toggle
- [Workspace Gemini Privacy Hub](https://support.google.com/a/answer/15706919) — No training, CDPA-covered, enterprise data protections
- [Vertex AI Locations](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/learn/locations) — 10+ EU regions for Claude and Mistral
- [Vertex AI Partner Models](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/partner-models/use-partner-models) — Claude and Mistral managed MaaS (Llama not managed)
- [Google ISO 42001](https://cloud.google.com/security/compliance/iso-42001) — GCP, Workspace, and Gemini App certified

### Provider Policies — Microsoft
- [M365 Copilot Privacy](https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-privacy) — EU Data Boundary, no LLM training, Anthropic subprocessor caveat
- [M365 Copilot Enterprise Data Protection](https://learn.microsoft.com/en-us/copilot/microsoft-365/enterprise-data-protection) — Enterprise terms carry over from M365
- [M365 Copilot Licensing](https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-licensing) — Paid add-on (~$30/user/month), not included with M365
- [Azure OpenAI Data Privacy](https://learn.microsoft.com/en-us/azure/ai-foundry/responsible-ai/openai/data-privacy) — No training, deployment types (Standard/DataZone/Global)
- [GitHub Copilot Trust Center](https://copilot.github.trust.page/faq) — Free tier allows training; Business/Enterprise do not
- [GitHub Copilot Terms](https://docs.github.com/en/site-policy/github-terms/github-terms-for-additional-products-and-features) — Tier-specific data handling
- [EU Data Boundary](https://learn.microsoft.com/en-us/privacy/eudb/eu-data-boundary-learn) — Scope and exceptions for M365 Copilot

### Other
- [Cyberhaven research](https://www.cyberhaven.com/blog/4-2-of-workers-have-pasted-company-data-into-chatgpt/) — 11% of data pasted into ChatGPT is sensitive

### Policy Templates & Guidance
- [GDPR Local AI Literacy Policy template](https://gdprlocal.com/ai-literacy-policy/) — Free AI literacy policy template
- [FRSecure AI Acceptable Use Policy](https://frsecure.com/ai-acceptable-use-policy-template/) — AUP template
- [Data Privacy Office EU on AI fines](https://data-privacy-office.eu/fines-for-gdpr-violations-in-ai-systems-and-how-to-avoid-them/) — Practical compliance guide

## Design Notes
- **Brand requirements**: Use the existing ai-best-practices design system (dark bg: 0A2540, accent: 635BFF, Georgia headings, Verdana body) for visual consistency with the other decks in this series.
- **Self-serve format**: Slides must carry the full argument without a presenter. Speaker notes provide additional depth, source citations, and nuance for readers who want to go deeper.
- **Disclaimer placement**: "Not legal advice" disclaimer should appear on the title slide and be referenced in the policy checklist section.
- **Comparison table**: Section 6's provider table is the core reference. Design it to be scannable and visually clear — readers will come back to this repeatedly.
- **Verification date**: Display "Last verified: February 2026" on the title slide and the comparison table. Provider policies change frequently.
- **Tone**: Confident and practical, not fear-mongering. The FOMO/liability tension drives the narrative but the resolution is empowering. The deck informs decisions — it doesn't prescribe them.
- **"Paying ≠ protected" section**: This deserves strong visual treatment — it's the most common misconception the deck addresses.
- **Emphasis rhythm**: High → Medium → High → High → High → High → High → Medium → Medium → Medium → High → Medium → High. Consider breather slides or visual breaks between consecutive high-emphasis sections to prevent fatigue.
