const btns = document.querySelectorAll(".btn");
const btns2 = document.querySelectorAll(".btn2");

function acardion(btn, btn2) {
  btn.forEach((item, idx) => {
    item.addEventListener("click", () => {
      console.log(btn2[idx]);
      toggleZone(item, btn2[idx]);
      let p = item.parentElement.parentElement.children[1];
      toggleZone(p);
    });
  });
}

acardion(btns, btns2);
acardion(btns2, btns);

function toggleZone(hideZone, showZone) {
  if (! hideZone.className.includes("hide")) {
    hideZone.classList.add("hide");
  } else {
    hideZone.classList.remove("hide");
  }
  if (showZone) showZone.classList.remove("hide");
}
