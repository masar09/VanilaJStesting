const quotes = [
    { quote : "I want U", author : "마사루" ,},
    { quote : "설렁탕을 사왔는데 왜 먹지를 못해", author : "현진건" ,},
    { quote : "난장이가 쏘아올린 작은 3점슛", author : "보거스" ,},
    { quote : "최고의 트래쉬 토커", author : "마이클 조던" ,},
    { quote : "5", author : "e" ,},
    { quote : "6", author : "f" ,},
    { quote : "7", author : "g" ,},
    { quote : "8", author : "h" ,},
    { quote : "9", author : "i" ,},
]

const quote = document.querySelector("#quote1 span:first-child");
const author = document.querySelector("#quote1 span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

