# Participant Experience on a Locked Page

When a gate is protecting a page, what does the participant actually see and do? This page covers the situations that come up, and what (if anything) you need to set up for each.

---

## Situation 1: Continue leads to a page that's still locked

If a participant clicks **Continue** (or any Card Link) toward a page that is still Time-Locked, they are **not** taken there. They stay exactly where they already are — on the page they just came from — and see a short message explaining when the next page opens:

> *That page isn't open yet — it opens in 2 days, 3 hours, 12 min, 5 sec.*

or, if the window has already closed:

> *That page has closed.*

**Nothing to set up.** This works automatically for every page in every template — whichever page the participant happens to be on becomes their "holding page" for as long as the next one is locked. You don't need to designate any particular page (like Page 2) as *the* holding page; it's always wherever they currently are, and it's always a page they can already read, edit, and navigate from normally, because it's a page they've already reached.

<video controls preload="metadata" style="width:100%;max-width:960px;border-radius:8px;">
  <source src="/videos/gate-hold-at-current-page.mp4" type="video/mp4">
</video>

---

## Situation 2: A participant is already ON a locked page

This can still happen even with Situation 1 in place — for example, someone opens a bookmarked link, uses their browser's back/forward buttons, or reloads a stale tab. In this case:

- The gate's status/countdown message (wherever you've set its **Display Element**) stays fully readable — it is never blurred, even while the rest of the page is.
- The rest of the page's content (form fields, instructions, etc.) is blurred and not interactive, so nothing can be filled in before the gate actually opens.
- **If that page has its own "Back" button** (a Button element with a Card Link action pointing to the previous page), that button also stays fully readable and clickable — the participant can leave without waiting.

### The one thing you may need to set up: a Back button

The countdown staying readable is automatic (as long as the gate's Display Element is set to an element on that same page — see [Set Display Element](../add-a-gate/set-display-element/)). The **Back button** only works this way if the page actually has one authored on it already. Most of your pages already do (a Button with a Card Link back to the previous page), but a few don't — most commonly the very first page in a sequence, since there's nothing before it to go back to.

**If you want a specific locked page to offer a way out, add a Button to it with a Card Link action targeting the previous page** — see [Button](/create-web-application/elements/button/) and [Card Link](/create-web-application/elements/card-link/). Once it's there, it's automatically exempted from the blur/lock whenever that page is protected by a gate — no extra gate configuration needed.

<video controls preload="metadata" style="width:100%;max-width:960px;border-radius:8px;">
  <source src="/videos/gate-locked-page-back-navigation.mp4" type="video/mp4">
</video>

---

## Situation 3: Auto-advance when a page you reference just opened

If your own page text already references a **later** page's gate using the gate-reference token — `[countdown: gate:<id>]` or `[time: gate:<id>]`, see [Showing a Live Countdown in Your Own Text](../../variable-center/user-data/connect-to-gate-controller/index.md#showing-a-live-countdown-in-your-own-text) — a participant sitting on that page is automatically taken to the referenced page the moment its gate opens. They don't have to click Continue themselves; it happens on its own, typically within a few seconds of the gate opening.

**This only fires while the participant's browser tab is actually open and they've been active recently** — the same "active session" window that logs someone out after a period of inactivity. If their tab is closed, their laptop is asleep, or they've stepped away long enough to time out, nothing auto-advances for them. That's expected, not a bug: the next time they come back and click **Continue** themselves, they land on the correct page exactly as Situation 1 above describes — auto-advance is a convenience on top of that, never a replacement for it.

**Nothing extra to set up beyond the token itself.** If a page's text already shows a live countdown to a later gate using the token above, that same reference is what drives the auto-advance — there's no separate toggle.

<video controls preload="metadata" style="width:100%;max-width:960px;border-radius:8px;">
  <source src="/videos/gate-auto-advance.mp4" type="video/mp4">
</video>

---

# Questions?

If you have any questions, please don't hesitate to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">contact us.</a>
Alternatively, you can submit an issue on this <a href="https://github.com/acenji/acenji-help/issues" target="_blank" rel="noopener">platform.</a>
<p style="margin-top:30px;"></p>


# Was this article helpful?

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSczNju0lskuQsjUjVs5YTRWKVczJlFIEVyjhgxDkvrN655N6w/viewform?embedded=true" width="640" height="300" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
