# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

- `npm run start` - runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

- `npm run test` - launches the test runner in the interactive watch mode.

- `npm run build` - builds the app for production to the `build` folder.
  It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\

Your app is ready to be deployed!

- To deploy all chnages into github pages first we need to import gh-pages
  `npm i gh-pages --save-dev` - import gh-pages to package.json
- Now run `git init`
- And add your repo in git `git remote add origin https://github.com/{your_github_username}/sample-weather-forecast.git`

- Now we need run deploy
  `npm run deploy`
  and push all your changes to github

  - Open github and open your repository and click on settings and if you scroll down to "GitHub Pages" there you can see your hosted application link. If you click on it then it will open your application on github pages.
