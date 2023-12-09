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

// Mailbox
document.getElementById("mailButton").addEventListener("click", function () {
  window.location.href =
    "mailto:teksila.ops@gmail.com?subject=Your%20Subject&body=Your%20Message%20Here";
});
