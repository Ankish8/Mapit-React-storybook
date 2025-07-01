# 🚀 Quick Start Guide

## Next Steps to Deploy Your Component Library

### 1. **Create GitHub Repository**
1. Go to [GitHub.com](https://github.com) and create a new repository
2. Name it: `ui-components` (or your preferred name)
3. **Don't** initialize with README (we already have one)

### 2. **Push Your Code**
```bash
# Add your GitHub repository (replace with your actual URL)
git remote add origin https://github.com/ankish8/ui-components.git

# Push your code
git push -u origin main
```

### 3. **Set Up Netlify Deployment (Storybook)**
1. Go to [Netlify.com](https://netlify.com) and sign up/login
2. Click "New site from Git"
3. Connect your GitHub repository
4. **Build settings:**
   - Build command: `npm run build-storybook`
   - Publish directory: `storybook-static`
5. Click "Deploy site"

**Optional: Set up auto-deployment via GitHub Actions**
- Add `NETLIFY_AUTH_TOKEN` and `NETLIFY_SITE_ID` to GitHub secrets
- GitHub Actions will auto-deploy on every push

### 4. **Publish to NPM**
```bash
# Login to NPM (you'll need an NPM account)
npm login

# Publish your package
npm publish --access public
```

### 5. **Your Live URLs**
After deployment, you'll have:
- **📚 Storybook**: `https://your-site-name.netlify.app`
- **📦 NPM Package**: `https://npmjs.com/package/@ankish/ui-components`
- **💾 Source Code**: `https://github.com/ankish8/ui-components`

## 🎯 Using Your Component Library

Once published, anyone can use your components:

```bash
npm install @ankish/ui-components
```

```jsx
import { Button, Card, Input } from '@ankish/ui-components';
import '@ankish/ui-components/dist/style.css';

function App() {
  return (
    <Card>
      <Input label="Name" placeholder="Enter name" />
      <Button variant="primary">Submit</Button>
    </Card>
  );
}
```

## 🔧 Local Development

```bash
# Install dependencies
npm install

# Start Storybook development
npm run storybook

# Build the package
npm run build

# Build Storybook for deployment
npm run build-storybook
```

## 📁 Current Directory Structure
```
ui-component-library/    ← You are here!
├── 📁 lib/             # Your components
├── 📁 dist/            # Built package
├── 📁 storybook-static/ # Built Storybook
├── 📁 .github/         # Auto-deployment
├── 📄 package.json     # NPM configuration
├── 📄 README.md        # Main documentation
└── 📄 DEPLOYMENT_GUIDE.md # Detailed deployment steps
```

## ⚡ Pro Tips

1. **Custom Package Name**: Edit `package.json` to change `@ankish/ui-components` to your preferred name
2. **GitHub Actions**: Will auto-deploy Storybook and publish to NPM when you push with `[release]` in commit message
3. **Version Updates**: Use `npm version patch|minor|major` before publishing updates

## 🆘 Need Help?

Check out the detailed `DEPLOYMENT_GUIDE.md` for step-by-step instructions and troubleshooting!

---
**Everything is set up and ready to go! 🎉**