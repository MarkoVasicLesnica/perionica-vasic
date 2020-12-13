
const slike = document.querySelectorAll('#div_kamioni img');

var counter = 1;
var modal = 10;

setInterval( () => {
    var margina = -100 * counter

    if(counter < 10){
        slike[0].style.marginLeft = margina + '%';
        counter++;
        modal--;
    }else{
        if(modal < 10){
            modal++;
            slike[0].style.marginLeft = margina + 100 * modal + '%';
        }else{
            counter = 1;
        }
    }
    
},3000)
    


//probati sa klasama