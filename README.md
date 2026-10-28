# Vedanshi Agrawal - Personal Portfolio

Welcome to the personal portfolio website of **Vedanshi Agrawal**, a 2nd-year B.Tech Computer Science and Engineering student at JECRC University, Jaipur.

## Features
- **Modern Responsive Design**: Clean blue and white theme with fluid dark/light mode toggle.
- **Project Showcase & Search**: Live interactive filtering by technology, title, or keywords.
- **Embedded AI Assistant**: Interactive chatbot ready to answer questions about Vedanshi's education, skills, projects, and contact info (with both serverless API and instant local fallback).
- **Direct Contact Links**: Email (`vedanshiagrawal85@gmail.com`) and GitHub (`vedanshiagrawal85-droid`).

## Structure
- `index.html` - Main portfolio page
- `style.css` - Custom styles and theme definitions
- `script.js` - Dynamic interactions, search filter, theme toggle, and assistant logic
- `api/chat.js` - Vercel serverless function for AI chatbot
- `images/avatar.svg` - Custom developer avatar
- `vercel.json` - Vercel routing configuration

## How to Deploy to Vercel

### Option 1: Drag & Drop (Fastest - 30 seconds)
1. Go to your open Vercel dashboard: [vercel.com/vedanshiagrawal85-droid](https://vercel.com/vedanshiagrawal85-droid).
2. Under **"Deploy your first project"**, click **"folder"** (or drag and drop this entire `vedanshi-portfolio` folder).
3. Click **"Deploy"**.
4. Vercel will instantly generate your live `.vercel.app` direct link!

### Option 2: Via GitHub
1. Go to [github.com/new](https://github.com/new) and create a repository named `personal-portfolio`.
2. Run the following commands in this directory:
   ```bash
   git remote add origin https://github.com/vedanshiagrawal85-droid/personal-portfolio.git
   git push -u origin main
   ```
3. In Vercel, click **"Import Project"**, select `personal-portfolio`, and click **Deploy**.
