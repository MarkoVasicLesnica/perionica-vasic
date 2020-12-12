
const slike = document.querySelectorAll('#div_kamioni img');
const width = slike[0].clientWidth

var counter = 0;

setInterval(() => {
    
    slike[counter].style.marginRight = '-567px';
    counter++;
    console.log(counter);
    
    return counter;
},3000)