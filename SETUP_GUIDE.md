# Setup Guide for Team Members

## Initial Setup

### 1. Clone the Repository
```bash
git clone https://github.com/bencarmichael-iterable/ANZ-Demo-Website.git
cd ANZ-Demo-Website
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up Environment Variables

**For Local Development:**
1. Create a `.env.local` file in the project root
2. Add the following line:
   ```
   VITE_ITERABLE_API_KEY=your_api_key_here
   ```
3. Get the API key from the team lead or Iterable dashboard

**Note:** `.env.local` is already in `.gitignore` and will NOT be committed to git.

### 4. Run Development Server
```bash
npm run dev
```

## For Production (Netlify)

The API key is stored in Netlify environment variables:
- Variable name: `VITE_ITERABLE_API_KEY`
- Set in: Netlify Dashboard → Site Settings → Environment Variables

Team members with Netlify access can view/update this in the dashboard.

## Security Notes

- ✅ **API key is NOT committed to git** (stored in `.env.local` locally)
- ✅ **API key is stored in Netlify environment variables** (for production)
- ⚠️ **API key will be visible in browser JavaScript** (this is expected for Iterable Web SDK public keys)
- ✅ **API key has limited permissions** (only what Web SDK allows)

## Getting the API Key

If you need the API key:
1. Ask the team lead
2. Or access Iterable dashboard → Settings → API Keys → Web API Key

## Troubleshooting

**"API key not found" error:**
- Check that `.env.local` exists and contains `VITE_ITERABLE_API_KEY`
- Restart the dev server after creating `.env.local`
- For production, verify Netlify environment variable is set
