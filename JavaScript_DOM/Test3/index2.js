/*let div = document.createElement('div');
div.id = 'myDiv';

let p = document.createElement('p');
p.innerHTML = 'This is a paragraph inside the div.';

div.appendChild(p);
document.body.appendChild(div); */

let menu = document.querySelector('#menu'); 

function createMenu(name) {
    let li = document.createElement('li');
    li.textContent = name;
    return li;
}
menu.appendChild(createMenu('Home'));
menu.appendChild(createMenu('About'));
menu.appendChild(createMenu('Services'));
menu.appendChild(createMenu('Contact'));

