/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_URL_BASE: string,
  readonly VITE_TOKEN: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}