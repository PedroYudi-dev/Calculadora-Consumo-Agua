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
        <option value="" disabled hidden>Selecione uma opção</option>

        <option value ="45" >Hoje irei treinar</option>
        <option value="33" >Hoje não iriei treinar</option>
      </select>
    </>
  );
}