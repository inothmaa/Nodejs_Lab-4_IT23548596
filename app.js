console.log("Node.js lab started");

//read-file
const fs = require('fs');

fs.readFile('file.txt', 'utf8', function (err, data) {
  if (err) throw err;
  console.log(data);
});

//write-file
fs.writeFile('file.txt', 'Hello World! - editted by IT23588332 - Helitha Y M Y', function (err) {
  if (err) throw err;
  console.log('File saved!');
});

//web-server
const http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello World!');
  res.end();
}).listen(8083);

//making HTTP request
const https = require('https');

https.get('https://jsonplaceholder.typicode.com/posts/1', (resp) => {
  let data = '';

  resp.on('data', (chunk) => {
    data += chunk;
  });

  resp.on('end', () => {
    console.log(JSON.parse(data));
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});
//module usage

const myModule = require('./my-module');
console.log(myModule.myFunction());

//promises
const myPromise = new Promise((resolve, reject) => {
  resolve('Success!');
});

myPromise.then(console.log).catch(console.log);

//await
async function myFunction() {
  try {
    const result = await Promise.resolve("Success!");
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

myFunction();