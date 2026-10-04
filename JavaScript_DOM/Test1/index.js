/* 
TODO: We are testing Javascript DOM Successfully test GetElementById() method
*/

let id = document.getElementById("number1");
id.innerHTML = "Hello World 2";

/*
TODO: We are testing Javascript DOM Successfully test GetElementByClassName() method
*/
let className = document.getElementsByClassName("para1");
className[0].innerHTML = "Hello Folks! Welcome to JavaScript Course.";

/*
TODO: We are testing Javascript DOM Successfully test GetElementByTagName() method
*/
let tagName = document.getElementsByTagName("p");
tagName[1].innerHTML = "Hello Folks! Welcome to Python Course.";

/*
TODO: We are testing Javascript DOM Successfully test GetElementsByName() method
*/

 let btn = document.getElementById('btnRate');
        let output = document.getElementById('output');

        btn.addEventListener('click', () => {
            let rates = document.getElementsByName('rate');
            rates.forEach((rate) => {
                if (rate.checked) {
                    output.innerText = `You selected: ${rate.value}`;
                }
            });

        });

    /*
    TODO: We are testing Javascript DOM Successfully test querySelector() method
    */
    let querySelector = document.querySelector("#querySelector");
    querySelector.innerHTML = "Hello Folks! Welcome to React Course.";
    

    /*
    TODO: We are testing Javascript DOM Successfully test querySelectorAll() method
    */
    let querySelectorAll = document.querySelectorAll(".querySelectorAll");
    querySelectorAll[0].innerHTML = "Hello Folks! Welcome to NodeJS Course.";
    querySelectorAll[1].innerHTML = "Hello Folks! Welcome to ExpressJS Course.";
    
    /*
     TODO: WE are testing JavaScript DOM Successfully parentNode() method
    */
   let note = document.querySelector('.note');
        console.log(note.parentNode);

/*
 TODO: We are testing Javascript DOM Successfully childNodes() method
*/
let note1 = document.querySelector('.note1');
console.log(note1.childNodes);


let content = document.getElementById('menu');
let firstChild = content.firstChild.nodeName;
console.log(firstChild);

/*let menu = document.getElementById('menu');
console.log(main.lastElementChild);*/

let menu = document.getElementById('menu');
let children = menu.children;
console.log(children);

/*
TODO: We are testing Javascript DOM Successfully nextSibling() method
*/
let current = document.querySelector('.current');
let nextSibling = current.nextElementSibling;

console.log(nextSibling);