# 🤖 Ego-Vision World Model for Humanoid Contact Planning
## 🌐 Research Project Website

Project website built with Next.js, modified from [AIRIO](https://air-io.github.io/)
## 🛠️ Quick Start

### Prerequisites
- Node.js 18+
- pnpm (recommended) or npm

### Local Development 
```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the website.


## 🚀 Deployment

For deployment in [Github Page](https://docs.github.com/en/pages)

```bash
# Build static files
pnpm build
rm -rf docs && mkdir docs
cp -R out/* docs/
touch docs/.nojekyll
# Files are exported to 'out/' directory
# GitHub Pages serves from 'docs/' directory
```

The site is automatically configured with the correct base paths for GitHub Pages hosting at `/ego-vc`.

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx          # Main homepage
│   ├── layout.tsx        # Root layout
│   └── ...
├── components/           # Reusable components
├── lib/                 # Utilities
└── styles/              # Global styles

public/
├── video/               # Video demonstrations
├── images/              # Static images
└── ...
```


## 🔧 Configuration

- **Site Config**: `src/constant/config.ts`
- **Next.js Config**: `next.config.js` 
- **Tailwind Config**: `tailwind.config.ts`

### Environment Variables

The website uses environment variables for flexible deployment configuration:

```bash
# Web dir setting
# If deployed under the GitHub Pages，use this variable
# eg/repo-name or /ego-vc
NEXT_PUBLIC_BASE_PATH=/ego-vc

# Website URL setting
# for generating absolute link and Open Graph label
# eg：https://username.github.io or https://ego-vcp.github.io
NEXT_PUBLIC_SITE_URL=https://ego-vcp.github.io
```

### Deployment Examples

**Root domain deployment (e.g., https://ego-vcp.github.io):**
```bash
# no need setting NEXT_PUBLIC_BASE_PATH
NEXT_PUBLIC_SITE_URL=https://ego-vcp.github.io
```

**Subpath deployment (e.g., https://username.github.io/ego-vc):**
```bash
NEXT_PUBLIC_BASE_PATH=/ego-vc
NEXT_PUBLIC_SITE_URL=https://username.github.io
```

The website is pre-configured for GitHub Pages deployment with proper asset paths and static export settings.

---

Built with Next.js and Tailwind CSS