# Inspect a Session

This page shows how to use the [Gate Session Inspector](../) to see, for a real session, which gates are open and why.

<video controls preload="metadata" style="width:100%;max-width:960px;border-radius:8px;">
  <source src="/videos/gate-inspector-inspect.mp4" type="video/mp4">
  Your browser does not support embedded video.
</video>

*Video: opening the Inspector, choosing a session and a participant, and reading the verdicts. The project, gates and participants shown are demo data.*

---

## Before you start

- You need a **Gate Controller template** with at least one gate. See [Add a Gate](../../add-a-gate/).
- At least one **session must use that template**; the Inspector only lists such sessions.
- To check *Page Access* and *Prior Page Requirement* conditions you need a **participant** in that session.

---

## Steps

### 1. Open the Inspector

Go to the **Gate Controller** list. Each template row has an **Inspect** button next to **Edit Schema**. Click **Inspect**.

The window is titled **Gate Session Inspector** and shows the template name and *read-only*.

### 2. Choose a session

Use the **Session** drop-down. Sessions are grouped **Live now**, **Upcoming** and **Past**. A status line under the pickers tells you which kind you chose:

- *Live — in progress right now*
- *Upcoming — preview only, hasn't started*
- *Past — exactly what happened, not a simulation*

The Inspector picks a Live session first, otherwise a Past one — but it is always a normal drop-down, so change it whenever you like.

### 3. Choose a participant (optional, but usually what you want)

The **Participant** drop-down lists the people in that session by email. With **— none —** selected, any gate that depends on a person shows `INCOMPLETE`, and the summary line reminds you to pick a participant.

Pick a participant and the list refreshes with full answers.

### 4. Read the verdicts

Work through the cards from the top:

- A **green** stripe and `OPEN` — everything is satisfied.
- An **amber** stripe and `NOT YET` — waiting for its Time Lock start.
- A **red** stripe and `BLOCKED` — a condition is failing. The line under the name says which one.
- A **grey** stripe and `INCOMPLETE` — pick a participant.

### 5. Open the technical details

Click any card to expand it. You will see each condition the gate uses, with a ✓ (passes), ✕ (fails) or … (not yet) and the exact reason, for example *"Depends on **Page 3** — a required field there is still empty for this participant."*

> **Note:** times in these reasons are shown in **UTC** followed by **US Eastern time (ET)** — for example *"Will open Sep 20, 10:58 PM UTC / 6:58 PM ET"* — not in your own local time zone.

### 6. Act on any "Worth a second look" note

A red note under a gate's name means its own configuration looks wrong (see [what triggers it](../#worth-a-second-look)). Fix it in **Edit Schema**.

### 7. Keep the controls in view

The **Session** and **Participant** pickers, the status line and the legend stay pinned at the top while you scroll through the gates.

---

## Worked example

You open the Inspector on a Live session and pick a participant. The summary reads *"6 open · 1 blocked · 1 not yet"*.

- **Page 3** shows `NOT YET`: *"Working correctly — it just hasn't opened yet. Opens in 02:14."* Nothing to fix; the Time Lock is doing its job.
- **Page 4** shows `BLOCKED`: *"Also working correctly — blocked by the Prior Page Requirement, not the clock."* Expanding the card shows the requirement points at Page 3 and a required field there is empty for this participant.

Changing Page 4's time would never have opened it — the Prior Page Requirement is what holds it. That is exactly the kind of mix-up the Inspector is for.

---

## Troubleshooting

| What you see | Why | What to do |
|--------------|-----|------------|
| **"No sessions use this template yet"** | The Inspector lists only sessions attached to *this* gate template. | Attach a session to the template, or open the correct template. |
| **Everything says INCOMPLETE** | No participant is selected. | Pick one in the **Participant** drop-down. |
| **Participant list is empty** | The session has no participants with an email. | Add participants to the session. |
| **Prior Page Requirement stays INCOMPLETE even with a participant** | That condition reads the participant's own saved answers, so the participant must have an account. | Use a participant who has registered. |
| **A gate says "Working correctly" but not what you intended** | The Inspector confirms behaviour matches the *configuration*, not your intent. | Read the technical details and any "Worth a second look" note; adjust in **Edit Schema**. |

---

## Related

- [Gate Session Inspector — overview](../)
- [Try a Change](../try-a-change/) — preview an edit before saving it
- [Set Time Lock](../../add-a-gate/set-time-lock/) · [Set Variable Lock](../../add-a-gate/set-variable-lock/) · [Set Precondition Lock](../../add-a-gate/set-precondition-lock/)
