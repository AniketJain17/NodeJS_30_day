const express = require('express');
const {Server} = require('ws');
const app = express();
const server = require('http').createServer(app);
const PORT =3000
app.get('/websocket',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
});

function setupwebSocket(server){
    const wss = new Server({server});
    wss.on('connection',(ws)=>{
        console.log('Client connected');
        ws.on('message',(message)=>{
            console.log(`Received' : ${message}`);
            ws.send(`Echo: ${message}`);
        });
        ws.on('close',()=>{
            console.log('Client disconnected')
        });
    });
}

setupwebSocket(server);
server.listen(PORT,()=>{
    console.log(`Server started on ${PORT}`)
})