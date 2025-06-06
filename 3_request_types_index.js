const express = require('express');
const server = express();
const PORT = 3000;

server.get('/user', (req, res) => {
    res.status(200).json({
        name: "Kalyani",
        mobile: "7981686394",
        isPaid: false,
        age: 39
    });
});

server.post('/user', (request, response) => {
    try {
        // validation
        // db lo insert chastham
        response.status(201).json({
            message: "User register successfully"
        });
    } catch (e) {
        response.status(500).json({
            message: "something went wrong"
        });
    }
});

server.put('/user', (request, response) => {
    // validation
    // db lo insert chastham
    response.status(200).json({
        message: "PUT: User data updated successfully."
    });
});
server.patch('/user', (request, response) => {
    response.status(200).json({
        message: "patch: User fields updated successfully."
    });
});

server.delete('/user', (request, response) => {
    response.status(200).json({
        message: "User delelted successfully."
    });
});

server.listen(PORT, () => {
    console.log(`Started server at http://localhost:${PORT}`)
});
