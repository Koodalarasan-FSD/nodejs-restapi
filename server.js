const express = require('express');         /* Express is a minimal and flexible Node.js web application 
                                               framework that provides a robust set of features to develop 
                                               web and mobile applications. It simplifies the process of 
                                               building server-side applications with Node.js by providing a 
                                               suite of HTTP utilities and middleware for handling requests, 
                                               routing, and responses. */
const bodyParser = require('body-parser'); /* body-parser is a middleware module for Node.js, typically used 
                                              in Express applications, that parses incoming request bodies in 
                                              a middleware before your handlers, making the req.body property 
                                              available. 
                                              In simpler terms, when you receive data from a client, such as 
                                              form data, JSON data, or any other type of data submitted via 
                                              an HTTP POST request, body-parser helps you extract that data 
                                              from the request object in a format that's easy to work with 
                                              within your Express application.*/

const userRoutes = require('./routes/userRoutes.js');

const cors = require('cors'); /* CORS(Cross-Origin Resource Sharing) is a crucial security feature in web 
                                 development that allows servers to specify who can access their resources and 
                                 how. In a Node.js application using Express, the cors middleware simplifies 
                                 enabling and configuring CORS, making it easy to control cross-origin requests 
                                 in your applications. */

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/api/users/', userRoutes)

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the Node.js Restful API');
})

// Start Server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// Run the command "node server.js" in terminal
/*
Accessing API Endpoints in the Browser
1) Get all users:
    - Open your browser and go to: http://localhost:3000/api/users
2) Get a single user by ID:
    - Open your browser and go to:http://localhost:3000/api/users/1

Using Postman to Test(Accessing) API Endpoints
Postman is a popular tool for testing APIs. Here's how to use it:
1) Get all users:
    - Method: GET
    - URL: http://localhost:3000/api/users
    - Click Send.
2) Get a single user by ID:
    - Method: GET
    - URL: http://localhost:3000/api/users/1
    - Click Send.
3) Create a new user:
    - Method: POST
    - URL: http://localhost:3000/api/users
    - Go to the Body tab.
    - Select raw and JSON as the data format.
    - Enter the following JSON:
        {
        "name": "Alice",
        "email": "alice@example.com"
        }
    - Click Send.
4) Update a user:
    - Method: PUT
    - URL: http://localhost:3000/api/users/1
    - Go to the Body tab.
    - Select raw and JSON as the data format.
    - Enter the following JSON:
        {
        "name": "Alice Updated",
        "email": "alice_updated@example.com"
        }
    - Click Send.
5) Delete a user:
    - Method: DELETE
    - URL: http://localhost:3000/api/users/1
    - Click Send.
*/