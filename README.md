# Foundation-Program-Assignment-1

---

## Question 1: Value Detective · 10 marks

Write a function `describeValue` that takes **any value** and returns a string with two pieces of information joined by a space, a pipe, and another space:

```
<type of the value> | <truthy or falsy>
```

Examples:

| Call | Returns |
| --- | --- |
| `describeValue("hello")` | `"string \| truthy"` |
| `describeValue("")` | `"string \| falsy"` |
| `describeValue(25)` | `"number \| truthy"` |
| `describeValue(0)` | `"number \| falsy"` |
| `describeValue(true)` | `"boolean \| truthy"` |
| `describeValue(null)` | `"object \| falsy"` |
| `describeValue(undefined)` | `"undefined \| falsy"` |

Watch out for these three. Think before you answer:

* `describeValue("0")` — a string that looks like zero
* `describeValue(NaN)` — what does `typeof NaN` give?
* `describeValue(null)` — remember the strange thing we saw in class

---

## Question 2: Bangladesh Weekend Machine · 10 marks

Write a function `getDayType` that takes a day name and returns:

| Input day | Returns |
| --- | --- |
| Friday, Saturday | `"Weekend"` |
| Sunday, Monday, Tuesday, Wednesday, Thursday | `"Working Day"` |
| anything else | `"Invalid Day"` |

**You must solve this with `switch case`, not with `if / else`.**

It must also work when the student enters the day in any letter case:

| Call | Returns |
| --- | --- |
| `getDayType("Friday")` | `"Weekend"` |
| `getDayType("friday")` | `"Weekend"` |
| `getDayType("MONDAY")` | `"Working Day"` |
| `getDayType("Bandarban")` | `"Invalid Day"` |

---

## Question 3: Username Gatekeeper · 10 marks

Write a function `validateUsername` that takes a username and checks it against these rules, **in this order**:

1. Shorter than 4 characters → return `"Too Short"`
2. Contains a space → return `"No Space Allowed"`
3. Contains the word `admin` anywhere, in any letter case → return `"Reserved Word"`
4. Otherwise → return `"Available"`

The order matters. Look at the third example carefully.

| Call | Returns | Why |
| --- | --- | --- |
| `validateUsername("rahim123")` | `"Available"` | passes every rule |
| `validateUsername("ab")` | `"Too Short"` | only 2 characters |
| `validateUsername("a b")` | `"Too Short"` | it has a space, but the length rule is checked first |
| `validateUsername("abcd")` | `"Available"` | exactly 4 is allowed |
| `validateUsername("rahim islam")` | `"No Space Allowed"` | |
| `validateUsername("superadmin99")` | `"Reserved Word"` | `admin` is in the middle |
| `validateUsername("Admin_Rahim")` | `"Reserved Word"` | capital A must also be caught |

---

## Question 4: Dhaka CNG Fare Meter · 15 marks

Write a function `getCngFare(distance, isNight, waitingMinutes)` that returns the total fare in taka.

Fare rules:

* The **minimum fare is 50 taka**, and it covers the first **2 km**.
* Every km **after the first 2 km** costs **15 taka**.
* **Waiting charge:** 2 taka for every waiting minute.
* At night, the driver adds **20% on the whole fare** — that means on the distance charge **and** the waiting charge together.
* `isNight` should default to `false` and `waitingMinutes` should default to `0`, so `getCngFare(5)` must work on its own.

Return the number, do not round it and do not add the word "taka".

| Call | Returns | Working |
| --- | --- | --- |
| `getCngFare(2)` | `50` | minimum fare |
| `getCngFare(1)` | `50` | still the minimum, never less |
| `getCngFare(5)` | `95` | 50 + (3 × 15) |
| `getCngFare(10)` | `170` | 50 + (8 × 15) |
| `getCngFare(5, false, 10)` | `115` | 95 + (10 × 2) |
| `getCngFare(5, true)` | `114` | 95 + 20% |
| `getCngFare(5, true, 10)` | `138` | 115 + 20% |

---

## Question 5: Run Chase Commentator · 15 marks

Write an **arrow function** `getChaseVerdict(target, scored, ballsLeft)` for a cricket run chase.

Steps:

1. `runsNeeded = target - scored`
2. If `runsNeeded` is **0 or less**, the match is already won → return `"Won"`
3. Otherwise, if `ballsLeft` is **0 or less**, there is no ball left to score → return `"Lost"`
4. Otherwise, work out the required run rate:

   ```
   requiredRate = (runsNeeded / ballsLeft) * 6
   ```
5. Pick the verdict from the rate:

   | Required rate | Verdict |
   | --- | --- |
   | 6 or less | `"Comfortable"` |
   | more than 6, up to 12 | `"Tough"` |
   | more than 12 | `"Almost Impossible"` |

6. Return this exact sentence:

   ```
   Need <runsNeeded> runs in <ballsLeft> balls | <verdict>
   ```

   Always write `runs` and `balls`, even when the number is 1.

| Call | Returns |
| --- | --- |
| `getChaseVerdict(200, 200, 12)` | `"Won"` |
| `getChaseVerdict(200, 190, 0)` | `"Lost"` |
| `getChaseVerdict(100, 90, 12)` | `"Need 10 runs in 12 balls \| Comfortable"` |
| `getChaseVerdict(100, 80, 12)` | `"Need 20 runs in 12 balls \| Tough"` |
| `getChaseVerdict(100, 70, 12)` | `"Need 30 runs in 12 balls \| Almost Impossible"` |
| `getChaseVerdict(150, 149, 1)` | `"Need 1 runs in 1 balls \| Comfortable"` |