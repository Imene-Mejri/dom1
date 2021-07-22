 
 
 var Delete = document.querySelectorAll(".button-delete")
 
 for (let i = 0; i < Delete.length; i++) {
    Delete[i].addEventListener("click", function () {
      Delete[i].parentElement.parentElement.parentElement.remove();
  console.log (Delete9)
      
    });
  }



  var plus = document.querySelectorAll(".btn-plus");
  var Q =document.querySelectorAll("#quantite")
  for (let i = 0; i < plus.length; i++) {
    plus[i].addEventListener("click", function () {
      plus[i].nextElementSibling.innerHTML++;
     
    });
  }

  var minus = document.querySelectorAll(".btn-plus");
  var Q =document.querySelectorAll("#quantite")
  for (let i = 0; i < plus.length; i++) {
    minus[i].addEventListener("click", function () {
      minus[i].if (minus[i].previousElementSibling.innerHTML > 0) 
        minus[i].previousElementSibling.innerHTML--;
      });
    }

    var 
     
   
  






