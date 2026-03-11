import { Div, Subtitle, Title } from "../component";

export type ClockProps = {
  today: Date;
};

const Clock = ({ today }: ClockProps) => (
  <>
    <Div className="flex flex-col items-center justify-center h-screen bg-primary text-white">
      <Title className="text-5xl">{today.toLocaleTimeString()}</Title>
      <Subtitle className="mt-4 text-2xl">
        {today.toLocaleDateString()}
      </Subtitle>
    </Div>
  </>
);

export default Clock;
