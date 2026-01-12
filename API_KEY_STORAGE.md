# API Key Storage

## Important Note
The Iterable Web SDK uses a **public API key** (not a secret key). It's designed to be used in client-side JavaScript, so it will be visible in the browser. This is expected and secure for the Web SDK.

## Storage Options

### Option 1: Environment Variables (Recommended)
**Location:** `.env.local` file (already in `.gitignore`)

**Setup:**
1. Create `.env.local` file in project root
2. Add: `VITE_ITERABLE_API_KEY=your_api_key_here`
3. Update `iterable-config.js` to read from `import.meta.env.VITE_ITERABLE_API_KEY`

**Pros:**
- ✅ Not committed to git (`.env.local` is in `.gitignore`)
- ✅ Easy to change per environment
- ✅ Works with Vite build system

**Cons:**
- ⚠️ Still visible in bundled JavaScript (expected for public API keys)

### Option 2: Netlify Environment Variables
**Location:** Netlify Dashboard → Site Settings → Environment Variables

**Setup:**
1. Add `VITE_ITERABLE_API_KEY` in Netlify dashboard
2. Update `iterable-config.js` to read from `import.meta.env.VITE_ITERABLE_API_KEY`
3. Netlify will inject it during build

**Pros:**
- ✅ Not in code repository
- ✅ Can be different per environment (production, staging)
- ✅ Easy to update without code changes

**Cons:**
- ⚠️ Still visible in bundled JavaScript (expected for public API keys)

### Option 3: Hardcoded (Not Recommended)
**Location:** Directly in `iterable-config.js`

**Pros:**
- ✅ Simple

**Cons:**
- ❌ Committed to git (security risk)
- ❌ Hard to change per environment
- ❌ Not best practice

## Recommended Approach

**For Development:**
- Use `.env.local` file (local only, not committed)

**For Production (Netlify):**
- Set `VITE_ITERABLE_API_KEY` in Netlify environment variables
- Vite will automatically inject it during build

## Security Note

Since this is a **public API key** for the Web SDK:
- It's safe to be visible in client-side code
- It's designed for browser use
- It has limited permissions (only what the Web SDK allows)
- It's different from server-side secret API keys
