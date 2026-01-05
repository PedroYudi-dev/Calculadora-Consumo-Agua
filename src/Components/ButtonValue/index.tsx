type ButtonValueProps = {
    onClick: () => void;
    title: string;
}

export default function ButtonValue({ onClick, title }: ButtonValueProps) {
  return <button onClick={onClick}>{title}</button>;
}