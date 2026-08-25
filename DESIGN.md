# Language Forge — Design Contract

## World

An annotated language field desk: plum ink on warm paper, a small chartreuse field note, and a phrase treated as an object worth opening. The page is a quiet practice instrument, not a course dashboard.

## System

- Palette: ink `#211b39`, plum `#4b3f72`, warm paper `#f6f1e8`, chartreuse `#d8ea74`, coral for focus and feedback.
- Typography: Georgia carries the remembered phrase and editorial voice; Courier New is reserved for labels and session data.
- Composition: one large statement, a narrow phrase bank, an open phrase sheet, and a session map. No equal card grid.
- Interaction: phrase selection resets the answer state; answer selection is visibly picked; checking produces explicit success/error feedback; progress uses transform scale rather than layout animation.
- Responsive: three columns become bank → phrase sheet → session map; controls stack to full-width touch targets on small screens.

## Motion

Only state changes carry motion: the progress bar scales from its left edge and selected rows change surface. Respect the browser's reduced-motion preference through the absence of entrance choreography.
