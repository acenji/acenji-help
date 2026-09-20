# Try a Change

**Try a Change** lets you edit a gate and see what that edit would do — for a real session and a real participant — **without saving anything**.

<video controls preload="metadata" style="width:100%;max-width:960px;border-radius:8px;">
  <source src="/videos/gate-inspector-try-a-change.mp4" type="video/mp4">
  Your browser does not support embedded video.
</video>

*Video: previewing a change to a gate, reading the before/after result, and discarding the preview. The project, gates and participants shown are demo data.*

---

## Why it exists

Once the [Inspector](../) tells you *why* a gate is closed, the next question is always *"what if I change it?"*. Without a preview, the only way to find out is to edit the gate, save it and watch a test participant — which changes a **live** session and can take several rounds.

Try a Change answers "what if?" **safely**: the edit is evaluated against the real session and participant, but it is never written anywhere.

---

## How it works

1. You open **Try a change** on a gate. The normal **Edit Gate** form opens, pre-filled with that gate's saved settings, marked **"Preview only — nothing is saved."**
2. You change whatever you want and press **Preview effect**.
3. Your edited gate is sent to the platform **in place of the saved one, for this check only**, and evaluated by the *same* logic that evaluates real page loads. The saved gate is not modified.
4. The card shows the result of your change next to the saved result, for example:

   > **PREVIEW — not saved.** Saved gate: NOT YET → with your change: OPEN.

Only the gate you edited is replaced; every other gate keeps its saved settings, so you can see whether your change affects anything else.

> **Why you can trust it:** the preview does not use a separate simulation. It runs the same server-side checks as the [Inspector](../), on the same session and participant — so a preview and reality cannot drift apart.

---

## Steps

### 1. Open the Inspector and choose a session and participant

Follow [Inspect a Session](../inspect-a-session/). Pick a **participant** — many conditions cannot be evaluated without one, and a preview of an `INCOMPLETE` gate tells you little.

### 2. Click "Try a change" on a gate

Each gate card has a **Try a change** link.

### 3. Edit the gate

The **Edit Gate** form opens with a blue notice: *"Preview only — nothing is saved."* Change a Time Lock offset, a Page Access rule, a Prior Page Requirement — anything the form allows.

### 4. Press "Preview effect"

The form closes and the Inspector refreshes. The gate's card is outlined with a **dashed blue border** and shows:

- **PREVIEW — not saved.** with the *saved* result and the result *with your change*, or *"Your change doesn't alter this gate's result right now."* when nothing changes.
- **Change again** — reopen the form, starting from your previewed edit.
- **Discard preview** — drop it and return to the saved gates.

A blue bar pinned at the top of the Inspector also says *"Previewing an unsaved change to the gate you edited — nothing is saved"* with its own **Discard preview**, so you cannot forget a preview is active while you scroll.

### 5. Compare, iterate, then decide

Change the session or participant while a preview is active and the before/after comparison updates for that session and participant. Use **Change again** to refine.

### 6. Keep a change (or don't)

A preview is **never saved**. To make a change real, go to **Edit Schema**, edit the gate and **Save** as usual, using what you learned from the preview.

---

## What a preview does and does not tell you

| A preview **does** show | A preview **does not** show |
|-------------------------|-----------------------------|
| Whether the gate would be `OPEN`, `BLOCKED`, `NOT YET` or `INCOMPLETE` | What the participant *sees* — overlay text, status icons, display elements |
| Which condition would be responsible (Time Lock, Page Access, Prior Page Requirement) | Changes to other gates, other templates or variables |
| The saved result and the changed result, side by side | How the gate will look at a *later* time — a preview uses **now** |

## Good to know

- **One gate at a time.** Previewing a different gate replaces the current preview.
- **Nothing is remembered.** Closing and reopening the Inspector clears any preview, and you re-enter a change in **Edit Schema** to keep it.
- **It reflects the current moment.** A `NOT YET` result can turn `OPEN` simply because time has passed. Preview again if you come back later.
- **Use the same participant you care about.** A preview for one participant says nothing about another; switch the participant to check.

---

## Related

- [Gate Session Inspector — overview](../)
- [Inspect a Session](../inspect-a-session/)
- [Set Time Lock](../../add-a-gate/set-time-lock/) · [Set Variable Lock](../../add-a-gate/set-variable-lock/) · [Set Precondition Lock](../../add-a-gate/set-precondition-lock/)
