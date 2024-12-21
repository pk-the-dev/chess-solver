/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_PIECE_IMAGE_PATH: string;
    readonly VITE_MODE: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }