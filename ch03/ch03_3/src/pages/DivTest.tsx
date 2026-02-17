import { Div, Icon, Subtitle, Title } from "../component";
export default function CopyMe() {
  return (
    <section className="mt-4">
      <Title>DivTest</Title>
      <Div className="text-center text-blue-100 bg-blue-600">
        <Icon name="home" className="text-3xl" />
        <Subtitle>Home</Subtitle>
      </Div>
    </section>
  );
}
