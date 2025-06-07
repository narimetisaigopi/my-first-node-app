const express = require('express');
const server = express();
const PORT = 3000;

server.get('/user',(request, response) => {
    // request  => input
    // response => output
    // const username = request.query.username;
    // const city = request.query.city;
    // const age = request.query.age;
    const { username, city, age, date } = request.query;
    // database calls
    response.status(200).json({
        // name: name
        username,
        city,
        age
    });
});

server.listen(PORT, () => {
    console.log(`Started server at http://localhost:${PORT}`)
});
