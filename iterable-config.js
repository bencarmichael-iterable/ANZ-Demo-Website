// ============================================
// Iterable Web SDK Configuration
// ============================================
// IMPORTANT: SDK is configured but will NOT send data until explicitly approved

import { initializeWithConfig } from '@iterable/web-sdk';

// Get API key from environment variable
const API_KEY = import.meta.env.VITE_ITERABLE_API_KEY;

// Configuration object
let iterableConfig = {
    apiKey: API_KEY || null,
    isInitialized: false,
    sdkInstance: null,
    approved: false // Safety flag - must be explicitly set to true
};

/**
 * Initialize Iterable SDK
 * NOTE: This will only initialize if approved flag is set to true
 * @param {Object} options - Additional configuration options
 */
export function initializeIterable(options = {}) {
    if (!iterableConfig.apiKey) {
        console.warn('Iterable SDK: API key not found. Check .env.local or Netlify environment variables.');
        return null;
    }

    if (!iterableConfig.approved) {
        console.warn('Iterable SDK: Initialization requires explicit approval. SDK ready but not active.');
        return null;
    }

    if (iterableConfig.isInitialized) {
        console.warn('Iterable SDK: Already initialized.');
        return iterableConfig.sdkInstance;
    }

    try {
        const config = {
            authToken: iterableConfig.apiKey,
            configOptions: {
                isEuIterableService: options.isEuIterableService || false,
                ...options.configOptions
            }
        };

        // Initialize SDK
        const sdk = initializeWithConfig(config);
        
        iterableConfig.isInitialized = true;
        iterableConfig.sdkInstance = sdk;

        console.log('Iterable SDK: Successfully initialized');
        return sdk;
    } catch (error) {
        console.error('Iterable SDK: Initialization error', error);
        return null;
    }
}

/**
 * Approve SDK initialization and data sending
 * Call this function when you're ready to start sending data to Iterable
 */
export function approveIterableInitialization() {
    iterableConfig.approved = true;
    console.log('Iterable SDK: Approval granted. You can now call initializeIterable()');
    return initializeIterable();
}

/**
 * Get the current SDK instance (returns null if not initialized)
 */
export function getIterableSDK() {
    return iterableConfig.sdkInstance;
}

/**
 * Check if SDK is initialized
 */
export function isIterableInitialized() {
    return iterableConfig.isInitialized;
}

/**
 * Reset/Logout from Iterable SDK
 */
export function resetIterable() {
    if (iterableConfig.sdkInstance && iterableConfig.sdkInstance.logout) {
        iterableConfig.sdkInstance.logout();
    }
    iterableConfig.isInitialized = false;
    iterableConfig.sdkInstance = null;
    iterableConfig.apiKey = null;
}

// Export config for debugging (read-only)
export const config = Object.freeze({
    get isInitialized() { return iterableConfig.isInitialized; },
    get hasApiKey() { return iterableConfig.apiKey !== null; }
});
