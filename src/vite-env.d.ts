/// <reference types="svelte" />
/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_URL: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
