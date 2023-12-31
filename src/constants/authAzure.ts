import { Configuration } from '@azure/msal-browser';

export const AzureClientId: string = import.meta.env.VITE_AZURE_CLIENT_ID || '';
export const AzureScopes: string[] = [import.meta.env.VITE_AZURE_SCOPE || ''];
const AzureAuthority: string = import.meta.env.VITE_AZURE_AUTHORITY || '';
const AzureKnownAuthorities: string[] = [import.meta.env.VITE_AZURE_KNOWN_AUTHORITY || ''];

export const msalConfig: Configuration = {
  auth: {
    clientId: AzureClientId,
    authority: AzureAuthority,
    knownAuthorities: AzureKnownAuthorities,
    redirectUri: window.location.origin,
  },
  cache: {
    cacheLocation: 'sessionStorage',
    storeAuthStateInCookie: false,
  },
};
