# Add Comments to Implementation of the MERN-stack Architecture

## Root-level Functionality

* The `npm start` script: In production, we only run the back-end server, which will serve the built React application code as its front end.

* The `npm run start:dev` script: In development, we need to run both a back-end server and the React development server. We use the `concurrently` and `wait-on` libraries to execute two separate promises but make sure the listed port is available before starting the second.

* The `npm install` script: Since our dependencies for the entire application exist in two smaller applications, we use this script to automatically install all of them at once.

* The `npm run build` script: When we deploy our application, we instruct the hosting service to execute the `build` command and build our production-ready React application."

* The `npm run seed` script: We can seed our database with data when we run this command.

```json
"scripts": {
  "start": "npm run client:build && npm run server",
  "start:dev": "concurrently \"npm run server:dev\" \"wait-on tcp:3001 && npm run client:dev\"",
  "install": "cd server && npm i && cd ../client && npm i",
  "build": "cd server && npm run build",
  "seed": "cd server && npm run seed",
  // ...other scripts
},
```

## Client-side Functionality

* Since we run a front-end and back-end server for our full-stack application in development, we set it up so all client-side requests to our API server are prefixed with the API server's URL.

```js
  proxy: {
    '/graphql': {
      target: 'http://localhost:3001',
      changeOrigin: true,
      secure: false,
    },
  },
```

## Server-side Functionality

* In production, when we no longer need to use the `vite` development server; we set up our server to serve the built React front-end application that is in the `../client/dist` directory.

* Since the React front-end application will handle its own routing, we set up a wildcard route on our server that will serve the front end whenever a request for a non-API route is received.

```js
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/dist')));

  app.get('*', (_req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
  });
}
```
