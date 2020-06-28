# NearbyBackend
This project was created with TypeScript, graphql and firebase functions.

## Available Scripts
In the Project directory you can run

### npm run build 
This command helps to compile your typescript to js 
"build": "tsc"

### npm run dev 
This command serves firebase functions only 
"firebase serve --only functions"

### npm run serve
This command compiles typescript down to js, start firebase emulators 
"npm run build && firebase emulators:start --only functions"

### npm run deploy
This command deploys firebase functions only 
"firebase deploy --only functions"
