const {createServer}=require('http');
const {Server}=require('socket.io');
const fs=require('fs');

const httpServer=createServer((req,res)=>{
    fs.readFile('./templates/home.html',(err, data)=>{
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        res.end();
    })
});

const io=new Server(httpServer);
io.on('connection',(socket)=>{
    console.log('a user connected')
});

httpServer.listen(3000,()=>{
    console.log('Server is running at localhost:3000');
})
