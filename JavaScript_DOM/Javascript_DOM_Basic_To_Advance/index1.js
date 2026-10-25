//TODO: TOPIC 1: DOM Tree & Window vs Document Architecture

// Window Object চেক করা। 

console.log("window width:",window.innerWidth);
console.log("Browser URL:",window.location.href);

//  Document Object চেক করা।

console.dir(document); // Document-এর সম্পূর্ণ অবজেক্ট স্ট্রাকচার দেখাবে
console.log("Document Title :",document.title);

// TODO: TOPIC 2: Element Selection (Selecting Nodes)

//JS
//Single Selection

const title = document.querySelector('#title');
console.log(title.innerText);

// Static vs live difference Demo

const staticNodes = document.querySelectorAll('.btn'); // NodeList (Static)
const LiveCollection = document.getElementsByClassName('btn'); // HTML Collection Live

console.log("Static Length :", staticNodes.length);  // output:2 
console.log("Live Collection :",LiveCollection.length); // output:2

//  ডাইনামিকালি একটা বাটন যোগ করছি

const container = document.querySelector('#container');
const newBtn = document.createElement('button');
newBtn.className = 'btn';
newBtn.innerHTML = 'Item 3';
container.appendChild(newBtn);

console.log("Static After Add :",staticNodes.length);  // Output -2 update হয়নি 
console.log("Live collection :",LiveCollection.length);  //Output -3 (অটো আপডেট হয়েছে!)

// TODO: TOPIC 3: Text & Style Manipulation

//JS 

const msg = document.querySelectorAll('#msg');

console.log("innerText :",msg.innerText); // Hello World
console.log("textContent :",msg.textContent); // Hello Secret World! 

// Class List Manipulation 

const btn = document.querySelector('#toggle-btn');
btn.addEventListener('click',()=>{
    btn.classList.toggle('active'); //active ক্লাস থাকলে সরাবে, না থাকলে যুক্ত করবে
});



// TODO: TOPIC 4: Element Traversal (DOM-এর ভেতর যাতায়াত)

//JS 

const fries = document.querySelectorAll('.item')[1]; // দ্বিতীয় item (Fries)

// ১. প্যারেন্ট খুঁজে বের করা

const cartURL = fries.parentElement;
console.log('parent :',cartURL.id) // cart

// ২. পাশের সিবলিং ধরা

const burger = fries.previousElementSibling;
const drink = fries.nextElementSibling;
console.log('pervious :',burger.innerHTML); //Burger
console.log('Next:',drink.innerHTML);  // drink

// TODO: TOPIC 5: Dataset (data-* Attributes)

// ১. এলিমেন্ট সঠিকভাবে সিলেক্ট করা হলো কি না চেক করা
    const foodBtn = document.querySelector('#food-btn');
console.log("Category:", foodBtn.dataset.category); // আউটপুট তখন আর undefined দেখাবে না, সরাসরি "fastfood" দেখাবে!

    if (foodBtn) {
      // ২. Category প্রিন্ট করা
      console.log("Category:", foodBtn.dataset.category); // আউটপুট: fastfood আসমা উচিত

      // ৩. Price আপডেট করা
      foodBtn.dataset.price = "200"; 

      // ৪. আপডেট হয়েছে কি না যাচাই করা
      console.log("Updated Price (Dataset):", foodBtn.dataset.price); // আউটপুট: 200
      console.log("Updated Price (Attribute):", foodBtn.getAttribute('data-price')); // আউটপুট: 200
    } else {
      console.log("Error: foodBtn is null! Selector-এ সমস্যা আছে।");
    }


    // TODO: TOPIC 6: Advanced Event Handling (Bubbling, Capturing & Delegation)

    //JS - ইভেন্ট ডেলিগেশন প্র্যাকটিস

    const menuGrid = document.querySelector('#menu-grid');

    // প্যারেন্টে মাত্র ১টি লিসেনার বসাচ্ছি
menuGrid.addEventListener('click', (event) => {
  // closest() দিয়ে নিশ্চিত হচ্ছি যে ক্লিকটা .add-btn বা তার ভেতরে হয়েছে কিনা
  const btn = event.target.closest('.add-btn');
  
  if (btn) {
    console.log(`Added Item: ${btn.dataset.name}`);
  }
});

// TODO:  High-Performance DOM & Reflow Optimization

// JS
const itemList = document.querySelector('#item-list');

// ১. ভার্চুয়াল মেমরি ফ্র্যাগমেন্ট তৈরি
const fragment = document.createDocumentFragment();

// ২. লুপ চালিয়ে ফ্র্যাগমেন্টের ভেতরে যোগ করা (DOM ডিস্টার্ব হচ্ছে না)
for (let i = 1; i <= 50; i++) {
  const li = document.createElement('li');
  li.innerText = `Product Item #${i}`;
  fragment.appendChild(li); // মেমরিতে জমা হচ্ছে
}

// ৩. একবারে আসল DOM-এ পুশ (মাত্র ১ বার Reflow হবে!)
itemList.appendChild(fragment);

//TODO:  TOPIC 8: Custom Events (নিজের ইভেন্ট নিজে বানানো)

// JS
// ১. কাস্টম ইভেন্ট তৈরি ও ডেটা পাঠানো
const cartEvent = new CustomEvent('cartUpdated', {
  detail: { itemName: "Burger", price: 180 }
});

// ২. কাস্টম ইভেন্ট শোনার জন্য লিসেনার বসানো
document.addEventListener('cartUpdated', (e) => {
  console.log(`[Event Received] ${e.detail.itemName} added. Price: ${e.detail.price}৳`);
});

// ৩. ইভেন্ট ট্র্রিগার (Dispatch) করা
document.dispatchEvent(cartEvent);


//TODO: TOPIC 9: DOM Observers (MutationObserver)

// JS
const statusBox = document.querySelector('#status-box');

// ১. কী চেঞ্জ হলে কী করবে তা ঠিক করা
const observer = new MutationObserver((mutations) => {
  mutations.forEach(mutation => {
    console.log("DOM Change Detected!", mutation.type);
  });
});

// ২. ট্র্যাকিং শুরু করা
observer.observe(statusBox, { childList: true, characterData: true, subtree: true });

// সিমুলেশন: ২ সেকেন্ড পর স্ট্যাটাস চেঞ্জ করা
setTimeout(() => {
  statusBox.innerText = "Order Confirmed!";
}, 2000);