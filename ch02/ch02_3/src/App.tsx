import React from "react";

function App() {
  return (
    <>
      <ul>
        <li>
          <a href="https://www.google.com">
            <p>go to google</p>
          </a>
        </li>
      </ul>
    </>
  );
}

type ClassComponentProps = {
  href: string;
  text: string;
};

class ClassComponent extends React.Component<ClassComponentProps> {
  render(): React.ReactNode {
    const { href, text } = this.props;

    return (
      <li>
        <a href={href}>
          <p>{text}</p>
        </a>
      </li>
    );
  }
}

export default App;
export { ClassComponent };
