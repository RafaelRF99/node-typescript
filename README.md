# Node com TypeScript

## Descrição do que foi apresentado no curso
Comandos base:
- npm init -y
- npm i -D typescript ts-node-dev
- npx tsc --init
- config => tsconfig: "outDir": "./build",  "include": [ "src" ]
- config => package: "scripts": { "build": "rimraf /.build && tsc", "start": "node build/index.js",
    "test": "echo \"Error: no test specified\" && exit 1", "dev": "ts-node-dev src/index.ts" }
- npm i express
Teste Unitários:
- npm i -D jest ts-jest @types/jest
- npx jest --init
jest.config.json => preset: 'ts-jest' | testMatch => descomentar