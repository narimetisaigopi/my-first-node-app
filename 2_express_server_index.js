const express = require('express');
const server = express();
const PORT = 3000;

// creating a get endpoint with / as name
server.get('/', (req, res) => {
    // send text
    // res.set('Content-Type','text/plain');
    //   res.status(200).send('Hello world from node js');
    // send json
    res.status(200);
    res.set('Content-Type','application/json');
    // res.set('Content-Type','text/html');
    res.json({
        name: "Narimeti",
        mobile: "7981686394",
        isPaid: false,
        age: 29
    });
});

server.listen(PORT, () => {
    console.log(`Started server at http://localhost:${PORT}`)
});
