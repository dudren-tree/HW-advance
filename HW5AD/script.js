//Второе дз часть один

var allDivs = document.body.querySelectorAll('div');
var allBtn = document.body.querySelectorAll('input');

for (var i = 0; i < allDivs.length; i++) {
    allBtn[i].addEventListener('click', deleteMassage);
}

function deleteMassage (event) {
    var closestDiv = event.currentTarget.closest('div');
    closestDiv.innerText = '';
}




// Второе дз часть два 

// window.onload = function () {
//     var hintBox;
//     var mainDiv = document.getElementById("main-div");
//     mainDiv.addEventListener('mouseover', hintWindow);
//     mainDiv.addEventListener('mouseout', hideHint);

//     function hideHint () {
//         if (hintBox) {
//             hintBox.remove();
//             hintBox = null;
//         }
//     }

//     function hintWindow () {
//         var target = window.event.srcElement;
//         var dataHint = target.dataset.tooltip;

//         if (!dataHint) return;

//         hintBox = document.createElement('div');
//         hintBox.className = 'hint-box'
//         hintBox.innerHTML = 'Some hint for you';
//         document.body.append(hintBox);

//         var coords = target.getBoundingClientRect();
//         var left = coords.left + (target.offsetWidth - hintBox.offsetWidth) / 2;
//         var top = coords.top + target.offsetHeight + 5;
//         console.log(top);
//         if (left < 0) left = 0;

//         hintBox.style.left = left + 'px';
//         hintBox.style.top = top + 'px';
//     }
// };
