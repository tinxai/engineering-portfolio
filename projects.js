// Project descriptions are based on the existing portfolio and project READMEs.
// Add measured results only after running and documenting the corresponding evaluation.
const PROJECTS = [
  {
    id: 'pageguide', name: 'PageGuide Gemini', category: 'ai', label: 'AI × browser tooling',
    headline: 'From an AI citation to the evidence behind it.',
    description: 'A Chrome extension that connects Gemini citations to the actual source: text, images, and charts.',
    image: 'assets/projects/pageguide-gemini.png', alt: 'PageGuide highlighting source evidence beside a Gemini answer', imageType: 'Application demo',
    stack: [['JavaScript','javascript.svg'],['Chrome Extensions','googlechrome.svg'],['Gemini','googlegemini.svg']],
    code: 'https://github.com/tinxai/pageguide-gemini',
    problem: 'AI answers are easier to assess when you can inspect the evidence. Opening another copy of a source page makes that checking process more cumbersome.',
    built: [
      'Routes citations to an already-open source tab and scrolls to the quoted text.',
      'Highlights text and draws labeled bounding boxes over visual evidence such as images and charts.',
      'Uses a Chrome Manifest V3 extension with a background service worker and page content scripts.'
    ],
    tradeoff: 'Text matching depends on the quotation matching the source. Visual boxes depend on the page view staying consistent. Chrome’s PDF viewer needs a separate highlighting path.',
    focus: 'Evidence grounding · DOM interaction · Browser integration',
    sourceNote: 'This image is a demo from the project repository.'
  },
  {
    id: 'dealmesh', name: 'DealMesh', category: 'fullstack', label: 'Full-stack application',
    headline: 'Optimize the shopping list, not just one item.',
    description: 'Compares product combinations across sellers, shipping costs, and bundle discounts—and explains the tradeoffs.',
    image: 'assets/projects/dealmesh-v2.webp', alt: 'DealMesh interface concept with products and seller bundle comparison', imageType: 'Interface concept',
    stack: [['Java','java.svg'],['Spring Boot','springboot.svg'],['React','react.svg'],['PostgreSQL','postgresql.svg'],['Redis','redis.svg']],
    problem: 'Choosing the cheapest listing for every item can produce a more expensive shopping list once shipping and seller discounts are included.',
    built: [
      'A Spring Boot backend separates marketplace retrieval, product matching, and shopping-list optimization.',
      'A React and TypeScript interface presents candidate bundles and explains product and seller choices.',
      'PostgreSQL stores application data; Redis supports caching. A built-in demo marketplace makes the workflow reproducible without marketplace credentials.'
    ],
    tradeoff: 'Totals are estimates from retrieved listings. Unknown shipping is flagged rather than assumed free. The application directs users to sellers rather than handling checkout.',
    focus: 'Optimization · API design · Data persistence · Full-stack delivery',
    sourceNote: 'AI-generated interface concept. It illustrates the product; it is not an application screenshot.'
  },
  {
    id: 'phongkham', name: 'PhongKham AI', category: 'ai', label: 'LLM application',
    headline: 'A clinic assistant grounded in clinic data.',
    description: 'A Vietnamese-language booking assistant, with appointment workflows and a separate clinic analytics agent.',
    image: 'assets/projects/phongkham-ai.webp', alt: 'Illustration of a medical chat assistant and appointment calendar', imageType: 'Project illustration',
    stack: [['Python','python.svg'],['FastAPI','fastapi.svg'],['SQLite','sqlite.svg'],['Qwen','qwen.svg'],['pandas','pandas.svg']],
    code: 'https://github.com/tinxai/phongkham-ai',
    problem: 'A conversational booking assistant needs to act on appointment records. A clinic analytics assistant needs to answer questions using data instead of relying only on model knowledge.',
    built: [
      'A FastAPI booking application with SQLite records, FAQ retrieval, and a doctor dashboard.',
      'Simulated patient personas exercise the booking agent against a disposable database.',
      'A separate analytics agent writes and runs pandas code over synthetic clinic exports. Its evaluation scores correct answers, abstentions, and incorrect answers differently.'
    ],
    tradeoff: 'This is a prototype using synthetic clinic data. The code-execution sandbox is not a security boundary; deployment on real data requires stronger isolation and validation.',
    focus: 'Tool use · Structured data · Simulation · Evaluation',
    sourceNote: 'AI-generated project illustration, not an application screenshot.'
  },
  {
    id: 'shotcard', name: 'Shotcard', category: 'tools', label: 'AI-powered desktop tool',
    headline: 'Turn something you see into something you remember.',
    description: 'Capture Japanese text or an image, get an explanation, and save contextual flashcards to Anki.',
    image: 'assets/projects/shotcard.svg', alt: 'Shotcard screenshot-to-explanation-to-flashcard workflow', imageType: 'Project banner',
    stack: [['Python','python.svg'],['Lua','lua.svg'],['OpenRouter','openrouter.svg'],['AnkiConnect','anki.svg']],
    code: 'https://github.com/tinxai/shotcard',
    problem: 'Looking up Japanese from a video, game, or screenshot involves several manual steps. The result is easy to lose unless it enters a review workflow.',
    built: [
      'A Hammerspoon hotkey captures a screen region and passes it to a Python pipeline.',
      'A vision model accessed through OpenRouter produces a level-aware explanation, translation, and learning points.',
      'AnkiConnect creates flashcards with screenshot context; optional Obsidian notes preserve the capture. Cards are queued when Anki is closed, and duplicates are skipped.'
    ],
    tradeoff: 'The desktop workflow targets macOS and depends on an external vision model and AnkiConnect. The small Python and Lua implementation keeps the local setup straightforward.',
    focus: 'Vision models · Desktop integration · Offline queueing',
    sourceNote: 'Original project banner from the Shotcard repository.'
  },
  {
    id: 'skitch', name: 'Skitch Studio', category: 'tools', label: 'Browser-based creative tool',
    headline: 'Annotate. Refine. Export.',
    description: 'A screenshot annotation app with editable shapes, text, privacy patches, undo/redo, and PNG export.',
    image: 'assets/projects/skitch2.png', alt: 'Skitch Studio screenshot annotation workspace', imageType: 'Application screenshot',
    stack: [['JavaScript','javascript.svg'],['HTML','html5.svg'],['CSS','css.svg']],
    code: 'https://github.com/tinxai/skitch2', live: 'https://skitch-studio.tin-kevin.chatgpt.site',
    problem: 'A screenshot often needs a few precise annotations before it is useful to someone else. The editing workflow should be accessible directly in a browser.',
    built: [
      'A static browser application with screenshot import and editable vector annotations.',
      'Text boxes, stamps, privacy patches, cropping, and undo/redo support iterative editing.',
      'Gallery saves and PNG export complete the workflow from capture to shareable output.'
    ],
    tradeoff: 'The application focuses on screenshot annotation in a static web app rather than a server-backed collaboration workflow.',
    focus: 'Canvas interaction · Editing state · Export workflows',
    sourceNote: 'Application screenshot reused from the existing portfolio.'
  }
];
