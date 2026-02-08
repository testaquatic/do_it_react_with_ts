import type { DragEvent } from "react";

export default function CopyMe() {
  const onDragStart = (e: DragEvent<HTMLElement>) => {
    console.log("onDragStart", e.dataTransfer);
  };

  const onDragEnd = (e: DragEvent<HTMLElement>) => {
    console.log("onDrop", e.dataTransfer);
  };

  const onDragOver = (e: DragEvent) => e.preventDefault();
  const onDrop = (e: DragEvent) => {
    e.preventDefault();
    console.log("onDrop", e.dataTransfer);
  };

  return (
    <div>
      <p>PageDrag</p>
      <div draggable onDragStart={onDragStart} onDragEnter={onDragEnd}>
        <h1>Drag ME</h1>
      </div>
      <div onDrop={onDrop} onDragOver={onDragOver}>
        <h1>Drag over ME</h1>
      </div>
    </div>
  );
}
