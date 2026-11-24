# Case: Stephen – Lab Detective Notebook

## UI Structure

* Base layout uses: `Sources/file-design.png` (notebook style)
* Page transition: **book flip animation** (triggered on “Next” click)
* Index system:

  * 🟢 Green index → Case number
  * 🔵 Blue index → Steps:

    1. Cell Culture
    2. Gram Stain
    3. Catalase
    4. Staph Latex
    5. Summary

---

## Page 1 — Step 1: Cell Culture

**Blue Index:** 1. Cell Culture

**Left Panel:**

* Image: `sources/mls-lab/stephen-culture.png`

**Right Panel:**
**Prompt:**
What do you see?

**Interaction:**

* Drag-and-drop from word pool into blanks

**Template:**

* This plate uses _____ , which looks _____
* The colonies are _____ shape, and the color is _____
* Around the colonies, there is a _____ zone, which shows _____

**Word Pool:**

* sheep blood agar
* MacConkey agar
* red
* round
* clear
* green
* fuzzy
* blue
* yellow
* purple
* beta hemolysis
* alpha hemolysis
* no hemolysis

**Answer Key:**

* sheep blood agar
* red
* round
* yellow
* clear
* beta hemolysis

---

## Page 2 — Step 2: Gram Stain

**Blue Index:** 2. Gram Stain

**Left Panel:**

* Image: `sources/mls-lab/stephen-gramStain.png`

**Brief Explanation:**
Gram staining colors bacteria so we can see them under a microscope and group them:

* Thick wall → stays purple (Gram-positive)
* Thin wall → turns pink (Gram-negative)

---

### Step 2.1 — Shape

**Prompt:**
Observe the microscopic image. What is the shape?

**Interaction:**

* Select one:

  * Round (cocci)
  * Rod-shaped (bacilli)
  * Spiral

**Answer Key:**

* Round (cocci)

---

### Step 2.2 — Gram Type

**Prompt:**
Is it Gram Positive or Negative?

**Interaction:**

* Select one:

  * +
  * −

**Answer Key:**

* Gram +

---

## Page 3 — Step 3: Catalase Test

**Blue Index:** 3. Catalase

**Left Panel:**

* Video: `sources/mls-lab/stephen-catalase.mp4`

**Brief Explanation:**
This test checks if bacteria have an enzyme called catalase that breaks down hydrogen peroxide:

* Bubbles appear → Catalase Positive (+)
* No bubbles → Catalase Negative (–)

**Right Panel Prompt:**
Is it Catalase Positive or Negative?

**Interaction:**

* Select one:

  * +
  * −

**Answer Key:**

* Catalase +

---

## Page 4 — Step 4: Staph Latex Test

**Blue Index:** 4. Staph Latex

**Left Panel:**

* Image: `sources/mls-lab/stephen-staphLatex.png`

**Brief Explanation:**
This is a “sticky bead test”:

* If *Staphylococcus aureus* is present → beads clump together
* If not → beads stay smooth

**Right Panel Prompt:**
Is it Staph Latex Positive or Negative?

**Interaction:**

* Select one:

  * +
  * −

**Answer Key:**

* Staph Latex +

---

## Page 5 — Summary

**Blue Index:** Summary

**Left Panel:**

* Badge collection system:

  * Correct answers → filled badges
  * Incorrect answers → dotted/empty badges
  * Clicking empty badge → navigates back to that step for correction

---

**Right Panel:**

### Case Completed ✅

You have successfully identified the bacteria!

* Image: `sources/mls-lab/stephen-sticker-bac.png`
* Apply **shimmer effect** (like a shiny sticker)

---

### Did You Know?

*Staphylococcus aureus* is naturally found on our skin and is a leading cause of skin and soft tissue infections.

---

## Interaction Notes (Global)

* Drag-and-drop: snap-to-blank with light magnetic effect
* Correct feedback:

  * Soft glow + checkmark
  * Subtle “ding” sound
* Incorrect feedback:

  * Slight shake + resistance animation
  * Low “buzz” sound
* Navigation:

  * “Next” triggers page flip animation
  * Allow backward navigation via index or badges


# Investigation Board — Connection Pathway

## How the Board Works

The investigation board uses a **chalk-line drawing system** with three zones:

```
PATIENT (Polaroid) ──→ TEST RESULTS (Clue Notes) ──→ BACTERIAL SUSPECT (Card)
```

* **User draws 3 chalk lines** per case (patient → clue → clue → clue)
* **System pre-draws 1 line** from the final clue to the correct bacterial suspect
* Wrong connections flash red and fade away; correct ones stay visible
* **Per-case colored lines**: Each case has a unique chalk color. Shared paths (e.g. Gram − rod → Oxidase +) show parallel colored lines side by side
* **Case-specific validation**: The system traces the chain back to the patient to determine which case a new line belongs to, then validates against that case's required edges. Users must connect the patient first, then build the chain step by step — drawing an edge from a shared node only succeeds if that case's own chain has reached it
* **Clear Lines** removes all user-drawn chalk lines and resets pre-connected lines back to white dashed

---

## Correct Pathways (All 7 Cases)

| Case | Patient → | Gram Stain | → Secondary Test | → Final Test | → Suspect (pre-drawn) |
|------|-----------|------------|------------------|--------------|----------------------|
| **Stephen** | patient-stephen | Gram + cocci (clue-0) | Catalase + (clue-3) | Staph Latex + (clue-5) | Staphylococcus aureus (suspect-0) |
| **Colin** | patient-colin | Gram − rod (clue-1) | Oxidase − (clue-10) | Indole + (clue-13) | Escherichia coli (suspect-1) |
| **Lisa** | patient-lisa | Gram + rod (clue-2) | Catalase + (clue-3) | Small colony (clue-18) | Listeria monocytogenes (suspect-3) |
| **Mona** | patient-mona | Gram − rod (clue-1) | Oxidase + (clue-9) | Metallic sheen + (clue-11) | Pseudomonas aeruginosa (suspect-2) |
| **Vishal** | patient-vishal | Gram − rod (clue-1) | Oxidase + (clue-9) | Metallic sheen − (clue-12) | Vibrio vulnificus (suspect-4) |
| **Stephanie** | patient-stephanie | Gram + cocci (clue-0) | Catalase − (clue-4) | Strep Latex + Group A (clue-7) | Streptococcus pyogenes (suspect-5) |
| **Coco** | patient-coco | Gram + cocci (clue-0) | Catalase − (clue-4) | Strep Latex − (clue-8) | Streptococcus pneumoniae (suspect-6) |

---

## All 19 Clue Notes (Test Results)

| Index | Clue Text | Type |
|-------|-----------|------|
| clue-0 | Gram + cocci | gram |
| clue-1 | Gram − rod | gram |
| clue-2 | Gram + rod | gram |
| clue-3 | Catalase + | positive |
| clue-4 | Catalase − | negative |
| clue-5 | Staph Latex + | positive |
| clue-6 | Staph Latex − | negative |
| clue-7 | Strep Latex + (Group A) | positive |
| clue-8 | Strep Latex − | negative |
| clue-9 | Oxidase + | positive |
| clue-10 | Oxidase − | negative |
| clue-11 | Metallic sheen + | positive |
| clue-12 | Metallic sheen − | negative |
| clue-13 | Indole + | positive |
| clue-14 | Indole − | negative |
| clue-15 | Lactose fermenter | positive |
| clue-16 | Non-lactose fermenter | negative |
| clue-17 | Large colony | gram |
| clue-18 | Small colony | gram |

---

## Case Color System

| Case | Pin Color | Chalk Line Color |
|------|-----------|-----------------|
| Stephen | Green | #27ae60 |
| Colin | Blue | #3498db |
| Lisa | Purple | #9b59b6 |
| Mona | Yellow | #f1c40f |
| Vishal | Orange | #FFA737 |
| Stephanie | Red | #e74c3c |
| Coco | Pink | #e91e8c |

* **Patient polaroid pins** match their case color
* **Bacterial suspect pins** start as dark brown; when a sticker is awarded, the pin changes to the matching patient's color
* **Chalk lines** are drawn in the case color; parallel paths on shared edges are offset by 5px
* **Pre-connected lines** (last test → suspect) start as white dashed lines; when all 3 user-drawn edges for a case are complete, the dashed line transforms into a solid case-colored line with a draw-in animation

---

## Sticker Reward System

1. **Trigger conditions** — Both must be true:
   - Patient case is solved (isCaseComplete returns true / solved stamp visible)
   - All 3 user-drawn chalk lines for that case are correctly connected
2. **Sticker appearance** — A `{caseId}-sticker-bac.png` sticker (120px wide) appears overlaid slightly below the corresponding bacterial suspect card with:
   - Pop-in animation — scales up from 0.3 with a slight rotation bounce (0.6s)
   - Continuous shimmer effect — a white light sweep across the sticker every 2.5s
3. **SFX** — Plays the correct-answer glockenspiel sound (cartoon-music-soundtrack-glock-correct-answer-504462.mp3)
4. **Extensible** — The bacStickerImages map currently only has Stephen's sticker. As you add more (e.g. colin-bac.png, lisa-bac.png) to Sources/mls-lab/, just add them to the map and they'll work automatically.