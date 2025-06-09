/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_GIPHY_API_KEY: string;
    readonly VITE_GIPHY_API_BASE_URL: string;
    readonly VITE_GIPHY_API_ENDPOINT_SEARCH: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
