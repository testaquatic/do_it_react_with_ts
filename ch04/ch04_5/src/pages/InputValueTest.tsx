import { useCallback, useEffect, useRef } from "react";
import { Title } from "../components";

export default function CopyMe() {
  const inputRef = useRef<HTMLInputElement>(null);
  const getValue = useCallback(
    () => alert(`input value: ${inputRef.current?.value}`),
    [],
  );
  useEffect(() => inputRef.current?.focus(), []);

  return (
    <section className="mt-4">
      <Title>InputValueTest</Title>
      <div className="flex justify-center mt-4">
        <div className="flex flex-col w-1/3 p-2">
          <input type="text" className="input input-primary" ref={inputRef} />
          <button onClick={getValue} className="mt-4 btn btn-primary">
            get value
          </button>
        </div>
      </div>
    </section>
  );
}
