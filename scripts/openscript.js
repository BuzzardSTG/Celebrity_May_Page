/* ==================== Open Side Menu scripts ======================*/
var menubutton = document.getElementById("menubutton")
      var SideNav = document.getElementById("SideNav")
      var menu = document.getElementById("menu")
      SideNav.style.right = "-170px"

      menubutton.onclick = function () {
        if (SideNav.style.right == "-170px") {
          SideNav.style.right = "0";
          menu.src ="./images/close-menu.png";
        } else {
          SideNav.style.right = "-170px";
          menu.src ="./images/menu-button.png";
        }
      }