# Roaa Al-Khasawneh — Portfolio Website

A multi-page personal portfolio built with plain HTML5, CSS3 and JavaScript.

## How to open it in VS Code

1. Unzip the project folder.
2. Open the `roaa-portfolio` folder in VS Code (`File > Open Folder`).
3. Install the **Live Server** extension (optional but recommended).
4. Right-click `index.html` → **Open with Live Server** to preview the site in your browser.

## Folder structure

```
roaa-portfolio/
│
├── index.html          Home
├── about.html           About Me
├── education.html       Education
├── skills.html          Technical Skills
├── projects.html        Projects (with JS filtering)
├── experience.html      Project & Team Experience
├── certificates.html    Qualifications & Certifications
├── competitions.html    Competitions
├── contact.html         Contact (with JS form validation)
│
├── css/
│   └── style.css        One shared stylesheet for every page
│
├── js/
│   └── script.js        One shared script for every page
│
└── assets/
    ├── images/          Add your photos here
    └── certificates/    Add certificate PDFs/images here
```

## Things to finish before publishing

- Add your real CV file at `assets/Roaa_Murad_Ahmad_Al-Khasawneh_CV.docx` — every "Download CV" button already points there.
- Add your certificate files inside `assets/certificates/` (file names are already referenced in `certificates.html`).
- Add a profile photo inside `assets/images/` if you'd like one on the About or Home page.

## Editing tips

- Update text directly inside each `.html` file — the content is written in plain, readable HTML.
- All colors, fonts and spacing live in `css/style.css` at the top, inside the `:root { ... }` block, so you can retheme the whole site by changing a few values there.
- All interactive behavior (mobile menu, project filter, form validation, scroll-to-top button) lives in `js/script.js`.
