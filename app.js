const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const date = require( __dirname+ "/date.js");
console.log(date);
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs');
app.use(express.static("public"));

const newItem=[];
const newItemWork=[];
app.get("/",function(req,res){
    const day = date.getDate();
    res.render("list",{listTitle:day , newItem:newItem});

});

app.post("/" , function(req,res){
     const item = req.body.newItem;
     if(req.body.list === "Work"){
        newItemWork.push(item);
        res.redirect("/work")
       
     }else{
        newItem.push(item);
        res.redirect("/");
     }
     
     
});

app.get("/work",function(req,res){
      res.render("list",{listTitle:"Work List" , newItem:newItemWork} );
});

app.get("/about",function(req,res){
     res.render("about");
});

app.listen(3000,function(){
    console.log("server started");
});