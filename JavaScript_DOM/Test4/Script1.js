/*
TODO: ১. Element Selecting (উপাদান খুঁজে বের করা)
DOM-এ কাজ করার প্রথম ধাপ হলো HTML এলিমেন্টকে জাভাস্ক্রিপ্টে ধরা।
পুরাতন পদ্ধতি: getElementById(), getElementsByClassName()
মডার্ন ও স্ট্যান্ডার্ড পদ্ধতি: querySelector() এবং querySelectorAll()
*/

// JavaScript
// ১. ID দিয়ে ধরা
/*const title = document.querySelector('#main-title');*/

// ২. Class দিয়ে প্রথম এলিমেন্ট ধরা
const firstBtn = document.querySelector('.btn');

// ৩. Class দিয়ে সবকটি এলিমেন্ট ধরা (NodeList ফেরত দেয়)
const allBtns = document.querySelectorAll('.btn');

/*
TODO:২. Content & Style Manipulation (কনটেন্ট ও স্টাইল পরিবর্তন)
এলিমেন্ট সিলেক্ট করার পর সেটির টেক্সট, এইচটিএমএল বা সিএসএস চেঞ্জ করা।
*/

const title = document.querySelector('#main-title');

// Content Change
title.innerText = "Welcome to Burger Cart!"; // শুধু দৃশ্যমান টেক্সট
title.innerHTML = "Welcome to <span>Burger Cart</span>"; // HTML ট্যাগসহ

// Style Change (Inline CSS)
title.style.color = "orange";
title.style.fontSize = "24px";

// Class Manipulation (Best Practice)
title.classList.add('active');      // ক্লাস যুক্ত করা
title.classList.remove('hidden');   // ক্লাস মুছে ফেলা
title.classList.toggle('highlight'); // থাকলে সরাবে, না থাকলে যুক্ত করবে


/*
TODO:৩. Creating & Removing Elements (এলিমেন্ট তৈরি ও মুছে ফেলা)
ডাইনামিকালি নতুন কোনো কার্ড, আইটেম বা লিস্ট আইটেম তৈরি করা (যেমন: POS কার্টে নতুন ফুড আইটেম যোগ করা)।
*/

