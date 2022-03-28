"use strict";

const App = () => {
  return (
    <div className="container">
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us imrpove our offering!
      </p>
    </div>
  );
};

let domContainer = document.querySelector("#app-container");
ReactDOM.render(<App />, domContainer);
