# AI Tools & Your Business: A Policy Guide - Slide Design

> **Next step:** Use **/deckwright:present** to generate the .pptx file.

## Visual Direction
- **Color palette**: Matching existing ai-best-practices design system
  - 60% dominant: `0A2540` (dark navy background)
  - 30% secondary: `EDEDED` text, `8B95A5` muted, `FFFFFF` light backgrounds
  - 10% accent: `635BFF` (purple) for emphasis, `FF6B8A` / `09825D` for wrong/right
  - Full palette: bg `0A2540`, lightBg `FFFFFF`, accent/glow `635BFF`, white `FFFFFF`, text `EDEDED`, muted `8B95A5`, darkText `1A1F36`, wrong `FF6B8A`, wrongBg `FEE2E8`, right `09825D`, rightBg `DCFCE7`
- **Typography**: Georgia (headings), Verdana (body). Billboard style — 44-120pt headlines.
  - Hero/impact: 100-120pt
  - Headlines: 44-54pt
  - Body: 22-28pt
  - Captions/sources: 11-16pt
- **Visual style**: Billboard — one idea per slide, generous whitespace, dark backgrounds dominate. Light backgrounds for reference/table slides. Matches builder.js and ai-best-practices.js design system exactly. Same utility functions (darkSlide, hero, bigNum, breatherSlide, sectionDivider, twoCol, wrongRight).
- **Subtle glow**: Every dark slide has a large, nearly-transparent purple oval (transparency: 96) offset to the right — this is the signature visual element across all decks.

## Slide Plan

### Slide 1: AI Tools & Your Business
**Layout**: Title (dark bg)
**Content**:
- "AI Tools & Your Business" (Georgia, 64pt, white, bold, centered)
- "A guide to choosing the right AI setup for your company" (Verdana, 22pt, muted, italic)
- "For informational purposes only — not legal advice" (Verdana, 14pt, muted)
- "Last verified: February 2026" (Verdana, 11pt, muted)
**Speaker notes**: This is a self-serve reference deck for decision makers who are responsible for AI tooling choices but are not compliance or technical experts. Provider policies change frequently — always check current documentation before making decisions. Nothing in this deck constitutes legal advice; it is intended to help companies ask the right questions and make informed choices. Consult qualified legal counsel before implementing any policy.

### Slide 2: Your team is already using AI.
**Layout**: Hero (dark bg)
**Content**:
- "Your team is already using AI." (Georgia, 54pt, white, bold)
- "The question is whether you know how." (Verdana, 28pt, muted)
**Speaker notes**: AI adoption isn't a future initiative — it's already happening. Employees are using free ChatGPT, personal Claude accounts, and whatever tools they find. The company may think it's "not doing AI yet." It is.

### Slide 3: Two scenarios
**Layout**: twoCol (dark bg)
**Content**:
- Left title: "Just ChatGPT" (accent)
- Left body: "No official tools\nEmployees use free tiers\nNo policy, no oversight\nYou think you're not doing AI"
- Right title: "Wild West" (white)
- Right body: "Too many tools\nEvery team picked their own\nNo coordination\nNobody checked the data policies"
**Speaker notes**: Both scenarios are problems. The first has no visibility — employees are using free tools with no DPA, data potentially entering training pipelines. The second embraced AI aggressively but nobody coordinated: engineering has Claude Code, marketing uses ChatGPT Plus, finance runs analysis in Claude, ops evaluates insurance claims in ChatGPT. Neither scenario has a deliberate AI policy.

### Slide 4: AI touches every department
**Layout**: Light bg, structured text
**Content**:
- Headline: "This isn't just an engineering problem" (Georgia, 40pt, darkText, bold)
- Body (Verdana, 22pt, darkText):
  - "Engineering — Claude Code, Codex, Copilot for production code"
  - "Finance — ChatGPT or Claude Code for data analysis and scripts"
  - "Marketing — content generation, image tools, copy assistance"
  - "Operations — ChatGPT evaluating claims, processing customer requests"
  - "Everyone — email drafting, research, summarisation"
**Speaker notes**: "Vibe coding" isn't just for engineers anymore — non-technical staff are using Claude Code to build analysis tools, internal scripts, and automations without engineering guardrails. This is a growing pattern that makes AI policy a whole-company concern, not just an engineering one.

### Slide 5: Transition to complication
**Layout**: Breather (dark bg, accent italic)
**Content**:
- "So what's the risk?" (Georgia, 28pt, accent, italic)
**Speaker notes**: Pause. The audience understands the situation — AI is everywhere. Now flip it. What happens when it goes wrong?

### Slide 6: Samsung incident
**Layout**: Hero (dark bg, quote style)
**Content**:
- "Samsung engineers pasted\nproprietary code into ChatGPT." (Georgia, 40pt, white, bold)
- "Company-wide ban followed." (Verdana, 28pt, muted)
- Source: "Business Insider, 2023" (Verdana, 11pt, muted, hyperlink)
**Speaker notes**: Samsung, 2023. Engineers pasted proprietary source code and confidential meeting notes into free ChatGPT. The data entered OpenAI's training pipeline. Samsung banned ChatGPT company-wide. The leak wasn't a hack or a breach — it was an employee pasting code into a free tool. Source: Business Insider.

### Slide 7: Tea App incident
**Layout**: Hero (dark bg)
**Content**:
- "72,000 photos.\n13,000 government IDs.\nLeaked to 4chan." (Georgia, 44pt, wrong, bold)
- Source: "Lawfare, 2025" (Verdana, 11pt, muted, hyperlink)
**Speaker notes**: The Tea App, 2025. A dating safety app built with rapid AI-assisted development. Promised users their government ID photos would be deleted immediately after verification. Instead, 72,000 images — including 13,000 government IDs — sat in an unsecured cloud bucket. Leaked to 4chan. Class action lawsuit filed. Three fundamentals were skipped: no data inventory, no data minimisation, no follow-through on their own policies. Source: Lawfare.

### Slide 8: EUR 15M fine
**Layout**: BigNum (dark bg)
**Content**:
- "€15M" (Georgia, 120pt, wrong, bold)
- "first GDPR fine targeting\na generative AI company" (Verdana, 28pt, muted)
- Source: "Reuters, Dec 2024" (Verdana, 11pt, muted, hyperlink)
**Speaker notes**: Italy's Garante fined OpenAI EUR 15 million in December 2024 for processing EU users' data for model training without a lawful basis, insufficient transparency, and no age verification for minors. This was the first GDPR enforcement action specifically targeting a generative AI company. The EDPB ChatGPT Taskforce investigation remains ongoing across multiple EU member states. Source: Reuters.

### Slide 9: Common thread
**Layout**: Hero (dark bg)
**Content**:
- "None required\na sophisticated attack." (Georgia, 54pt, white, bold)
**Speaker notes**: The common thread across all three incidents: no hacking, no breach, no sophisticated attack. Samsung was an employee pasting code. The Tea App was skipped fundamentals. The fine was a policy failure. These were all failures of deliberate choice — the absence of a deliberate AI policy.

### Slide 10: Transition to rules
**Layout**: Breather (dark bg, accent italic)
**Content**:
- "Five rules every decision maker\nneeds to know." (Georgia, 28pt, accent, italic)
**Speaker notes**: Transition. The audience has seen what can go wrong. Now give them the knowledge to prevent it. These five rules are a simplified summary for non-experts — not exhaustive legal guidance. Consult qualified counsel for specific obligations.

### Slide 11: Rules 1-3
**Layout**: Light bg, structured text
**Content**:
- Headline: "The rules that matter" (Georgia, 40pt, darkText, bold)
- Body (Verdana, 20pt, darkText):
  - "1" (accent, bold) + "Typing data into an AI tool = processing it" (bold) + "GDPR applies the moment personal data enters a prompt" (regular)
  - "2" (accent, bold) + "Your company is liable, not the tool" (bold) + "You're the data controller. The AI provider is the processor." (regular)
  - "3" (accent, bold) + "Free tiers are a different legal world" (bold) + "No DPA, may train on your data, no deletion controls" (regular)
**Speaker notes**: Rule 1: "Processing" under GDPR means any operation on personal data. Every prompt with a customer name is a processing event. Rule 2: The "data controller" carries primary legal liability — that's your company, not OpenAI or Anthropic. Rule 3: Enterprise tiers have DPAs, no-training guarantees, and compliance controls. Free/consumer tiers have none of this. Same tool, completely different legal standing.

### Slide 12: Rules 4-5 + fines
**Layout**: Light bg, structured text
**Content**:
- Body (Verdana, 20pt, darkText):
  - "4" (accent, bold) + "Data has to stay protected when it crosses borders" (bold) + "A DPA governs the relationship. It doesn't control geography." (regular)
  - "5" (accent, bold) + "AI literacy training is now law" (bold) + "EU AI Act Article 4. Enforceable now. Not a suggestion." (regular)
- Footer emphasis: "Fines: up to 4% global turnover (GDPR) or 7% (EU AI Act)" (Verdana, 18pt, wrong, bold)
**Speaker notes**: Rule 4: EU personal data sent to US servers needs legal cover — Standard Contractual Clauses (SCCs) are valid but carry residual Schrems-style risk. EU data residency (data never leaves the EU) is the stronger posture. A DPA alone does not solve this. Rule 5: EU AI Act Article 4 requires AI literacy training for all staff using AI tools — this is enforceable now, not a future requirement. Fines can reach 4% of global annual turnover under GDPR (Article 83) or 7% under the EU AI Act for prohibited practices (Article 99). This is a simplified summary — consult legal counsel for your specific obligations.

### Slide 13: Paying ≠ protected
**Layout**: Hero (dark bg)
**Content**:
- "Paying ≠ protected." (Georgia, 54pt, accent, bold)
- "The tier matters. Not the price tag." (Verdana, 28pt, muted)
**Speaker notes**: This is the single most common misconception. Decision makers assume "we're paying for Claude Pro / ChatGPT Plus, so we're covered." They're not. The terms, DPA, and compliance controls depend entirely on which tier you're on — not whether you're paying.

### Slide 14: Consumer vs Enterprise tiers
**Layout**: wrongRight (light bg)
**Content**:
- Headline: "Same tools. Different legal standing." (Georgia, 44pt, darkText)
- Wrong (red) card:
  - "Consumer tiers"
  - "Claude Free / Pro / Max"
  - "ChatGPT Free / Plus"
  - "GitHub Copilot Free"
  - ""
  - "Training allowed"
  - "No DPA"
  - "No compliance controls"
- Right (green) card:
  - "Enterprise tiers"
  - "Claude Team / Enterprise / API"
  - "ChatGPT Business / Enterprise"
  - "GitHub Copilot Business / Enterprise"
  - ""
  - "No training (contractual)"
  - "DPA with EU SCCs"
  - "SOC 2, ISO 27001, ISO 42001"
**Speaker notes**: Claude Pro ($20/month) is under Anthropic's Consumer Terms — training IS allowed (with opt-out), no DPA applies, the contracting entity is Anthropic PBC (US), not Anthropic Ireland. Only Claude Team/Enterprise/API are under Commercial Terms with the explicit contractual prohibition on training and the DPA with EU SCCs. Same pattern: ChatGPT Plus trains by default with account-level opt-out. GitHub Copilot Free allows training on your code. The bright line: free and consumer tiers should not be approved for work use.

### Slide 15: Transition to comparison
**Layout**: Breather (dark bg, accent italic)
**Content**:
- "So which tiers,\nfrom which providers?" (Georgia, 28pt, accent, italic)
**Speaker notes**: Transition to the provider comparison — the core reference section of the deck.

### Slide 16: Provider comparison — products & training
**Layout**: Light bg, table
**Content**:
- Headline: "The provider landscape" (Georgia, 40pt, darkText, bold)
- Subtitle: "Last verified: February 2026" (Verdana, 14pt, accent, italic)
- Table (4 columns):

| | OpenAI | Anthropic | Google | Microsoft |
|---|---|---|---|---|
| General use | ChatGPT | Claude.ai | Gemini | Copilot |
| Coding | Codex | Claude Code | Code Assist | GitHub Copilot |
| No-training tier | Business / Enterprise | Team / Enterprise / API | Workspace / Vertex | M365 / GH Business+ |

**Speaker notes**: Four providers dominate. Each offers both general-use assistants and coding tools. The no-training guarantee is available from all four — but only at enterprise tiers. OpenAI rebranded "Team" to "Business" in 2025. Codex is now a full cloud-based agentic platform (GPT-5.3-Codex, Feb 2026), not just a coding tool. Gemini Code Assist comes in Standard and Enterprise editions. M365 Copilot is a paid add-on (~$30/user/month), not included with M365 subscriptions. Provider policies change frequently — verify current terms before acting.

### Slide 17: Provider comparison — compliance & residency
**Layout**: Light bg, table
**Content**:
- Headline: "Compliance & data residency" (Georgia, 40pt, darkText, bold)
- Table (4 columns):

| | OpenAI | Anthropic | Google | Microsoft |
|---|---|---|---|---|
| DPA | Business / Enterprise / API | Team / Enterprise / API | Workspace / Vertex | M365 / Azure / GH Business+ |
| EU residency | Enterprise / Edu + API | No (via GCP / AWS) | Native (10+ EU regions) | EU Boundary + Azure |
| Transfer | SCCs (no DPF) | SCCs (Ireland entity) | CDPA | DPA + EU Boundary |

**Speaker notes**: EU data residency varies dramatically. Google: native across 10+ EU regions on Vertex AI with contractual data location commitments. OpenAI: added EU residency for Enterprise/Edu (storage at rest since Feb 2025, inference residency since Jan 2026). ChatGPT Business does NOT yet have EU residency. Microsoft: EU Data Boundary applies for M365 Copilot EU users, but Anthropic model calls and Bing web search queries are excluded (as of Jan 2026). Azure OpenAI offers EU residency via Standard/DataZone deployment. Anthropic: no direct EU residency, but Claude models available on Vertex AI and Bedrock in EU regions. Transfer mechanisms: OpenAI uses SCCs and is notably NOT DPF-certified. Anthropic uses SCCs via Anthropic Ireland Limited. Google uses its CDPA. Microsoft uses DPA + EU Data Boundary. Certification highlights: Anthropic has the broadest pure-play AI certification matrix (SOC 2 Type II, ISO 27001, ISO 42001, HIPAA, CSA STAR, NIST 800-171, FedRAMP High). All four hold ISO 42001.

### Slide 18: DPA ≠ data residency
**Layout**: Hero (dark bg)
**Content**:
- "A DPA ≠ data residency." (Georgia, 54pt, white, bold)
- "One governs the relationship.\nThe other controls the geography." (Verdana, 24pt, muted)
**Speaker notes**: A DPA (Data Processing Agreement) says: "you won't train on my data" and "you'll help me with deletion requests." It does NOT control where data is physically processed. It's a governance document, not a geography document. This distinction matters because most decision makers assume "we signed a DPA, we're compliant." A DPA is necessary but not sufficient for full compliance posture.

### Slide 19: DPA + SCCs vs EU data residency
**Layout**: twoCol (dark bg)
**Content**:
- Left title: "DPA + SCCs" (accent)
- Left body: "Legally defensible\nSame as Salesforce, M365\nData goes to US servers\nSCCs invalidated twice before"
- Right title: "EU Data Residency" (white)
- Right body: "Data never leaves the EU\nNo cross-border transfer\nNo Schrems-style risk\nStronger regulatory posture"
**Speaker notes**: DPA + SCCs is the standard practice for EU companies using US SaaS — legally valid, widely used, same posture as Microsoft 365 or Salesforce. The residual risk: SCCs have been invalidated before (Schrems I in 2015, Schrems II in 2020) and AI tools are under heightened regulatory scrutiny (EUR 15M OpenAI fine, EDPB ChatGPT Taskforce). EU data residency removes this risk entirely — data never leaves the EU, no Chapter V transfer to justify. Both are GDPR-legal. The difference is risk profile under supervisory authority scrutiny and whether your sector requires actual data localisation.

### Slide 20: 11% sensitive data
**Layout**: BigNum (dark bg)
**Content**:
- "11%" (Georgia, 120pt, wrong, bold)
- "of data pasted into ChatGPT\nis sensitive" (Verdana, 28pt, muted)
- Source: "Cyberhaven" (Verdana, 11pt, muted, hyperlink)
**Speaker notes**: Cyberhaven research found that 11% of what employees copy and paste into ChatGPT is sensitive data — customer names, financial information, proprietary content. This is not malice; it's muscle memory. Someone drafts a customer email, pastes the thread for context, and now a real name + email + complaint details are on US servers. You cannot policy your way around human behaviour at this scale.

### Slide 21: Assume PII will enter
**Layout**: Hero (dark bg)
**Content**:
- "Assume PII will enter\nyour tools." (Georgia, 54pt, accent, bold)
- "Make the default path safe enough\nthat it doesn't matter." (Verdana, 24pt, muted)
**Speaker notes**: The honest starting point for EU companies: you cannot prevent PII from entering AI tools. A customer name in an email draft, a real account number in a data analysis, a client's project details in a brainstorm. Instead of relying on unenforceable "don't paste PII" policies, make the default path safe enough that accidental PII exposure is already covered. This means EU data residency as the default for EU companies, not a secondary path.

### Slide 22: Workarounds
**Layout**: Light bg, structured text
**Content**:
- Headline: "EU data residency\nfor any provider" (Georgia, 36pt, darkText, bold)
- Body (Verdana, 20pt, darkText):
  - "Claude Code on GCP" (accent, bold) + "CLAUDE_CODE_USE_VERTEX=1 with EU region. Google's CDPA. 10+ EU regions." (regular)
  - "Claude Code on AWS" (accent, bold) + "CLAUDE_CODE_USE_BEDROCK=1 with EU region. AWS DPA. Ireland, Frankfurt." (regular)
  - "Azure OpenAI" (accent, bold) + "Standard or DataZone deployment in EU. Avoid Global deployment." (regular)
  - "M365 Copilot" (accent, bold) + "EU Data Boundary automatic. Exceptions: Anthropic calls, Bing search." (regular)
**Speaker notes**: These workarounds are the practical answer for EU companies wanting the best models with EU compliance. GCP/Vertex is the most versatile: Claude models available in Belgium, Netherlands, Frankfurt, Zurich, Paris, Milan, Finland, Warsaw, Madrid, London. Full model lineup: Opus 4.6, Sonnet 4.6, Haiku 4.5. Mistral also available. Claude Code env vars documented at code.claude.com/docs/en/third-party-integrations. Azure OpenAI (now Microsoft Foundry): use Standard or DataZone deployment, not Global. M365 Copilot's EU Data Boundary is automatic for EU users but the Anthropic subprocessor exception (added Jan 2026) is worth noting.

### Slide 23: Two-path architecture
**Layout**: twoCol (light bg)
**Content**:
- Left title: "General Work" (accent)
- Left body: "No PII\nDrafting, brainstorming\nCoding with test data\nResearch\n\nEnterprise tier + DPA"
- Right title: "PII Work" (wrong color)
- Right body: "Customer data\nFinancial records\nProduction debugging\nClaims processing\n\nEU data residency"
**Speaker notes**: The two-path architecture makes policy practical rather than restrictive. For EU companies: make the default path EU-resident, because PII will enter accidentally. For non-EU companies: the split still applies (enterprise tier for everything, extra controls for sensitive data) but without the data residency requirement. The key insight: this isn't a restrictive policy. It's an architectural choice that makes the right thing the easy thing.

### Slide 24: Department examples
**Layout**: Light bg, structured text
**Content**:
- Headline: "Every department. Same split." (Georgia, 36pt, darkText, bold)
- Body (Verdana, 22pt, darkText):
  - "Marketing writing generic copy" → "general path" (right color)
  - "Ops evaluating a real customer claim" → "PII path" (wrong color)
  - "Finance modelling with anonymised data" → "general path" (right color)
  - "Finance analysing named client accounts" → "PII path" (wrong color)
**Speaker notes**: These examples span departments deliberately — the two-path model isn't just an engineering concern. The decision is per-task, not per-department. The same person in finance might use the general path for one task and the PII path for another.

### Slide 25: Transition to resolution
**Layout**: Breather (dark bg, accent italic)
**Content**:
- "Time for the actual decision." (Georgia, 28pt, accent, italic)
**Speaker notes**: Transition. The audience has the landscape, the rules, the comparison, and the architecture. Now give them the decision framework and the concrete answer.

### Slide 26: Five questions
**Layout**: Light bg, structured text
**Content**:
- Headline: "Five questions to ask\nbefore any vendor conversation" (Georgia, 36pt, darkText, bold)
- Body (Verdana, 18pt, darkText):
  - "1" (accent, bold) + "What data touches the tool?" (bold) + "PII = enterprise tier minimum. Sensitive + EU = EU residency." (regular)
  - "2" (accent, bold) + "Where are your customers?" (bold) + "EU customers = GDPR applies. Consider residency, not just SCCs." (regular)
  - "3" (accent, bold) + "Engineering vs everyone else?" (bold) + "Different departments = different risk profiles." (regular)
  - "4" (accent, bold) + "How many tools can you manage?" (bold) + "Every tool = a DPA, a policy, training. Sweet spot: 2-3." (regular)
  - "5" (accent, bold) + "What's your compliance maturity?" (bold) + "No DPO? Pick the simplest path." (regular)
**Speaker notes**: Question 1 is the most important — it determines minimum tier and whether EU residency matters. Question 4 is the most underestimated — every tool is a DPA to sign, a policy to enforce, an integration to secure, and a training burden. Fewer tools managed well beats many tools managed poorly. Question 5 is about honesty: startups with no compliance function should pick one enterprise-tier tool with a signed DPA and keep it simple.

### Slide 27: Section divider — Recommended Setup
**Layout**: sectionDivider (dark bg)
**Content**:
- "The Recommended Setup" (Georgia, 54pt, white, bold)
- "A concrete starting point" (Verdana, 28pt, accent, italic)
**Speaker notes**: This section provides an opinionated starting point for both EU and non-EU companies. These are informed suggestions based on the research in this deck — not legal advice. Have your legal team review before implementing.

### Slide 28: EU vs non-EU recommendations
**Layout**: twoCol (light bg)
**Content**:
- Left title: "EU Companies" (accent)
- Left body: "General use:\nWorkspace Gemini, M365 Copilot,\nor ChatGPT Enterprise\n\nCoding:\nClaude Code via Vertex AI\nor GitHub Copilot Business"
- Right title: "Non-EU Companies" (accent)
- Right body: "General use:\nClaude Team or\nChatGPT Business\n\nCoding:\nClaude Code (Team/API)\nor GitHub Copilot Business"
**Speaker notes**: EU recommendation leads with providers offering native EU data handling: Google Workspace Gemini (CDPA, ISO 42001), M365 Copilot (EU Data Boundary, ~$30/user/month add-on), or ChatGPT Enterprise (EU residency for storage + inference). Claude Team is viable via SCCs but has a weaker compliance posture — no direct EU residency. For coding, Claude Code via Vertex AI or Bedrock in EU region gives EU data residency. Non-EU companies have a simpler choice: Claude Team or ChatGPT Business with a signed DPA, Claude Code directly on Team/Enterprise/API plan, or GitHub Copilot Business. If already paying for M365, evaluate Copilot before adding another tool — zero procurement overhead for DPA and compliance.

### Slide 29: The bright line
**Layout**: Hero (dark bg)
**Content**:
- "Free tiers are not approved\nfor work. Full stop." (Georgia, 44pt, wrong, bold)
**Speaker notes**: The single highest-impact policy decision: free and consumer tiers of ANY provider are not approved for work use. This includes: free ChatGPT, Claude Free/Pro/Max (Consumer Terms — training allowed), ChatGPT Plus (trains by default), GitHub Copilot Free (training allowed), consumer Copilot without M365 login. No DPA, potential training on your data, no way to honour deletion requests.

### Slide 30: Six policy components
**Layout**: Light bg, structured text
**Content**:
- Headline: "What your AI policy needs" (Georgia, 36pt, darkText, bold)
- Subtitle: "A starting point — adapt with your legal team" (Verdana, 16pt, accent, italic)
- Body (Verdana, 18pt, darkText):
  - "1" (accent, bold) + "Approved tools list" (bold) + "Which tools, which tiers. Living document." (regular)
  - "2" (accent, bold) + "Data classification" (bold) + "What can vs cannot go into AI tools." (regular)
  - "3" (accent, bold) + "The two-path rule" (bold) + "General work vs PII-safe setup." (regular)
  - "4" (accent, bold) + "Incident reporting" (bold) + "PII in unapproved tool = potential breach. 72-hour notification." (regular)
  - "5" (accent, bold) + "AI literacy training" (bold) + "EU AI Act Article 4. Legal requirement." (regular)
  - "6" (accent, bold) + "Roles & responsibilities" (bold) + "Who approves, monitors, responds." (regular)
**Speaker notes**: This is a starting point, not an exhaustive policy. Have your legal team review and adapt it. Templates: GDPR Local offers a free AI literacy policy template, FRSecure has an AI acceptable use policy template. The most overlooked component is incident reporting — employees need to know what to do if they accidentally paste PII into an unapproved tool. Treat it as a potential data breach (72-hour GDPR notification requirement). AI literacy training is enforceable under EU AI Act Article 4 — not optional. Make it clear: the company is liable (not individual employees), but individuals must follow the policy.

### Slide 31: Transition to closing
**Layout**: Breather (dark bg, accent italic)
**Content**:
- "And remember..." (Georgia, 28pt, accent, italic)
**Speaker notes**: Pause before the closing. The audience has the framework, the comparison, the recommendation, and the policy checklist. Now tie it together.

### Slide 32: Closing part 1
**Layout**: Hero (dark bg)
**Content**:
- "The gap between using AI safely\nand using AI recklessly\nisn't about which model\nis smartest." (Georgia, 40pt, white, bold)
**Speaker notes**: Let this land. The deck has given the reader everything they need. This closing reframes the entire deck as an empowering choice, not a restrictive burden.

### Slide 33: Closing part 2
**Layout**: Hero (dark bg, accent color)
**Content**:
- "It's about which setup\nyou choose —\nand whether you\nchoose at all." (Georgia, 44pt, accent, bold)
**Speaker notes**: The final line. The audience should leave feeling confident that they can make this decision — not that they need to hire a compliance consultancy first (though legal review of the final policy is always recommended). Callback to the opening: "Just ChatGPT" and "Wild West" both stem from the same gap — the absence of a deliberate choice.

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
