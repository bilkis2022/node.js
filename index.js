// const fs = require( 'fs');
// const data= require('./data')

// fs.writeFileSync('hello2.txt', 'code by 2');
// console.log(__dirname);

// const http = require('http');

// http.createServer((req, res)=>{
//     res.writeHead(200,{'Content-Type': 'application/json'});
//     res.write(JSON.stringify(data));

//     res.end();
// }).listen(4500);

// console.log('Package.json');
// console.log(10+40);

// const input = process.argv;
// if(input[2] == 'add'){
//     fs.writeFileSync(input[3], input[4])
// }
// else if(input[2] == 'remove'){
//     fs.unlinkSync(input[3])
// }
// else{
//     console.log('invalid input');
// }

// const path = require('path');
// const diirpath = path.join(__dirname, 'files');
// const filepath = `${diirpath}/hello2.txt`;
// console.warn(diirpath);
// for (let index = 0; index < 5; index++) {
//     fs.writeFileSync(diirpath + '/hello'+index+'.txt', 'simple txt')

// }

// fs.readdir(diirpath,(err, files)=>{
//     console.log(files);
//     files.forEach((item)=>{
//         console.log(item);
//     })
// });

// fs.appendFile(filepath, 'and added', (err)=>{
//     if(!err) console.log('no err');
// });
// fs.readFile(filepath, 'utf8', (err, item)=>{
//     console.log(item);
// });

// ____________express_____________

// const express = require('express');
// const app = express();

// app.set('view engine', 'ejs')

// app.get('', (req, res)=>{
//     res.send('hello home page')
// });

// app.get('/profile', (_, res)=>{
//     const user = {
//         name: 'jannat',
//         email: 'jannat@gmail.com',
//         city: 'dhaka'
//     }
//     res.render('profile', {user})
// });

// app.get('/about', (req, res)=>{
//     res.send('hello about page')
// });
// app.listen(4500);

//____________mongodb___________

const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const databasee = "e-com";
const sale = require("./sale");
const port = process.env.PORT || 4000;
const connectionn = process.env.CONNECTION;

if(process.env.NODE_ENV !== 'production'){
	require('dotenv').config();
}

const json = {
  name: "jannat islam",
  industry: "music",
  "favourite colors": ["red", "blue", "green"],
  "favorite numbers": [5, 3, 7],
  "favorite people": [
    {
      name: "mom",
      relationship: "parent",
    },
    {
      name: "dad",
      relationship: "parent",
    },
  ],
};

app.get("/api/data", (req, res) => {
  res.send({ data: json });
});

app.post("/api/data", (req, res) => {
  console.log(req.body);

  res.send(req.body);
});
app.post("/", (req, res) => {
  res.send("post methodd");
});


// mongoose connection_________

async function connect() {
  try {
    await mongoose.connect(connectionn);
    app.listen(port, () => {
      console.log("app listening", port);
    });
    console.log("connected");
  } catch (e) {
    console.error(e);
  }
}
connect();

// mongoose.connect(urll, {
//        useNewUrlParser : true,
//        useUnifiedTopology : true
//       });

// console.log(sale.find({} ));
