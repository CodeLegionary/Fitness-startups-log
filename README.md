# Readme: Progetto TypeScript

Questo è un progetto TypeScript strutturato per moduli. Un'anteprima monolitica è disponibile su [CodePen](https://codepen.io/CodeLegionary/pen/KwKVoWZ).

## Requisiti

- [Node.js](https://nodejs.org/) (versione 14 o superiore)
- [TypeScript](https://www.typescriptlang.org/) (installato globalmente)

## Come eseguire il progetto

1. **Installa le dipendenze**:
   ```sh
   npm install
   ```

2. **Compila il file TypeScript**:
   ```sh
   tsc app.ts
   ```

3. **Esegui il file compilato con Node.js**:
   ```sh
   node app.js
   ```

## Configurazione TypeScript

**Raccomandazioni per settare autonomamente tsconfig.json**:

```json
{
  "compilerOptions": {
    "target": "es2016",                          // Imposta la versione del linguaggio JavaScript per il codice emesso
    "lib": ["es2016", "dom"],                    // Specifica le librerie da includere nel processo di compilazione
    "module": "commonjs",                        // Specifica il sistema di modulo
    "moduleResolution": "node10",                // Specifica la risoluzione del modulo
    "esModuleInterop": true,                     // Abilita il supporto per la compatibilità con i moduli ES6
    "forceConsistentCasingInFileNames": true,    // Forza il casing coerente dei nomi di file
    "skipLibCheck": true                         // Salta il controllo delle librerie per migliorare i tempi di compilazione
  },
  "exclude": [
    "node_modules"                               // Escludi la directory node_modules
  ]
}
```

N.B. i node_modules non sono presenti, ma secondo best practices è consigliabile escluderli in caso di modifiche future.