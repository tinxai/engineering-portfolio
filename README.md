# Tin Nguyen — Engineering Portfolio

A separate, project-led portfolio for AI engineer and software engineer roles. The academic website is untouched. This is a standalone static site. Source repository: https://github.com/tinxai/engineering-portfolio. Website deployment is separate from pushing the source.

## Open or preview

Open `index.html` directly in a browser. The project data is a local script, so project filtering and case studies work without a server or API key.

For a normal HTTP preview, run this from the project folder:

```sh
python3 -m http.server 5173 --bind 127.0.0.1
```

Then open http://localhost:5173.

## Files

- `index.html`: introduction, experience, skills, education, and contact.
- `styles.css`: responsive layout, mobile navigation, print and reduced-motion styles.
- `projects.js`: the five project descriptions, stacks, links, and case-study content.
- `app.js`: project filters, native dialog case studies, mobile menu, and copy-email interaction. The twelve planned projects use native details/summary disclosures.
- `assets/`: locally copied photos, project images, technology logos, and organization marks.
- `data/Tin_Nguyen_CV.pdf`: the existing CV, linked as a CV rather than a new engineering résumé.
- `ROADMAP.md`: development priorities for stronger agent/RAG portfolio evidence.

There is no framework, build step, package installation, analytics, or application backend. Google Fonts is optional; system fonts are used if it is unavailable. Email uses the visitor’s mail application.

## Content and assets

Current project descriptions and work history come from the existing portfolio and project READMEs. No production usage, performance, or business impact metrics have been invented. All twelve RAG/agent ideas are displayed in a separate planned-projects section with build plans and evaluation criteria. They are not presented as completed applications.

Project imagery is reused from the academic portfolio. DealMesh is an AI-generated interface concept and PhongKham AI uses an AI-generated illustration; both are labeled in the interface and explained in their case studies. PageGuide and Skitch show actual application imagery. Shotcard uses its original repository banner. University and organization asset sources are recorded next to their respective assets.

Before publishing, review all project descriptions, employment dates, the CV, and outbound links. The project is suitable for static hosting, including GitHub Pages, Netlify, or Cloudflare Pages.
