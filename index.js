"use strict";

let http = require('http')

http.createServer((req, res) => {
    console.log(`Request received at: ${req.url}`)
    for (let header in req.headers) {
        res.setHeader(header, req.headers[header])
    }
    process.stdout.write('\n\n\n' + JSON.stringify(req.headers))
    req.pipe(process.stdout)
    req.pipe(res)
}).listen(8000)
