# Group Session Statuses

**Group Session Statuses** indicate the current state of a session based on time. The status is automatically calculated and updated - no manual intervention is required.

---

## Status Types

| Status | Icon | Description |
|--------|------|-------------|
| **Opens in Xh Xm** | ⏳ | Session has not started yet. Shows countdown to start time. |
| **Open for editing** | ✅ | Session is currently active. Users can enter and modify data. |
| **Closed** | ❌ | Session has ended. Data entry is locked. |

---

## How Status Is Determined

The status is calculated automatically based on the current time compared to the session's start and end dates:

```
Current Time < Start Date  →  "Opens in Xh Xm"
Start Date ≤ Current Time ≤ End Date  →  "Open for editing"
Current Time > End Date  →  "Closed"
```

---

## Status Behaviors

### Opens in Xh Xm (Pending)

When a session has not yet started:
- Displays countdown showing hours and minutes until start
- Users cannot enter data yet
- Administrators can still modify session settings
- Perfect time to verify configuration and add participants

### Open for Editing (Active)

When a session is currently active:
- Users can add and modify their data
- New participants can be added
- Data is collected in real-time
- Session settings can still be modified (use caution)

### Closed (Ended)

When a session has ended:
- Data entry is locked
- Users can view but not modify data
- Ideal time to export and analyze collected data
- Session cannot be "reopened" directly - extend the end date if needed

---

## Extending a Session

If you need to keep a session open longer:

1. Go to **Variable Center** → **Settings**
2. Find the session in the grid
3. Click **Edit**
4. Change the **End Date** to a later time
5. Click **Save**

The status will automatically update to "Open for editing" if the new end date is in the future.

---

## Time Zone Considerations

- Session times are evaluated based on the server's time zone
- Consider your users' time zones when setting start/end dates
- For global audiences, set generous time windows

---

## Best Practices

1. **Monitor active sessions** - Check session status during active periods

2. **Plan buffer time** - Set end dates slightly later than strictly needed

3. **Communicate deadlines** - Let users know when sessions will close

4. **Export before archiving** - Download data from closed sessions before any cleanup

---

# Questions?

If you have any questions, please don't hesitate to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">contact us.</a>
Alternatively, you can submit an issue on this <a href="https://github.com/acenji/acenji-help/issues" target="_blank" rel="noopener">platform.</a>
<p style="margin-top:30px;"></p>


# Useful Links:

<span class="triangle"></span> Group Session - https://help.acenji.com/#/./shared-concepts/variable-center/settings/group-session/index
<span class="triangle"></span> Settings - https://help.acenji.com/#/./shared-concepts/variable-center/settings/index
<span class="triangle"></span> User Data - https://help.acenji.com/#/./shared-concepts/variable-center/user-data/index

<style>
.triangle {
display: inline-block;
width: 0;
height: 0;
border-style: solid;
border-width: 5px 0 5px 5px;
border-color: transparent transparent transparent #595959;
margin-left: 10px;
}
</style>
<p style="margin-top:30px;"></p>


# Was this article helpful?

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSczNju0lskuQsjUjVs5YTRWKVczJlFIEVyjhgxDkvrN655N6w/viewform?embedded=true" width="640" height="300" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
