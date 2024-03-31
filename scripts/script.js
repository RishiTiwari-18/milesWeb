let hosting = document.querySelector(".hosting-page");
let hostingBtn = document.querySelector(".hosting-button");
let vps = document.querySelector(".vps-page");
let vpsBtn = document.querySelector(".vps");
let about = document.querySelector(".about-page");
let aboutBtn = document.querySelector(".about");
let contact = document.querySelector(".contact-page");
let contactBtn = document.querySelector(".contact-btn");

const dropbtn = document.querySelector("#dropdwn");
const tyr = document.querySelector("#tyr");
const oyr = document.querySelector("#oyr");
const mnt = document.querySelector("#mnt");
const drp = document.querySelector(".data-drop");

const navButtons = [hostingBtn, vpsBtn, aboutBtn, contactBtn];
const navCards = [hosting, vps, about, contact];
const flags = [1, 1, 1, 1];

function openCard() {
  ind = navButtons.indexOf(this);
  card = navCards[ind];
  flag = flags[ind];
  if (flag == 1) {
    gsap.to(card, {
      top: "0%",
    });
    flags[ind] = 0;
    for (let i = 0; i < navButtons.length; i++) {
      if (i === ind) {
        continue;
      } else {
        gsap.to(navCards[i], {
          top: "-100%",
        });
        flags[i] = 1;
      }
    }
  } else {
    gsap.to(card, {
      top: "-100%",
    });
    flags[ind] = 1;
  }
}

function planChangeInTable() {
  dropbtn.innerHTML =
    this.innerHTML + `    <i class="fa-solid fa-caret-down"></i>`;
}

drp.style.display = "none";

dropbtn.addEventListener("click", function () {
  const dis = drp.style.display;
  if (dis == "none") {
    drp.style.display = "block";
  } else {
    drp.style.display = "none";
  }
});
tyr.addEventListener("click", planChangeInTable);
oyr.addEventListener("click", planChangeInTable);
mnt.addEventListener("click", planChangeInTable);

hostingBtn.addEventListener("click", openCard);
vpsBtn.addEventListener("click", openCard);
aboutBtn.addEventListener("click", openCard);
contactBtn.addEventListener("click", openCard);

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3.5,
  spaceBetween: 50,
  centeredSlides: true,
});
