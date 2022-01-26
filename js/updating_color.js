
    function renderFavColorPicker() {
        var template = document.getElementById("fav-color");
        template.removeAttribute("hidden");
  
      }
      //this gets called when a color is picked in the color picker menu.
      function updateColorData(name) {
        removeCheckMarks();
        color_data.forEach(function (arr_data) {
          if (name == arr_data.name) {
            data.current_color.color = arr_data.color_code;
            data.current_color.off_color = arr_data.off_color_code;
            data.current_color.color_name = arr_data.name;
          }
        });
        // console.log(data.current_color.name);
        addCheckMarkToCurrentColor();
      }
  
      function changeColor() {
        var elements;
        elements = document.getElementsByClassName("color");
        for (let i = 0; i < elements.length; i++) {
          elements[i].style.backgroundColor = data.current_color.color;
        }
        elements = document.getElementsByClassName("border-color");
        for (let i = 0; i < elements.length; i++) {
          elements[i].style.borderColor = data.current_color.color;
        }
        elements = document.getElementsByClassName("off-color");
        for (let i = 0; i < elements.length; i++) {
          elements[i].style.color = data.current_color.off_color;
        }
      }
  
      //first, changeColor is activated to change the color theme. 
      //Second, the id "fav-color" is given a hidden attribute. 
      //Third, a "fade-out" class is added to modal, so it fades out. 
      function updateColorClicked() {
        changeColor();
        document.getElementById("fav-color").setAttribute("hidden", "hidden");
        modal.classList.add("fade-out");
      }
  
      function removeCheckMarks() {
        var checkmarks = document.getElementsByClassName("checkmark");
        for (let i = 0; i < checkmarks.length; i++) {
          checkmarks[i].parentNode.removeChild(checkmarks[i]);
        }
      }
  
  
      //this function add check mark to the selected color
      //how it works: 
      //1. JS grabs the element by class name "color-preview"
      //2. logic works like this: if the id == data.current_color.color_name, innerHTML will be added to give a checkmark
      function addCheckMarkToCurrentColor() {
        colorPreviews = document.getElementsByClassName("color-preview");
        for (let i = 0; i < colorPreviews.length; i++) {
          if (colorPreviews[i].id == data.current_color.color_name) {
            colorPreviews[i].innerHTML = "<i class='fas fa-check checkmark'></i>";
          }
        }
      }
  