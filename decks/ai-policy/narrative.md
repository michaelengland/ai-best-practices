# AI Tools & Your Business: A Policy Guide - Narrative

> **Next step:** Use **/deckwright:craft** to structure this narrative into a content outline.

## Overview
- **Audience**: Company decision makers (founders, CTOs, COOs, Heads of Ops) who are responsible/liable for technical and compliance decisions but are not experts in either. Spans startups to mid-sized companies.
- **Purpose**: Empower the audience to make an informed vendor decision and implement a basic AI usage policy. For those who want a concrete answer, provide a recommended setup. For those who want to evaluate themselves, provide a decision framework. The audience should leave feeling confident, not scared.
- **Key message**: You need AI tools to stay competitive, but the gap between "using AI" and "using AI well" is a policy and tooling choice — not a technical one. The right setup lets your whole company move fast without creating liability.
- **Framework**: Situation → Complication → Resolution (SCR)
- **Format**: Self-serve / send-ahead (slides must stand alone without a presenter)

## Narrative Arc

### SITUATION: Your Team Is Already Using AI

**Opening hook**: "Your team is already using AI. The question is whether you know how."

Present two scenarios the reader immediately recognises:

**Scenario 1 — "Just ChatGPT"**: The company hasn't formally adopted AI tools. No budget, no policy, no official tooling. But employees are already using free ChatGPT, personal Claude accounts, whatever they find — to draft emails, summarise documents, write scripts. The company thinks it's "not doing AI yet." It is.

**Scenario 2 — "Wild West"**: The company embraced AI aggressively. Engineering has Claude Code, marketing uses ChatGPT Plus, sales tried Gemini, finance is running analysis in Claude, ops is evaluating insurance claims in ChatGPT. Every team picked what worked for them. Nobody coordinated. Nobody checked the data policies.

**The breadth of AI usage**: This isn't just an engineering problem. AI touches every department:
- **Engineering**: Claude Code, Codex, Copilot for production code
- **Finance**: Claude Code or ChatGPT for data analysis and scripts
- **Marketing**: Content generation, image tools, copy assistance
- **Operations**: ChatGPT evaluating claims, processing customer requests (PII-heavy)
- **Everyone**: Email drafting, research, summarisation, document review

And "vibe coding" isn't just for engineers anymore — non-technical staff are using Claude Code to build analysis tools, internal scripts, and automations without any engineering guardrails.

**The FOMO is real**: Competitors using AI effectively are shipping faster, operating leaner, making better decisions. The cost of doing nothing is falling behind. But the cost of doing it wrong is worse.

**Landing**: You need AI tools. You need them now. But you need to choose deliberately.

---

### COMPLICATION: The Risk You Might Not See

#### Layer 1: What Can Go Wrong

Three real incidents, escalating in severity:

**Samsung (2023)**: Engineers pasted proprietary source code and confidential meeting notes into ChatGPT. The data entered OpenAI's training pipeline. Samsung banned ChatGPT company-wide. The leak wasn't a hack — it was an employee pasting code into a free tool.

**The Tea App (2025)**: A dating safety app built with rapid AI-assisted development. Promised users their government ID photos would be deleted immediately after verification. Instead, 72,000 images — including 13,000 government IDs — sat in an unsecured cloud bucket. Leaked to 4chan. Class action lawsuit filed. Three fundamentals were skipped: no data inventory, no data minimisation, no follow-through on their own policies.

**OpenAI fined EUR 15M (December 2024)**: Italy's Garante fined OpenAI for processing EU users' data for model training without a lawful basis, insufficient transparency, and no age verification. The first GDPR enforcement action specifically targeting a generative AI company.

*The common thread: none of these required a sophisticated attack. They were all failures of deliberate choice.*

#### Layer 2: GDPR for Humans

Five rules. If the audience remembers nothing else from this deck, remember these:

**Rule 1 — Typing data into an AI tool = processing it.**
Under GDPR, "processing" means virtually any operation on personal data — collection, storage, retrieval, use, transmission. The moment a customer name, email, or record enters a prompt, GDPR applies in full. Every prompt with personal data is a processing event.

**Rule 2 — Your company is liable, not the tool.**
The company that decides to use the AI tool is the "data controller" under GDPR. The AI provider is the "data processor." The controller carries primary legal liability. When an employee pastes customer data into ChatGPT, the company — not OpenAI, not the employee — is responsible.

**Rule 3 — Free tiers are a different legal world.**
Consumer/free tiers of AI tools generally have no Data Processing Agreement (DPA), may use your data for model training, and offer no practical way to honour deletion requests. Enterprise tiers commit to not training on your data, provide a DPA, and offer compliance controls. Same tool, completely different legal standing.

**Rule 4 — Data has to stay protected when it crosses borders.**
EU personal data sent to US servers needs legal cover. The mechanisms are: EU-US Data Privacy Framework (DPF) certification, Standard Contractual Clauses (SCCs), or EU data residency (data never leaves the EU). A DPA is necessary but not sufficient — it governs the relationship, it doesn't control geography.

**Rule 5 — AI literacy training is now law.**
EU AI Act Article 4 requires organisations deploying AI to ensure staff have "sufficient AI literacy" — understanding the capabilities, limitations, and risks of the tools they use. This is enforceable now. It's a legal requirement, not a suggestion.

**The fines are real**: Up to 4% of global annual turnover under GDPR (Article 83). Up to 7% under the EU AI Act for prohibited practices (Article 99).

#### Layer 3: Not All Providers Are Equal

**The two-setup insight**: Before comparing providers, establish the key architectural principle. Not all AI work carries the same risk:

- **General work** (no PII): Writing code with test data, drafting copy, research, brainstorming. The data isn't sensitive. A DPA + SCCs with US-based processing is fine — same legal posture as using any US SaaS.
- **PII work**: Debugging production issues with customer data, analysing financial records, evaluating insurance claims with real names. The data is sensitive. EU data residency is the stronger compliance posture — data never leaves the EU, no cross-border transfer to justify.

This isn't just for engineering. The same split applies to every department:
- Marketing writing generic copy → general path
- Ops evaluating a real customer claim → PII path
- Finance modelling with anonymised data → general path
- Finance analysing named client accounts → PII path

**Provider comparison** — four providers, two dimensions each:

**OpenAI**
- *General use*: ChatGPT (Free / Plus / Business / Enterprise). Note: "ChatGPT Team" was rebranded to "ChatGPT Business" in 2025.
- *Coding*: Codex — now a full cloud-based agentic platform (GPT-5.3-Codex as of Feb 2026), comparable to Claude Code but runs in cloud sandboxes rather than locally. Also Codex CLI (open-source, local terminal agent).
- Free/Plus tier trains on data by default. Opt-out is **account-level** via Settings > Data Controls (not per-conversation). "Temporary Chat" mode is the per-conversation alternative. Even after opting out, conversations with thumbs-up/down feedback may still be used.
- Business/Enterprise tier: no training by default, DPA available, SOC 2 Type 2, SSO (SAML). Codex within these workspaces inherits the no-training policy, but has separate "full environment" training controls in Codex Settings.
- EU data residency: **now available** for ChatGPT Enterprise and Edu (data at rest since Feb 2025; inference residency since Jan 2026). API also supports EU region projects with zero data retention. ChatGPT Business does not appear to have EU data residency yet.
- Certifications: SOC 2 Type 2, ISO 27001, ISO 27017, ISO 27018, ISO 27701, ISO 42001, CSA STAR. Pursuing FedRAMP 20x.
- Transfer mechanism: SCCs (OpenAI is **not** DPF-certified). DPA covers ChatGPT Business, Enterprise, and API.
- Notable: EUR 15M GDPR fine (Italy, Dec 2024). EDPB ChatGPT Taskforce ongoing investigation.

**Anthropic**
- *General use*: Claude.ai (Free / Pro / Max / Team / Enterprise)
- *Coding*: Claude Code
- **Critical tier distinction**: Claude Free, Pro, and Max are under **Consumer Terms** — training IS allowed (opt-out via account Privacy Settings toggle). Claude Team, Enterprise, and API are under **Commercial Terms** — explicit contractual prohibition on training ("Anthropic may not train models on Customer Content from Services"). The DPA only applies to Commercial Terms users.
- Claude Code inherits whichever terms apply to your account: Free/Pro/Max plan = Consumer Terms (training allowed with opt-out); Team/Enterprise/API = Commercial Terms (no training, DPA applies). Claude Code supports Vertex AI as a backend (`CLAUDE_CODE_USE_VERTEX=1`), Amazon Bedrock (`CLAUDE_CODE_USE_BEDROCK=1`), and Microsoft Foundry (`CLAUDE_CODE_USE_FOUNDRY=1`).
- EU data residency: **not available directly from Anthropic**. Data processed on GCP/AWS globally ("Worldwide" per subprocessor list). Transfer covered by EU SCCs via Anthropic Ireland Limited (the EEA contracting entity under Commercial Terms and Privacy Policy). Consumer Terms reference only Anthropic PBC (US entity).
- Certifications: SOC 2 Type II, ISO 27001, ISO 42001, HIPAA, CSA STAR Level 2, NIST 800-171, FedRAMP High (Claude for Government), UK Cyber Essentials (Anthropic Ireland).
- Workaround: Claude models available on Google Cloud Vertex AI in **10+ EU regions** (Belgium, Netherlands, Frankfurt, Zurich, Paris, Milan, Finland, Warsaw, Madrid, London) — full EU data residency with Google's CDPA. Google is the processor; Anthropic is a sub-processor behind Google's infrastructure. Full model lineup available including Claude Opus 4.6, Sonnet 4.6, Haiku 4.5.

**Google**
- *General use*: Gemini (Free / Advanced / Workspace add-on)
- *Coding*: Gemini Code Assist (Standard and Enterprise editions)
- Free tier (Gemini API): data may be used for improvement, **but EEA/UK/Swiss users automatically get paid-tier data terms** (no training) even on free quota. However, free-tier API cannot be used to serve EEA end-users — paid services required. Consumer Gemini app: uses a "Keep Activity" toggle; when on, data is used for improvement including model training.
- Workspace Gemini: no training ("Your content is not human reviewed or used for Generative AI model training outside your domain without permission"), DPA (Google Cloud CDPA), SOC 2, ISO 27001, ISO 42001. Gemini app within Workspace is a **core Workspace service** with enterprise data protections distinct from consumer Gemini.
- Vertex AI: no training, CDPA-covered, stateless processing. Gemini Code Assist: CDPA-covered, no training, stateless, copyright indemnification.
- EU data residency: native. Vertex AI supports **many EU regions** (Belgium, Netherlands, Frankfurt, Zurich, Paris, Milan, Finland, Warsaw, Madrid, London) with contractual data location commitments. Gemini Code Assist also has data residency commitments.
- Third-party models on Vertex (managed MaaS): **Claude and Mistral** available in EU regions. Llama is NOT available as a managed partner model (only via self-hosted Model Garden deployment). AI21 Jamba also available.
- Certifications: SOC 1/2/3, ISO 27001, ISO 27017, ISO 27018, ISO 27701, ISO 42001 (GCP, Workspace, and Gemini App all certified).

**Microsoft**
- *General use*: Copilot (consumer free tier / Microsoft 365 Copilot). Note: M365 Copilot is a **paid add-on** (~$30/user/month), not included with M365 subscriptions. M365 Copilot Chat (web-only, web-grounded) IS included free with eligible M365 plans but is more limited.
- *Coding*: GitHub Copilot (Free / Pro / Pro+ / Business / Enterprise)
- **GitHub Copilot tier distinction**: Free tier **does allow training** on your code (opt-out in settings). Business and Enterprise tiers: **no training**, prompts/suggestions for IDE completions are **not retained**, GitHub acts as data processor with DPA.
- Microsoft 365 Copilot: inherits your existing M365 compliance posture — DPA and data residency commitments carry over. Prompts and responses are NOT used to train foundation LLMs. EU Data Boundary applies for EU users, **with exceptions**: Anthropic models (added as subprocessor Jan 2026) and Bing web search queries are currently excluded from the EU Data Boundary.
- Azure OpenAI (now "Azure Direct Models in Microsoft Foundry"): GPT models with Azure's enterprise compliance infrastructure. EU data residency depends on deployment type: **Standard** (stays in chosen Azure geography) and **DataZone** (stays within EU) provide EU residency; **Global** deployment does NOT guarantee EU residency. No training on your data. Data is not shared with OpenAI.
- Certifications: SOC 2, ISO 27001, ISO 42001, HIPAA, FedRAMP, 90+ compliance offerings total.
- Consumer Copilot (without M365 login): governed by Microsoft Services Agreement, NOT the DPA. Microsoft acts as independent data controller. Treat this the same as any consumer free tier — not approved for work.

**The DPA nuance (critical for the self-serve reader)**:
- A DPA is a governance document. It says "you won't train on my data" and "you'll help me with deletion requests." It does NOT control where data is physically processed.
- DPA + SCCs = legally defensible, standard practice for EU companies using US SaaS. Same legal posture as Microsoft 365, Salesforce, etc.
- EU data residency = data never leaves the EU. No cross-border transfer to justify. No Schrems-style risk. Stronger compliance posture, especially for regulated industries or sensitive data.
- Both are GDPR-legal. The difference is risk profile under regulatory scrutiny and whether your sector requires actual data localisation.

**Workarounds — getting EU data residency where providers don't offer it directly**:
- **Claude Code on GCP**: Use Anthropic's Claude models via Google Cloud Vertex AI in EU regions (e.g. europe-west1). Get Claude's capabilities with EU data residency. Google is the processor; Anthropic is a sub-processor behind Google's infrastructure. Covered by Google's CDPA. Claude Code supports this natively via `CLAUDE_CODE_USE_VERTEX=1`.
- **Claude Code on AWS**: Use Anthropic's Claude models via Amazon Bedrock in EU regions (e.g. eu-west-1 Ireland, eu-central-1 Frankfurt). Covered by AWS's DPA. Claude Code supports this via `CLAUDE_CODE_USE_BEDROCK=1`.
- **Azure OpenAI / Microsoft Foundry**: Use OpenAI's GPT models via Azure with Standard or DataZone deployment in EU regions. Azure's compliance infrastructure instead of OpenAI's consumer service. Avoid "Global" deployment type for EU residency.
- **Why workarounds matter even for "general work"**: In practice, the line between "general work" and "PII work" is blurry. Employees will paste customer names into prompts, include real email addresses in drafts, and reference actual client details without thinking twice. See the next section for why the two-path model should account for this reality.

---

### RESOLUTION: The Deliberate Choice

#### Decision Drivers

Five questions every decision maker should ask:

**1. What data touches the tool?**
The single most important question. If employees will paste customer data, financial records, health information, or anything identifiable — the free tier of any provider is off the table. If the data is sensitive and you have EU customers, EU data residency becomes important.

**2. Where are your customers?**
EU customers = GDPR applies. This doesn't mean you must have EU data residency (SCCs are legally valid), but it does mean you need a DPA, a lawful transfer mechanism, and awareness of the regulatory risk spectrum.

**3. Engineering vs everyone else?**
Different departments have different risk profiles. Code with test data is low risk. Ops evaluating real customer claims is high risk. The policy needs to account for both — likely with different tool tiers or routing for different data types.

**4. How many tools can you manage?**
Every tool is a DPA to sign, a policy to enforce, an integration to secure, and a training burden. Fewer is better — but one tool rarely fits all use cases. The sweet spot is usually 2-3: one general-purpose assistant, one coding tool, and possibly the embedded AI you're already paying for (Microsoft Copilot).

**5. What's your compliance maturity?**
If you have a DPO and established processes, you can handle the complexity of multiple tools with different compliance postures. If you're a startup with no compliance function, pick the simplest path: one enterprise-tier tool with a signed DPA.

#### The Recommended Setup

*"If you want a concrete starting point, here's what we'd suggest."*

**The honest starting point for EU companies**: Assume PII will enter your AI tools. Not because employees are careless, but because the line between "general work" and "PII work" is invisible in practice. A customer name in an email draft, a real account number in a data analysis, a client's project details in a brainstorm — Cyberhaven found 11% of data pasted into ChatGPT is sensitive. You cannot policy your way around this. Instead, make the default path safe enough that accidental PII exposure is already covered.

**For general use (every department)**:
Pick ONE provider with EU data handling at the enterprise tier. For EU companies, the strongest options are:
- **Google Workspace Gemini** — native EU data handling under the CDPA, no training, ISO 42001
- **Microsoft 365 Copilot** (paid add-on, ~$30/user/month) — inherits M365 EU Data Boundary, no training. Note: Anthropic model calls and Bing web search queries are currently excluded from the EU Data Boundary
- **ChatGPT Enterprise** — EU data residency now available (storage at rest + inference). Note: ChatGPT Business does NOT yet offer EU data residency
- **Claude Team** — DPA with EU SCCs, no training, but data processed globally (no EU data residency from Anthropic directly). Legally defensible via SCCs, but weaker posture than providers offering actual EU residency

For non-EU companies, Claude Team or ChatGPT Business with a signed DPA is a strong and simpler default.

**For coding (engineering + vibe-coding non-engineers)**:
Claude Code or GitHub Copilot Business/Enterprise, depending on your stack and preferences.
- For EU companies needing data residency: **Claude Code via Vertex AI** (`CLAUDE_CODE_USE_VERTEX=1` with an EU region) or **Claude Code via Bedrock** (`CLAUDE_CODE_USE_BEDROCK=1` with an EU region). This gives you Claude's capabilities with EU data residency.
- For non-EU companies or general coding with test data only: Claude Code directly with Commercial Terms (Team/Enterprise/API plan — never Free/Pro/Max for work).
- GitHub Copilot Business/Enterprise: no training, no prompt retention for IDE completions. Note: GitHub Copilot Free **does** allow training.

**For embedded AI**:
If you're already paying for Microsoft 365, evaluate M365 Copilot before adding another tool. It inherits your existing compliance posture. The add-on cost (~$30/user/month) is additional, but there's zero procurement overhead for the DPA and compliance infrastructure.

**The bright line**:
Free / personal tiers of ANY provider are not approved for work use. Full stop. This includes: free ChatGPT, Claude Free/Pro/Max (Consumer Terms, training allowed), GitHub Copilot Free (training allowed), consumer Copilot without M365 login. No DPA, potential training on your data, no way to honour deletion requests. This is the single highest-impact policy decision you can make.

#### What Your AI Policy Needs

A basic AI acceptable use policy should cover:

1. **Approved tools list**: Which tools, which tiers, who approved them. Living document, reviewed regularly.
2. **Data classification**: What can go into AI tools (anonymised data, public info, test data) vs what cannot (customer PII, financial records, health data, legal privileged content).
3. **The two-path rule**: General work uses the default setup. Work involving personal/sensitive data uses the PII-safe setup with EU data residency.
4. **Incident reporting**: What to do if personal data accidentally enters an unapproved tool. Treat it as a potential data breach (72-hour notification requirement under GDPR).
5. **AI literacy training**: Required by EU AI Act Article 4. All AI users understand what the tools do with data and what's off-limits.
6. **Roles and responsibilities**: Who approves new tools, who monitors usage, who responds to incidents. The company is liable, not individual employees — but individuals must follow the policy.

#### Closing

Circle back to the opening. The two scenarios — "Just ChatGPT" and "Wild West" — both stem from the same gap: the absence of a deliberate choice.

The right AI setup isn't about which model is smartest. It's about which setup protects your data while letting your people move fast. That's not a technical decision. It's a policy decision. And it's yours to make.

---

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

## Notes
- **Self-serve format**: Slides must carry the full argument without a presenter. Speaker notes provide additional depth and source context for readers who want to go deeper.
- **Tone**: Confident and practical, not fear-mongering. The FOMO/liability tension drives the narrative but the resolution is empowering ("here's how to do this well"), not restrictive.
- **Provider comparison will date quickly**: The comparison table should note its date and flag that policies change. Consider a "last reviewed" date on the comparison slides.
- **"Vibe coding" across departments**: The deck must explicitly address non-engineering AI usage. The policy recommendations apply to every department, not just engineering.
- **The two-setup pattern**: Borrowed from the builder deck's Default/PII split. This is the architectural insight that makes the policy practical rather than just restrictive.
- **DPA nuance**: Decision makers often assume "we signed a DPA, we're compliant." The deck needs to clearly explain that DPA ≠ data residency, and both have their place depending on data sensitivity.
- **Open question**: Pricing context was not included. Decision makers will ask about cost. Consider adding per-seat pricing for the recommended tiers in the craft phase, or flagging it as "check current pricing" since it changes frequently.
- **Claude Pro/Max gap**: Claude Pro and Max are popular tiers but are under Consumer Terms (no DPA, training allowed with opt-out). This is a common gotcha — decision makers may think "we're paying, so we're covered." The deck should make this distinction very clear: paying ≠ enterprise terms. Only Team/Enterprise/API get the Commercial Terms and DPA.
- **Verification date**: All provider claims verified against official documentation on 24 February 2026. Provider policies change frequently — flag a "last verified" date on comparison slides.
