import styles from './styles.module.css'

type InputInfoIdadeProps = {
    age: number,
}

export default function InputInfoIdade({age} : InputInfoIdadeProps){
    return (
      <>
        <input className={styles.inputAge} type='number' value={age} />
      </>
    );
}