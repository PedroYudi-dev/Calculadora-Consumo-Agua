import Styles from "./styles.module.css";

type SelectGeneroProps = {
  trainerOrNoTraine: string;
  setTrainerOrNoTraine: (trainerOrNoTraine: string) => void;
};

export default function TrainerOrNoTrainer({ trainerOrNoTraine, setTrainerOrNoTraine }: SelectGeneroProps) {
  return (
    <>
      <select
        className={Styles.selectSex}
        value={trainerOrNoTraine}
        onChange={(e) => setTrainerOrNoTraine(e.target.value)}
      >
        <option value="" disabled hidden>Selecione a opção</option>

        <option >Hoje irei treinar</option>
        <option >Hoje não iriei treinar</option>
      </select>
    </>
  );
}