import * as React from "react";
import Styles from "./styles.module.css";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

type SelectGeneroProps = {
  trainerOrNoTraine: string;
  setTrainerOrNoTraine: (value: string) => void;
};

export default function TrainerOrNoTrainer({
  trainerOrNoTraine,
  setTrainerOrNoTraine,
}: SelectGeneroProps) {
  return (
    <Select value={trainerOrNoTraine} onValueChange={setTrainerOrNoTraine}>
      <SelectTrigger className={Styles.selectTrigger}>
        <SelectValue placeholder="Selecione uma opção" />
      </SelectTrigger>

      <SelectContent className={Styles.selectContent}>
        <SelectGroup>
          <SelectLabel className={Styles.selectLabel}>Treino</SelectLabel>

          <SelectItem value="45" className={Styles.selectItem}>
            Hoje irei treinar
          </SelectItem>

          <SelectItem value="33" className={Styles.selectItem}>
            Hoje não irei treinar
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
