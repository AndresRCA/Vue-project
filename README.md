# Vue-project
What could become a desktop app, for myself. To see how it works without the hassle of setting up a database + laravel, check out the Vue-Project-Presentation-X folder, to see the project itself you just have to install json-server with npm like so `npm install -g json-server` and run `json-server --watch JSON_DB/db.json` inside the dist folder to get the json database working, the resources should be located on localhost:3000, also remember to create a local server inside the dist folder like so `php -S localhost:8000`. After these small steps are done, just head to the url localhost:8000 in your browswer and you should see the working app.

## The project contains the following frameworks/libraries:

* vue.js for the front end
* vue-router for routing
* vuex for state management
* axios for asynchronous operations involving the fetching of data from the database
* Bulma CSS framework for the styling, used mostly with sass
* Laravel for the back end, in the future instead of Lavarel I'll use Lumen, a ligther alternative with the same functionality

## Inside this project you will find aspects that adhere to the **CRUD** principles (Create Read Update Delete), such as:

* A list that contains video game titles and the ability to add them
* A list of Recipes presented in a very modern and stylish container
* A list of websites related to gastronomy