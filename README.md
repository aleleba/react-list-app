# Test List App

This project is an Example of a List of Tasks App.

## Setup
To start the project you need to clone the repo:
```
git clone git@github.com:aleleba/test-list-app.git
```
Then run:
```
cd test-list-app
```
You will need to create a new .env file at the root of the project for global config.
This is an exaple of config.
```
#Environment
ENV= #Default production
#App Port
PORT= #Default 80
#Host
HOST= #Default localhost
```
The default environment is production and the app port defauld is 80.

### For Development
In the terminal run:
```
npm run start-frontend:dev
npm run start-server:dev
```
The ENV enviroment variable should be "development" and choose the port of your preference with the enviroment variable PORT.

You will find the root component on:
```
src/frontend/components/App.tsx
```
You will find the Initial Component on:
```
src/frontend/components/InitialComponent.tsx
```

The manage of the routes you should find on:
```
src/routes
```
It is using "useRoutes" hook for working, more information for this here: (https://reactrouter.com/docs/en/v6/api#useroutes)

This will start the app in development mode, also it have Hot Reloading!
Enjoy coding!

### For Production
In the terminal run:
```
npm run build
```
It will create a build folder and run:
```
npm start
```
This will start the app.

## Cheers
Hope you enjoy this proyect! Sincerely Alejandro Lembke Barrientos.
