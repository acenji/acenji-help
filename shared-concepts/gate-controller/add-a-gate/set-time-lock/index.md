# Set Time Lock

The **Time Lock** condition controls gate access based on date and time. Gates open after a specified datetime, with optional offsets for scheduling content release.

---

## Overview

Time Lock enables you to:

- Open content at a specific date/time
- Schedule content release relative to a session start
- Set content expiration with end time offsets
- Create sequential timed content

---

## Enabling Time Lock

1. In the gate editor, find the **Time Lock Condition** section
2. Toggle the **"Use Time Lock"** switch to enable
3. Configure the time settings

---

## Configuration Options

| Field | Description | Example |
|-------|-------------|---------|
| **Start Time Expression** | Datetime variable(s) to reference | `GC-Start-Cycle-Time` |
| **Offset** | Time to add after the start time | `+24h`, `+2d`, `+1d 2h` |
| **End Time Offset** | When the gate closes (optional) | `+72h`, `+3d` |

---

## Start Time Expression

Select one or more datetime variables that define when timing begins:

1. Click the **Start Time Expression** dropdown
2. Select variable(s) from the list
3. Only `datetime` type variables appear

The gate opens when the current time equals or exceeds this variable's value plus the offset.

> **Note:** Variables must be non-mandatory datetime type. See [Setup Global Variables](../setup-global-variables/index) for configuration.

---

## Offset Format

The offset determines how long after the start time the gate opens:

| Format | Example | Meaning |
|--------|---------|---------|
| `+Xh` | `+24h` | X hours after start |
| `+Xd` | `+2d` | X days after start |
| `+Xd Yh` | `+1d 2h` | X days and Y hours after start |
| `+0h` | `+0h` | Opens immediately at start time |

### Examples

```
Start: January 1, 2024 at 9:00 AM
Offset: +24h
Gate Opens: January 2, 2024 at 9:00 AM

Start: January 1, 2024 at 9:00 AM
Offset: +2d 6h
Gate Opens: January 3, 2024 at 3:00 PM
```

---

## End Time Offset

Optionally set when the gate closes:

| Setting | Behavior |
|---------|----------|
| **Value provided** | Gate closes at start time + end offset |
| **Empty** | Gate auto-closes 1 second before next gate's start |

### Examples

```
Start: January 1, 2024 at 9:00 AM
Offset: +24h (opens Jan 2 at 9:00 AM)
End Time Offset: +72h (closes Jan 4 at 9:00 AM)

Window: Jan 2, 9:00 AM → Jan 4, 9:00 AM
```

---

## Sequential Gates Example

Create a daily content release schedule:

```
Gate 1: Day 1 - Introduction
├─ Start Time: GC-Start-Cycle-Time
├─ Offset: +0h
└─ End Time Offset: (empty - auto-closes before Day 2)

Gate 2: Day 2 - Deep Dive
├─ Start Time: GC-Start-Cycle-Time
├─ Offset: +24h
└─ End Time Offset: (empty - auto-closes before Day 3)

Gate 3: Day 3 - Assessment
├─ Start Time: GC-Start-Cycle-Time
├─ Offset: +48h
└─ End Time Offset: +96h (closes at Day 4)
```

---

## Status Display

When Time Lock is active, users see status messages:

| Status | When Shown |
|--------|------------|
| **Opens in 2d 5h 30m** | Before gate opens (countdown) |
| **Open for editing** | During the open window |
| **Closed** | After end time offset passed |

The countdown updates in real-time, showing days, hours, minutes, and seconds.

---

## Calculating Gate Times

Use this formula to determine when gates open and close:

```
Open Time = Start Variable Value + Offset
Close Time = Start Variable Value + End Time Offset
            (or 1 second before next gate if empty)
```

### Practical Example

```
Group Session Start: March 1, 2024 at 8:00 AM
GC-Start-Cycle-Time = March 1, 2024 at 8:00 AM

Gate: "Midweek Check-in"
Offset: +3d 4h
End Time Offset: +4d

Open: March 4, 2024 at 12:00 PM
Close: March 5, 2024 at 8:00 AM
```

---

## Best Practices

1. **Use consistent intervals** - If Day 1 is +0h and Day 2 is +24h, keep the pattern

2. **Allow buffer time** - Don't close gates exactly when the next opens

3. **Consider time zones** - Set times that work for your user base

4. **Test with short intervals** - Use minutes during development

5. **Document your schedule** - Keep a reference of all gate timings

---

## Troubleshooting

### Gate Not Opening at Expected Time

- Verify the datetime variable has a value set in User Data
- Check that the offset format is correct
- Confirm the server/system time is accurate

### Countdown Shows Wrong Time

- Verify the start time variable value
- Check offset calculation
- Consider time zone differences

### Gate Closed Immediately

- Check if end time offset is too short
- Verify no other gate is auto-closing this one
- Review the gate order in your template

---

# Questions?

If you have any questions, please don't hesitate to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">contact us.</a>
Alternatively, you can submit an issue on this <a href="https://github.com/acenji/acenji-help/issues" target="_blank" rel="noopener">platform.</a>
<p style="margin-top:30px;"></p>


# Useful Links:

<span class="triangle"></span> Add a Gate - https://help.acenji.com/#/./shared-concepts/gate-controller/add-a-gate/index
<span class="triangle"></span> Setup Global Variables - https://help.acenji.com/#/./shared-concepts/gate-controller/setup-global-variables/index
<span class="triangle"></span> Set Variable Lock - https://help.acenji.com/#/./shared-concepts/gate-controller/add-a-gate/set-variable-lock/index

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
