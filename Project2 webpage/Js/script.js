function showConfirmation(event) {

 
    document.getElementById("contact-form").style.display = "none";

  
   
    setTimeout(function() {
        document.getElementById("contact-form").submit();
      }, 1000); 
    }