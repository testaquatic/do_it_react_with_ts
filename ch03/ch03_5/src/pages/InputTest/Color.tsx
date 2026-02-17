import type { DetailedHTMLProps } from "react";
import { Input } from "../../theme/daisyui";

type ColorDivProps = DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const ColorDiv = ({ className: _className, ...props }: ColorDivProps) => {
  const className = ["flex flex-col gap-2", _className].join(" ");
  return <div {...props} className={className}></div>;
};

export default function Color() {
  return (
    <section className="mt-4">
      <h2 className="text-3xl font-bold text-center">Color</h2>
      <div className="flex flex-col p-4 mt-4 gap-5">
        <ColorDiv>
          <label className="label">input-primary</label>
          <Input className="input-primary" />
        </ColorDiv>
        <ColorDiv>
          <label className="label">input-secondary</label>
          <Input className="input-secondary" />
        </ColorDiv>
        <ColorDiv>
          <label className="label">input-accent</label>
          <Input className="input-accent" />
        </ColorDiv>
        <ColorDiv>
          <label className="label">input-info</label>
          <Input className="input-info" />
        </ColorDiv>
        <ColorDiv>
          <label className="label">input-success</label>
          <Input className="input-success" />
        </ColorDiv>
        <ColorDiv>
          <label className="label">input-warning</label>
          <Input className="input-warning" />
        </ColorDiv>
        <ColorDiv>
          <label className="label">input-error</label>
          <Input className="input-error" />
        </ColorDiv>
      </div>
    </section>
  );
}
