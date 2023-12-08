var slidebar = document.getElementById("slidebar");
function chanceslider() {
  slidebar.style = `transform: translateX(0px);`;
}
function wrong() {
  slidebar.style = `transform: translateX(600px);`;
}

let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

//faq
// document.addEventListener("DOMContentLoaded", function () {
//   const faqItems = document.querySelectorAll(".faq-item");

//   faqItems.forEach((item) => {
//     const faqQuestion = item.querySelector(".faq-question");

//     faqQuestion.addEventListener("click", () => {
//       item.classList.toggle("active");
//     });
//   });
// });

//login-Signup
const formOpenBtn = document.querySelector("#form-open"),
  login_box = document.querySelector(".bodybackground"),
  formContainer = document.querySelector(".form_container"),
  formCloseBtn = document.querySelector(".form_close"),
  signupBtn = document.querySelector("#signup"),
  loginBtn = document.querySelector("#login"),
  pwShowHide = document.querySelectorAll(".pw_hide");

formOpenBtn.addEventListener("click", () => login_box.classList.add("show"));
formCloseBtn.addEventListener("click", () =>
  login_box.classList.remove("show")
);

pwShowHide.forEach((icon) => {
  icon.addEventListener("click", () => {
    let getPwInput = icon.parentElement.querySelector("input");
    if (getPwInput.type === "password") {
      getPwInput.type = "text";
      icon.classList.replace("uil-eye-slash", "uil-eye");
    } else {
      getPwInput.type = "password";
      icon.classList.replace("uil-eye", "uil-eye-slash");
    }
  });
});

signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.add("active");
});
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.remove("active");
});
