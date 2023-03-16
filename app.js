// using selectors inside the element

const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");
  btn.addEventListener("click", function () {
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });
    question.classList.toggle("show-text");
  });
});
// traversing the DOM ----------------------------------------------
// const btns = document.querySelectorAll(".question-btn");

// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     let parent = e.currentTarget.parentElement.parentElement;
//     // add a class to it's parent element
//     parent.classList.toggle("show-text");
//   });
// });
