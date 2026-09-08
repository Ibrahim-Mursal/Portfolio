# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences, roughly equal weight, both deciding whether to trust one person with something that matters to them:

- **Small business owners** — shop and cafe owners like Ibrahim's existing clients (a perfume retailer, a cafe, an electronics store), who need working software built for their specific shop and supported afterward. They are not developers; they judge by whether the thing clearly works for people like them, not by code quality.
- **Employers and recruiters** — evaluating Ibrahim for a junior developer role or internship. They judge by evidence of real, shipped, in-use software and technical range (desktop, web, backend), not by a client pitch.

## Product Purpose

A personal portfolio for Ibrahim Mursal, a fourth-year computer engineering student who builds and supports small, real software for small businesses. Success is a visitor in either audience taking the next step: a business owner reaching out to commission work, or an employer shortlisting him for an interview.

## Positioning

Not a student with class projects or tutorial clones — four pieces of software that are in daily use in real shops right now, built end to end (including going on-site, setting it up, and training the staff) and still personally supported. The claim a portfolio of coursework or personal projects could not make: "this runs in a real shop today, and I'm the one who keeps it running."

## Operating Context

- Static site, no backend of its own; content is edited directly in source (`src/data/site.ts`) and redeployed, not through a CMS.
- Visited cold, mostly once, by someone deciding quickly whether to keep reading — a shop owner on a phone, or a recruiter skimming a list of candidates.
- No case-study pages: four projects, three points each, is treated as saying more than four detailed pages nobody opens.

## Capabilities and Constraints

- Astro 5, static output, no server, no forms, no accounts, no analytics, no third-party scripts.
- Real client names and real logos only; never an invented or lookalike logo for a client whose mark isn't on hand.
- Contact is direct: email, phone, WhatsApp, LinkedIn — no contact form.
- Content lives in one file (`src/data/site.ts`); project points describe what the client's team gets, not development notes.

## Brand Commitments

- Name: Ibrahim Mursal. Role: computer engineering student (Tishk University, fourth year).
- Real, currently-in-use client work only: Sha Perfume (Label Printer desktop app, Web Catalogue), Cafe Faim (website), Shkar Store (POS system).
- The hotel reception and management roles on his CV are deliberately excluded — this is a computer engineering portfolio specifically.
- Languages: Kurdish, English, Arabic, Turkmani. Based in Hawler (Erbil), Iraq; open to remote work worldwide.

## Evidence on Hand

- Four real, shipped, in-use projects with real client names, one-line summaries, three user-facing points each, and tech stack, in `src/data/site.ts`.
- Three real client/company logos in `public/logos/` (Jir Home, Revge, Sha Perfume) for the "worked with" strip.
- No testimonials, press, or case-study detail exist beyond what's in `site.ts` — future work must not invent any.

## Product Principles

1. Every claim on the page must be checkable against something real — a shipped project, a real client, a real skill. Nothing invented to look more impressive.
2. Serve both audiences without splitting the page in two: the same four projects and the same "I build it, set it up, support it" story have to land for a shop owner and a recruiter at once.
3. Respect a cold, quick, often mobile visit — get to real proof (the work) fast, keep copy short, no reading required before the visitor can judge for themselves.
4. Four real things beat many thin things. Depth of proof over breadth of pages.
