// eslint.config.js
import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    files: ["**/*.js", "**/*.vue"], // ajustez en fonction de vos types de fichiers
    rules: {
      // Ajoutez vos règles ESLint personnalisées ici
    },
  },
];
