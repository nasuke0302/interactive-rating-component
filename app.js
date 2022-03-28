"use strict";

var App = function App() {
  return React.createElement(
    "div",
    { className: "container" },
    React.createElement(
      "h1",
      null,
      "How did we do?"
    ),
    React.createElement(
      "p",
      null,
      "Please let us know how we did with your support request. All feedback is appreciated to help us imrpove our offering!"
    )
  );
};

var domContainer = document.querySelector("#app-container");
ReactDOM.render(React.createElement(App, null), domContainer);