# LearnWithMD - Design Guidelines

## General

- **Purpose:** Educational toolkit targeting 7-9th grade students
- **Tone:** Bright, clean, simple, friendly
- **Page Background:** Always white (`#FFFFFF`)
- **General Buttons:** Black fill (`#000000`) with white text (`#FFFFFF`)

---

## Color Palettes

### Landing Page
| Role | Color |
|------|-------|
| Primary Red | PMS 485 |
| Black | `#000000` |
| White | `#FFFFFF` |

### Medical Laboratory Science (MLS)
| Role | Color |
|------|-------|
| Primary | `#FFA737` |
| Primary Dark | `#512500` |
| Sub-color Light | `#D9DBF1` |
| Sub-color Medium | `#8E9DCC` |

Moodboard: `specs/mls-moodboard.png`

### Character Themes
| Character | Theme Color |
|-----------|-------------|
| Stephen | `#37662D` | green
| Colin | `#2F20F4` | saturated blue
| Lisa | `#230C33` | purple #7d3c98 #ede9fe
| Mona | `#7CDEDC` | mint
| Vishal | `#F17105` | orange
| Stephanie | `#FCCA46` | yellow
| Coco | `#FFD2FC` | pink

### Diagnostic Imaging (DI)
| Role | Color |
|------|-------|
| Primary Blue | `#4E74BF` |
| Dark | `#122A40` |
| Accent Blue | `#5BA9D9` |

Moodboard: `specs/di-moodboard.png`

---

## Page Structure

### 0. Landing Page - Toolkit Gallery

**Header**
- LearnWithMD logo
- Top menu bar: About, Toolkit

**Hero Section**
- Brief explanation of the toolkit

**Sub Section - 6 Toolkit Cards**
| Card | Tagline | Discipline |
|------|---------|------------|
| 1 | Become a Detective. Solve cases through science. | Medical Laboratory Science |
| 2 | Become a Photographer. Capture hidden body images. | Diagnostic Imaging |
| 3 | Become a aaaa. | Molecular Genetic Technology |
| 4 | Become a bbbb. | Histotechnology |
| 5 | Become a cccc. | Cytogenetic Technology |
| 6 | Become a dddd. | Medical Dosimetry |

**Footer**
- Distributed by School of Health Professions MD ANDERSON 2026

---

### 1-1. Medical Laboratory Science

**Breadcrumb:** Home > Medical Laboratory Science

**Hero Section**
- Main intro text
- Main image

**Carousel Toolkit Menu**
- Microbiology Unit (unlocked)
- Hematology (locked)
- Immunology (locked)
- etc.

---

### 1-2. Diagnostic Imaging

**Breadcrumb:** Home > Diagnostic Imaging

**Hero Section**
- Main intro text
- Main image

**Carousel Toolkit Menu**
- X-ray (unlocked)
- CT (unlocked)
- MRI (unlocked)
- Interventional Radiology (locked)
- Sonography (locked)
- Nuclear Medicine (locked)

---

### 2. Investigation Board (MLS / Microbiology Unit)

- Cork board texture background (`sources/mls-investigationBoard.png`)
- Thumbtack pins (red, blue, green, yellow, purple) holding items
- Polaroid-style case files with character avatars, slightly rotated for organic feel
- "SOLVED" stamp overlay on completed cases
- Red string SVG lines connecting solved patients to their bacterial suspects
- Torn paper clue notes with rough edges in the middle section
- Index card-style suspect profiles with lined paper effect
- Handwritten fonts: **Caveat** + **Special Elite** for labels and names
- Section labels use translucent tape strips

---

### 3. Virtual Lab Notebook (Leather Binder)

**Binder Structure**
- Leather binder wrapper with stitching detail and shadow
- Ring spine with 7 metal rings between left/right pages
- Cream/beige pages with ruled line backgrounds and red margin lines

**Left Page**
- Table of Contents with dot bullets and active state markers

**Right Page**
- Content area with page curl effect, navigation, and page counter

**Interactive Elements**
- Evidence photos styled as polaroids with yellow tape strips at corners
- Post-it note clues (yellow, green, pink, purple) collected on correct answers
- Red circle markers on microscope evidence views
- "SOLVED" stamp on completion (Special Elite font, green border, rotated)
- Decision tree with red pin markers along a connected path
- Manila folder on case detail page with folder tab

---

### 4. Shadow Splash Portrait Studio (DI / X-ray Unit)

**Concept:** X-ray = Shadow Splash Portrait Studio
- Student role: Portrait artist
- Students throw dark paint balls through blocks onto a white canvas
- Students must choose the right ball quantity, power, and distance to get the clearest portrait
- Why this works: X-rays create an image from the shadow pattern of what they pass through

**Learning Objectives**
1. Understand why different body parts look different on an X-ray
2. Understand the inverse square law (distance)
3. Understand current vs voltage in an X-ray machine

**Game Mechanic — Three Sliders**
| Slider | Analogy | X-ray Concept |
|--------|---------|---------------|
| Quantity of paint balls | How many paint balls are thrown | Current (mA) |
| Power of paint balls | How hard/fast paint balls are thrown | Voltage (kVp) |
| Distance from launcher to canvas | How far the launcher is from the canvas | Source-to-image distance (SID) |

**Material Blocking (Shadow Formation)**
| Material | Analogy | X-ray Behavior |
|----------|---------|----------------|
| Air | Open space (nothing blocking) | X-rays pass through freely → dark on image |
| Soft tissue | Mesh shield (partial blocking) | Some X-rays absorbed → gray on image |
| Bone | Thick wall (heavy blocking) | Most X-rays absorbed → white on image |

**What Students Learn**
- Different materials block different amounts → canvas shows different shades
- More balls (higher mA) = more signal reaching the detector
- Stronger balls (higher kVp) = pass through thicker shields more easily
- Low power = dramatic shadows, but thick parts may block too much
- High power = more gets through, but the picture can look flatter (less contrast)
- Farther distance = balls spread out, so each part of canvas gets fewer hits (inverse square law)

**Design Notes**
- DI color palette: `#4E74BF`, `#122A40`, `#5BA9D9`
- White canvas area on the right showing the resulting "X-ray" image
- Left side: launcher setup with sliders and body cross-section diagram
- Body cross-section shows layers: air (empty), soft tissue (mesh), bone (solid block)
- Paint ball animation: balls launch from left, pass through body layers, hit canvas
- Canvas updates in real-time as sliders change
- "Take the Shot" button to fire paint balls with animation
- Result comparison: student's image vs ideal X-ray reference
- Progress through 3 challenges (chest, hand, abdomen) with increasing difficulty
- Friendly, playful UI with paint splatter effects

---

### 5. Spin-and-Slice Sculpture Lab (DI / CT Module)

**Concept:** CT = Spin-and-Slice Sculpture Lab
- Student role: Students use the same X-ray paint-ball interaction, but now the launcher rotates all the way around the object
- The computer turns those many views into slices, then stacks the slices into a 3D view
- Why this works: CT is still X-ray-based, but instead of one shadow picture, it takes many views around the body and reconstructs cross-sections that can be stacked into a 3D image

**Learning Objectives**
1. Differentiate CT from X-ray (understand why CT provides more detailed, cross-sectional views)
2. Understand the CT Imaging Workflow: Data Acquisition → Image Reconstruction → Image Display & Communication
3. Understand that CT images are built using data points converted into numbers (Hounsfield Units, HU)
4. Understand how multiple image slices (axial, coronal, sagittal) are stacked into a 3D model

**Game Mechanic — Three Controls**
| Control | What It Does | CT Concept |
|---------|-------------|------------|
| Number of angles | How many positions the launcher rotates to | More projections = better image reconstruction |
| Slice thickness | How thick each cross-sectional slice is | Thin slices = more detail, thick slices = faster scan |
| Rotation speed | How fast the launcher orbits the object | Faster = quicker scan but may introduce motion blur |

**Core Interaction**
- A hidden object sits inside a block
- A regular X-ray only shows a messy overlap (flat shadow)
- CT lets students find the exact location by building slices and stacking them into a 3D model
- Students first take a single X-ray (shows overlapping shadows) → then switch to CT mode (rotate around, build slices)

**What Students Learn**
- One X-ray image is flat and has overlap
- CT removes overlap by making slice-by-slice cross-sectional views
- More angles = better reconstruction quality
- Stacked slices = 3D model
- Hounsfield Units assign a number to each pixel based on density (air = −1000, water = 0, bone = +1000)

**Key Takeaway**
> X-ray = one shadow portrait // CT = many shadow portraits turned into slices and a sculpture

**Slice Orientation Views**
| View | Plane | Description |
|------|-------|-------------|
| Axial | Horizontal | Looking down from the top (bread slices) |
| Coronal | Front-back | Looking from the front (like facing a person) |
| Sagittal | Side | Looking from the side (profile view) |

**Design Notes**
- DI color palette: `#4E74BF`, `#122A40`, `#5BA9D9`
- Left panel: controls (number of angles slider, slice thickness slider, rotation speed)
- Right panel: 3D viewport showing the rotating launcher and object block
- Bottom panel: slice gallery showing cross-sections as they are generated
- "Compare: X-ray vs CT" toggle to show the flat X-ray overlap vs clean CT slices
- 3D stacking animation when all slices are complete
- Hounsfield Unit color bar legend (air=black, water=gray, bone=white)
- 3 challenges with hidden objects of increasing complexity
- Build on the paint-ball visual language from Shadow Studio for continuity
