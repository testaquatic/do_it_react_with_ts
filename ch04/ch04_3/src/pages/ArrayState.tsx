import { useCallback, useMemo, useState } from "react";
import * as D from "../data";
import { Div, Icon, Title } from "../components";

export default function CopyMe() {
  const [images, setImages] = useState<string[]>([]);
  const addImage = useCallback(
    () => setImages((images) => [D.randomImage(200, 100, 50), ...images]),
    [],
  );
  const clearImages = useCallback(() => setImages([]), []);

  const children = useMemo(
    () =>
      images.map((image, index) => (
        <Div
          key={index}
          src={image}
          className="w-1/5 m-2"
          height="5rem"
          minHeight="5rem"
        ></Div>
      )),
    [images],
  );

  return (
    <section className="mt-4">
      <Title>ArrayState</Title>
      <div className="flex justify-center mt-4">
        <div data-tip="add-image" className="tooltip">
          <Icon
            name="add"
            onClick={addImage}
            className="btn mr-12 btn-primary btn-circle"
          />
        </div>
        <div data-tip="clear all" className="tooltip">
          <Icon
            name="clear_all"
            onClick={clearImages}
            className="btn btn-circle"
          />
        </div>
      </div>
      <div className="flex flex-wrap mt-4">{children}</div>
    </section>
  );
}
