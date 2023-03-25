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
const urll =
  "mongodb+srv://ijannat410:ijannat410123456789@cluster0.2xmaary.mongodb.net/e-com?retryWrites=true&w=majority";
const mongoose = require("mongoose");
const databasee = 'e-com';
const sale  = require('./sale');

// async function connect() {
//   try {
//    let result = await mongoose.connect(urll, {
//     useNewUrlParser : true,
//     useUnifiedTopology : true
//    });
//   //  let db = result.db(databasee);
//   //  let collection = db.collection('sale')
//     console.log("connected");
//     console.log(sale.find({}));
//   } catch (e) {
//     console.error(e);
//   }
// }
// connect();
mongoose.connect(urll, {
       useNewUrlParser : true,
       useUnifiedTopology : true
      });


console.log(sale.find({} ));


