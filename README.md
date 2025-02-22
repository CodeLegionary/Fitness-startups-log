# Readme: Progetto TypeScript

Questo è un progetto TypeScript strutturato per moduli. Un'anteprima monolitica è invece disponibile su [CodePen](https://codepen.io/CodeLegionary/pen/KwKVoWZ).
Il link riportato è lo stesso della voce 'website' di questa repository, poiché il progetto è di carattere puramente gestionale/amministrativo e non dispone di
una vera e propria interfaccia grafica al di fuori della console.

## Requisiti

- [Node.js](https://nodejs.org/) (versione 14 o superiore)
- [TypeScript](https://www.typescriptlang.org/) (installato globalmente)

Una volta installato Node.js, puoi anche procedere all'installazione di TypeScript dal terminale:
   ```
   npm install -g typescript
   ```

## Come eseguire il progetto

1. **Installa le dipendenze**:
   ```sh
   npm install
   ```

2. **Compila il file TypeScript**:
   ```sh
   tsc app.ts
   ```

   Nota Bene: Il comando precedente compilerà i files nella stessa cartella dei files sorgente, ignorando la configurazione outDir in tsconfig.json.
   Se invece si desidera creare i file .js in una cartella dedicata, ad esempio dist, servirà il seguente comando:
   ```sh
   tsc
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
    "outDir": "./dist",     // Aggiungi questa linea per specificare la cartella di output
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

Nota Bene: Anche se 'node_modules' non è presente, è consigliabile escluderlo secondo le best practices in caso di eventuali modifiche.