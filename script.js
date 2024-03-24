let hosting = document.querySelector(".hosting-page");
let hostingBtn = document.querySelector(".hosting-button");
let vps = document.querySelector(".vps-page");
let vpsBtn = document.querySelector(".vps");
let about = document.querySelector(".about-page");
let aboutBtn = document.querySelector(".about");

const navButtons = [hostingBtn, vpsBtn, aboutBtn];
const navCards = [hosting, vps, about];
const flags = [1, 1, 1];

function openCard() {
    ind = navButtons.indexOf(this);
    card = navCards[ind];
    flag = flags[ind];
    if (flag == 1) {
        gsap.to(card, {
            top: '0%',
        })
        flags[ind] = 0;
        for (let i = 0; i < navButtons.length; i++) {
            if (i === ind) {
                continue;
            } else {
                gsap.to(navCards[i], {
                    top: '-100%'
                })
                flags[i] = 1;
            }
        }
    } else {
        gsap.to(card, {
            top: '-100%'
        })
        flags[ind] = 1;
    }
}
hostingBtn.addEventListener("click", openCard);
vpsBtn.addEventListener("click", openCard);
aboutBtn.addEventListener("click", openCard);





