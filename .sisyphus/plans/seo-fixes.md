# SEO Fixes — afterapp.fun

## TL;DR

> **Quick Summary**: Fix all SEO gaps identified in Monica's audit — add canonical tags, JSON-LD schema markup, Twitter cards, internal linking, and footer navigation to boost the site from B+ (82/100) to A (95+/100).
> 
> **Deliverables**:
> - Canonical tags on all pages via Next.js Metadata API
> - JSON-LD structured data: WebSite + Organization (global), Article + BreadcrumbList (blog posts)
> - Twitter card metadata
> - Fix dual H1 on homepage (HeroSection)
> - Internal linking from homepage to /blog
> - Footer with internal navigation links
> - Google Search Console verification meta tag placeholder
> 
> **Estimated Effort**: Short (1-2 hours)
> **Parallel Execution**: YES — 2 waves
> **Critical Path**: Task 1 (metadataBase) → Tasks 2-6 (parallel) → Task 7 (build verify) → Task 8 (commit + deploy)

---

## Context

### Original Request
User's AI agent Monica ran a full SEO audit scoring afterapp.fun at B+ (82/100). Key gaps: no canonical tags, no schema markup, weak internal linking, no Twitter cards. User wants all fixes implemented.

### Audit Findings (Verified)
| Issue | Severity | Confirmed? |
|-------|----------|------------|
| No canonical tags | HIGH | ✅ Yes — no `alternates` in any metadata |
| No schema markup (JSON-LD) | HIGH | ✅ Yes — zero structured data anywhere |
| No Twitter card metadata | MEDIUM | ✅ Yes — only openGraph, no twitter config |
| Dual H1 on homepage | MEDIUM | ✅ Yes — HeroSection has two `<motion.h1>` elements |
| Weak internal linking | MEDIUM | ✅ Yes — no homepage→blog links in content |
| Footer has no internal links | MEDIUM | ✅ Yes — only external links (GitHub, Discord, Twitter) |
| No H1 on blog posts | LOW | ❌ FALSE — H1 exists on blog/page.tsx and blog/[slug]/page.tsx |
| Missing alt text on images | LOW | ❌ FALSE — no `<img>` tags exist in the entire codebase |

### Research Findings
- **Canonical tags**: Use `alternates.canonical` in Next.js Metadata API. Requires `metadataBase` set in root layout.
- **JSON-LD**: Official pattern is `<script type="application/ld+json" dangerouslySetInnerHTML>` in Server Components. XSS protection: `.replace(/</g, '\\u003c')`.
- **Multiple schemas**: Render separate `<script>` tags per schema type — Google supports this.
- **`metadataBase`**: Required for all relative URL resolution in metadata fields. Must be set once in root layout.
- **`params` is async**: Next.js 16 requires `await params` — current code already does this correctly.

---

## Work Objectives

### Core Objective
Implement all verified SEO fixes from Monica's audit to reach 95+/100 SEO score.

### Concrete Deliverables
- `src/app/layout.tsx` — metadataBase, canonical, twitter, verification, WebSite+Organization JSON-LD
- `src/app/blog/[slug]/page.tsx` — per-post canonical, twitter, Article+BreadcrumbList JSON-LD
- `src/app/blog/page.tsx` — canonical, twitter
- `src/components/sections/HeroSection.tsx` — single H1 fix
- `src/components/Footer.tsx` — internal navigation links
- `src/components/sections/CTASection.tsx` — blog link addition

### Definition of Done
- [ ] `curl -s https://afterapp.fun | grep 'rel="canonical"'` returns canonical tag
- [ ] `curl -s https://afterapp.fun | grep 'application/ld+json'` returns schema markup
- [ ] `curl -s https://afterapp.fun | grep 'twitter:card'` returns twitter card meta
- [ ] `npm run build` passes with zero errors
- [ ] All pages have exactly one H1 tag

### Must Have
- Canonical tags on homepage, /blog, and all /blog/[slug] pages
- WebSite + Organization schema on homepage
- Article + BreadcrumbList schema on blog posts
- Twitter card metadata (summary_large_image)
- Single H1 on homepage
- Footer with internal links

### Must NOT Have (Guardrails)
- Do NOT add `schema-dts` npm package — use plain objects, keep it simple
- Do NOT add OG images (no image assets exist yet — separate task)
- Do NOT touch blog content or markdown renderer
- Do NOT add search functionality (no SearchAction in WebSite schema — site has no search)
- Do NOT over-engineer — no shared JSON-LD component library, inline schemas in each page
- Do NOT change any visual styling or layout

---

## Verification Strategy

> **ZERO HUMAN INTERVENTION** — ALL verification is agent-executed.

### Test Decision
- **Infrastructure exists**: NO (no test framework)
- **Automated tests**: None
- **Framework**: N/A
- **QA Method**: curl + grep to verify HTML output contains expected tags

### QA Policy
Every task verified by checking built HTML output. Evidence saved to `.sisyphus/evidence/`.

---

## Execution Strategy

### Parallel Execution Waves

```
Wave 1 (Start Immediately — all independent, MAX PARALLEL):
├── Task 1: Add metadataBase + canonical + twitter to layout.tsx [quick]
├── Task 2: Add WebSite + Organization JSON-LD to layout.tsx [quick]
├── Task 3: Add canonical + twitter + Article + BreadcrumbList to blog/[slug]/page.tsx [quick]
├── Task 4: Add canonical + twitter to blog/page.tsx [quick]
├── Task 5: Fix dual H1 in HeroSection.tsx [quick]
├── Task 6: Add internal links to Footer.tsx + CTASection.tsx [quick]

Wave 2 (After Wave 1 — verification + deploy):
├── Task 7: Build verification + HTML output check [quick]
└── Task 8: Git commit + push (triggers Vercel deploy) [quick]

Wave FINAL (After deploy — live verification):
├── Task F1: Verify live site SEO tags via curl [quick]
└── Task F2: Validate JSON-LD with schema validator [quick]
```

### Dependency Matrix
| Task | Depends On | Blocks |
|------|-----------|--------|
| 1 | — | 7 |
| 2 | — | 7 |
| 3 | — | 7 |
| 4 | — | 7 |
| 5 | — | 7 |
| 6 | — | 7 |
| 7 | 1-6 | 8 |
| 8 | 7 | F1, F2 |
| F1 | 8 | — |
| F2 | 8 | — |

### Agent Dispatch Summary
- **Wave 1**: 6 tasks → all `quick` category
- **Wave 2**: 2 tasks → `quick`
- **Wave FINAL**: 2 tasks → `quick`

---

## TODOs

- [ ] 1. Add metadataBase + canonical + twitter metadata to root layout

  **What to do**:
  - Open `src/app/layout.tsx`
  - Add `metadataBase: new URL('https://afterapp.fun')` to the metadata export — this is REQUIRED for all relative URL resolution in canonical/OG tags
  - Add `alternates: { canonical: '/' }` to generate `<link rel="canonical" href="https://afterapp.fun">`
  - Add `twitter: { card: 'summary_large_image', title: '...', description: '...' }` mirroring the existing openGraph values
  - Add `verification: { google: 'PLACEHOLDER' }` as a comment/placeholder so user can add their GSC token later
  - Keep all existing metadata fields (title, description, openGraph) exactly as they are

  **Must NOT do**:
  - Do NOT remove or change existing title/description/openGraph
  - Do NOT add a title template yet (keep simple)

  **Recommended Agent Profile**:
  - **Category**: `quick`
  - **Skills**: []

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 1 (with Tasks 2, 3, 4, 5, 6)
  - **Blocks**: Task 7
  - **Blocked By**: None

  **References**:
  - `src/app/layout.tsx` (lines 27-37) — Current metadata export with title, description, openGraph. Add metadataBase, alternates, twitter alongside these.
  - Next.js Metadata API: `metadataBase` must be `new URL(...)`. `alternates.canonical` accepts a relative path that resolves against metadataBase.

  **Acceptance Criteria**:
  - [ ] `npm run build` passes
  - [ ] Built HTML for `/` contains `<link rel="canonical" href="https://afterapp.fun">`
  - [ ] Built HTML for `/` contains `<meta name="twitter:card" content="summary_large_image">`

  **QA Scenarios:**
  ```
  Scenario: Canonical tag on homepage
    Tool: Bash (curl)
    Steps:
      1. npm run build
      2. grep -r 'canonical' .next/server/app/index.html || grep -r 'canonical' .next/server/app/page.html
    Expected Result: rel="canonical" with href="https://afterapp.fun"
    Evidence: .sisyphus/evidence/task-1-canonical.txt

  Scenario: Twitter card on homepage
    Tool: Bash (curl)
    Steps:
      1. grep -r 'twitter:card' .next/server/app/index.html || grep -r 'twitter:card' .next/server/app/page.html
    Expected Result: content="summary_large_image"
    Evidence: .sisyphus/evidence/task-1-twitter.txt
  ```

  **Commit**: YES (groups with all tasks)
  - Message: `feat(seo): add canonical tags, schema markup, twitter cards, and internal linking`
  - Files: `src/app/layout.tsx`

- [ ] 2. Add WebSite + Organization JSON-LD to root layout

  **What to do**:
  - Open `src/app/layout.tsx`
  - Add two JSON-LD `<script>` blocks inside `<body>` before `{children}`:
  - **WebSite schema**: `@type: WebSite`, `name: "After App"`, `url: "https://afterapp.fun"`, `description` matching metadata
  - **Organization schema**: `@type: Organization`, `name: "OpenClaw"`, `url: "https://afterapp.fun"`, `sameAs` array with GitHub/Discord/Twitter links
  - Use the pattern: `<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\u003c') }} />`
  - Do NOT add SearchAction to WebSite schema (site has no search)

  **Must NOT do**:
  - Do NOT install `schema-dts` package
  - Do NOT create a shared JSON-LD utility — inline the objects directly
  - Do NOT add SearchAction (no search exists on the site)

  **Recommended Agent Profile**:
  - **Category**: `quick`
  - **Skills**: []

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 1 (with Tasks 1, 3, 4, 5, 6)
  - **Blocks**: Task 7
  - **Blocked By**: None

  **References**:
  - `src/app/layout.tsx` (lines 39-52) — The RootLayout component. Add JSON-LD scripts inside `<body>` before `{children}`.
  - `src/components/Footer.tsx` (lines 3-7) — Social links to use for Organization `sameAs`: GitHub (https://github.com/openclaw), Discord (#), Twitter (#)
  - Next.js JSON-LD pattern: `<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(obj).replace(/</g, '\u003c') }} />`

  **Acceptance Criteria**:
  - [ ] `npm run build` passes
  - [ ] Built HTML for `/` contains two `application/ld+json` script blocks
  - [ ] First block has `@type: "WebSite"`
  - [ ] Second block has `@type: "Organization"`

  **QA Scenarios:**
  ```
  Scenario: WebSite schema present on homepage
    Tool: Bash
    Steps:
      1. npm run build
      2. grep -c 'application/ld+json' .next/server/app/index.html
    Expected Result: Count >= 2 (WebSite + Organization)
    Evidence: .sisyphus/evidence/task-2-jsonld-count.txt

  Scenario: Schema content is valid JSON
    Tool: Bash
    Steps:
      1. Extract JSON-LD blocks from built HTML
      2. Pipe each through `node -e "JSON.parse(require('fs').readFileSync(0,'utf8'))"` to validate
    Expected Result: Valid JSON, no parse errors
    Evidence: .sisyphus/evidence/task-2-jsonld-valid.txt
  ```

  **Commit**: YES (groups with all tasks)
  - Files: `src/app/layout.tsx`

- [ ] 3. Add canonical + twitter + Article + BreadcrumbList JSON-LD to blog posts

  **What to do**:
  - Open `src/app/blog/[slug]/page.tsx`
  - In `generateMetadata()`, add:
    - `alternates: { canonical: \`/blog/${slug}\` }` (resolves to `https://afterapp.fun/blog/[slug]` via metadataBase from layout)
    - `twitter: { card: 'summary_large_image', title: post.title, description: post.description }`
  - In the `BlogPost` component, add two JSON-LD `<script>` blocks inside the outer `<div>`, before the `<header>`:
  - **Article schema**: `@type: Article`, `headline: post.title`, `description: post.description`, `datePublished: post.date`, `author: { @type: Person, name: post.author }`, `publisher: { @type: Organization, name: "OpenClaw" }`, `mainEntityOfPage: { @type: WebPage, @id: \`https://afterapp.fun/blog/${slug}\` }`
  - **BreadcrumbList schema**: 3 items: Home (https://afterapp.fun) → Blog (https://afterapp.fun/blog) → Post Title (https://afterapp.fun/blog/[slug])
  - Use same `dangerouslySetInnerHTML` + `.replace(/</g, '\u003c')` pattern

  **Must NOT do**:
  - Do NOT add `schema-dts` or any npm packages
  - Do NOT change the visual layout of the blog post page
  - Do NOT modify the MarkdownRenderer

  **Recommended Agent Profile**:
  - **Category**: `quick`
  - **Skills**: []

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 1 (with Tasks 1, 2, 4, 5, 6)
  - **Blocks**: Task 7
  - **Blocked By**: None

  **References**:
  - `src/app/blog/[slug]/page.tsx` (lines 13-34) — Existing `generateMetadata` function. Add `alternates` and `twitter` to the returned object.
  - `src/app/blog/[slug]/page.tsx` (lines 36-139) — BlogPost component. Add JSON-LD scripts at top of the returned JSX (inside the `<div>` on line 46, before `<header>` on line 48).
  - `src/lib/blog.ts` (lines 7-16) — BlogPost interface showing available fields: slug, title, description, date, tags, author, content, readingTime.

  **Acceptance Criteria**:
  - [ ] `npm run build` passes
  - [ ] Blog post pages contain Article JSON-LD with headline, datePublished, author
  - [ ] Blog post pages contain BreadcrumbList JSON-LD with 3 items
  - [ ] Blog post pages have per-post canonical tags

  **QA Scenarios:**
  ```
  Scenario: Article schema on blog post
    Tool: Bash
    Preconditions: At least one blog post exists in content/blog/
    Steps:
      1. npm run build
      2. Find a generated blog post HTML in .next/server/
      3. grep 'Article' in the HTML
    Expected Result: @type Article with headline matching the post title
    Evidence: .sisyphus/evidence/task-3-article-schema.txt

  Scenario: BreadcrumbList on blog post
    Tool: Bash
    Steps:
      1. grep 'BreadcrumbList' in the generated blog post HTML
    Expected Result: BreadcrumbList with 3 ListItem elements (Home, Blog, Post)
    Evidence: .sisyphus/evidence/task-3-breadcrumb.txt
  ```

  **Commit**: YES (groups with all tasks)
  - Files: `src/app/blog/[slug]/page.tsx`

- [ ] 4. Add canonical + twitter metadata to blog listing page

  **What to do**:
  - Open `src/app/blog/page.tsx`
  - Add to the existing static metadata export:
    - `alternates: { canonical: '/blog' }`
    - `twitter: { card: 'summary_large_image', title: 'Blog — After App', description: '...' }` mirroring existing openGraph

  **Must NOT do**:
  - Do NOT change any visual layout
  - Do NOT touch the blog post list rendering logic

  **Recommended Agent Profile**:
  - **Category**: `quick`
  - **Skills**: []

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 1 (with Tasks 1, 2, 3, 5, 6)
  - **Blocks**: Task 7
  - **Blocked By**: None

  **References**:
  - `src/app/blog/page.tsx` (lines 5-15) — Current static metadata export with title, description, openGraph. Add alternates and twitter alongside.

  **Acceptance Criteria**:
  - [ ] `npm run build` passes
  - [ ] `/blog` page has canonical tag pointing to `https://afterapp.fun/blog`
  - [ ] `/blog` page has twitter card metadata

  **QA Scenarios:**
  ```
  Scenario: Blog listing canonical
    Tool: Bash
    Steps:
      1. npm run build
      2. grep 'canonical' in .next/server/app/blog.html or similar
    Expected Result: canonical href includes /blog
    Evidence: .sisyphus/evidence/task-4-blog-canonical.txt
  ```

  **Commit**: YES (groups with all tasks)
  - Files: `src/app/blog/page.tsx`

- [ ] 5. Fix dual H1 in HeroSection

  **What to do**:
  - Open `src/components/sections/HeroSection.tsx`
  - Currently has TWO `<motion.h1>` elements: one for "The App" and one for "is Dying."
  - Merge into a SINGLE `<motion.h1>` containing both text elements
  - Keep the same visual styling — the text can still be on separate lines using `<span className="block">` or `<br />` inside the single h1
  - Keep all framer-motion animation props on the single h1 (or move animations to inner spans)
  - The combined h1 should read: "The App is Dying." for SEO

  **Must NOT do**:
  - Do NOT change the visual appearance — it should still look like two lines of text
  - Do NOT change any other section heading levels (h2, h3 are correct)
  - Do NOT remove framer-motion animations

  **Recommended Agent Profile**:
  - **Category**: `quick`
  - **Skills**: []

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 1 (with Tasks 1, 2, 3, 4, 6)
  - **Blocks**: Task 7
  - **Blocked By**: None

  **References**:
  - `src/components/sections/HeroSection.tsx` — Contains two `<motion.h1>` tags. The explore agent confirmed these are at approximately lines 49 and 57. Merge them into one `<h1>` with visual separation via block spans.

  **Acceptance Criteria**:
  - [ ] `npm run build` passes
  - [ ] HeroSection has exactly ONE `<h1>` tag (verify with grep)
  - [ ] Visual appearance unchanged (text still on two lines)

  **QA Scenarios:**
  ```
  Scenario: Single H1 on homepage
    Tool: Bash (grep)
    Steps:
      1. grep -c '<h1\|<motion.h1' src/components/sections/HeroSection.tsx
    Expected Result: Exactly 1 match (single h1 tag)
    Failure Indicators: Count > 1 means dual h1 still present
    Evidence: .sisyphus/evidence/task-5-h1-count.txt
  ```

  **Commit**: YES (groups with all tasks)
  - Files: `src/components/sections/HeroSection.tsx`

- [ ] 6. Add internal links to Footer and CTASection

  **What to do**:
  - **Footer.tsx**: Replace or augment external-only links with internal navigation:
    - Add internal links: "Home" ("/"), "Blog" ("/blog"), "The Thesis" ("/#evidence" or top of page)
    - Keep existing external links (GitHub, Discord, Twitter) but separate them visually from internal nav
    - Use Next.js `Link` component for internal links (import from 'next/link')
  - **CTASection.tsx**: Add a subtle "Read our analysis →" or "Read the blog →" link pointing to `/blog` somewhere in the section, near the bottom or after the agent avatars
    - Style it consistently with the existing font-typewriter/text-muted pattern
    - Use Next.js `Link` component

  **Must NOT do**:
  - Do NOT remove existing external links from Footer
  - Do NOT add heavy visual elements — keep links subtle and editorial
  - Do NOT change the CTASection layout structure

  **Recommended Agent Profile**:
  - **Category**: `quick`
  - **Skills**: []

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 1 (with Tasks 1, 2, 3, 4, 5)
  - **Blocks**: Task 7
  - **Blocked By**: None

  **References**:
  - `src/components/Footer.tsx` (lines 1-33) — Currently `'use client'`, has `footerLinks` array with GitHub/Discord/Twitter. Add internal links section. Must `import Link from 'next/link'`.
  - `src/components/sections/CTASection.tsx` — The final call-to-action section with ClawDeploy reveal and agent avatars. Add a blog link near the bottom.
  - `src/components/Navigation.tsx` (line 101) — Reference for how `/blog` link is styled: `font-typewriter text-xs uppercase tracking-[0.15em]`

  **Acceptance Criteria**:
  - [ ] Footer contains links to "/" and "/blog"
  - [ ] CTASection contains a link to "/blog"
  - [ ] All internal links use Next.js `<Link>` component, not `<a>`
  - [ ] `npm run build` passes

  **QA Scenarios:**
  ```
  Scenario: Footer has internal links
    Tool: Bash (grep)
    Steps:
      1. grep -c 'href="/blog"' src/components/Footer.tsx
      2. grep -c 'href="/"' src/components/Footer.tsx
    Expected Result: Both return >= 1
    Evidence: .sisyphus/evidence/task-6-footer-links.txt

  Scenario: CTASection links to blog
    Tool: Bash (grep)
    Steps:
      1. grep 'href="/blog"' src/components/sections/CTASection.tsx
    Expected Result: At least one match
    Evidence: .sisyphus/evidence/task-6-cta-blog-link.txt
  ```

  **Commit**: YES (groups with all tasks)
  - Files: `src/components/Footer.tsx`, `src/components/sections/CTASection.tsx`

- [ ] 7. Build verification

  **What to do**:
  - Run `npm run build` and verify zero errors
  - Check generated HTML for all expected SEO tags
  - Verify no regressions in existing routes

  **Recommended Agent Profile**:
  - **Category**: `quick`
  - **Skills**: []

  **Parallelization**:
  - **Can Run In Parallel**: NO
  - **Parallel Group**: Wave 2 (sequential after Wave 1)
  - **Blocks**: Task 8
  - **Blocked By**: Tasks 1-6

  **References**:
  - All files modified in Tasks 1-6

  **Acceptance Criteria**:
  - [ ] `npm run build` → ✓ Compiled successfully
  - [ ] All existing routes still generated: /, /blog, /blog/[slug], /sitemap.xml, /robots.txt

  **QA Scenarios:**
  ```
  Scenario: Clean build
    Tool: Bash
    Steps:
      1. npm run build 2>&1
    Expected Result: "Compiled successfully" and all routes listed in output
    Failure Indicators: Any TypeScript errors or build failures
    Evidence: .sisyphus/evidence/task-7-build.txt
  ```

  **Commit**: NO (verification only)

- [ ] 8. Git commit + push (triggers Vercel auto-deploy)

  **What to do**:
  - `git add -A`
  - `git commit -m "feat(seo): add canonical tags, schema markup, twitter cards, and internal linking"`
  - `git push`
  - Wait ~60s for Vercel deployment
  - Verify deployment succeeded via `vercel ls`

  **Recommended Agent Profile**:
  - **Category**: `quick`
  - **Skills**: [`git-master`]

  **Parallelization**:
  - **Can Run In Parallel**: NO
  - **Parallel Group**: Wave 2 (after Task 7)
  - **Blocks**: F1, F2
  - **Blocked By**: Task 7

  **References**:
  - Git remote: `shirollsasaki/afterapp-fun` on GitHub
  - Vercel auto-deploys from main branch pushes

  **Acceptance Criteria**:
  - [ ] Commit created with descriptive message
  - [ ] Push succeeds to origin/main
  - [ ] Vercel shows new deployment building/ready

  **QA Scenarios:**
  ```
  Scenario: Successful deploy
    Tool: Bash
    Steps:
      1. git push
      2. sleep 60
      3. vercel ls | head -5
    Expected Result: Latest deployment shows "Ready" status
    Evidence: .sisyphus/evidence/task-8-deploy.txt
  ```

  **Commit**: YES
  - Message: `feat(seo): add canonical tags, schema markup, twitter cards, and internal linking`
  - Files: layout.tsx, blog/[slug]/page.tsx, blog/page.tsx, HeroSection.tsx, Footer.tsx, CTASection.tsx
  - Pre-commit: `npm run build`

---

## Final Verification Wave

- [ ] F1. **Verify Live SEO Tags** — `quick`
  After Vercel deploy completes, curl the live site and verify all SEO tags are present.
  
  ```
  Scenario: Verify canonical tags on all pages
    Tool: Bash (curl)
    Steps:
      1. curl -s https://afterapp.fun | grep 'rel="canonical"'
         Expected: href="https://afterapp.fun"
      2. curl -s https://afterapp.fun/blog | grep 'rel="canonical"'
         Expected: href="https://afterapp.fun/blog"
      3. Wait for Monica to publish a post, then check a blog post page
    Expected Result: All pages have canonical tags with correct absolute URLs
    Evidence: .sisyphus/evidence/task-F1-canonical-check.txt

  Scenario: Verify JSON-LD schema on homepage
    Tool: Bash (curl + jq)
    Steps:
      1. curl -s https://afterapp.fun | grep -o '<script type="application/ld+json">.*</script>' | sed 's/<[^>]*>//g' | jq .
         Expected: WebSite and Organization schemas present
    Expected Result: Valid JSON-LD with @type WebSite and Organization
    Evidence: .sisyphus/evidence/task-F1-jsonld-check.txt

  Scenario: Verify Twitter card meta
    Tool: Bash (curl)
    Steps:
      1. curl -s https://afterapp.fun | grep 'twitter:card'
         Expected: content="summary_large_image"
    Expected Result: Twitter card meta tag present
    Evidence: .sisyphus/evidence/task-F1-twitter-check.txt
  ```

- [ ] F2. **Validate JSON-LD Structure** — `quick`
  Use Google's Rich Results Test or schema.org validator to check structured data.

  ```
  Scenario: Validate schema markup
    Tool: Bash (curl)
    Steps:
      1. Extract all JSON-LD blocks from homepage HTML
      2. Verify each has required @context, @type fields
      3. Verify Organization has name, url
      4. Verify WebSite has name, url
    Expected Result: All schemas structurally valid
    Evidence: .sisyphus/evidence/task-F2-schema-validation.txt
  ```

---

## Commit Strategy

- **Single commit after all tasks**: `feat(seo): add canonical tags, schema markup, twitter cards, and internal linking`
  - Files: layout.tsx, blog/[slug]/page.tsx, blog/page.tsx, HeroSection.tsx, Footer.tsx, CTASection.tsx
  - Pre-commit: `npm run build`

---

## Success Criteria

### Verification Commands
```bash
npm run build           # Expected: ✓ Compiled successfully, all routes generated
curl -s https://afterapp.fun | grep canonical    # Expected: <link rel="canonical" href="https://afterapp.fun">
curl -s https://afterapp.fun | grep ld+json      # Expected: WebSite + Organization schemas
curl -s https://afterapp.fun | grep twitter:card  # Expected: summary_large_image
```

### Final Checklist
- [ ] All "Must Have" present
- [ ] All "Must NOT Have" absent
- [ ] Build passes
- [ ] Live site serves correct tags
