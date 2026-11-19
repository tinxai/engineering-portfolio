// Project descriptions are based on project READMEs and the linked public sites.
// Add measured results only after running and documenting the corresponding evaluation.
const PROJECTS = [
  {
    "id": "dealmesh",
    "name": "DealMesh",
    "category": "fullstack",
    "label": "Full-stack application",
    "headline": "Optimize the shopping list, not just one item.",
    "description": "Compares product combinations across sellers, shipping costs, and bundle discounts—and explains the tradeoffs.",
    "image": "assets/projects/dealmesh-groceries.png",
    "alt": "DealMesh grocery interface showing real product photos and a whole-list seller-bundle comparison",
    "imageType": "Grocery UI concept",
    "stack": [
      [
        "Java",
        "java.svg"
      ],
      [
        "Spring Boot",
        "springboot.svg"
      ],
      [
        "React",
        "react.svg"
      ],
      [
        "PostgreSQL",
        "postgresql.svg"
      ],
      [
        "Redis",
        "redis.svg"
      ]
    ],
    "problem": "Choosing the cheapest listing for every item can produce a more expensive shopping list once shipping and seller discounts are included.",
    "built": [
      "A Spring Boot backend separates marketplace retrieval, product matching, and shopping-list optimization.",
      "A React and TypeScript interface presents candidate bundles and explains product and seller choices.",
      "PostgreSQL stores application data; Redis supports caching. A built-in demo marketplace makes the workflow reproducible without marketplace credentials."
    ],
    "tradeoff": "Totals are estimates from retrieved listings. Unknown shipping is flagged rather than assumed free. The application directs users to sellers rather than handling checkout.",
    "focus": "Optimization · API design · Data persistence · Full-stack delivery",
    "sourceNote": "HTML/CSS interface concept using product photos from Weee. Seller bundles, prices, delivery, and savings are illustrative; this is not a screenshot of the running app or a Weee integration.",
    "featured": true
  },
  {
    "id": "maicare",
    "name": "MaiCare",
    "category": "ai",
    "label": "Bilingual clinic assistant",
    "headline": "An AI front desk in English and Vietnamese.",
    "description": "Helps patients book, reschedule, or cancel clinic appointments, with confirmation before booking and staff handoffs for unfinished requests.",
    "image": "assets/projects/maicare-site.png",
    "alt": "MaiCare website with a bilingual appointment conversation and a confirmed clinic booking",
    "imageType": "Website screenshot",
    "stack": [
      [
        "Python",
        "python.svg"
      ],
      [
        "FastAPI",
        "fastapi.svg"
      ],
      [
        "SQLite",
        "sqlite.svg"
      ],
      [
        "Qwen",
        "qwen.svg"
      ]
    ],
    "code": "https://github.com/tinxai/phongkham-ai",
    "problem": "A clinic front desk needs to help patients in their preferred language, offer available appointments, and pass requests it cannot complete to the clinic team.",
    "built": [
      "A bilingual patient experience for booking, rescheduling, canceling, and confirming clinic visits.",
      "Appointments are offered from available calendar times and booked only after patient confirmation.",
      "Unfinished requests become staff tasks with the conversation attached."
    ],
    "tradeoff": "Medical, billing, and insurance questions are passed to clinic staff. The public site states that it does not yet connect to medical records or text patients.",
    "focus": "Bilingual interaction · Calendar workflows · Confirmation · Human handoff",
    "sourceNote": "Screenshot of the public MaiCare website at https://maicares.org/, captured November 19, 2026.",
    "featured": true,
    "live": "https://maicares.org/"
  },
  {
    "id": "pageguide",
    "name": "PageGuide Gemini",
    "category": "tools",
    "label": "Small tool · Browser extension",
    "headline": "From an AI citation to the evidence behind it.",
    "description": "A Chrome extension that connects Gemini citations to the actual source: text, images, and charts.",
    "image": "assets/projects/pageguide-gemini.png",
    "alt": "PageGuide highlighting source evidence beside a Gemini answer",
    "imageType": "Application demo",
    "stack": [
      [
        "JavaScript",
        "javascript.svg"
      ],
      [
        "Chrome Extensions",
        "googlechrome.svg"
      ],
      [
        "Gemini",
        "googlegemini.svg"
      ]
    ],
    "code": "https://github.com/tinxai/pageguide-gemini",
    "problem": "AI answers are easier to assess when you can inspect the evidence. Opening another copy of a source page makes that checking process more cumbersome.",
    "built": [
      "Routes citations to an already-open source tab and scrolls to the quoted text.",
      "Highlights text and draws labeled bounding boxes over visual evidence such as images and charts.",
      "Uses a Chrome Manifest V3 extension with a background service worker and page content scripts."
    ],
    "tradeoff": "Text matching depends on the quotation matching the source. Visual boxes depend on the page view staying consistent. Chrome’s PDF viewer needs a separate highlighting path.",
    "focus": "Evidence grounding · DOM interaction · Browser integration",
    "sourceNote": "This image is a demo from the project repository."
  },
  {
    "id": "skitch",
    "name": "Skitch Studio",
    "category": "tools",
    "label": "Small tool · Screenshot annotation",
    "headline": "Annotate. Refine. Export.",
    "description": "A screenshot annotation app with editable shapes, text, privacy patches, undo/redo, and PNG export.",
    "image": "assets/projects/skitch2.png",
    "alt": "Skitch Studio screenshot annotation workspace",
    "imageType": "Application screenshot",
    "stack": [
      [
        "JavaScript",
        "javascript.svg"
      ],
      [
        "HTML",
        "html5.svg"
      ],
      [
        "CSS",
        "css.svg"
      ]
    ],
    "code": "https://github.com/tinxai/skitch2",
    "live": "https://skitch-studio.tin-kevin.chatgpt.site",
    "problem": "A screenshot often needs a few precise annotations before it is useful to someone else. The editing workflow should be accessible directly in a browser.",
    "built": [
      "A static browser application with screenshot import and editable vector annotations.",
      "Text boxes, stamps, privacy patches, cropping, and undo/redo support iterative editing.",
      "Gallery saves and PNG export complete the workflow from capture to shareable output."
    ],
    "tradeoff": "The application focuses on screenshot annotation in a static web app rather than a server-backed collaboration workflow.",
    "focus": "Canvas interaction · Editing state · Export workflows",
    "sourceNote": "Application screenshot reused from the existing portfolio."
  },
  {
    "id": "shotcard",
    "name": "Shotcard",
    "category": "tools",
    "label": "Small tool · Desktop utility",
    "headline": "Turn something you see into something you remember.",
    "description": "Capture Japanese text or an image, get an explanation, and save contextual flashcards to Anki.",
    "image": "assets/projects/shotcard.svg",
    "alt": "Shotcard screenshot-to-explanation-to-flashcard workflow",
    "imageType": "Project banner",
    "stack": [
      [
        "Python",
        "python.svg"
      ],
      [
        "Lua",
        "lua.svg"
      ],
      [
        "OpenRouter",
        "openrouter.svg"
      ],
      [
        "AnkiConnect",
        "anki.svg"
      ]
    ],
    "code": "https://github.com/tinxai/shotcard",
    "problem": "Looking up Japanese from a video, game, or screenshot involves several manual steps. The result is easy to lose unless it enters a review workflow.",
    "built": [
      "A Hammerspoon hotkey captures a screen region and passes it to a Python pipeline.",
      "A vision model accessed through OpenRouter produces a level-aware explanation, translation, and learning points.",
      "AnkiConnect creates flashcards with screenshot context; optional Obsidian notes preserve the capture. Cards are queued when Anki is closed, and duplicates are skipped."
    ],
    "tradeoff": "The desktop workflow targets macOS and depends on an external vision model and AnkiConnect. The small Python and Lua implementation keeps the local setup straightforward.",
    "focus": "Vision models · Desktop integration · Offline queueing",
    "sourceNote": "Original project banner from the Shotcard repository."
  }
];
