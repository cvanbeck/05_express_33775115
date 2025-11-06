# The Thirsty Student

This is a small web application used to demonstrate knowledge of POST and GET requests and the use of EJS templates. The CSS stylesheet used for this is called [Sakura.CSS](https://github.com/oxalorg/sakura)

This project structure is based on the following image found at [Full Stack Open](https://fullstackopen.com/en/part4/structure_of_backend_application_introduction_to_testing) with some slight differences. The primary differences are the addition of a config folder which contains data used for the web app, and the inclusion of a main router and main file as opposed to having seperate router files for each route and a singular app.js to call them all.

![example folder structure](image.png)

## How to run locally
1. Clone the repo
2. Ensure you have Node.js installed locally
3. Install all dependancies with `npm install`
4. Launch the web server with `npm start` or with `npm run forever` to run the server with `forever`