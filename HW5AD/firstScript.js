var divFirst = document.createElement('div');
var aHref = document.createElement('a');
var butt = document.createElement('button')

aHref.innerHTML = 'push on me';
butt.innerHTML = 'Cancel link'
divFirst.innerHTML = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero magnam harum voluptas id dolor sint beatae'

document.body.appendChild(divFirst);
document.body.appendChild(butt);
document.body.appendChild(aHref);
            
divFirst.style.width = '100%';
divFirst.style.height = '10vh';
divFirst.style.display = 'flex';
divFirst.style.flexDirection = 'column';
divFirst.style.display = 'none';
divFirst.classList.add('hide')

butt.addEventListener('click', removeLink);
aHref.addEventListener('click', showMenu);

function showMenu () {
    if (divFirst.classList.contains('hide')) {
        divFirst.style.display = 'block'
        divFirst.classList.toggle('hide');
    } else {
        divFirst.style.display = 'none';
        divFirst.classList.toggle('hide')
    }
}

function removeLink () {
    aHref.removeEventListener('click', showMenu);
}