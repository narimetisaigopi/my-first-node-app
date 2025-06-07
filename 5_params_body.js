const express = require('express');
const server = express();
const PORT = 3000;

server.use(express.json());

server.post('/signup',(request, response) => {
    console.log(`body: ${request.body}`);
    const  {name,dob,password}  = request.body;
    response.status(201).json({
        name,
        dob,
        password
    });
});

server.listen(PORT, () => {
    console.log(`Started server at http://localhost:${PORT}`)
});
