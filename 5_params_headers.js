const express = require('express');
const server = express();
const PORT = 3000;

server.use(express.json());

server.post('/login',(request, response) => {
    console.log(`headers: ${request.headers}`);
    const { token }  = request.headers;
    response.status(201).json({
        token
    });
});

server.listen(PORT, () => {
    console.log(`Started server at http://localhost:${PORT}`)
});
