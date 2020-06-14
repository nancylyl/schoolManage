const fs = require("fs");
exports = module.exports = function(path, url, response) {
    console.log(url);
    if (url != "/favicon.ico") {
        try {
            let urlSplitArr = [];
            // console.log(url);
            if (url.includes("?")) {
                url = url.split("?")[0];
            }
            urlSplitArr = url.split(".");
            let suffix = urlSplitArr[urlSplitArr.length - 1];
            console.log(url, suffix);
            const imagesSuffix = ['jpg', 'jpeg', 'png', 'gif', 'ico'];
            const isImg = imagesSuffix.includes(suffix.toLocaleLowerCase());
            let contentType = null;
            let allPath = path + url;

            if (isImg) {
                contentType = `images/${suffix.toLocaleLowerCase()}`;
                allPath = allPath.replace("\css", "")
            }


            switch (suffix) {
                case "css":
                    fs.readFile(allPath, 'utf-8', function(err, data) { //读取内容
                        //  if (err) throw err;
                        response.writeHead(200, {
                            "Content-Type": "text/css"
                        });
                        response.write(data);
                        response.end();
                    });
                    break;
                case "js":
                    fs.readFile(allPath, function(err, data) { //读取内容
                        //if (err) throw err;
                        response.writeHead(200, {
                            "Content-Type": "text/javascript",
                        });
                        response.write(data);
                        response.end();
                    });
                    break;
                case "html":
                    fs.readFile(allPath, 'utf-8', function(err, data) {
                        //读取内容
                        // if (err) throw err;
                        response.writeHead(200, {
                            "Content-Type": "text/html"
                        });
                        response.write(data);
                        response.end();
                    });
                    break;
                case "woff":
                case "tt":
                case "ttf":
                    fs.readFile(allPath, 'utf-8', function(err, data) {
                        console.log(url + "--44444444444---" + suffix);
                        //读取内容
                        // if (err) throw err;
                        response.writeHead(200, {
                            "Content-Type": "text/html"
                        });
                        response.write(data);
                        response.end();
                    });
                    break;

                default:
                    fs.readFile(allPath, function(err, data) {
                        //读取内容
                        // if (err) throw err;
                        console.log(url + "--555555555555---" + suffix);
                        response.writeHead(200, {
                            "Content-Type": contentType
                        });
                        response.write(data);
                        response.end();
                    });

            };
        } catch (e) {
            console.log(e);
        }

    }
}