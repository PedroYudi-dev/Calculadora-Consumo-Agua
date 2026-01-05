import styles from './styles.module.css';
type InputInfoPesoProps = {
  weight: number;
  setWeight: (weight: number) => void;
};

export default function InputInfoPeso({ weight, setWeight }: InputInfoPesoProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value  = e.target.value;
    if(value === ''){
      setWeight(0);
      return      
    }
    setWeight(Number(value));
  }
  const formatWeight = () =>{
    return weight === 0 ? '' : weight;
  }

    return (
      <>
        <input
          type="number"
          className={styles.inputWeight}
          min="0"
          placeholder="Digite o seu peso"
          value={formatWeight()}
          onChange={handleChange}
        />
      </>
    );
}