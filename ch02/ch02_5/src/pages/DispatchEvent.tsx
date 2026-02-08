export default function DispatchEvent() {
  const onCallDispatchEvent = () => {
    console.log("onCallDispatchEvent");
    document
      .getElementById("root")
      ?.dispatchEvent(new Event("click", { bubbles: true }));
  };
  const onClick = () => {
    console.log("onCallClick");
    document.getElementById("root")?.click();
  };

  return (
    <div>
      <p>DispatchEvent</p>
      <button onClick={onCallDispatchEvent}>call dispatchEvent</button>
      <button onClick={onClick}>call click</button>
    </div>
  );
}
