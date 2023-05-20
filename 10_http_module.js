const http=require('http')
const server=http.createServer((req,res)=>{
    if (req.url==='/')
    {
        res.end("Welcome to our home page");
    }
    if (req.url==='/about'){
        res.end("here is our short history");
    }
    
    res.end(`
    <h1>OPPS!</h1>
    <a href='/'>Home</a>`);
})
server.listen(5000)