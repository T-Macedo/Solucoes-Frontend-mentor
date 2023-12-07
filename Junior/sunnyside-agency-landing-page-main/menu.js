const navContainer = document.querySelector(".menu-container"),
        menuToggle = document.querySelector(".alt-menu");
        
          menuToggle.onclick = () => {
            if (menuToggle.classList.contains("active")) {
              navContainer.classList.remove("active");
              menuToggle.classList.remove("active");
            } else {
              navContainer.classList.add("active");
              menuToggle.classList.add("active");
            }
          }
