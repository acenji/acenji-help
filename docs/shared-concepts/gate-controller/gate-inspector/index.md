# Gate Session Inspector

The **Gate Session Inspector** answers one question in plain language: **"For this session, is each of my gates working — and if a page is closed or open, why?"**

It is a read-only diagnostic built into the [Gate Controller](../). It never changes a gate, a variable, or a participant's data.

---

## Why it exists

A gate is not one setting. It combines up to three independent conditions — a [Time Lock](../add-a-gate/set-time-lock/), a [Page Access (Variable) Lock](../add-a-gate/set-variable-lock/) and a [Prior Page (Precondition) Lock](../add-a-gate/set-precondition-lock/) — and each one is evaluated **separately for every session and every participant**.

That makes gate behaviour hard to predict by reading the configuration:

- A page opens "too early" — but the time value you keep editing is not the condition that decides it.
- A page stays closed — but it is the *Prior Page Requirement*, not the clock, that is holding it.
- A gate is named "Page 10" but is actually bound to Page 1, so Page 10 is left open to everyone.

Before the Inspector, the only way to find out was to change a value, publish, and watch what a test participant experienced. That is slow, and it risks changing a live session. The Inspector shows the real answer **without touching anything**.

> **The guarantee:** the Inspector runs the *same checks the platform runs when a participant opens a page*. It cannot disagree with what participants actually experience.

---

## What it shows

For one session (and, optionally, one participant) the Inspector lists **every gate in the template**, each with:

| Part | What it tells you |
|------|-------------------|
| **Verdict pill** | `OPEN`, `BLOCKED`, `NOT YET` or `INCOMPLETE` (see below) |
| **Plain-English line** | Why the gate is in that state, e.g. *"Also working correctly — blocked by the Prior Page Requirement, not the clock."* |
| **Technical details** | Click the card to see each condition's result and the exact reason |
| **"Worth a second look" flag** | Shown when a gate looks mis-configured (see below) |
| **Try a change** | Preview an edit without saving — see [Try a Change](try-a-change/) |

A one-line summary above the list counts the gates in each state (for example *"6 open · 1 blocked · 1 not yet"*).

### The four verdicts

| Verdict | Meaning |
|---------|---------|
| **OPEN** | Every condition on the gate is satisfied right now. |
| **NOT YET** | The gate has not opened yet (its Time Lock start is still in the future). |
| **BLOCKED** | At least one condition is failing — for example the Time Lock has closed, the participant is excluded by a Page Access rule, or a required field on the prior page is empty. |
| **INCOMPLETE** | The Inspector cannot decide yet, usually because a **participant** has not been picked. |

> **Important — INCOMPLETE takes priority.** If any condition cannot be checked, the whole gate shows `INCOMPLETE`, even if another condition on it has already failed. Pick a participant to get the full answer.

---

## The three conditions

Every card refers to these. The **"What do these mean?"** link in the Inspector (and in the Edit Gate form) shows the same short legend.

| Condition | What it checks | Needs a participant? |
|-----------|----------------|----------------------|
| **Time Lock** | Opens at a set moment (a start variable plus an offset) and can close later. The only condition with a countdown. | Only if its start variable is stored **per participant** (session-level time variables need no participant) |
| **Page Access Condition** | Compares one saved value against a rule — for example, blocks the focus person and lets everyone else in. | Yes |
| **Prior Page Requirement** | Requires every required field on one chosen earlier page to be filled in first. | Yes — and the participant must have an account, because it reads *their own* saved answers |

### How the Time Lock is resolved

- **Opens at:** the gate's start time **plus the offset**. The start time is looked up in this order: (1) the session's own time variables, (2) the chosen participant's own data, (3) if neither has it, the session's start date.
  A start variable that lives in the participant's own data can only be resolved once a participant is picked.
- **Closes at:** the **session's end date** plus the *End Time Offset*.

> **Note:** the close time is measured from the **session's end date**, not from when the gate opened. If the session has **no end date**, a gate never closes by time, whatever End Time Offset is set.

> **Note:** times in the Inspector are shown in **UTC** followed by **US Eastern time (ET)**, for example *"Sep 20, 10:58 PM UTC / 6:58 PM ET"*. ET follows New York daylight saving automatically, and its date is shown only when it differs from the UTC date.

---

## Sessions: Live, Upcoming, Past

The Inspector only lists sessions that **use this gate template**. Each session is classified by its dates:

| Mode | Rule |
|------|------|
| **Live** | The session has started and has not passed its end date. |
| **Upcoming** | The session has not started yet. You can still inspect it — it is a *preview* of what will happen. |
| **Past** | The session's end date has passed. The Inspector reports **what actually happened**, not a simulation. |

> **Note:** a session with **no end date** is treated as **Live** from its start onwards and never becomes **Past**.

---

## "Worth a second look"

A red note appears on a card when the gate's own configuration looks wrong:

- **Not bound to a page** — the gate can never fire.
- **Bound to a page that no longer exists** — the gate can never fire.
- **The number in the gate's name does not match the number in its page's name** — for example a gate named "Page 10" that controls "Page 1". A gate's name is free text; it does not decide which page is gated. The page named in the gate's title is left ungated.

---

## A note on "Working correctly"

When the Inspector says a gate is *"working correctly"*, it means the gate **behaves consistently with how it is configured**. It cannot know what you *intended*. That is why the "Worth a second look" flag exists — and why it is worth reading the technical details of any gate that opens or blocks in a way you did not expect.

---

## Where to go next

- **[Inspect a Session](inspect-a-session/)** — step-by-step, with a video.
- **[Try a Change](try-a-change/)** — preview an edit and see its effect without saving, with a video.
