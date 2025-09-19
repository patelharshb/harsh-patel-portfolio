# 🚀 Vercel Deployment Guide

This guide will help you deploy your portfolio to Vercel for free!

## ✅ Prerequisites

1. **GitHub Account** - Your code needs to be on GitHub
2. **Vercel Account** - Sign up at [vercel.com](https://vercel.com)
3. **Node.js 18+** - Already installed ✅

## 📋 Deployment Steps

### Step 1: Push to GitHub

1. **Initialize Git** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Portfolio ready for deployment"
   ```

2. **Create GitHub Repository**:
   - Go to [GitHub.com](https://github.com)
   - Click "New repository"
   - Name it `portfolio` or `harsh-patel-portfolio`
   - Make it **Public** (required for free Vercel)
   - Don't initialize with README (you already have files)

3. **Push to GitHub**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Deploy to Vercel

1. **Go to Vercel**:
   - Visit [vercel.com](https://vercel.com)
   - Sign up with GitHub (recommended)

2. **Import Project**:
   - Click "New Project"
   - Select your GitHub repository
   - Vercel will auto-detect it's a Vite project

3. **Configure Settings**:
   - **Framework Preset**: Vite
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `dist` (auto-detected)

4. **Deploy**:
   - Click "Deploy"
   - Wait 2-3 minutes for deployment
   - Your portfolio will be live! 🎉

## 🔧 Configuration Files Created

I've already set up these files for you:

- `vercel.json` - Vercel configuration
- `api/index.ts` - API routes for serverless functions
- `.vercelignore` - Files to exclude from deployment

## 🌐 Your Live Portfolio

After deployment, you'll get:
- **Live URL**: `https://your-project-name.vercel.app`
- **Custom Domain**: You can add your own domain later
- **Automatic Deployments**: Every push to main branch auto-deploys

## 🔄 Updating Your Portfolio

To update your live portfolio:

1. Make changes to your code
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push
   ```
3. Vercel automatically redeploys! ✨

## 🎨 Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain (e.g., `harshpatel.dev`)
4. Follow DNS setup instructions

## 📊 Performance Features

Your portfolio includes:
- ⚡ **Fast Loading** - Vercel's global CDN
- 🔄 **Auto Deployments** - Push to deploy
- 📱 **Mobile Optimized** - Responsive design
- 🎯 **SEO Ready** - Search engine optimized

## 🆘 Troubleshooting

**Build Fails?**
- Check the build logs in Vercel dashboard
- Make sure all dependencies are in `package.json`

**API Not Working?**
- Check `api/index.ts` file
- Verify routes in `vercel.json`

**Styling Issues?**
- Ensure Tailwind CSS is properly configured
- Check if all assets are included in build

## 🎉 Success!

Your portfolio is now live and professional! Share the link with:
- Recruiters
- LinkedIn profile
- Resume
- Email signatures

---

**Need Help?** Check Vercel's documentation or reach out for support!
