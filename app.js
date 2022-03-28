"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var Submitted = function Submitted(_ref) {
  var submitted = _ref.submitted;

  return React.createElement(
    "div",
    { className: "thank-you-container" },
    React.createElement("img", { src: "images/illustration-thank-you.svg", alt: "paper" }),
    React.createElement(
      "span",
      { className: "result" },
      "You selected ",
      submitted,
      " out of 5"
    ),
    React.createElement(
      "h1",
      null,
      "Thank you!"
    ),
    React.createElement(
      "p",
      null,
      "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!"
    )
  );
};

var Rate = function Rate(_ref2) {
  var onSubmit = _ref2.onSubmit;

  var _React$useState = React.useState(0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      selected = _React$useState2[0],
      setSelected = _React$useState2[1];

  var handleClick = function handleClick() {
    onSubmit(selected);
  };

  return React.createElement(
    "div",
    null,
    React.createElement("img", { className: "star", src: "images/icon-star.svg", alt: "star" }),
    React.createElement(
      "h1",
      null,
      "How did we do?"
    ),
    React.createElement(
      "p",
      null,
      "Please let us know how we did with your support request. All feedback is appreciated to help us imrpove our offering!"
    ),
    React.createElement(
      "ul",
      null,
      React.createElement(
        "li",
        {
          className: selected === 1 ? "active" : "",
          onClick: function onClick() {
            return setSelected(1);
          }
        },
        "1"
      ),
      React.createElement(
        "li",
        {
          className: selected === 2 ? "active" : "",
          onClick: function onClick() {
            return setSelected(2);
          }
        },
        "2"
      ),
      React.createElement(
        "li",
        {
          className: selected === 3 ? "active" : "",
          onClick: function onClick() {
            return setSelected(3);
          }
        },
        "3"
      ),
      React.createElement(
        "li",
        {
          className: selected === 4 ? "active" : "",
          onClick: function onClick() {
            return setSelected(4);
          }
        },
        "4"
      ),
      React.createElement(
        "li",
        {
          className: selected === 5 ? "active" : "",
          onClick: function onClick() {
            return setSelected(5);
          }
        },
        "5"
      )
    ),
    React.createElement(
      "button",
      { onClick: handleClick },
      "submit"
    )
  );
};

var App = function App() {
  var _React$useState3 = React.useState(0),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      submitted = _React$useState4[0],
      setSubmitted = _React$useState4[1];

  return React.createElement(
    "div",
    { className: "container" },
    submitted ? React.createElement(Submitted, { submitted: submitted }) : React.createElement(Rate, { onSubmit: setSubmitted })
  );
};

var domContainer = document.querySelector("#app-container");
ReactDOM.render(React.createElement(App, null), domContainer);