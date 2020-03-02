// const getCourse = () => {
// CORS error : I do not have access to CF API. I choose a local Json file instead
// fetch("https://careerfoundry.com/en/api/courses")
fetch("courses.json")
  .then(function(r) {
    return r.json();
  })
  .then(function(j) {
    console.log(j);
  })
  .catch(() => {
    console.log("test error");
  });
