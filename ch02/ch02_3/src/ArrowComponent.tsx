export type ArrowComponentProps = {
  href: string;
  text: string;
};

const ArrowComponent = (props: ArrowComponentProps) => {
  const { href, text } = props;
  return (
    <li>
      <a href={href}>
        <p>{text}</p>
      </a>
    </li>
  );
};

export default ArrowComponent;
