const http = require("http");
const socketServer = require("websocket").server;
let connection  = null ; 

const server = http.createServer((req,res)=>{
    console.log("this is my firs request ");
})

const webSocket = new socketServer({
    "httpServer"  : server 
})


webSocket.on("request",request=>{
    connection  = request.accept(null, request.origin);

    connection.on("open",()=>console.log("OPEND    !!!!! "));
    connection.on("close",()=>console.log("CLOSED    !!!!! "));
    connection.on("message" ,message=>console.log(`recived ${message}`));

})

server.listen(8080,()=>{
    console.log("server is running !!!");
})




// don`t forget the breakPoints on the connection and the message and
//  when u send the first request form the client-side don`t forget to accept it before start sending messages or somthing !!!!!!!!!!!
//ws = new WebSocket("ws://localhost:8080")
// ws.onmessage = message=>console.log(`recived this ${message.data}`);
//ws.send("ahmed !!!!!!!!")
