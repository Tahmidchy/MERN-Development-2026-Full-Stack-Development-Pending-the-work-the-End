/*
TODO: Javascript createElement() method is used to append a node as the last child of a node. It can also be used to append multiple nodes and strings.
*/

let div = document.createElement("div");
div.id = 'content';
div.innerHTML = '<h1>Hello World</h1><p>This is a paragraph.</p>';

document.body.appendChild(div);

/*
TODO: The appendChild() method is used to add a new child node to an existing node as the last child node. It can also be used to move an existing node from one location to another in the DOM tree.

*/

function createMenuItem(name) {
    let li = document.createElement("li");
    li.textContent = name;
    return li;
}

let menu = document.getElementById("menu");
menu.appendChild(createMenuItem("Home"));
menu.appendChild(createMenuItem("About"));
menu.appendChild(createMenuItem("Contact"));

/*
TODO:  Moving a node within the document example

*/

// get the first list
const firstList = document.querySelector('#first-list');
// take the first child element
const everest = firstList.firstElementChild;
// get the second list
const secondList = document.querySelector('#second-list');
// append the everest to the second list
secondList.appendChild(everest);