import styles from './button.module.css';

type ButtonValueProps = {
    onClick: () => void;
    title: string;
}

export default function ButtonValue({ onClick, title }: ButtonValueProps) {
  return <button onClick={onClick} className={styles.button}>{title}</button>;
}