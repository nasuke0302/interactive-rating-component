"use strict";

const Submitted = ({ submitted }) => {
  return (
    <div className="thank-you-container">
      <img src="images/illustration-thank-you.svg" alt="paper" />
      <span className="result">You selected {submitted} out of 5</span>
      <h1>Thank you!</h1>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </div>
  );
};

const Rate = ({ onSubmit }) => {
  const [selected, setSelected] = React.useState(0);

  const handleClick = () => {
    onSubmit(selected);
  };

  return (
    <div>
      <img className="star" src="images/icon-star.svg" alt="star" />
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us imrpove our offering!
      </p>
      <ul>
        <li
          className={selected === 1 ? "active" : ""}
          onClick={() => setSelected(1)}
        >
          1
        </li>
        <li
          className={selected === 2 ? "active" : ""}
          onClick={() => setSelected(2)}
        >
          2
        </li>
        <li
          className={selected === 3 ? "active" : ""}
          onClick={() => setSelected(3)}
        >
          3
        </li>
        <li
          className={selected === 4 ? "active" : ""}
          onClick={() => setSelected(4)}
        >
          4
        </li>
        <li
          className={selected === 5 ? "active" : ""}
          onClick={() => setSelected(5)}
        >
          5
        </li>
      </ul>
      <button onClick={handleClick}>submit</button>
    </div>
  );
};

const App = () => {
  const [submitted, setSubmitted] = React.useState(0);

  return (
    <div className="container">
      {submitted ? (
        <Submitted submitted={submitted} />
      ) : (
        <Rate onSubmit={setSubmitted} />
      )}
    </div>
  );
};

let domContainer = document.querySelector("#app-container");
ReactDOM.render(<App />, domContainer);
