tsc configuration 설정하기

```bash
npm init -y
npm i concurrently
tsc --init
```

```json
"outDir": "./build",                              /* Redirect output structure to the directory. */
"rootDir": "./src",                             /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */

```

```bash
tsc -w

```

package.json

```json
  "scripts": {
    "start:build": "tsc -w",
    "start:run": "nodemon build/index.js",
    "start": "concurrently npm:start:*"
  },
```
