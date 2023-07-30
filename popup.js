
document.addEventListener("DOMContentLoaded", function() {
    var popup = document.getElementById("popup");
    var popupImage = document.getElementById("popupImage");
  
    popup.style.display = "none";
  
    function showPopup(imageSrc) {
      popupImage.src = imageSrc;
      popup.style.display = "flex";
      document.body.classList.add("show-popup");
    }
  
    function hidePopup() {
      popup.style.display = "none";
      document.body.classList.remove("show-popup");
    }
  
    window.addEventListener("click", function(event) {
      if (event.target === popup) {
        hidePopup();
      }
    });
  
    // Attach click event handlers to each image element
    var boxes = document.querySelectorAll(".box");
    boxes.forEach(function(box) {
      box.addEventListener("click", function() {
        var imageSrc = this.getAttribute("onclick").split("'")[1];
        showPopup(imageSrc);
      });
    });
  });