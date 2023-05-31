# Inventory Management App

An app for tracking inventory (great description).

This project was mostly just a learning experience. I wanted to learn how to use different AWS features like Lambda, DynamoDB, S3, and authentication (I used Cognito pools for this).

For the UI, I used [React](https://react.dev/). Initially I wanted to use [Solid](https://www.solidjs.com/) but I also wanted to use [Amplify UI](https://ui.docs.amplify.aws/) which does not support Solid.

I used [Create React App](https://github.com/facebook/create-react-app) for this, so you can read the docs there for info about all the different scripts.

## `Important:`
Currently all users access the same data and I don't really want people messing arround with the data base right now (espescially since I only have the free tier of AWS). Because of this, I haven't gotten around to making a public account, so you're not going to be able to use the app.
# Running

You can view a live instance of the page [here](https://isaacproulx.github.io/InventoryManagementApp/)

If you'd rather run it locally, then clone the repo and in the project directory, run:

### `npm install`

and then
### `npm start`

Runs the app in the development mode.\
The page should open automatically, if not, just open [http://localhost:3000](http://localhost:3000) to view it in your browser.

# Building

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!


# Deployment

To deploy the __build__ folder to github-pages, run:

### `npm run deploy`