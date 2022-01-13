# Giphys

#### A ReactJS web app for posting gifs.

Note :**_This project uses React's composition pattern majorly_**

## Demo

[Deployed on Netlify using github actions](https://debarshib-giphys.netlify.app/)

## Features:

- List of gifs posted
- Add new gif
- Persistance of posts using local storage
- Loads gifs from giphy as user types
- Custom debounce function with **_delay_** to optimize network request.

## Built using:

This project is built on ReactJS. No other external libraries have been used

- [ReactJS](https://reactjs.org/) - Frontend framework

## Run Locally

- Clone the project
  ```
  git clone https://github.com/Debarshi95/Giphys.git
  ```
- Go to the project directory
- cd **giphys**
- Install dependencies
  ```
  yarn
  ```
- Create a **.env.local** file
- Add the following configuration to your .env file

  ```
  REACT_APP_GIPHY_URL="<Giphy url>"
  REACT_APP_API_KEY="<Your giphy api key>"

  ```

- Start the server
  ```
  yarn start
  ```
