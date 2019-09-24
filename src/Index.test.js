import { getByText } from "@testing-library/dom";

global.console = { log: jest.fn() };

beforeEach(() => {
  createAppContainer();
  require("./Index.js");
});

afterEach(() => {
  document.body.firstChild.remove();
  jest.resetModules();
});

const createAppContainer = () => {
  document.body.innerHTML = `<div id="app">
      <h1>My Awesome App</h1>
      <button id="change-title" type="button">Change Page Title</button>
    </div>`;
};

test("this test should be replaced with an actual jest test", () => {
  expect(console.log).toBeCalled();
});

test("this test should can be replace with an actual dom testing-library test", () => {
  const appContainer = document.getElementById("app");
  const changeButton = getByText(appContainer, "Change Page Title");
  const pageHeading = getByText(appContainer, "My Awesome App");

  expect(pageHeading.textContent).toEqual("My Awesome App");

  changeButton.click();

  expect(pageHeading.textContent).toEqual("My Really Awesome App");
});
