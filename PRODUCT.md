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

Not a student with class projects or tutorial clones — real software for real shops and clients, built end to end (including going on-site, setting it up, and training the staff) and still personally supported, plus products of his own and a graduation project. The claim a portfolio of coursework or personal projects could not make: "this runs in a real shop today, and I'm the one who keeps it running." Each project carries a status stamp that says exactly how far it got (in daily use, live, delivered, ready to install, built, in progress), and the stamp is never rounded up.

## Operating Context

- Static site, no backend of its own; content is edited directly in source (`src/data/site.ts`) and redeployed, not through a CMS.
- Visited cold, mostly once, by someone deciding quickly whether to keep reading — a shop owner on a phone, or a recruiter skimming a list of candidates.
- No case-study pages: a short card per project says more than detailed pages nobody opens. Long write-ups were tried and rejected as "too much stuff".
- The source of truth for what each project is and how far it got is the project notes in his Obsidian vault, `C:\Desktop\MyBrain\01-Projects`. Re-check a status there before changing it here.

## Capabilities and Constraints

- Astro 5, static output, no server, no forms, no accounts, no analytics, no third-party scripts.
- Real client names and real logos only; never an invented or lookalike logo for a client whose mark isn't on hand.
- Contact is direct: email, phone, WhatsApp, LinkedIn — no contact form.
- Content lives in one file (`src/data/site.ts`); project points describe what the client's team gets, not development notes.

## Brand Commitments

- Name: Ibrahim Mursal. Role: computer engineering student (Tishk University, fourth year).
- Real work only, each with a true status. On the page, chosen by Ibrahim on 2026-10-31: Sha Perfume's Label Printer and Web Catalogue (each "also for Sha Attar", which is live too), Cafe Faim's website, Shkar Store's POS, and Owlava (his own studio's site). Left off on purpose, though in his vault: Sha Attar as separate cards, Mujda Mursal's portfolio site, Scent DNA, Zufrosh, Bistra. Don't add them back without asking.
- The hotel reception and management roles on his CV are deliberately excluded — this is a computer engineering portfolio specifically.
- Languages: Kurdish, English, Arabic, Turkmani. Based in Hawler (Erbil), Iraq; open to remote work worldwide.

## Evidence on Hand

- In `src/data/site.ts`: five projects, each with a one-line summary, three user-facing points, unrendered tech stack, and a **real screenshot** in `public/work/` (never a mockup). The two Sha Perfume products carry an "also for Sha Attar" install with its own status. Public links only where the work is live: cafefaim.nl and owlava.com.
- The POS screenshot shows the app's own sample stock (its partners are labelled "example owner" in the app), since the real shop install isn't back yet.
- Five real client/company logos in `public/logos/` (Jir Home, Revge, Sha Perfume, Maisoura, Sha Attar) for the "worked with" strip. Two are derived from supplied images with their backgrounds keyed out to transparency: Maisoura by redness (a grey pattern behind red lettering), and Sha Attar by colour distance from its flat slate ground (taken from the shop's profile image, not from the vectorised trace beside it, which flattens the gradients).
- No testimonials, press, or case-study detail exist beyond what's in `site.ts` — future work must not invent any.

## Product Principles

1. Every claim on the page must be checkable against something real — a shipped project, a real client, a real skill. Nothing invented to look more impressive.
2. Serve both audiences without splitting the page in two: the same few real projects, with a picture of each, have to land for a shop owner and a recruiter at once.
3. Respect a cold, quick, often mobile visit — get to real proof (the work) fast, keep copy short, no reading required before the visitor can judge for themselves.
4. Real things beat many thin things. A few chosen projects with real pictures over a long list.
