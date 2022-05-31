// Header Scripts
const header = document.getElementsByClassName("header")[0];
const headerBtn = header.getElementsByClassName("mobile-menu")[0];
const headWrap = header.getElementsByClassName("column-wrapper")[0];
const navLink = header.querySelectorAll("li");
navLink.forEach((item) => {
  item.addEventListener("click", function (e) {
    if (e.target.innerText != undefined) {
      headWrap.classList.remove("active");
      document.body.classList.remove("menu-mobile");
    }
  });
});
headerBtn.addEventListener("click", () => {
  headWrap.classList.toggle("active");
  document.body.classList.toggle("menu-mobile");
});
window.onscroll = function () {
  if (document.documentElement.scrollTop > 40) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
};

// const testObj = {
//   backgroundColor: "#000000",
//   padding: "50px 0",
//   margin: "50px 0"
// }

// Object.assign(header.style, testObj)
