In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

Hey and welcome to my App using the MealDB API and creating readable information.
The design is suppose to be simple, it is all about the code.
For this project I have installed the following:

## Installing node

- First install Node either globally or locally.
- you can go to https://nodejs.org/en/download/ and install it for the right OS.
- Now you can type npm init to initialize the project.

## React

npx create-react-app "app name"

- You might need to go one directory down by typing cd foodie-app
- use npm start to start the project up.

## Axios

axios - npm install axios

- Promise based HTTP client for browser and node.js
- We get access to routes from React Router dom which is helpful for
- putting components and assigning it to different routes.

## Redux toolkit

Redux toolkit - npm install @reduxjs/toolkit and npm install redux

- You need to install redux for the core, and the toolkits to use all these extra APIs.
- This helps us save values in a global state and use it throughout our project.
- We use configureStore to automatically combine our slice reducers, add whatever
- redux middleware we supply and now adds redux-thunk by default.

## NOW TO THE APPLICATION ITSELF

- We use Axios to create routes to our project. But in order to make use of them we need to wrap
- our <App> in index.js with <Router> formally known as <BrowserRouter>
- When we are there lets also add a <Provider> and wrap that around our <App> aswell.
- This comes from Redux and lets us use global state variables in our project.
- We then attach store to it which will hold our reducers.
- Its the reducers job to send and take value throughout our project.
- The Reducer sends data to the state, which sends data to the UI.
- The UI talks to the event handler which dispatches data into our reducers which saves in in the store.

- The actions folder is where we will fetch our data from the API using Axios and then dispatch the data to our reducers.
- with redux tools we can take multiple reducers at once and send it to the store.
- Before, you had to use createStore, but the new way to do it is configureStore.
- We send our data like a payload.

- On our main page its pretty self explanatory.
- We have a main page which lets us use some of the filter options from the API.
- Since we already set up the different endpoints of the API we can use this with confidence.
- I could also use the API key and set it to 1 and then break up the links further for a better workflow
- but it works for now.
- Use the searchbar to search the database based on what is written, and listen to the 'Enter' key button!
- The details reducer keep track of the ID of what meal is shown and search up more information on it.
- I chose to hardcode some of the options for Area, Category and Ingredients, but I could have also mapped it all out,
- and rendered it with say <button>value= {meal.value}>{meal.value}</button> so for example <button>value={Chicken}>Chicken<button>
- would show up. But I just wanted it to be simple enough.
- I struggled with abit of the redux to begin with.

- I did look up a lot of youtube videos and also search the internet, in order to understand redux and it
- took alot longer to do this then I had anticipated, regardless I have a much better grasp on Redux now thanks to it.

- Morten
