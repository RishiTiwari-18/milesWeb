let hosting = document.querySelector(".hosting-page");
let hostingBtn = document.querySelector(".hosting-button");
let vps = document.querySelector(".vps-page");
let vpsBtn = document.querySelector(".vps");
let about = document.querySelector(".about-page");
let aboutBtn = document.querySelector(".about");
let flag = 1;
let flag2 = 1;
let flag3 = 1;

hostingBtn.addEventListener("click", function(){
    if (flag == 1) {
        gsap.to(hosting,{
            top: '0%',
        })
        flag = 0;
    } else {
        gsap.to(hosting,{
            top: '-100%'
        })
        flag = 1;
    }
})


vpsBtn.addEventListener("click", function(){
    if (flag2 == 1) {
        gsap.to(vps,{
            top: '0%',
        })
        flag2 = 0;
    } else {
        gsap.to(vps,{
            top: '-100%'
        })
        flag2 = 1;
    }
})

aboutBtn.addEventListener("click", function(){
    if (flag3 == 1) {
        gsap.to(about,{
            top: '0%',
        })
        flag3 = 0;
    } else {
        gsap.to(about,{
            top: '-100%'
        })
        flag3 = 1;
    }
})



