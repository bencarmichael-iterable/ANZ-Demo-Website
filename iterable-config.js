// ============================================
// Iterable Web SDK Configuration
// ============================================
// IMPORTANT: This file will NOT initialize or send any data to Iterable
// until the API key is provided and approval is given.

import { initializeWithConfig } from '@iterable/web-sdk';

// Configuration object - API key will be set when provided
let iterableConfig = {
    apiKey: null, // Will be set when API key is provided
    isInitialized: false,
    sdkInstance: null
};

/**
 * Initialize Iterable SDK (ONLY CALL AFTER API KEY IS PROVIDED AND APPROVED)
 * @param {string} apiKey - Iterable API key
 * @param {Object} options - Additional configuration options
 */
export function initializeIterable(apiKey, options = {}) {
    if (!apiKey) {
        console.warn('Iterable SDK: API key not provided. SDK will not be initialized.');
        return null;
    }

    if (iterableConfig.isInitialized) {
        console.warn('Iterable SDK: Already initialized.');
        return iterableConfig.sdkInstance;
    }

    try {
        const config = {
            authToken: apiKey,
            configOptions: {
                isEuIterableService: options.isEuIterableService || false,
                ...options.configOptions
            }
        };

        // Initialize SDK
        const sdk = initializeWithConfig(config);
        
        iterableConfig.apiKey = apiKey;
        iterableConfig.isInitialized = true;
        iterableConfig.sdkInstance = sdk;

        console.log('Iterable SDK: Successfully initialized (no data sent yet)');
        return sdk;
    } catch (error) {
        console.error('Iterable SDK: Initialization error', error);
        return null;
    }
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
