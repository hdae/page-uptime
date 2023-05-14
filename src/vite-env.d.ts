/// <reference types="svelte" />
/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_AUTH_URI: string
    readonly VITE_CLIENT_ID: string
    readonly VITE_CLIENT_SECRET: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
