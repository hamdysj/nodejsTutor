// GLOBALS - NO WINDOW !!!!+


//  __dirname     - path to current directory
//  __filename    - filename
//  require       - function to use modules (CommonJS)
//  module        - info about current module (file)
//  process       - info abour env where the program is being executed
//  Modules       - Encapsulated Code (only share minimum)
//  CommonJS, every file is module (by default)
 
//console.log(__dirname)

require('./logics')
const value = require('./model')

//greets(value.pub)


//OS Module
const os = require('os')

const user = os.userInfo()
console.log(user)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
    uptime: os.uptime(),
}

console.log(currentOS)

//Path Module
const path = require('path')

const filePath = path.join('/content', 'subfolder', 'test.txt')
const base = path.basename(filePath)  
const absolutePath = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(filePath)
console.log(absolutePath)

//fs-Sync
const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

//console.log(first,second)

writeFileSync(
    './content/third.txt',
    `Result: ${first}, ${second} <br>`,
    { flag: 'a'}
)

//fs-Async/Await - Asynchronous


//Http Request, Response
const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/home') {
        return res.end('Welcome to our Home Page')
    }
    if(req.url === '/about') {
        return res.end('All About Us')
    }
    return res.end(` <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/home">back home</a>
    `)
  
})

server.listen(3000)

//Node Package Module - npm

// npm - global comman, comes with node
// npm --version

//  local dependency - use it only in this particular project
//  npm i <packagename>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <pacakgeName> (mac)

//package.json - manifest file (stores important info about project/package)
//npm init (step by step, press enter to skip)
//npm init -y (everything default)