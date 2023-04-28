

// user Log-In


const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"; // 자주 쓰는 string 은 대문자 변수로 정의 하면 오타 줄일 수 있음

// const Link = document.querySelector("a");

function onLoginSubmit(event){
    event.preventDefault();
        // console.log(event);
    const username = loginInput.value;
    localStorage.setItem("USERNAME_KEY",username)
    // localStorage 브라우져의 기본 저장소를 콘솔에서 확인
    // localStorage.setItem/getItem/RemoveItem 브라우져의 기본 저장소를 콘솔에서 확인 및 저장 삭제 가능

    loginForm.classList.add(HIDDEN_CLASSNAME)
    // greeting.innerText = "Hello " + username; = greeting.innerText = `Hello + ${username}`;
    // greeting.innerText = `Hello  ${username}`; // 백틱 기호 사용
    // greeting.classList.remove(HIDDEN_CLASSNAME)
    paintGreetings(username);

    // console.log(username);
    // console.log(loginInput.value);
}

// function handleLinkClick(event){
//     event.preventDefault();   // 링크로 넘어가는걸 이벤트를 막음
//     console.log(event);   // 클릭 이벤트 상세 정보 확인 가능(x,y 좌표 등)
//     // alert("clicked")    // 경고창에 OK 버튼을 누르면 링크로 이동

// }

function paintGreetings (username){
    greeting.innerText = `Hello  ${username}`; 
    greeting.classList.remove(HIDDEN_CLASSNAME)
}


loginForm.addEventListener("submit", onLoginSubmit)
// Link.addEventListener("click",handleLinkClick); // 경고창에 OK 버튼을 누르면 링크로 이동

const savedUsername = localStorage.getItem("USERNAME_KEY")

console.log(savedUsername)

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit", onLoginSubmit)
}
else{
    paintGreetings(savedUsername)
    }

// if (username === ""){          // div 가 아니라 폼으로 작성해 브라우저 기능을 활용
//     alert("please write your name");
// }
// else if(username.length > 15) {
//     alert("your name is too long");    
// }

// console.log("hello", loginInput.value);   

// loginButton.addEventListener("click", onLoginBtnClick);


// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");







// JS on css How to class name Not change and remain


// const h1 = document.querySelector("div.hello:first-child h1")

// function handleTitleClick() {
    
//     const clickedClass = "clicked";
//     h1.classList.toggle(clickedClass); // toggle 하나로 if else 문이 정리


//     // if(h1.classList.contains(clickedClass)) { 
//     //     h1.classList.remove(clickedClass);
//     // }
//     // else {
//     //     h1.classList.add(clickedClass);
//     // }
// }

// h1.addEventListener("click", handleTitleClick)




// JS on css How to class name change and delete

// const h1 = document.querySelector("div.hello:first-child h1")

// function handTitleClick() {
//     // h1.className = "active";
//     const clickedClass = "clicked";
//     if(h1.className === clickedClass){   // HTML h1에 class="active"를 추가하면 클레스 네임이 나타났다 사라지는 코드
//         h1.className ="";
//     }
//     else {
//         h1.className = clickedClass;
//     }
// }

// h1.addEventListener("click", handTitleClick)




// css on JS

//  const h1 = document.querySelector("div.hello:first-child h1")

// function handTitleClick() {
//     const currentColor = h1.style.color;
//     let NewColor;
//     if(currentColor === "blue") {
//         NewColor = "tomato";
//     } 

//     else {
//     // console.log(h1.style.color)
//     NewColor = "blue";
//     }
//     h1.style.color = NewColor;  // css 는 JS에서 보다 직접 css 에서 컨트롤 하는게 이상적
// }

// h1.addEventListener("click", handTitleClick)


 
// console.dir(title); // 모든 propety를 보여주는데 이중에서 on~으로 시작하면 event

// 자바스크립트 html 속성을 변경

// const h1 = document.querySelector("div.hello:first-child h1")

// function handTitleClick() {
//     console.log("title was clicked!")
//     h1.style.color = "blue";
// }

// function handleMouseEnter() {
//     h1.innerText = "mouse id here";
//     h1.style.color = "red";
// }

// function handlemouseleave() {
//     h1.innerText = "Mouse is gone!";
//     h1.style.color = "yellow";
// }

// function handleWindowRedize() {
//     document.body.style.backgroundColor = "tomato";   
// }

// function handleWindowCopy() {
//     alert("copy no!")   
// }

// function handRightClick() {
//     title.innerText = "That was right click!";
//     title.style.color = "green";
//   }

// h1.addEventListener("click", handTitleClick) = h1.onclick = handTitleClick;
// h1.addEventListener("mouseenter", handleMouseEnter)
// h1.addEventListener("mouseleave", handlemouseleave)
// .removeEventListener 이 명령어를 통해 이벤트 종료도 가능해서 이 형태가 더 이상적

// window.addEventListener("resize",handleWindowRedize);
// window.addEventListener("copy",handleWindowCopy);
// window.addaddEventListener("offline",handleWindowCopy);
// window.addEventListener("contextmenu", handRightClick)

// handTitleClick()






// const title = document.querySelector(".hello h1");  h1이 여러개면 첫번재 것만 호출
// const title = document.querySelectorAll(".hello h1");  // 쿼리호출 함수에서는 괄호 안에 css문법이 사용
// const title = document.querySelector("#hello form ");  // getElementbyID로 할수 없는 form 등의 디테일 호출이 가능

// console.log(title);

// const hellos = document.getElementsByClassName("hello");

// console.log(hellos);

// const title = document.getElementById("title")

// title.innerText = "Got you";

// console.log(title.id);
// console.log(title.className);


// console.dir(title);   // JS로 설정 가능한 속성 및 이벤트 전체 확인 가능

// document.title = "Hello JS";

// document.body
// document.location

// document object 는 이미 존재 한다. HTML을 변화 시키기도 한다.


// if(false){
//     console.log("hi")
// }
// else{
//     console.log("bye")
// }


// Conditionals

// const age = parseInt(prompt("How old are you?"));  
// // console.log(isNaN(age));    // boolean 값을 반환하는 fuction

// if(isNaN(age) || age < 0 ){   // || = or
//     console.log("Please write a real positive number");
//     // condition === ture
// } 
// else if (age < 18) {
//     console.log("You are too young");
// }

// else if (age >= 18 && age <= 50) {    // && = and
//     console.log("you can buy beer");
// }

// else if (age > 50 && age <= 80) {   
//     console.log("Take care your health");
// }

// else {
//     console.log("Stop buying beer. you can die.");
//     // condition === false
// }


// const age = prompt("How old are you?");  // 아주 오래된 방식 CSS 적용도 불가
// console.log(age);   // NaN을 반환(Not a Number)

// parseInt("15")  // string 을 numer로 변경

// console.log(typeof age,typeof parseInt(age));   // age의 변수 형태를 보는 방법 -- 여기서는 "string"


// Returns  fuction 안에 console.log 를 사용 하지 않기 위해서 결과값을 반환하는 명령어

// const calculator = {
//     plus : function (a,b) {
//         return a + b;
//     },
//     minus : function (a,b) {
//         return a - b;
//     }
    
// }

// const plusResult = calculator.plus(2,3);
// const minusResult = calculator.minus(plusResult,3);
// console.log(plusResult);
// console.log(minusResult);


// const age = 96;

// function calculateKrAge(ageOfForeigner){
//     return ageOfForeigner + 2;
// }

// const Krage = calculateKrAge(age);

// console.log(Krage);





// Function

// const player = {
//     name : "kim",
//     sayHello : function(otherPersonName){
//         console.log("Hello " + otherPersonName + " nice to meet you");
//     },
// };

// console.log(player.name);
// player.sayHello("Nam");
// player.sayHello("Ain");


// function plus(a,b){
//     console.log(a + b);
// }

// plus(10,10);


// function sayHello(nameOfperson,age){
//     console.log("Hello my name is " + nameOfperson + " and I'm " + age);
// }

// sayHello("kim", 42);
// sayHello("nam", 43);





// Object

// const player = {
//     name:"kim",
//     point: 1212,
//     hansome: false,
// };

// console.log(player)
// player.hansome = true;
// player.point = plalyer.point + 80;
// player.LastName = "kwangyeol";
// console.log(player)


// console.log(player);
// console.groupCollapsed(player.name)
// console.groupCollapsed(player["name"])


// player[0] == name

// const playerName = "kim";
// const playerPoints = 1212;
// const playerHansome = false;



// Arrays

// const mon = "mon";

// const dayOfWeek = [mon, "tue", "Wen", "thu", "fri", "sat", ];

// const nonsense = [1, 2, "Hello", false, null, true, undefined,  "kim" ];

// dayOfWeek.push("sun");

// console.log(dayOfWeek[6], nonsense)





// const amIFat = false;
// // const amIFat = null;
// let something;
// console.log(something);

// console.log(amIFat);




// const a = 2
// const b = 5          // 변경 불가능
// let myName = "Kim";   // 변경 가능 가끔만 써라

// // var myName = "Kim";    var는 이전 버든 언제든 바꿀 수 있다 - 쓰지 말라

// // const a = 1
// // const b = 5
// // const myName = "Kim"

// console.log(a+b);
// console.log(a/b);
// console.log(a*b);
// console.log("Hello" + myName);

// myName = "Masaru";

// console.log("my name is " + myName);