import { Title } from "../component";
import * as D from "../data";


const src = D.randomImage(3000, 1600);

export default function CopyMe() {
  return (
    <section className="mt-4">
      <Title>ImageTest</Title>
      <div className="mt-4">
        <img src={src} className="bg-green-300" width={400} height={400} />
      </div>
    </section>
  );
}
