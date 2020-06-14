const http = require("http");
const fs = require("fs");
const loader = require("./routes/sendFile");
const path = require('path');

const baseUrl = path.resolve(__dirname);
console.log(baseUrl);
const server = http.createServer(function(request, response) {
    const url = request.url;
    loader(baseUrl, url, response);

})
server.listen(4000);