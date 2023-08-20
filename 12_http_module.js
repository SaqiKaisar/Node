const http =require('http');
const server=http.createServer((req, res) => {
    // console.log(req);
    // res.write('Welcome to our server');
    // res.end();
    if(req.url==='/'){
        res.write('Welcome to our server');
    }
    else if(req.url==='/about'){
        res.write('This is our server');
    }
    else{res.write(`
        <h1>OOPS</h1>
        <p>There was an error</p>
    `)
}
    res.end();
})

server.listen(5000);