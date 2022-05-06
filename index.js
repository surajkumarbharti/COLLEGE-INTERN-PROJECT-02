const express=require('express');
const bodyParser=require('body-Parser');
const route =require('./routes/routes.js');

const{ default : mongoose} =require('mongoose');
const app =express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
mongoose.connect("mongodb+srv://redcloud:R4SnP0bzbqEqX5wq@cluster0.tshhd.mongodb.net/project-02",{
    useNewUrlParser: true

})
.then(() => console.log("MongoDb is connected"))
.catch(err =>console.log(err))

app.use('/',route);

app.listen(process.env.PORT || 3000, function(){
console.log('Express app running on port' + (process.env.PORT ||3000))
});





// const express = require ("express")
// const route =require("./routes/route.js")
// const mongoose =require("mongoose");
// const {timeStamp} = require("console");//give the give of activity


// const app =express();

// mongoose.connect ( 'mongodb+srv://redcloud:R4SnP0bzbqEqX5wq@cluster0.tshhd.mongodb.net/project-2',
// {
//     //useNewurlParser:true,
// })

// .then (()=> console.log("mongoDb is connected"))


// .catch (err => console.log (err))


// app.use ('/',route)

// //app.use('/test-me',(req,res)=>{
//    // res.send({msg:"hello suraj"})
    
// //})


// app.listen (process.env.PORT || 4000,function (){
//     console .log ('Express app running on port' + (process.env.PORT ||4000))
// });