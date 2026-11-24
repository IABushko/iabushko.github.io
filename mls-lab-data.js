/* ──────────────────────────────────────────────────────────────────
   MLS Lab — Per-Patient Content Registry
   Each entry drives the rendering of mls-lab.html for that patient.
   Step types: cultureFill | gramStain | biochem | summary
   Asset paths are relative to ../Sources/mls-lab/ (resolved in HTML).
   ────────────────────────────────────────────────────────────────── */

window.mlsLabData = {

  /* ════════════════ STEPHEN — Case #1 ════════════════ */
  stephen: {
    caseNumber: 1,
    topbar: { letter: "S", name: "Stephen's Case", color: "#37662D" },
    trailEmojiStart: "🤥", 
    trailEmojiEnd:   "🦠", 
    steps: [
      {
        type: "cultureFill",
        tabLabel: "Cell Culture",
        title: "Step 1: Cell Culture",
        prompt: "What do you see?",
        subPrompt: "Drag words from the pool below into the blanks.",
        images: [{ src: "stephen-culture.png", alt: "Stephen Culture Plate" }],
        leftLabel: "Culture Plate",
        hintImage: "stephen-hint001.png",
        template: [
          ["This plate uses ", 0, " , which looks ", 1],
          ["The colonies are ", 2, " shape, and the color is ", 3],
          ["Around the colonies, there is a ", 4, " zone, which shows ", 5]
        ],
        answers: [
          "sheep blood agar", "red", "round", "yellow", "clear", "beta hemolysis"
        ],
        wordPool: [
          "sheep blood agar", "MacConkey agar", "red", "round",
          "clear", "green", "fuzzy", "blue", "yellow",
          "purple", "beta hemolysis", "alpha hemolysis", "no hemolysis"
        ],
        okMsg: "<strong>Excellent!</strong> All observations are correct!",
        sticker: "sticker-cellCulture-hemolysis.png",
        trailLabel: "CELL CULTURE"
      },
      {
        type: "gramStain",
        tabLabel: "Gram Stain",
        title: "Step 2: Gram Stain",
        image: { src: "stephen-gramStain.png", alt: "Stephen Gram Stain" },
        leftCaption: "This Photo by Unknown author is licensed under CC BY-SA",
        leftExplanation:
          "<strong>How Gram Staining Works:</strong><br>" +
          "Gram staining colors bacteria so we can see them under a microscope and group them:<br>" +
          "&bull; Thick wall &rarr; stays <span class=\"purple\">purple (Gram-positive)<br></span>" +
          "&bull; Thin wall &rarr; turns <span class=\"pink\">pink(Gram-negative)</span>",
        shapePrompt: "Observe the microscopic image. <br> What is the shape?",
        shapeOptions: ["Round (cocci)", "Rod-shaped (bacilli)", "Spiral"],
        correctShapeIdx: 0,
        shapeOkMsg: "<strong>Correct!</strong> The bacteria are round (cocci), appearing in clusters.",
        shapeNoMsg: "<strong>Not quite.</strong> These bacteria are round (cocci), not rod-shaped or spiral.",
        gramTypePrompt: "Is it Gram Positive or Negative?",
        correctGramTypeIdx: 0, // 0 = +, 1 = −
        gramTypeOkMsg: "<strong>Correct!</strong> The purple color indicates Gram-positive bacteria.",
        gramTypeNoMsg: "<strong>Not quite.</strong> The bacteria stain purple, meaning they are Gram-positive (+).",
        sticker: "sticker-gram-pos-cocci.png",
        trailLabel: "GRAM + COCCI"
      },
      {
        type: "biochem",
        tabLabel: "Catalase",
        title: "Step 3: Catalase Test",
        subtitle: "Biochemical test: 🫧 Catalase Test",
        prompt: "Is it Catalase Positive or Negative?",
        media: { kind: "video", src: "stephen-catalase.mp4" },
        leftLabel: "Catalase Test — Hydrogen Peroxide",
        leftExplanation:
          "<strong>How Catalase Test Works:</strong><br>" +
          "This test checks if bacteria have an enzyme called <strong>catalase</strong> that breaks down hydrogen peroxide:<br>" +
          "&bull; Bubbles appear &rarr; Catalase <strong>Positive (+)</strong><br>" +
          "&bull; No bubbles &rarr; Catalase <strong>Negative (–)</strong>",
        correctIdx: 0, // 0 = +, 1 = −
        okMsg: "<strong>Correct!</strong> Bubbles formed, indicating catalase is present.",
        noMsg: "<strong>Not quite.</strong> Bubbles appeared, meaning it is Catalase Positive (+).",
        sticker: "sticker-catalase-pos.png",
        trailLabel: "CATALASE +"
      },
      {
        type: "biochem",
        tabLabel: "Staph Latex",
        title: "Step 4: Staph Latex Test",
        subtitle: "Biochemical test: ☁️ Staph Latex Test",
        prompt: "Is it Staph Latex Positive or Negative?",
        media: { kind: "image", src: "stephen-staphLatex.png", alt: "Stephen Staph Latex Test" },
        leftLabel: "Staph Latex Agglutination Test",
        leftExplanation:
          "<strong>How Staph Latex Test Works:</strong><br>" +
          "Think like a “sticky ball test” used to find specific bacteria. Scientists use tiny beads coated with special “catchers.”:<br>" +
          "&bull; If <em>S. aureus</em> is present &rarr; beads <strong>clump together</strong><br>" +
          "&bull; If not &rarr; beads <strong>stay smooth</strong>",
        correctIdx: 0,
        okMsg: "<strong>Correct!</strong> The beads clumped, confirming <em>Staphylococcus aureus</em>.",
        noMsg: "<strong>Not quite.</strong> The beads clumped together, meaning it is Staph Latex Positive (+).",
        sticker: "sticker-staphLatex-pos.png",
        trailLabel: "STAPH LATEX +"
      },
      {
        type: "summary",
        tabLabel: "Summary",
        organism: "Staphylococcus aureus",
        organismSticker: "stephen-sticker-bac.png",
        dyk: "<em>Staphylococcus aureus</em> is naturally found on our skin and is a leading cause of skin and soft tissue infections."
      }
    ]
  },

  /* ════════════════ COLIN — Case #2 ════════════════ */
  colin: {
    caseNumber: 2,
    topbar: { letter: "C", name: "Colin's Case", color: "#2F20F4" },
    trailEmojiStart: "🍔", 
    trailEmojiEnd:   "🦠", 
    steps: [
      {
        type: "cultureFill",
        tabLabel: "Cell Culture",
        title: "Step 1: Cell Culture",
        prompt: "What do you see?",
        subPrompt: "Drag words from the pool below into the blanks.",
        images: [
          { src: "colin-culture-001.png", alt: "Sheep Blood Agar", caption: "Sheep Blood Agar" },
          { src: "colin-culture-002.png", alt: "MacConkey Agar",   caption: "MacConkey Agar" }
        ],
        leftExplanation:
          "<strong>Each plate gives a different clue</strong><br>" +
          "Blood Agar: <em>&ldquo;Can this microbe damage red blood cells?&rdquo;</em><br>" +
          "MacConkey agar: <em>&ldquo;Can this microbe use lactose?&rdquo;</em><br>" ,
        hintImage: null,
        template: [
          ["The bacteria are breaking down red blood cells on blood agar, showing ", 0],
          ["On MacConkey agar, the colonies appear ", 1, " which is a clue that the bacteria can ferment ", 2, " , producing ", 3]
        ],
        answers: [
          "hemolysis", "pink", "lactose", "acid"
        ],
        wordPool: [
          "gas", "glucose", "Gram-positive", "Gram-negative",
          "protein", "rod", "spiral", "pink", "yellow", "clear", "purple",
          "lactose", "acid", "base", "hemolysis"
        ],
        okMsg: "<strong>Excellent!</strong> All observations are correct!",
        sticker: "sticker-cellCulture-hemolysis.png",
        trailLabel: "CELL CULTURE"
      },
      {
        type: "gramStain",
        tabLabel: "Gram Stain",
        title: "Step 2: Gram Stain",
        image: { src: "colin-gramStain.png", alt: "Colin Gram Stain" },
        leftCaption: "Microscopic view after Gram staining",
        leftExplanation:
          "<strong>How Gram Staining Works:</strong><br>" +
          "Gram staining colors bacteria so we can see them under a microscope and group them:<br>" +
          "&bull; Thick wall &rarr; stays <span class=\"purple\">purple (Gram-positive)<br></span>" +
          "&bull; Thin wall &rarr; turns <span class=\"pink\">pink(Gram-negative)</span>",
        shapePrompt: "Observe the microscopic image. <br> What is the shape?",
        shapeOptions: ["Round (cocci)", "Rod-shaped (bacilli)", "Spiral"],
        correctShapeIdx: 1,
        shapeOkMsg: "<strong>Correct!</strong> The bacteria are rod-shaped (bacilli).",
        shapeNoMsg: "<strong>Not quite.</strong> These bacteria are rod-shaped (bacilli), not round or spiral.",
        gramTypePrompt: "Is it Gram Positive or Negative?",
        correctGramTypeIdx: 1, // 0 = +, 1 = −
        gramTypeOkMsg: "<strong>Correct!</strong> The pink color indicates Gram-negative bacteria.",
        gramTypeNoMsg: "<strong>Not quite.</strong> The bacteria stain pink, meaning they are Gram-negative (−).",
        sticker: "sticker-gram-neg-rod.png",
        trailLabel: "GRAM − BACILLI"
      },
      {
        type: "biochem",
        tabLabel: "Oxidase",
        title: "Step 3: Oxidase Test",
        subtitle: "Biochemical test: 🟣 Oxidase Test",
        prompt: "Is it Oxidase Positive or Negative?",
        media: { kind: "image", src: "colin-oxidase.png", alt: "Colin Oxidase Test" },
        leftLabel: "Oxidase Test — Reagent Strip",
        leftExplanation:
          "<strong>How Oxidase Test Works:</strong><br>" +
          "This test checks if bacteria produce <strong>cytochrome c oxidase</strong>, an enzyme that reacts with the reagent:<br>" +
          "&bull; Purple/dark blue color &rarr; Oxidase <strong>Positive (+)</strong><br>" +
          "&bull; No color change &rarr; Oxidase <strong>Negative (–)</strong>",
        correctIdx: 1, // 0 = +, 1 = −
        okMsg: "<strong>Correct!</strong> No color change — oxidase negative. This rules out <em>Pseudomonas</em> and other oxidase-positive organisms.",
        noMsg: "<strong>Not quite.</strong> No color change appeared, so it is Oxidase Negative (−).",
        sticker: "sticker-oxidase-neg.png",
        trailLabel: "OXIDASE −"
      },
      {
        type: "biochem",
        tabLabel: "Indole",
        title: "Step 4: Indole Test",
        subtitle: "Biochemical test: 🔵 Indole Test",
        prompt: "Is it Indole Positive or Negative?",
        media: { kind: "image", src: "colin-indole.png", alt: "Colin Indole Test" },
        leftLabel: "Indole Test — Kovac's Reagent",
        leftExplanation:
          "<strong>How Indole Test Works:</strong><br>" +
          "This test checks if bacteria can break down <strong>tryptophan</strong> into indole. Adding Kovac's reagent reveals the result:<br>" +
          "&bull; Blue color &rarr; Indole <strong>Positive (+)</strong><br>" +
          "&bull; No color change &rarr; Indole <strong>Negative (–)</strong>",
        correctIdx: 0, // 0 = +, 1 = −
        okMsg: "<strong>Correct!</strong> Color changed to blue — indole positive.",
        noMsg: "<strong>Not quite.</strong> Color changed to blue, meaning it is Indole Positive (+).",
        sticker: "sticker-indole-pos.png",
        trailLabel: "INDOLE +"
      },
      {
        type: "summary",
        tabLabel: "Summary",
        organism: "Escherichia coli",
        organismSticker: "colin-sticker-bac.png",
        dyk: "<em>Escherichia coli</em> can live in the intestines of people and animals. They can spread through undercooked ground beef or contaminated vegetables. That is why washing your hands, rinsing produce, and cooking ground beef to 160°F are important. <em>E. coli</em> is also the most common cause of urinary tract infections, which may cause burning pain when peeing or pain in the lower belly or back."
      }
    ]
  },

  /* ════════════════ Lisa — Case #3 ════════════════ */
  lisa: {
    caseNumber: 3,
    topbar: { letter: "L", name: "Lisa's Case", color: "#230C33" },
    trailEmojiStart: "🍦", 
    trailEmojiEnd:   "🦠", 

    steps: [

      {
        type: "gramStain",
        tabLabel: "Gram Stain",
        title: "Step 1: Gram Stain",
        image: { src: "lisa-gramStain.png", alt: "Lisa Gram Stain" },
        leftCaption: "Gram Stain Microscopic Image",
        leftExplanation:
          "<strong>How Gram Staining Works:</strong><br>" +
          "Gram staining colors bacteria so we can see them under a microscope and group them:<br>" +
          "&bull; Thick wall &rarr; stays <span class=\"purple\">purple (Gram-positive)<br></span>" +
          "&bull; Thin wall &rarr; turns <span class=\"pink\">pink(Gram-negative)</span>",
        shapePrompt: "Observe the microscopic image. <br> What is the shape?",
        shapeOptions: ["Round (cocci)", "Rod-shaped (bacilli)", "Spiral"],
        correctShapeIdx: 1,
        shapeOkMsg: "<strong>Correct!</strong> The bacteria are rod (bacilli).",
        shapeNoMsg: "<strong>Not quite.</strong> These bacteria are rod (bacilli), not round-shaped or spiral.",
        gramTypePrompt: "Is it Gram Positive or Negative?",
        correctGramTypeIdx: 0, // 0 = +, 1 = −
        gramTypeOkMsg: "<strong>Correct!</strong> The purple color indicates Gram-positive bacteria.",
        gramTypeNoMsg: "<strong>Not quite.</strong> The bacteria stain purple, meaning they are Gram-positive (+).",
        sticker: "sticker-gram-pos-rod.png",
        trailLabel: "GRAM + BACILLI"
      },
      
      {
        type: "biochem",
        tabLabel: "Catalase",
        title: "Step 2: Catalase Test",
        subtitle: "Biochemical test: 🫧 Catalase Test",
        prompt: "Is it Catalase Positive or Negative?",
        media: { kind: "video", src: "stephen-catalase.mp4" },
        leftLabel: "Catalase Test — Hydrogen Peroxide",
        leftExplanation:
          "<strong>How Catalase Test Works:</strong><br>" +
          "This test checks if bacteria have an enzyme called <strong>catalase</strong> that breaks down hydrogen peroxide:<br>" +
          "&bull; Bubbles appear &rarr; Catalase <strong>Positive (+)</strong><br>" +
          "&bull; No bubbles &rarr; Catalase <strong>Negative (–)</strong>",
        correctIdx: 0, // 0 = +, 1 = −
        okMsg: "<strong>Correct!</strong> Bubbles formed, indicating catalase is present.",
        noMsg: "<strong>Not quite.</strong> Bubbles appeared, meaning it is Catalase Positive (+).",
        sticker: "sticker-catalase-pos.png",
        trailLabel: "CATALASE +"
      },

      {
        type: "imageChoice",
        tabLabel: "Cell Culture",
        title: "Step 3: Cell Culture",
        prompt: "WHAT DO YOU SEE?",
        subPrompt: "Compare the patient sample with the two reference colonies below.<br>Are the colonies large or small?",
        images: [{ src: "lisa-culture.png", alt: "Lisa Culture Plate" }],
        leftLabel: "Patient Sample",
        hintImage: "lisa-hint003.png",
        choices: [
          { src: "lisa-culture-Large.png", label: "Large", alt: "Large colonies reference" },
          { src: "lisa-culture-small.png", label: "Small", alt: "Small colonies reference" }
        ],
        correctIdx: 1,
        okMsg: "<strong>Excellent!</strong> The patient's colonies are small — a key clue for this organism.",
        noMsg: "<strong>Not quite.</strong> Look again — the patient's colonies match the <em>Small</em> reference.",
        sticker: "sticker-cellCulture-small.png",
        trailLabel: "SMALL COLONIES"
      },
      {
        type: "summary",
        tabLabel: "Summary",
        organism: "Listeria monocytogenes",
        organismSticker: "lisa-sticker-bac.png",
        dyk: "<em>Listeria monocytogenes</em> survives in cold temperatures (fridge and freezer temperatures) unlike many bacteria. They will spread throughout the body, ending in the central nervous system, from the intestines after ingestion of contaminated food products."
      }

          ]
  },

    /* ════════════════ Mona — Case #4 ════════════════ */
  mona: {
    caseNumber: 4,
    topbar: { letter: "M", name: "Mona's Case", color: "#7CDEDC" },
    trailEmojiStart: "👂", 
    trailEmojiEnd:   "🦠", 

    steps: [

      {
        type: "cultureFill",
        tabLabel: "Cell Culture",
        title: "Step 1: Cell Culture",
        prompt: "What do you see?",
        subPrompt: "Drag words from the pool below into the blanks.",
        images: [
          { src: "mona-culture-001.png", alt: "Sheep Blood Agar", caption: "Sheep Blood Agar" },
          { src: "mona-culture-002.png", alt: "MacConkey Agar",   caption: "MacConkey Agar" }
        ],
        leftExplanation:
          "<strong>Each plate gives a different clue</strong><br>" +
          "Blood Agar: <em>&ldquo;Can this microbe damage red blood cells?&rdquo;</em><br>" +
          "MacConkey agar: <em>&ldquo;Can this microbe use lactose?&rdquo;</em><br>" ,
        hintImage: null,
        template: [
          ["On Sheep Blood Agar, the bacteria show ", 0, ", seen as a clear zone around the colonies."],
          ["The colonies are often ", 1, " in color and ", 2, "in shape."],
          ["On MacConkey agar, the bacteria appear ", 3, " which means they are ", 4, "fermenting."]
        ],
        answers: [
          "beta-hemolysis", "gray", "flat and spreading", "colorless", "non-lactose"
        ],
        wordPool: [
          "beta-hemolysis", "gray", "flat and spreading", "colorless",
          "protein", "pink", "purple", "round", "alpha-hemolysis",
          "lactose", "acid", "base", "non-lactose"
        ],
        okMsg: "<strong>Excellent!</strong> All observations are correct!",
        sticker: "sticker-cellCulture-metal.png",
        trailLabel: "METALLIC SHEEN COLONIES"
      },

      {
        type: "gramStain",
        tabLabel: "Gram Stain",
        title: "Step 2: Gram Stain",
        image: { src: "mona-gramStain.png", alt: "Mona Gram Stain" },
        leftCaption: "Gram Stain Microscopic Image",
        leftExplanation:
          "<strong>How Gram Staining Works:</strong><br>" +
          "Gram staining colors bacteria so we can see them under a microscope and group them:<br>" +
          "&bull; Thick wall &rarr; stays <span class=\"purple\">purple (Gram-positive)<br></span>" +
          "&bull; Thin wall &rarr; turns <span class=\"pink\">pink(Gram-negative)</span>",
        shapePrompt: "Observe the microscopic image. <br> What is the shape?",
        shapeOptions: ["Round (cocci)", "Rod-shaped (bacilli)", "Spiral"],
        correctShapeIdx: 1,
        shapeOkMsg: "<strong>Correct!</strong> The bacteria are rod (bacilli).",
        shapeNoMsg: "<strong>Not quite.</strong> These bacteria are rod (bacilli), not round-shaped or spiral.",
        gramTypePrompt: "Is it Gram Positive or Negative?",
        correctGramTypeIdx: 1, // 0 = +, 1 = −
        gramTypeOkMsg: "<strong>Correct!</strong> The pink color indicates Gram-negative bacteria.",
        gramTypeNoMsg: "<strong>Not quite.</strong> The bacteria stain pink, meaning they are Gram-negative (-).",
        sticker: "sticker-gram-neg-rod.png",
        trailLabel: "GRAM - BACILLI"
      },

      {
        type: "biochem",
        tabLabel: "Oxidase",
        title: "Step 3: Oxidase Test",
        subtitle: "Biochemical test: 🟣 Oxidase Test",
        prompt: "Is it Oxidase Positive or Negative?",
        media: { kind: "image", src: "mona-oxidase.png", alt: "Mona Oxidase Test" },
        leftLabel: "Oxidase Test — Reagent Strip",
        leftExplanation:
          "<strong>How Oxidase Test Works:</strong><br>" +
          "This test checks if bacteria produce <strong>cytochrome c oxidase</strong>, an enzyme that reacts with the reagent:<br>" +
          "&bull; Purple/dark blue color &rarr; Oxidase <strong>Positive (+)</strong><br>" +
          "&bull; No color change &rarr; Oxidase <strong>Negative (–)</strong>",
        correctIdx: 0, // 0 = +, 1 = −
        okMsg: "<strong>Correct!</strong> Color changed blue — oxidase positive.",
        noMsg: "<strong>Not quite.</strong> Color changed, so it is Oxidase positive (+).",
        sticker: "sticker-oxidase-pos.png",
        trailLabel: "OXIDASE +"
      },
      {
        type: "summary",
        tabLabel: "Summary",
        organism: "Pseudomonas aeruginosa",
        organismSticker: "mona-sticker-bac.png",
        dyk: "<em>Pseudomonas aeruginosa</em> is found in swimming pools and causes swimmers ear and folliculitis, which is an infection of the hair follicles that can look like small red bumps on the skin. To help prevent infections, it is important to practice good handwashing and shower after swimming."
      }

      ]
  },

      /* ════════════════ Vishal — Case #5 ════════════════ */
  vishal: { 
    caseNumber: 5,
    topbar: { letter: "V", name: "Vishal's Case", color: "#F17105" },
    trailEmojiStart: "🏖️", 
    trailEmojiEnd:   "🦠", 

    steps: [

      {
        type: "gramStain",
        tabLabel: "Gram Stain",
        title: "Step 1: Gram Stain",
        image: { src: "vishal-gramStain.png", alt: "Vishal Gram Stain" },
        leftCaption: "Microscopic view after Gram staining",
        leftExplanation:
          "<strong>How Gram Staining Works:</strong><br>" +
          "Gram staining colors bacteria so we can see them under a microscope and group them:<br>" +
          "&bull; Thick wall &rarr; stays <span class=\"purple\">purple (Gram-positive)<br></span>" +
          "&bull; Thin wall &rarr; turns <span class=\"pink\">pink(Gram-negative)</span>",
        shapePrompt: "Observe the microscopic image. <br> What is the shape?",
        shapeOptions: ["Round (cocci)", "Rod-shaped (bacilli)", "Spiral"],
        correctShapeIdx: 1,
        shapeOkMsg: "<strong>Correct!</strong> The bacteria are rod-shaped (bacilli).",
        shapeNoMsg: "<strong>Not quite.</strong> These bacteria are rod-shaped (bacilli), not round or spiral.",
        gramTypePrompt: "Is it Gram Positive or Negative?",
        correctGramTypeIdx: 1, // 0 = +, 1 = −
        gramTypeOkMsg: "<strong>Correct!</strong> The pink color indicates Gram-negative bacteria.",
        gramTypeNoMsg: "<strong>Not quite.</strong> The bacteria stain pink, meaning they are Gram-negative (−).",
        sticker: "sticker-gram-neg-rod.png",
        trailLabel: "GRAM − BACILLI"
      },

            {
        type: "biochem",
        tabLabel: "Oxidase",
        title: "Step 2: Oxidase Test",
        subtitle: "Biochemical test: 🟣 Oxidase Test",
        prompt: "Is it Oxidase Positive or Negative?",
        media: { kind: "image", src: "mona-oxidase.png", alt: "Mona Oxidase Test" },
        leftLabel: "Oxidase Test — Reagent Strip",
        leftExplanation:
          "<strong>How Oxidase Test Works:</strong><br>" +
          "This test checks if bacteria produce <strong>cytochrome c oxidase</strong>, an enzyme that reacts with the reagent:<br>" +
          "&bull; Purple/dark blue color &rarr; Oxidase <strong>Positive (+)</strong><br>" +
          "&bull; No color change &rarr; Oxidase <strong>Negative (–)</strong>",
        correctIdx: 0, // 0 = +, 1 = −
        okMsg: "<strong>Correct!</strong> Color changed blue — oxidase positive.",
        noMsg: "<strong>Not quite.</strong> Color changed, so it is Oxidase positive (+).",
        sticker: "sticker-oxidase-pos.png",
        trailLabel: "OXIDASE +"
      },

      {
        type: "imageChoice",
        tabLabel: "Cell Culture",
        title: "Step 3: Cell Culture",
        prompt: "WHAT DO YOU SEE?",
        subPrompt: "How would you interpret metallic sheen for the patient?",
        images: [{ src: "vishal-culture.png", alt: "Vishal Culture Plate" }],
        leftLabel: "Patient Sample",
        hintImage: "vishal-hint003.png",
        choices: [
          { src: "vishal-culture-metal.png", label: "metallic sheen positive", alt: "Metallic positive reference" },
          { src: "vishal-culture-noMetal.png", label: "metallic sheen negative", alt: "Metallic negative reference" }
        ],
        correctIdx: 1,
        okMsg: "<strong>Excellent!</strong> The patient's colonies do not show a metallic sheen",
        noMsg: "<strong>Not quite.</strong> Look again — the patient's colonies match the <em>metallic sheen negative</em> reference.",
        sticker: "sticker-cellCulture-noMetal.png",
        trailLabel: "METALLIC SHEEN<br>NEGATIVE</br>"
      },

      {
        type: "summary",
        tabLabel: "Summary",
        organism: "Vibrio vulnificus",
        organismSticker: "vishal-sticker-bac.png",
        dyk: "<em>Vibrio vulnificus</em>, a comma-shaped gram-negative rod, is found in salt water. Coming in contact with contaminated water (swimming in the sea) with a cut resulted in a deeper wound, cellulitis. Can progress to necrotizing fasciitis or flesh-eating bacterial infection.​"
       }
    ]
  },

      /* ════════════════ Stephanie — Case #6 ════════════════ */
  stephanie: {
    caseNumber: 6,
    topbar: { letter: "S", name: "Stephanie's Case", color: "#FCCA46" },
    trailEmojiStart: "🤒", 
    trailEmojiEnd:   "🦠", 

    steps: [
      {
        type: "cultureFill",
        tabLabel: "Cell Culture",
        title: "Step 1: Cell Culture",
        prompt: "What do you see?",
        subPrompt: "Drag words from the pool below into the blanks.",
        images: [{ src: "stephanie-culture.png", alt: "Stephanie Culture Plate" }],
        leftLabel: "Culture Plate",
        hintImage: "stephanie-hint001.png",
        template: [
          ["On sheep blood agar the bacteria form colonies that are ", 0, " in size,", 1, "in color"],
          ["Around the colonies, there is a distinct ", 2, " zone, showing ", 3, "which means the bacteria are breaking down red blood cells completely."]
        ],
        answers: [
          "small", "white", "clear", "beta hemolysis"
        ],
        wordPool: [
          "small", "white", "red", "no hemolysis",
          "clear", "green", "fuzzy", "blue", "yellow",
          "purple", "beta hemolysis", "gamma hemolysis", "large"
        ],
        okMsg: "<strong>Excellent!</strong> All observations are correct!",
        sticker: "sticker-cellCulture-hemolysis-white.png",
        trailLabel: "CELL CULTURE<br>HEMOLYSIS"
      },

      {
        type: "gramStain",
        tabLabel: "Gram Stain",
        title: "Step 2: Gram Stain",
        image: { src: "stephanie-gramStain.png", alt: "Stephanie Gram Stain" },
        leftCaption: "This Photo by Unknown author is licensed under CC BY-SA",
        leftExplanation:
          "<strong>How Gram Staining Works:</strong><br>" +
          "Gram staining colors bacteria so we can see them under a microscope and group them:<br>" +
          "&bull; Thick wall &rarr; stays <span class=\"purple\">purple (Gram-positive)<br></span>" +
          "&bull; Thin wall &rarr; turns <span class=\"pink\">pink(Gram-negative)</span>",
        shapePrompt: "Observe the microscopic image. <br> What is the shape?",
        shapeOptions: ["Round (cocci)", "Rod-shaped (bacilli)", "Spiral"],
        correctShapeIdx: 0,
        shapeOkMsg: "<strong>Correct!</strong> The bacteria are round (cocci), appearing in clusters.",
        shapeNoMsg: "<strong>Not quite.</strong> These bacteria are round (cocci), not rod-shaped or spiral.",
        gramTypePrompt: "Is it Gram Positive or Negative?",
        correctGramTypeIdx: 0, // 0 = +, 1 = −
        gramTypeOkMsg: "<strong>Correct!</strong> The purple color indicates Gram-positive bacteria.",
        gramTypeNoMsg: "<strong>Not quite.</strong> The bacteria stain purple, meaning they are Gram-positive (+).",
        sticker: "sticker-gram-pos-cocci.png",
        trailLabel: "GRAM + COCCI"
      },
      {
        type: "biochem",
        tabLabel: "Catalase",
        title: "Step 3: Catalase Test",
        subtitle: "Biochemical test: 🫧 Catalase Test",
        prompt: "Is it Catalase Positive or Negative?",
        media: { kind: "image", src: "stephanie-catalase.png", alt: "Stephanie Catalase Test" },
        leftLabel: "Catalase Test — Hydrogen Peroxide",
        leftExplanation:
          "<strong>How Catalase Test Works:</strong><br>" +
          "This test checks if bacteria have an enzyme called <strong>catalase</strong> that breaks down hydrogen peroxide:<br>" +
          "&bull; Bubbles appear &rarr; Catalase <strong>Positive (+)</strong><br>" +
          "&bull; No bubbles &rarr; Catalase <strong>Negative (–)</strong>",
        correctIdx: 1, // 0 = +, 1 = −
        okMsg: "<strong>Correct!</strong> No bubbles formed, indicating catalase is absent.",
        noMsg: "<strong>Not quite.</strong> No bubbles appeared, meaning it is Catalase Negative (–).",
        sticker: "sticker-catalase-neg.png",
        trailLabel: "CATALASE -"
      },
      {
        type: "multiChoice",
        tabLabel: "Strep Latex",
        title: "Step 4: Strep Latex Test",
        subtitle: "Biochemical test: 🧩 Strep Latex Test",
        prompt: "Which streptococcal group shows a positive latex test result?",
        media: { kind: "image", src: "stephanie-strepLatex.png", alt: "Stephanie Strep Latex Test" },
        leftLabel: "Strep Latex Test",
        leftExplanation:
          "<strong>How Strep Latex Test Works:</strong><br>" +
          "The Strep Latex Test works like a matching game. Each latex drop is labeled for one group: A, B, C, D, F, or G. If the bacteria have the matching group marker, the latex beads clump together. The group that clumps is the group of the bacteria.<br>" +
          "&bull; Visible clumping &rarr; Strep Latex <strong>Positive (+)</strong><br>" +
          "&bull; No agglutination &rarr; Strep Latex <strong>Negative (–)</strong>",
        options: ["A", "B", "C", "D", "Negative", "F", "G"],
        correctIdx: 0,
        okMsg: "<strong>Correct!</strong> Group A latex test showed clumping.",
        noMsg: "<strong>Not quite.</strong> Group A latex test showed clumping. Compare the clumping to the positive control.",
        sticker: "sticker-strepLatex-A.png",
        trailLabel: "Strep Latex + (Group A)"
      },

      {
        type: "summary",
        tabLabel: "Summary",
        organism: "Streptococcus pyogenes",
        organismSticker: "stephanie-sticker-bac.png",
        dyk: "<em>Streptococcus pyogenes</em>, is a type of bacteria that can cause sore throat, fever, and swollen glands. The name pyogenes means pus-forming. This is because the bacteria can cause infections that produce pus, such as the yellow or white patches that may appear on the tonsils."
      }
    ]
  },
          /* ════════════════ Coco— Case #7 ════════════════ */
  coco: {
    caseNumber: 7,
    topbar: { letter: "C", name: "Coco's Case", color: "#FFD2FC" },
    trailEmojiStart: "👁️", 
    trailEmojiEnd:   "🦠", 

    steps: [
      {
        type: "cultureFill",
        tabLabel: "Cell Culture",
        title: "Step 1: Cell Culture",
        prompt: "What do you see?",
        subPrompt: "Drag words from the pool below into the blanks.",
        images: [{ src: "coco-culture.png", alt: "Coco Culture Plate" }],
        leftLabel: "Culture Plate",
        hintImage: "coco-hint001.png",
        template: [
          ["On sheep blood agar, the bacteria form small colonies with a", 0, " halo around them."],
          ["This is called ", 1, "meaning the bacteria are", 2, " breaking down red blood cells."]
        ],

        answers: [
          "greenish", "alpha-hemolysis", "partially"
        ],
        wordPool: [
          "yellowish", "pinkish", "reddish", "completely",
          "clear", "greenish", "fuzzy","large", "not", "partially",
          "alpha-hemolysis", "beta-hemolysis", "gamma-hemolysis"
        ],
        okMsg: "<strong>Excellent!</strong> All observations are correct!",
        sticker: "coco-sticker-cellCulture.png",
        trailLabel: "CELL CULTURE"
      },
            {
        type: "gramStain",
        tabLabel: "Gram Stain",
        title: "Step 2: Gram Stain",
        image: { src: "coco-gramStain.png", alt: "Coco Gram Stain" },
        leftCaption: "This Photo by Unknown author is licensed under CC BY-SA",
        leftExplanation:
          "<strong>How Gram Staining Works:</strong><br>" +
          "Gram staining colors bacteria so we can see them under a microscope and group them:<br>" +
          "&bull; Thick wall &rarr; stays <span class=\"purple\">purple (Gram-positive)<br></span>" +
          "&bull; Thin wall &rarr; turns <span class=\"pink\">pink(Gram-negative)</span>",
        shapePrompt: "Observe the microscopic image. <br> What is the shape?",
        shapeOptions: ["Round (cocci)", "Rod-shaped (bacilli)", "Spiral"],
        correctShapeIdx: 0,
        shapeOkMsg: "<strong>Correct!</strong> The bacteria are round (cocci), appearing in clusters.",
        shapeNoMsg: "<strong>Not quite.</strong> These bacteria are round (cocci), not rod-shaped or spiral.",
        gramTypePrompt: "Is it Gram Positive or Negative?",
        correctGramTypeIdx: 0, // 0 = +, 1 = −
        gramTypeOkMsg: "<strong>Correct!</strong> The purple color indicates Gram-positive bacteria.",
        gramTypeNoMsg: "<strong>Not quite.</strong> The bacteria stain purple, meaning they are Gram-positive (+).",
        sticker: "coco-sticker-gramStain.png",
        trailLabel: "GRAM + COCCI"
      },
            {
        type: "biochem",
        tabLabel: "Catalase",
        title: "Step 3: Catalase Test",
        subtitle: "Biochemical test: 🫧 Catalase Test",
        prompt: "Is it Catalase Positive or Negative?",
        media: { kind: "image", src: "stephanie-catalase.png", alt: "Coco Catalase Test" },
        leftLabel: "Catalase Test — Hydrogen Peroxide",
        leftExplanation:
          "<strong>How Catalase Test Works:</strong><br>" +
          "This test checks if bacteria have an enzyme called <strong>catalase</strong> that breaks down hydrogen peroxide:<br>" +
          "&bull; Bubbles appear &rarr; Catalase <strong>Positive (+)</strong><br>" +
          "&bull; No bubbles &rarr; Catalase <strong>Negative (–)</strong>",
        correctIdx: 1, // 0 = +, 1 = −
        okMsg: "<strong>Correct!</strong> No bubbles formed, indicating catalase is absent.",
        noMsg: "<strong>Not quite.</strong> No bubbles appeared, meaning it is Catalase Negative (–).",
        sticker: "sticker-catalase-neg.png",
        trailLabel: "CATALASE -"
      },
            {
        type: "multiChoice",
        tabLabel: "Strep Latex",
        title: "Step 4: Strep Latex Test",
        subtitle: "Biochemical test: 🧩 Strep Latex Test",
        prompt: "Which streptococcal group shows a positive latex test result?",
        media: { kind: "image", src: "coco-strepLatex.png", alt: "Coco Strep Latex Test" },
        leftLabel: "Strep Latex Test",
        leftExplanation:
          "<strong>How Strep Latex Test Works:</strong><br>" +
          "The Strep Latex Test works like a matching game. Each latex drop is labeled for one group: A, B, C, D, F, or G. If the bacteria have the matching group marker, the latex beads clump together. The group that clumps is the group of the bacteria.<br>" +
          "&bull; Visible clumping &rarr; Strep Latex <strong>Positive (+)</strong><br>" +
          "&bull; No agglutination &rarr; Strep Latex <strong>Negative (–)</strong>",
        options: ["A", "B", "C", "D", "Negative", "F", "G"],
        correctIdx: 4,
        okMsg: "<strong>Correct!</strong> Strep latex grouping kits are designed to identify Lancefield group antigens in beta-hemolytic streptococci. None clumped, meaning the bacteria are not grouped as A, B, C, D, F, or G.",
        noMsg: "<strong>Not quite.</strong> Nothing showed clumping. Compare the clumping to the negative control.",
        sticker: "coco-sticker-strepLatex.png",
        trailLabel: "Strep Latex - (No Group)"
      }, 
      {
        type: "summary",
        tabLabel: "Summary",
        organism: "Streptococcus pneumoniae",
        organismSticker: "coco-sticker-bac.png",
        dyk: "<em>Streptococcus pneumoniae</em>, is a type of bacteria that can cause sore throat, fever, and swollen glands. The name pyogenes means pus-forming. This is because the bacteria can cause infections that produce pus, such as the yellow or white patches that may appear on the tonsils."
      }

    ]
  }

};
