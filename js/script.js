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
    
    if(amountCorrect <= 30) {
      $("div#score").css("color", "white");
      $("div#score").css("background-color", "red");
      document.getElementById("total").innerHTML = "YOU ARE NOT PREPARED";
      document.getElementById("results").innerHTML = "There is still a lot you need to do in order to access procurement opportunities and become a supplier for public or private organizations. Start by doing your market research and getting to know who your potential clients are. Get familiar with their activities, and their procurement needs, rules and procedures.";
    }
    
    if(amountCorrect >= 31 && amountCorrect <= 60) {
      $("div#score").css("color", "white");
      $("div#score").css("background-color", "orange");
      document.getElementById("total").innerHTML = "YOU ARE NOT VERY PREPARED";
      document.getElementById("results").innerHTML = "You have started your market research to access the procurement market and become a supplier, however there is a lot of room for improvement. Identify which specific areas you need to work harder. You do not have to do it all alone. Identify who in your organization can help you prepare for this process.";
    }
    
    if(amountCorrect >= 61 && amountCorrect <= 69) {
      $("div#score").css("color", "black");
      $("div#score").css("background-color", "yellow");
      document.getElementById("total").innerHTML = "YOU ARE ALMOST PREPARED";
      document.getElementById("results").innerHTML = "You are on the right track, but you still need to make some improvements in your plan and strategy in order to be successful in the procurement market. Assess which particular points you need to improve and concentrate on those.";
    }
    
    if(amountCorrect >= 70 && amountCorrect <= 75) {
      $("div#score").css("color", "white");
      $("div#score").css("background-color", "green");
      document.getElementById("total").innerHTML = "YOU ARE PREPARED";
      document.getElementById("results").innerHTML = "You may need to work harder in a couple of areas, but you are ready to access the procurement market and become a supplier for public and private organizations.";
    }

  }