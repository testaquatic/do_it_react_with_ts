import { useEffect, useRef } from "react";
import { Title } from "../components";

export default function CopyMe() {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => inputRef.current?.focus(), []);

  return (
    <section className="mt-4">
      <Title>InputFocusTest</Title>
      <div className="flex justify-center mt-4">
        <input
          type="text"
          className="input input-primary"
          ref={inputRef}
          placeholder="enter some text"
        />
      </div>
    </section>
  );
}
