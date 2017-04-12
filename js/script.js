function handleClick(){         
    var amountCorrect = 0;          
    for(var i = 1; i <= 45; i++) {
      var radios = document.getElementsByName('q'+i);
      
      for(var j = 0; j < radios.length; j++) {
        var radio = radios[j];
        
        if(radio.value == "1" && radio.checked) {
          amountCorrect = amountCorrect + 1;
        }
        
        if(radio.value == "2" && radio.checked) {
          amountCorrect = amountCorrect + 2;
        }
        
        if(radio.value == "3" && radio.checked) {
          amountCorrect = amountCorrect + 3;
        }
        
        if(radio.value == "4" && radio.checked) {
          amountCorrect = amountCorrect + 4;
        }
        
        if(radio.value == "5" && radio.checked) {
          amountCorrect = amountCorrect + 5;
        }
      }
    }                   
      document.getElementById("total").innerHTML = "Your Score: " + amountCorrect;
  }