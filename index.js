// const getCourse = () => {
// CORS error : I do not have access to CF API. I choose a local Json file instead
// const response = null;

document
  .getElementsByClassName("dropdown-item")[0]
  .addEventListener("click", function(r) {
    getThisCourse(document.getElementsByClassName("dropdown-item")[0].value);
  });

document
  .getElementsByClassName("dropdown-item")[1]
  .addEventListener("click", function(r) {
    getThisCourse(document.getElementsByClassName("dropdown-item")[1].value);
  });
{
  fetch("courses.json")
    .then(function(r) {
      return r.json();
    })
    .then(function(j) {
      console.log(j);
    })
    .catch(() => {
      console.log("error");
    });

  const getThisCourse = function(course) {
    console.log(` I want to  ${course}`);
  };

  getThisCourse("become a UI Designer");
  getThisCourse("become a UX Designer");
}
