function firstElem () {
    var choose = document.getElementById("p1");
    var chooseF = choose.firstChild;
    var chooseS = choose.lastChild;
    chooseS.removeAttribute("style");
    if (chooseF.style.color == "red"){
        chooseF.removeAttribute('style');
    } else {
        chooseF.style.color = "red";
    };
};

function lastElem () {
    var choose = document.getElementById("p1");
    var chooseF = choose.firstChild;
    chooseF.removeAttribute("style");
    var chooseS = choose.lastChild;
    if(chooseS.style.color == "red"){
        chooseS.style.color = "";
    } else {
       chooseS.style.color = "red";
    };
};

var count = 0;
function next () {
    count++
    console.log(count);
    var choose = document.getElementById("p1");
    var nextChoose = choose.children;
    if (count == 1){
        nextChoose[1].removeAttribute("style");
        nextChoose[2].removeAttribute("style");
        nextChoose[0].style.color = "red";
    } else if (count == 2) {
        nextChoose[0].removeAttribute("style");
        nextChoose[2].removeAttribute("style");
        nextChoose[1].style.color = "red";
    } else if (count == 3) {
        nextChoose[1].removeAttribute("style");
        nextChoose[0].removeAttribute("style");
        nextChoose[2].style.color = "red";
        count = 0;
    };
};
    var count2 = 3
function previous () {
    console.log(count2);
    var choose = document.getElementById("p1");
    var nextChoose = choose.children;
    if (count2 == 3){
        nextChoose[1].removeAttribute("style");
        nextChoose[0].removeAttribute("style");
        nextChoose[2].style.color = "red";
        count2--;
    } else if (count2 == 2) {
        nextChoose[0].removeAttribute("style");
        nextChoose[2].removeAttribute("style");
        nextChoose[1].style.color = "red";
        count2--;
    } else if (count2 == 1) {
        nextChoose[2].removeAttribute("style");
        nextChoose[1].removeAttribute("style");
        nextChoose[0].style.color = "red";
        count2 = 3;
    };
};

function add () {
    var choose = document.getElementById("p1");
    var newIt = document.createElement("li");
    newIt.innerHTML = "New item";
    choose.appendChild(newIt);

};

function del () {
    var choose = document.getElementById("p1");
    console.log(choose.childNodes.length);
    var delEl = choose.lastChild;
    choose.removeChild(delEl);
    
}; 

function addSt (){
    var choose = document.getElementById("p1");
    var start = choose.firstChild;
    var newEl = document.createElement("li");
    newEl.innerHTML = "New item";
    choose.insertBefore(newEl, start);
}