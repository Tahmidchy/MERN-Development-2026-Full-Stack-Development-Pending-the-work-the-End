/*const fs = require("node:fs");

// ফাইল রাইট করা হচ্ছে
fs.writeFile("message.txt", "Hello Node", (err) => {
  if (err) throw err;
  console.log("The file has been saved!");

  // রাইট সফল হওয়ার পরই রিড করা হচ্ছে
  fs.readFile("message.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
  });
}); */

const fs = require("node:fs");

//  ফাইল রাইট করা 

fs.writeFile("message.txt"," Hello Node ",(err) =>{
   if(err) throw err;
    console.log("This file has been saved!");

    // রাইট সফল হওয়ার পরই রিড করা হচ্ছে

fs.readFile("./message.txt","utf8",(err,data)=>{
    if (err) throw err;
    console.log(data);
});
});



