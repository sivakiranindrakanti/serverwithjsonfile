var http=require("http");
const express = require('express');
const path = require('path');
var app = require('express')();
app.use("/", express.static(path.join(__dirname, "./public")));
app.get('/Storybook/page/:id', (req,res) =>{
    var Number = req.params.id;
    console.log(Number);
   if(Number == 1){
       const fs = require('fs');
     var  config = require('./story.json');
     res.send('<html lang="te" dir="ltr"><head><meta charset="utf-8">  <style> *{ margin: 0px; padding: 0px;}body{width: 550px;height: 400px;}.n1{ position: relative;top:10px;left: 600px;}.n2{position: relative;left:480px;top: 80px;}.n3 {position: relative;left: 600px;top:140px;}nav{position: relative;top:220px;left:1000px;width:120px;height: 60px;background-color: aqua;}nav ul{position: relative;top:20px;background-color: transparent;left:40px;}.n4{position: relative;top: 170px;left: 120px;width:120px;height: 60px;background-color: aqua;}.n4 ul{position: relative;top:20px;background-color: transparent;left:30px;}</style></head><body><div class="n1"><h2>'+config.title_en+'</h2></div><div class="n2"><img src ='+'/'+config.cover_image+' width ="340" height="250"></div><div class="n3"><h3>'+ config.title+'</h3></div><nav><ul><a href="'+(Number - 1 + 2)+'"color="transparent">Next</a></ul></nav></body></html>')
   }
   else{
    var pageDetails = getmypage(Number);
    
    res.send('<html lang="te" dir="ltr"><head><meta charset="utf-8">  <style> *{ margin: 0px; padding: 0px;}body{width: 550px;height: 400px;}.n1{ position: relative;top:30px;left: 300px;}.n2{position: relative;left:400px;top: 80px;}.n3 {position: relative;left: 300px;top:140px;}nav{position: relative;top:180px;left:1000px;width:120px;height: 60px;background-color: aqua;}nav ul{position: relative;top:20px;background-color: transparent;left:40px;}.n4{position: relative;top: 120px;left: 120px;width:120px;height: 60px;background-color: aqua;}.n4 ul{position: relative;top:20px;background-color: transparent;left:30px;}</style></head><body><div class="n1"><h2>'+pageDetails.english+'</h2></div><div class="n2"><img src ='+'/'+pageDetails.image+' width ="340" height="250"></div><div class="n3"><center><h3>'+ pageDetails.telugu+'</h3></center></div><nav><ul><a href="'+(Number - 1 + 2)+'"color="transparent">Next</a></ul></nav><div class="n4"><ul><a href="'+(Number - 1)+'">Previous</a></ul></div></body></html>');
   }
});
 function getmypage(Number){
    const fs = require('fs');
let data = fs.readFileSync('story.json', (err) => {if (err) throw err;});
let data1 = JSON.parse(data);
var pages = data1.pages;
var currentPage = pages[Number -2];
console.log(pages[Number - 2]);  
return currentPage;
}
app.listen(3000, () => {
    console.log('server started');
  });