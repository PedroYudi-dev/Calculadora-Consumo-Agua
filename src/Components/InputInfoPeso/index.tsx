import styles from './styles.module.css';
type InputInfoPesoProps = {
  weight: number;
  setWeight: (weight: number) => void;
};

export default function InputInfoPeso({ weight, setWeight }: InputInfoPesoProps) {

    return (
      <>
        <input
          type="number"
          className={styles.inputWeight}
          value={weight}
          onChange={(e) => setWeight(Number(e.target.value))}
        />
      </>
    );
}