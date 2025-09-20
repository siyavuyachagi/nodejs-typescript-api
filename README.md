# Nodejs + TypeScript API

## Setup

1. Install dependancies
```bash
npm install express typescript dotenv
npm install -D @types/express @types/node @types/dotenv nodemon rimraf concurrently
```

2. Create tsconfig.json file
```bash
npx tsc --init
```
Uncomment the following lines in the file
    "rootDir": "./src",
    "outDir": "./dist",

3. Edit scripts
