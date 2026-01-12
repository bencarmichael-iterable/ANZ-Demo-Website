# Iterable Web SDK Setup

## Status: ✅ Installed, ⏸️ Not Initialized

The Iterable Web SDK has been installed and configured, but **it will NOT send any data** until:
1. API key is provided
2. You approve initialization
3. `initializeIterable(apiKey)` is called

## Current Setup

- ✅ `@iterable/web-sdk` package installed
- ✅ Configuration file created (`iterable-config.js`)
- ✅ Build system configured (Vite)
- ⏸️ SDK NOT initialized (waiting for API key)

## Files

- `iterable-config.js` - SDK configuration and initialization functions
- `script.js` - Main application logic (imports Iterable config)
- `vite.config.js` - Build configuration

## To Initialize (After API Key is Provided)

Once you provide the API key and approve, you can initialize the SDK by calling:

```javascript
import { initializeIterable } from './iterable-config.js';

// Initialize with your API key
initializeIterable('YOUR_API_KEY_HERE');
```

## Development

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

## Important Notes

- **No data will be sent to Iterable until explicitly initialized**
- All Iterable SDK calls are wrapped in safety checks
- The SDK instance is only created after `initializeIterable()` is called
- Logout properly resets the SDK state
