let navContent = document.querySelector(".nav-content")
let navIcon = document.querySelector("#nav-button i")
let navButton = document.querySelector("#nav-button")
let flag = 0;

navButton.addEventListener("click", function(){

    if (flag == 0) {
        navContent.style.right = "17%";
        navIcon.style.rotate = "-90deg";
        flag = 1;
    } else {
        navContent.style.right = "-50%";
        navIcon.style.rotate = "0deg";
        flag = 0;
    }

})