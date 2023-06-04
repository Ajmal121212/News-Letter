const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');


const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));



app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/signup.html");
})
app.post('/',(req,res)=>{
    var firstname = req.body.fname;
    var lastname = req.body.lname;
    var email = req.body.email;
    console.log(firstname , lastname , email)
})


app.listen(3000, function(){
    console.log('server is working at port 3000')
});

// api key
// 31c3c2a139ba5e79e201a0416285b75e-us21
// unique id
// 8fdbcccab3