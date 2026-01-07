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

type CapacityBottleProps = {
  capacity: string;
  setCapacity: (capacity: string) => void;
};

export default function CapacityBottle({ capacity, setCapacity }: CapacityBottleProps) {
  const selectSetCapacity = (e: string) =>{
    setCapacity(e);
  }
  return (
    <>
      <Select value={capacity} onValueChange={selectSetCapacity}>
        <SelectTrigger className={Styles.selectTrigger}>
          <SelectValue placeholder="Selecione uma opção" />
        </SelectTrigger>

        <SelectContent className={Styles.selectContent}>
          <SelectGroup>
            <SelectLabel className={Styles.selectLabel}>Treino</SelectLabel>

            <SelectItem value="250" className={Styles.selectItem}>
              Garrafa de 250ML
            </SelectItem>
            <SelectItem value="350" className={Styles.selectItem}>
              Garrafa de 35OML
            </SelectItem>
            <SelectItem value="500" className={Styles.selectItem}>
              Garrafa de 500ML
            </SelectItem>
            <SelectItem value="600" className={Styles.selectItem}>
              Garrafa de 600ML
            </SelectItem>
            <SelectItem value="750" className={Styles.selectItem}>
              Garrafa de 750ML
            </SelectItem>
            <SelectItem value="1000" className={Styles.selectItem}>
              Garrafa de 1L
            </SelectItem>
            <SelectItem value="1500" className={Styles.selectItem}>
              Garrafa de 1,5L
            </SelectItem>
            <SelectItem value="2000" className={Styles.selectItem}>
              Garrafa de 2L
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
}