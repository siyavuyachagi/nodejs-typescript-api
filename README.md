# Nodejs + TypeScript API

## Setup

* 1. Install dependancies
```bash
npm install express typescript dotenv
npm install -D @types/express @types/node @types/dotenv nodemon rimraf concurrently
```

* 2. Create tsconfig.json file
```bash
npx tsc --init
```
Uncomment the following lines in the file
```
    "rootDir": "./src",
    "outDir": "./dist",
```
* 3. Edit scripts
Add the following scripts
```json
{
    "scripts": {
        "build": "concurrently \"rimraf dist\" \"tsc\"",
        "start": "node dist/index.js",
        "dev": "concurrently \"tsc -w\" \"nodemon dist/index.js\""
    },
}
```

* 4. Test your app
Build and run your app
```bash
npm run build
npm run dev
```