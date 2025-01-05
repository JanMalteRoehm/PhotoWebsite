var indexValue = 1;
showImg(indexValue);

function side_slide(e) {
    showImg(indexValue +=e); 
}

function showImg(e) {
    var i;
    const img = document.querySelectorAll('.pic');
    if(e > img.length) {
        indexValue = 1
    }
    if(e < 1) {
        indexValue = img.length
    }
    for(i = 0; i < img.length; i++) {
        img[i].style.display = "none";
    }
    img[indexValue - 1].style.display = "block";
}



      /* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
      var dropdown = document.getElementsByClassName("dropdown-btn");
      var i;
      
      for (i = 0; i < dropdown.length; i++) {
        dropdown[i].addEventListener("click", function() {
          this.classList.toggle("active");
          var dropdownContent = this.nextElementSibling;
          if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
          } else {
            dropdownContent.style.display = "block";
          }
        });
      }
   