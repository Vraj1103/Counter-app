

let lapcompleted = 0;
let count = document.getElementById("count-el");
let myname="John";
let greeting="Hello";
let mygreeting= greeting + " " + myname;
let saveEl = document.getElementById("save-el");
 

function lap(){
    lapcompleted++;
    console.log(lapcompleted);
    count.innerHTML = lapcompleted;
}

function save(){
console.log(lapcompleted);
let countstr=lapcompleted + "-";
saveEl.textContent += countstr;
}
function reset(){
    lapcompleted=0;
    count.innerText= lapcompleted;
}

