# GECC Sisaket Learning 2570 — Design system

## Current direction: Learning workspace (27 October 2026)
The user rejected the previous premium landing design. The current implementation follows the information architecture and navy/gold visual language of the supplied Claude / GEN1 reference: a persistent light sidebar, compact utility header, a learning overview, practical course entries and a separate reading view. It is an implemented revision, not a user-approved design.

- Light canvas #f4f7fc; white surfaces; navy #142c67; blue #2f64cb; gold #f0d393.
- Sarabun is the looped Thai font for headings and body text. Avoid oversized editorial headings.
- Desktop sidebar 238px; main content maximum 1190px. Mobile switches to a collapsible menu.
- Controls have visible focus; interactive cards have short hover motion; reduced motion and the existing motion switch remain supported.
- Overview contains a course introduction, actual browser-local reading progress, three course shortcuts, two official documents and the next meeting.
- Six reading guides are editorial summaries with links to official PDFs, not certificates or official assessment decisions.
- Source of truth for the current layout is dist/workspace.css. Older light.css remains a foundation for retained sections.

## References and 21st provenance
User reference: https://claude.ai/artifact/TH7vpggH6Uo6xH7EYTrNsP
Reference source: https://github.com/kanokwipha-RX/GECC-websiteGEN1
21st Tabs by coss.com (CLI item 11639): the moving active indicator is adapted to existing native ARIA tabs in navigation.js. No React dependency was added.
21st Cards Stack by youcefbnm (CLI item 1832) was inspected during the earlier exploration; the rejected tilted hero has been removed from the current layout.

## Verification and boundaries
See reports/workspace-review.md and reports/responsive-workspace.json. GEN1 retains its original browser-local simulation and attribution; there is no shared backend, real PIN authentication or AI service. Reading progress uses a separate localStorage key from the original readiness checklist.
