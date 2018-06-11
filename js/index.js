var myscore = 0;
var compscore = 0; 
var playermove;
var kompChoice;
var output = document.getElementById('output1');
var output2 = document.getElementById('output2');
var box1 = document.getElementById('box1');
var box2 = document.getElementById('box2');
var box3 = document.getElementById('box3');


var rules = [];
rules['kamien'] = 'nozyce';
rules['nozyce'] = 'papier';
rules['papier'] = 'kamien';


var boxy = document.getElementsByClassName("move");
    for( var i = 0; i < boxy.length; i++ ){
     boxy[i].addEventListener('click', function(){

    playermove = this.dataset.figure;
    kompChoice = Math.random();
        if (kompChoice < 0.34) {
            kompChoice = "kamien";
        } else if(kompChoice <= 0.67) {
            kompChoice = "papier";
        } else {
            kompChoice = "nozyce";
        }
var compare = function() {
  if (kompChoice == playermove){
    var wynik = 'remis';
  } else if (rules[playermove] == kompChoice){
   var wynik = 'wygrana';
  } else {
    var wynik = 'przegrana';
  }
  return wynik;
 }

if(compare()=='wygrana'){
 myscore += 1;
}
if(compare()== 'przegrana'){
  compscore += 1;
}  
output2.innerHTML = +myscore+ ':'+ compscore;
output.innerHTML = ' Ty wybrałeś:'+playermove+' a przeciwnik:'+kompChoice+' czyli...'+ compare() ;
}                    
);
    }
