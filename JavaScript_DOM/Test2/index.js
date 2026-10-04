/*
TODO: We are testing on createElement 
*/

let Div = document.createElement("div");
Div.innerHTML = "<p> Create Element Test2</p>";
document.body.appendChild(Div);

/*
TODO: We are testing on appendChild
*/

let Div2 = document.createElement("div");
Div2.innerHTML = "<p> Append Child Test2</p>";
document.body.appendChild(Div2);

/*
TODO:  We are testing on textContent
*/
let Div3 = document.createElement("div");
Div3.textContent = "Text Content Test2";
document.body.appendChild(Div3);

/*
TODO: We are create Ul, li and appendChild
*/

let ul = document.createElement("ul");
let li1 = document.createElement("li");
li1.textContent = "Home";
ul.appendChild(li1);

let li2 = document.createElement("li");
li2.textContent = "About";
ul.appendChild(li2);

let li3 = document.createElement("li");
li3.textContent = "Contact";
ul.appendChild(li3);

let li4 = document.createElement("li");
li4.textContent = "Services";
ul.appendChild(li4);

document.body.appendChild(ul);
