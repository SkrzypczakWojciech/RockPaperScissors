   

var box1 = document.getElementById('box1');
var ramkaphoto = document.getElementById('output1');
box1.addEventListener('click', function(){
  var kompChoice = Math.random();
        if (kompChoice < 0.34) {
            kompChoice = "kamien";
        } else if(kompChoice <= 0.67) {
            kompChoice = "papier";
        } else {
            kompChoice = "nozyce";
        }
var compare = function() {
  if (kompChoice == "nozyce");{
   var wynik = ' wygrana ' ;
  }
  if (kompChoice == "kamien"){
    var wynik = ' remis '
  }
  if (kompChoice == "papier"){
   var wynik = 'przegrana'
  }
  
  return wynik;
  
 }



var output = document.getElementById('output1');
output.innerHTML = ' Ty wybrałeś:KAMIEN a przeciwnik:'+kompChoice+' czyli...'+ compare() ;
}        

                      
);
var box2 = document.getElementById('box2'); 
box2.addEventListener('click', function(){
var kompChoice = Math.random();
        if (kompChoice < 0.34) {
            kompChoice = "kamien";
        } else if(kompChoice <= 0.67) {
            kompChoice = "papier";
        } else {
            kompChoice = "nozyce";
        }
  var porownaj=function(){
    if(kompChoice==="nozyce"){
      var wynik = " remis !"
    }
   if(kompChoice==="kamien"){
     var wynik = " przegrana !"
   }
   if(kompChoice==="papier"){
     var wynik =" wygrana! "
   }
    return wynik;
  }

var output = document.getElementById('output1');
output.innerHTML = 'Ty wybrałeś:Nozyce a przeciwnik: '+kompChoice+porownaj();
}                   
);
var box3 = document.getElementById('box3'); 
box3.addEventListener('click', function(){
var kompChoice = Math.random();
        if (kompChoice < 0.34) {
            kompChoice = "kamien";
        } else if(kompChoice <= 0.67) {
            kompChoice = "papier";
        } else {
            kompChoice = "nozyce";
        }
 
  var porownaj=function(){
    if(kompChoice==="papier"){
      var wynik = " remis !"
    }
   if(kompChoice==="nozyce"){
     var wynik = " przegrana !"
   }
   if(kompChoice==="kamien"){
     var wynik =" wygrana! "
   }
    return wynik;
  }
  
var output = document.getElementById('output1');
output.innerHTML = 'Ty wybrałeś:PAPIER a przeciwnik: '+kompChoice+porownaj();
}                   
);