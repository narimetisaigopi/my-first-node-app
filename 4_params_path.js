const express = require('express');
const server = express();
const PORT = 3000;


server.get('/student', (request, response) => {
    response.status(200).json({
        message : "student default endpoint"
    });
});

server.get('/student/:studentId', (request, response) => {
    const id = request.params.studentId;
    response.status(200).json({
        id
    });
});
//server.get('/student/:studentId/:category', (request, response) => {
server.get('/student/:studentId/p/:category', (request, response) => {
    // const studentId = request.params.studentId;
    // const category = request.params.category;
    const {category, studentId } = request.params;
    response.status(200).json({
        studentId,
        category
    });
});

server.listen(PORT, () => {
    console.log(`Started server at http://localhost:${PORT}`)
});
