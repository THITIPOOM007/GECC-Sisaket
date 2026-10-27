> Historical baseline before the blue redesign and GEN1 integration. For the current scope see [blue-redesign-review.md](blue-redesign-review.md).

# Functional inventory — GECC Sisaket Learning 2570

Baseline: `e472dbcf71ba222f61375992279c3579907d4691`. Rollback tag: `gecc-before-premium-redesign-2570`.

| Existing surface | Actual implementation | Preservation requirement |
|---|---|---|
| Homepage | One static Thai page, section anchors | Keep all original sections and anchor IDs |
| Navigation | Desktop links, mobile toggle, Escape close | Keep keyboard and touch operation |
| Eight strategies | Eight buttons and a native modal dialog | Preserve all eight descriptions and modal controls |
| Learning journey | Six tabs with Arrow/Home/End keys and one panel | Preserve all six weeks and related-document links |
| Readiness | Six checkboxes and progress ring | Keep `gecc-readiness-v1` localStorage key and item indices |
| Committee | Twelve entries, expandable list, appointment PDF | Preserve all entries, duties, and original file |
| Library | Twelve links, four category filters, text search, empty state | Keep original twelve source destinations accessible; add new files |
| FAQ | Four native details disclosures | Preserve and update factual content where new evidence supersedes it |
| Motion | Pause toggle, reduced-motion CSS, reveal, reading progress | Keep pause control and reduced-motion support |
| Footer | Back-to-top and source context | Preserve navigation and source context |

Not present: account registration, application authentication, course quiz/pre-test/post-test, scores, certificates, admin panel, database, server routes, AI SDK, model selection, model fallback, or app API. Hosting owner access is separate from application features.

Baseline UI checks performed before implementation: strategy dialog opens/closes; week 6 displays Click & Sent; unmatched document query shows an empty state; readiness checkbox persists across reload; test selection restored; browser error log empty. Existing library contains twelve records and eight strategy buttons.

The redesign must not manufacture accounts, grades, learner statistics, AI chat, certificates, or placeholder admin controls.
