import { createElement } from "react";
import * as Data from "./data";

function App1() {
  return createElement("ul", null, [
    createElement("li", null, [
      createElement("a", { href: "https://www.google.com", target: "_blank" }, [
        createElement("p", null, "go to google"),
      ]),
    ]),
  ]);
}

function App2() {
  const children = [
    <li>
      <a href="https://www.google.com" target="_blank">
        <p>go to google</p>
      </a>
    </li>,
    <li>
      <a href="https://www.facebook.com" target="_blank">
        <p>go to facebook</p>
      </a>
    </li>,
    <li>
      <a href="https://www.twitter.com" target="_blank">
        <p>go to twitter</p>
      </a>
    </li>,
  ];

  return <ul>{children}</ul>;
}

function App3() {
  const children = [0, 1, 2].map((n) => <h3>hello world {n}</h3>);
  return <div>{children}</div>;
}

function App() {
  const children = Data.makeArray(10).map((_, index) => (
    <div key={index}>
      <p>{Data.randomId()}</p>
      <p>{Data.randomName()}</p>
      <p>{Data.randomJobTitle()}</p>
      <p>{Data.randomSentence()}</p>
      <img src={Data.randomAvatar()} width={100} height={100} />
    </div>
  ));

  return <div>{children}</div>;
}

export default App;
