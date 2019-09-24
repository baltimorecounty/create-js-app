import "./Index.scss";

const handleChangeTitleClick = clickEvent => {
  const pageTitle = document.querySelectorAll("h1");

  console.log("got here", pageTitle);

  if (pageTitle) {
    pageTitle[0].textContent = "My Really Awesome App";
  }
};

const init = message => {
  console.log(message);
};

console.log("test", document.body.innerHTML);

document
  .getElementById("change-title")
  .addEventListener("click", handleChangeTitleClick);

init("Welcome to my app.");
